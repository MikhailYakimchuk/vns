import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty() 
  @IsInt()
  teacherId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  groupId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  departmentId: number;
}
