import { DataSource } from "typeorm";
import dotenv from 'dotenv';
import { Person } from "../modules/Person/entities/person.entity";

dotenv.config();

const AppDataSource = async () => {
  return new DataSource({
    type: "postgres",
    host: "localhost",
    port: Number(process.env.PSQL_PORT),
    username: process.env.PSQL_USER,
    password: process.env.PSQL_PASSWORD,
    database: "password_manager",
    synchronize: true,
    // logging: true,
    entities: ["src/modules/**/entities/*.entity.ts"],
    subscribers: [],
    migrations: [],
  })
}

export default AppDataSource;
