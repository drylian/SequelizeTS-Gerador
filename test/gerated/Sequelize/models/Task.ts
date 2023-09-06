
/**
 * @module Task
 * @description Este módulo define o modelo de "Task" usando Sequelize.
 * Representa as propriedades e configurações do modelo "Task".
 */

import sequelize from "../connect";
import { DataTypes, Model } from "sequelize";

/**
 * @interface TaskI
 * @description Interface que descreve a estrutura do modelo "Task" no sequelize.
 * 
 * @property {number} id - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} title - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} description - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} dueDate - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {boolean} completed - Não foi encontrado um "comment" sobre oque é essa propriedade
 *
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export interface TaskI {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
  }

/**
 * @class Task
 * @description Classe que representa o modelo de "Task" no banco de dados.
 * Define as propriedades do modelo "Task" e sua relação com o banco de dados.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
class Task extends Model<TaskI> implements TaskI {
  public id!: number;
  public title!: string;
  public description!: string;
  public dueDate!: string;
  public completed!: boolean;
}

/**
 * @description Inicializa o modelo "Task" com as definições de colunas e configurações.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
Task.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dueDate: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: "false",
  },
}, {
  sequelize, // sequelize configurado
  modelName: 'Task', // sequelize configurado
  tableName: 'tasks', // Tabela do banco de dados (sempre em letras minúsculas).
});

/**
 * @typedef TaskType
 * @description Tipo que representa o modelo "Task". Pode ser usado em situações em que não é desejável mostrar a estrutura interna do "Task", apenas seus parâmetros.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export type TaskType = typeof Task;
export default Task;
  