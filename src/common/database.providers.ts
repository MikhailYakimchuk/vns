import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async (configService: ConfigService) => {
      console.log(configService.get<string>("DB_PASSWORD"))
      const dataSource = new DataSource({
        type: 'postgres', 
        host: configService.get<string>("DB_HOST"), 
        port: configService.get<number>("DB_PORT"), 
        username: configService.get<string>("DB_USERNAME"), 
        password: configService.get<string>("DB_PASSWORD"), 
        database: configService.get<string>("DB_NAME"),
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
        synchronize: true,
      });

      return dataSource.initialize();
    },

    inject: [ConfigService]
  },


];
