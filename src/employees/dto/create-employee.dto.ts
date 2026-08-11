import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, IsEnum } from 'class-validator';

export class CreateEmployeeDto {
  @ApiProperty({ example: 'Ahmed Ali' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: 'ahmed@test.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '0501234567' })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ example: 'IT' })
  @IsNotEmpty()
  department: string;

  @ApiProperty({ example: 'Active', enum: ['Active', 'Inactive'] })
  @IsEnum(['Active', 'Inactive'])
  status: string;
}