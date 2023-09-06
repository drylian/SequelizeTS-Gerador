
import sequelize from "./connect";

import Product, { ProductI, ProductType } from './models/Product';
import Task, { TaskI, TaskType } from './models/Task';
import User, { UserI, UserType } from './models/User';


/**
 * @exports Product - O modelo Product.
 * @exports ProductI - A interface ProductI.
 * @exports ProductType - O type do ProductType.
 * 
 * [Index gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export { Product, ProductI, ProductType };

/**
 * @exports Task - O modelo Task.
 * @exports TaskI - A interface TaskI.
 * @exports TaskType - O type do TaskType.
 * 
 * [Index gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export { Task, TaskI, TaskType };

/**
 * @exports User - O modelo User.
 * @exports UserI - A interface UserI.
 * @exports UserType - O type do UserType.
 * 
 * [Index gerada pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
 */
export { User, UserI, UserType };

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

  /**
   * @function sync
   * @memberof Product
   * @description Sincroniza o modelo Product com a base de dados.
   * 
   * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
   */
  await Product.sync()
/**
   * @function sync
   * @memberof Task
   * @description Sincroniza o modelo Task com a base de dados.
   * 
   * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
   */
  await Task.sync()
/**
   * @function sync
   * @memberof User
   * @description Sincroniza o modelo User com a base de dados.
   * 
   * [Index gerados pelo sequelize-TS-Gerator](https://github.com/drylian/SequelizeTS-Gerador).
   */
  await User.sync()
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
  