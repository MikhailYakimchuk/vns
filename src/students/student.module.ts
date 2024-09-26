import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { studentProviders } from './student.providers';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService, ...studentProviders],
})
export class StudentModule {}
