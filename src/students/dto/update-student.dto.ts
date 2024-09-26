import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateStudentDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  teacherId?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  groupId?: number;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  departmentId?: number;
}
