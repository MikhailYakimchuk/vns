import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateDepartmentDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name?: string;
}
