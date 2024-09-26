import { Module } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { TeacherController } from './teacher.controller';
import { teacherProviders } from './teacher.provider';

@Module({
  imports: [],
  controllers: [TeacherController],
  providers: [TeacherService, ...teacherProviders],
})
export class TeacherModule {}
