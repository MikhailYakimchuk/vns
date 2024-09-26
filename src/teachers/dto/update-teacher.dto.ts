import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateTeacherDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty()
  @IsOptional()
  @IsInt()
  departmentId?: number;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isHead?: boolean;
}
