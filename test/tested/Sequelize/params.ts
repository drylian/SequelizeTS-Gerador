
import { Options } from "sequelize";
interface sequelizeParams {
  [key: string]: Options
}

/**
 * @constant Selecionado
 * @description Variável que indica qual das configurações do params será usada. Exemplo: "sqlite". Certifique-se de configurar a opção correta em params.
 * 
 * [Params gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export const Selecionado = "" // Coloque aqui a configuração desejada em params.

/**
 * @constant params
 * @description Um objeto que contém as opções de conexão para diferentes bancos de dados.
 * 
 * [Params gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export const params: sequelizeParams = {
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
