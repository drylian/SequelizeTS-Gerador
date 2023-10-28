
/**
 * @module Token
 * @description Este módulo define o modelo de "Token" usando Sequelize.
 * Representa as propriedades e configurações do modelo "Token".
 */

import sequelize from "../connect";
import { DataTypes, Model } from "sequelize";

/**
 * @interface TokenI
 * @description Interface que descreve a estrutura do modelo "Token" no sequelize.
 * 
 * @property {number} id - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} token - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {number | null} permission - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {number} uuid - Não foi encontrado um "comment" sobre oque é essa propriedade
 *
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export interface TokenI {
  id: number;
  token: string;
  permission: number | null;
  uuid: number;
  }

/**
 * @class Token
 * @description Classe que representa o modelo de "Token" no banco de dados.
 * Define as propriedades do modelo "Token" e sua relação com o banco de dados.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
class Token extends Model<TokenI> implements TokenI {
  public id!: number;
  public token!: string;
  public permission!: number | null;
  public uuid!: number;
}

/**
 * @description Inicializa o modelo "Token" com as definições de colunas e configurações.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
Token.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  token: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permission: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: "1000",
  },
  uuid: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
}, {
  sequelize, // sequelize configurado
  modelName: 'Token', // sequelize configurado
  tableName: 'tokens', // Tabela do banco de dados (sempre em letras minúsculas).
});

/**
 * @typedef TokenType
 * @description Tipo que representa o modelo "Token". Pode ser usado em situações em que não é desejável mostrar a estrutura interna do "Token", apenas seus parâmetros.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export type TokenType = typeof Token;
export default Token;
  