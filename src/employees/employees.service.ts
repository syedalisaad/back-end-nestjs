import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './entities/employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(dto: CreateEmployeeDto): Promise<Employee> {
    const employee = this.employeeRepository.create(dto);
    return this.employeeRepository.save(employee);
  }

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: number): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({ id });
    if (!employee) throw new NotFoundException(`Employee with ID ${id} not found`);
    return employee;
  }

  async update(id: number, dto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.employeeRepository.preload({
      id,
      ...dto,
    });
    if (!employee) {
      throw new NotFoundException(`Employee with ID ${id} not found`);
    }
    return this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<void> {
    const employee = await this.findOne(id);
    await this.employeeRepository.remove(employee);
  }
}