import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
@ApiTags('employees')
@Controller('api/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create Employee' })
  @ApiResponse({ status: 201, description: 'Employee created successfully' })
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const data = await this.employeesService.create(createEmployeeDto);
    return {
      message: 'Employee created successfully',
      data: { id: data.id, name: data.name },
    };
  }

  @Get()
  @ApiOperation({ summary: 'Get All Employees with Server-Side Pagination' })
  async findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.employeesService.findAllPaginated(paginationQuery);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Employee Details' })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const data = await this.employeesService.findOne(id);
    return { data };
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Employee' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEmployeeDto: CreateEmployeeDto,
  ) {
    const data = await this.employeesService.update(id, updateEmployeeDto);
    return { message: 'Employee updated successfully', data };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete Employee' })
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.employeesService.remove(id);
    return { message: 'Employee deleted successfully' };
  }
}
