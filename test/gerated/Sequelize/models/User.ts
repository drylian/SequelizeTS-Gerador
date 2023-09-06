
/**
 * @module User
 * @description Este módulo define o modelo de "User" usando Sequelize.
 * Representa as propriedades e configurações do modelo "User".
 */

import sequelize from "../connect";
import { DataTypes, Model } from "sequelize";

/**
 * @interface UserI
 * @description Interface que descreve a estrutura do modelo "User" no sequelize.
 * 
 * @property {number} id - Olá.
 * @property {string | null} username - Olá.
 * @property {string} email - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} password - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} permissions - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} uuid - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} remember - Não foi encontrado um "comment" sobre oque é essa propriedade
 *
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export interface UserI {
  id: number;
  username: string | null;
  email: string;
  password: string;
  permissions: string;
  uuid: string;
  remember: string;
  }

/**
 * @class User
 * @description Classe que representa o modelo de "User" no banco de dados.
 * Define as propriedades do modelo "User" e sua relação com o banco de dados.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
class User extends Model<UserI> implements UserI {
  public id!: number;
  public username!: string | null;
  public email!: string;
  public password!: string;
  public permissions!: string;
  public uuid!: string;
  public remember!: string;
}

/**
 * @description Inicializa o modelo "User" com as definições de colunas e configurações.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
User.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permissions: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "1",
  },
  uuid: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  remember: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize, // sequelize configurado
  modelName: 'User', // sequelize configurado
  tableName: 'users', // Tabela do banco de dados (sempre em letras minúsculas).
});

/**
 * @typedef UserType
 * @description Tipo que representa o modelo "User". Pode ser usado em situações em que não é desejável mostrar a estrutura interna do "User", apenas seus parâmetros.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export type UserType = typeof User;
export default User;
  