import * as fs from 'fs';
import * as path from "path";

export function MakeConnect(Basedir: string) {
    let code = `
 /**
  * Selecione qual param do Sequelize voce vai querer usar, suas configurações estão abaixo
  */
import { Sequelize } from "sequelize";
import {params, Selecionado} from "./params";

/**
 * Configuração do sequelize
 */
const sequelizeMG = {
	...params[Selecionado],
};

const sequelize = new Sequelize(sequelizeMG);

export default sequelize;
      `
    fs.writeFileSync(`${path.join(Basedir, "Sequelize", "connect.ts")}`, code);

}
