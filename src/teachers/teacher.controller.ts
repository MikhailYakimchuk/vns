import { Controller, Get, Post, Body, Param, Patch, Delete, Inject, Put } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { Teacher } from './teacher.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('teachers')
@Controller('teachers')
export class TeacherController {
  
  constructor(private readonly teacherService: TeacherService) {}

  @Post()
  @ApiOperation({ summary: 'Create a teacher' })
  @ApiResponse({ status: 201, description: 'The teacher has been successfully created.' })
  create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all teachers' })
  @ApiResponse({ status: 200, description: 'List of teachers.', type: [Teacher] })
  findAll(): Promise<Teacher[]> {
    return this.teacherService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a teacher by ID' })
  @ApiResponse({ status: 200, description: 'The teacher has been successfully fetched.', type: Teacher })
  findOne(@Param('id') id: number): Promise<Teacher> {
    return this.teacherService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a teacher' })
  @ApiResponse({ status: 200, description: 'The teacher has been successfully updated.', type: Teacher })
  update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a teacher' })
  @ApiResponse({ status: 204, description: 'The teacher has been successfully deleted.' })
  remove(@Param('id') id: number): Promise<void> {
    return this.teacherService.remove(id);
  }
}
