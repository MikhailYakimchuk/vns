import { DataSource } from 'typeorm';
import { Department } from './department.entity';

export const departmentProviders = [
  {
    provide: 'DEPARTMENT_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Department),
    inject: ['DATA_SOURCE'],
  },
];