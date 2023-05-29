import JSON5 = require("../../js/json5");
import { COMMAND } from "../../settings";
import { Converter } from "../converter";

export class Json5ToTypeScriptClassConverter implements Converter {
  shouldHandle(command: string): boolean {
    return command === COMMAND.JSON5ToTypeScriptClass;
  }

  async convert(json: string): Promise<string> {
    const obj = JSON5.parse(json);
    return this.convertToTypeScriptClass(obj);
  }

  private convertToTypeScriptClass(obj: Record<string, any>): string {
    const result: Record<string, string> = {};
    const targets: {
      className: string;
      target: Record<string, any>;
    }[] = [];

    /** If Root JSON is Array, Iterate and Parse */
    if (Array.isArray(obj)) {
      obj.forEach((o, i) => {
        if (!this.isPrimitive(o)) {
          targets.push({
            className: `Root${i}`,
            target: o,
          });
        }
      });
    } else {
      targets.push({
        className: "Root",
        target: obj,
      });
    }

    while (targets.length > 0) {
      const { className, target } = targets.shift()!;
      const properties: {
        name: string;
        type: string;
        isArray: boolean;
      }[] = [];
      let typeScriptClass = `class ${className} {\n`;

      for (const key in target) {
        const value = target[key];
        const type = typeof value;

        if (Array.isArray(value)) {
          const arrayType = this.getTypeFromArray(value);
          const isPrimitiveType = value.every((v) => this.isPrimitive(v));
          if (!isPrimitiveType) {
            const nestedClassName = this.capitalizeFirstLetter(key);
            targets.push({
              className: nestedClassName,
              target: value.find((it) => !this.isPrimitive(it)),
            });
          }
          const propertyName = this.formatPropertyName(key);
          typeScriptClass += `  ${propertyName}: ${arrayType}[];\n`;
          properties.push({
            name: propertyName,
            type: arrayType,
            isArray: true,
          });
        } else if (type === "object" && value !== null) {
          const nestedClassName = this.capitalizeFirstLetter(key);
          const propertyName = this.formatPropertyName(key);
          typeScriptClass += `  ${propertyName}: ${nestedClassName};\n`;
          targets.push({
            className: nestedClassName,
            target: value,
          });
          properties.push({
            name: propertyName,
            type: nestedClassName,
            isArray: false,
          });
        } else {
          const propertyName = this.formatPropertyName(key);
          typeScriptClass += `  ${propertyName}: ${type};\n`;
          properties.push({
            name: propertyName,
            type,
            isArray: false,
          });
        }
      }

      typeScriptClass += `  
  constructor(
    ${properties
      .map(
        ({ name, type, isArray }) => `${name}: ${type}${isArray ? "[]" : ""}`
      )
      .join(",\n    ")}
  ) {
    ${properties.map(({ name }) => `this.${name} = ${name};`).join("\n    ")}
  }\n`;

      typeScriptClass += `}`;

      result[this.generateKey(typeScriptClass, className)] = typeScriptClass;
    }

    return Object.values(result).reduce((ac, code) => ac + "\n\n" + code);
  }

  private getTypeFromArray(array: any[]): string {
    if (array.length === 0) {
      return "any[]";
    }

    const types = new Set<string>();
    for (const item of array) {
      const type = typeof item;
      if (type === "object" && item !== null) {
        types.add(this.capitalizeFirstLetter(item.constructor.name));
      } else {
        types.add(type);
      }
    }

    return Array.from(types).join(" | ");
  }

  private formatPropertyName(name: string): string {
    return name.replace(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/\s]/g, "");
  }

  private capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  private isPrimitive(value: any): boolean {
    return (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      value instanceof String ||
      value instanceof Number ||
      value instanceof Boolean
    );
  }
  private generateKey(code: string, className: string): string {
    const removedClassName = code.split(className).join("");

    return Buffer.from(removedClassName).toString("base64");
  }
}
