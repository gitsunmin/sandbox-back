import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * * Config for DB connection
 */
export const getTypeORMConfig = (): TypeOrmModuleOptions => {
  const { env } = process;

  return {
    type: 'mongodb',
    synchronize: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // logging: true,
    url: env.DB_CONNECTION_URL,
    entities: ['dist/**/*.entity.js'],
  };
};
