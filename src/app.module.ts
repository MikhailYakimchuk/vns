import { Module } from '@nestjs/common';
import { TeacherModule } from './teachers/teacher.module'; 
import { StudentModule } from './students/student.module'; 
import { DepartmentModule } from './departments/department.module'; 
import { GroupModule } from './groups/group.module'; 
import { DatabaseModule } from './common/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TeacherModule,
    StudentModule,
    DepartmentModule,
    GroupModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
