import {DataSource} from 'typeorm';
import {Product} from '../entity/Product';
import {User} from '../entity/User';
import dotenv from 'dotenv';
import {OrderItem} from '../entity/OrderItem';
import {Order} from '../entity/Order';

dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRESQLDB_HOST,
  port: parseInt(process.env.POSTGRESQLDB_LOCAL_PORT || '5432'),
  username: process.env.POSTGRESQLDB_USER,
  password: process.env.POSTGRESQLDB_ROOT_PASSWORD,
  database: process.env.POSTGRESQLDB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Product, User, OrderItem, Order],
  subscribers: [],
  migrations: [],
});

export const initDB = () => {
  dataSource
    .initialize()
    .then(() => {
      console.log('Connected to the database');
    })
    .catch(error => {
      console.error('Error connecting to the database:', error);
    });

  return dataSource;
};
