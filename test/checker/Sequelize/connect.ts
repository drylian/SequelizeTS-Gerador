
/**
 * @module sequelize
 * @description Este módulo configura e exporta uma instância do Sequelize, que é um ORM (Object-Relational Mapping) para interagir com bancos de dados relacionais.
 * 
 * [Connect gerado pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */

import { Sequelize } from "sequelize";
import {params, Selecionado} from "./params";

/**
 * @constant sequelizeMG
 * @description Uma constante que contém as configurações do Sequelize selecionadas com base nos parâmetros e opções fornecidos.
 * 
 * [Connect gerado pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
const sequelizeMG = {
	...params[Selecionado],
};

/**
 * @constant sequelize
 * @description Uma instância do Sequelize configurada com as opções fornecidas em sequelizeMG.
 * 
 * [Connect gerado pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
const sequelize = new Sequelize(sequelizeMG);

/**
 * @exports sequelize
 * @description Exporta a instância configurada do Sequelize para ser usada em outros módulos.
 * 
 * [Connect gerado pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export default sequelize;
      