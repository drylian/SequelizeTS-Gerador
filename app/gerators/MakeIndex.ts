import * as fs from 'fs';
import * as path from "path";
import { ModelContent } from '../interfaces';

/**
 * @function MakeIndex
 * @description Gera um arquivo de índice que importa automaticamente todos os modelos gerados e exporta esses modelos e uma função de inicialização.
 * @param {ModelContent[]} ModelFiles - Um array de objetos ModelContent que contêm informações sobre os modelos gerados.
 * @param {string} BaseDir - O diretório base onde o arquivo de índice será gerado.
 */
export function MakeIndex(ModelFiles: ModelContent[], BaseDir: string) {
  /**
   * @constant code
   * @description Código TypeScript gerado que importa modelos e exporta-os, juntamente com a função de inicialização.
   */
  let code = `
import sequelize from "./connect";

${ModelFiles.map((Model: ModelContent) => `import ${Model.model}, { ${Model.model}I, ${Model.model}Type } from './models/${Model.model}';`).join('\n')}

${ModelFiles.map((Model: ModelContent) => `
/**
 * @exports ${Model.model} - O modelo ${Model.model}.
 * @exports ${Model.model}I - A interface ${Model.model}I.
 * @exports ${Model.model}Type - O type do ${Model.model}Type.
 * 
 * [Index gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export { ${Model.model}, ${Model.model}I, ${Model.model}Type };`).join('\n')}

/**
 * @function init
 * @description Função de inicialização que autentica a conexão com o banco de dados e sincroniza todos os modelos com a base de dados.
 * 
 * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
async function init() {
  /**
   * @function authenticate
   * @memberof sequelize
   * @description Autentica a conexão com o banco de dados.
   * 
   * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
   */
  await sequelize.authenticate();

  ${ModelFiles.map((Model: ModelContent) => `/**
   * @function sync
   * @memberof ${Model.model}
   * @description Sincroniza o modelo ${Model.model} com a base de dados.
   * 
   * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
   */
  await ${Model.model}.sync()`).join('\n')}
}

/**
 * @interface Database
 * @description Interface que define a estrutura da base de dados.
 * 
 * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
interface Database {
  connection: typeof sequelize;
  init: typeof init;
}

/**
 * @constant db
 * @description Um objeto que contém a instância do Sequelize configurada (connection) e a função de inicialização (init) da base de dados.
 * 
 * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
const db: Database = {
  connection: sequelize,
  init,
}

/**
 * @exports db
 * @description Exporta o objeto db, que contém a instância do Sequelize configurada e a função de inicialização, para ser utilizado em outros módulos.
 * 
 * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export { db };
  `;

  fs.writeFileSync(`${path.join(BaseDir, "Sequelize", "index.ts")}`, code);
}
