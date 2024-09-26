import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Group } from '../groups/group.entity';
import { Department } from '../departments/department.entity';

@Entity('students')
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Teacher, teacher => teacher.students)
  @JoinColumn({ name: 'teacherId' })
  teacher: Teacher;
  
  @ManyToOne(() => Group, group => group.students)
  @JoinColumn({ name: 'groupId' })
  group: Group;
  
  @ManyToOne(() => Department, department => department.students)
  @JoinColumn({ name: 'departmentId' })
  department: Department;
}
