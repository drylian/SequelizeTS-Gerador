import * as fs from 'fs';
import * as path from "path";
import { ModelContent } from '../interfaces';
export function MakeIndex(ModelFiles:ModelContent[], BaseDir:string) {
    let code = `
import sequelize from "./connect";
/**
 * Importa automaticamente todos os models gerados na users.
 */
${ModelFiles.map((Model:ModelContent) => `import ${Model.model}, { ${Model.model}I, ${Model.model}Type } from './models/${Model.model}';`).join('\n')}
/**
 * Exports Os Models recebidos
 */
${ModelFiles.map((Model:ModelContent) => `export { ${Model.model}, ${Model.model}I, ${Model.model}Type }`).join('\n')}

/**
 * Init gerado apartir dos models recebidos
 */
async function init() {
	await sequelize.authenticate();
${ModelFiles.map((Model:ModelContent) => `	await ${Model.model}.sync()`).join('\n')}
}

interface Database {
	connection:typeof sequelize
	init:typeof init
}

const db:Database = {
	connection: sequelize,
	init
}

export { db };

      `
    fs.writeFileSync(`${path.join(BaseDir, "Sequelize", "index.ts")}`, code);
}
