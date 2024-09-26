import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Teacher } from '../teachers/teacher.entity';
import { Student } from '../students/student.entity';
import { Group } from '../groups/group.entity';

@Entity('departments')
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


  @OneToMany(() => Teacher, (teacher) => teacher.department)
  teachers: Teacher[];

  @OneToMany(() => Student, (student) => student.department)
  students: Student[];

  @OneToMany(() => Group, (group) => group.department)
  groups: Group[];
}
