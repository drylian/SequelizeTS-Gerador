import * as fs from 'fs';
import * as path from 'path';
import { Field, ModelContent } from '../interfaces';
/**
 * @function ModelMaker
 * @description Gera um modelo TypeScript a partir de um arquivo JSON de configuração.
 * @param {string} local - O caminho para o arquivo JSON de configuração do modelo.
 * @param {string} modelPATH - O caminho onde o arquivo do modelo TypeScript será gerado.
 */
export function ModelMaker(local: string, modelPATH: string) {
  // Lê o conteúdo do arquivo JSON de configuração do modelo
  const modelContent: ModelContent = JSON.parse(fs.readFileSync(local, 'utf-8'));

  // Verifica se o objeto modelData possui a estrutura correta
  if (!validateModelContent(modelContent)) {
    console.error('O arquivo JSON não possui a estrutura correta.');
    process.exit(1);
  }

  // Extrai informações do JSON
  const { model, fields } = modelContent;

  // Gera o código TypeScript para o modelo
  let code = `
/**
 * @module ${model}
 * @description Este módulo define o modelo de "${model}" usando Sequelize.
 * Representa as propriedades e configurações do modelo "${model}".
 */

import sequelize from "../connect";
import { DataTypes, Model } from "sequelize";

/**
 * @interface ${model}I
 * @description Interface que descreve a estrutura do modelo "${model}" no sequelize.
 * 
${fields.map((field: Field) => ` * @property {${field.type}} ${field.name} ${field.comment ? `- ${field.comment}.` : `- Não foi encontrado um "comment" sobre oque é essa propriedade`}`).join('\n')}
 *
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export interface ${model}I {
${fields.map((field: Field) => `  ${field.name}: ${field.type};`).join('\n')}
  }

/**
 * @class ${model}
 * @description Classe que representa o modelo de "${model}" no banco de dados.
 * Define as propriedades do modelo "${model}" e sua relação com o banco de dados.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
class ${model} extends Model<${model}I> implements ${model}I {
${fields.map((field: Field) => `  public ${field.name}!: ${field.type};`).join('\n')}
}

/**
 * @description Inicializa o modelo "${model}" com as definições de colunas e configurações.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
${model}.init({`;

  // Gera o código para os campos do modelo
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
  sequelize, // sequelize configurado
  modelName: '${model}', // sequelize configurado
  tableName: '${model.toLowerCase()}s', // Tabela do banco de dados (sempre em letras minúsculas).
});

/**
 * @typedef ${model}Type
 * @description Tipo que representa o modelo "${model}". Pode ser usado em situações em que não é desejável mostrar a estrutura interna do "${model}", apenas seus parâmetros.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export type ${model}Type = typeof ${model};
export default ${model};
  `;

  // Salva o código gerado em um arquivo .ts
  fs.writeFileSync(`${path.join(modelPATH, model + ".ts")}`, code);

  console.log(`${model}.ts gerado com sucesso.`);

  /**
   * @function validateModelContent
   * @description Valida se o conteúdo do arquivo JSON de configuração do modelo possui a estrutura correta.
   * @param {ModelContent} data - O conteúdo do arquivo JSON de configuração do modelo.
   * @returns {boolean} True se a estrutura for válida, caso contrário, False.
   */
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
