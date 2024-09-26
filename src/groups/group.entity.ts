import { Entity, Column, PrimaryGeneratedColumn, OneToMany,ManyToOne } from 'typeorm';
import { Student } from '../students/student.entity';
import { Department } from '../departments/department.entity';

@Entity('groups')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Department, (department) => department.groups)
  department: Department;

  @OneToMany(() => Student, (student) => student.group)
  students: Student[];
}
