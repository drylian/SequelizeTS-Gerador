import * as fs from 'fs';
import * as path from 'path';
import { Field, ModelContent } from '../interfaces';
export function ModelMaker(local: string, modelPATH: string) {
  const modelContent: ModelContent = JSON.parse(fs.readFileSync(local, 'utf-8'));
  // Verificar se o objeto modelData possui a estrutura correta
  if (!validateModelContent(modelContent)) {
    console.error('O arquivo JSON não possui a estrutura correta.');
    process.exit(1);
  }

  // Extrair informações do JSON
  const { model, fields } = modelContent;

  // Gerar código TypeScript
  let code = `
import sequelize from "../connect";
import { DataTypes, Model } from "sequelize";

export interface ${model}I {
${fields.map((field: Field) => `  ${field.name}: ${field.type};`).join('\n')}
}

class ${model} extends Model<${model}I> implements ${model}I {
${fields.map((field: Field) => `  public ${field.name}!: ${field.type};`).join('\n')}
}

${model}.init({`;

fields.forEach((field: Field) => {
  code += `
  ${field.name}: {`;

  if (field.primaryKey) {
    code += `
    primaryKey: true,`;
  }

  if (field.autoIncrement) {
    code += `
    autoIncrement: true,`;
  }

  if (field.type) {
    code += `
    type: DataTypes.${field.type.split(' ')[0].toUpperCase()},`;
  }

  code += `
    allowNull: ${!field.allowNull ? "false" : "true"},`;


  if (field.defaultValue) {
    code += `
    defaultValue: "${field.defaultValue}",`;
  }

  code += `
  },`;
});

code += `
}, {
  sequelize,
  modelName: '${model}',
  tableName: '${model.toLowerCase()}s',
});

export type ${model}Type = typeof ${model};
export default ${model};
  `;

  // Salvar o código gerado em um arquivo .ts
  fs.writeFileSync(`${path.join(modelPATH, model + ".ts")}`, code);

  console.log(`${model}.ts gerado com sucesso.`);

  function validateModelContent(data: ModelContent) {
    return (
      typeof data === 'object' &&
      typeof data.model === 'string' &&
      Array.isArray(data.fields) &&
      data.fields.every(field =>
        typeof field === 'object' &&
        typeof field.name === 'string' &&
        typeof field.type === 'string'
      )
    );
  }
}  