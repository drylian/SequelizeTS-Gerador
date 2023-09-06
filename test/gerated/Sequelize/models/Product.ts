
/**
 * @module Product
 * @description Este módulo define o modelo de "Product" usando Sequelize.
 * Representa as propriedades e configurações do modelo "Product".
 */

import sequelize from "../connect";
import { DataTypes, Model } from "sequelize";

/**
 * @interface ProductI
 * @description Interface que descreve a estrutura do modelo "Product" no sequelize.
 * 
 * @property {number} id - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} name - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {string} description - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {number} price - Não foi encontrado um "comment" sobre oque é essa propriedade
 * @property {number} stock - Não foi encontrado um "comment" sobre oque é essa propriedade
 *
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export interface ProductI {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  }

/**
 * @class Product
 * @description Classe que representa o modelo de "Product" no banco de dados.
 * Define as propriedades do modelo "Product" e sua relação com o banco de dados.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
class Product extends Model<ProductI> implements ProductI {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public stock!: number;
}

/**
 * @description Inicializa o modelo "Product" com as definições de colunas e configurações.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
Product.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.NUMBER,
    allowNull: false,
    defaultValue: "0",
  },
}, {
  sequelize, // sequelize configurado
  modelName: 'Product', // sequelize configurado
  tableName: 'products', // Tabela do banco de dados (sempre em letras minúsculas).
});

/**
 * @typedef ProductType
 * @description Tipo que representa o modelo "Product". Pode ser usado em situações em que não é desejável mostrar a estrutura interna do "Product", apenas seus parâmetros.
 * 
 * [Model gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export type ProductType = typeof Product;
export default Product;
  