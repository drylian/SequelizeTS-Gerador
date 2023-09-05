import * as fs from 'fs';
import * as path from "path";

export function MakeParams(Basedir: string) {
    let code = `
import { Options } from "sequelize";
interface sequelizeParams {
  [key: string]: Options
}
/**
 * Selecione qual param do Sequelize voce vai querer usar, suas configurações estão abaixo
 */
export const Selecionado = ""// coloque qual das configurações do databaseParams voce vai usar, exemplo "sqlite", e configure o sqlite do databaseParams
export const params:sequelizeParams = {
    // Parâmetros comuns
    common: {
        dialect: 'mysql', // Tipo de banco de dados (exemplos: 'mysql', 'postgres', 'sqlite', 'mssql', etc.)
        host: 'localhost',
        port: 3306,
        username: 'seu_usuario',
        password: 'sua_senha',
        database: 'seu_banco_de_dados',
        pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        },
        define: {
        timestamps: false,
        underscored: true,
        },
        logging: console.log,
        timezone: '+00:00',
    },

    // Exemplo para PostgreSQL (pg)
    postgres: {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'seu_usuario_pg',
        password: 'sua_senha_pg',
        database: 'seu_banco_de_dados_pg',
    },

    // Exemplo para SQLite
    sqlite: {
        dialect: 'sqlite',
        storage: 'path/to/your/sqlite.db', // Caminho para o arquivo SQLite
    },

    // Exemplo para MySQL
    mysql: {
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'seu_usuario_mysql',
        password: 'sua_senha_mysql',
        database: 'seu_banco_de_dados_mysql',
    },
};      
`
    fs.writeFileSync(`${path.join(Basedir, "Sequelize", "params.ts")}`, code);

}