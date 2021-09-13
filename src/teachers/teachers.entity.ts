import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'teachers' })
export class TeachersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
