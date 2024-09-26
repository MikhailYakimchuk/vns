import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Department } from '../departments/department.entity';
import { Student } from '../students/student.entity';

@Entity('teachers')
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({default: false})
  isHead: boolean;

  @ManyToOne(() => Department, (department) => department.teachers)
  department: Department;

  @OneToMany(() => Student, (student) => student.teacher)
  students: Student[];
}
