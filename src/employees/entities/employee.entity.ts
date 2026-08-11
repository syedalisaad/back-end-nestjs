import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('employees')
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  department: string;

  @Column({ default: 'Active' })
  status: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}