import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { departmentProviders } from './department.providers';

@Module({
  imports: [],
  controllers: [DepartmentController],
  providers: [DepartmentService, ...departmentProviders],
})
export class DepartmentModule {}
