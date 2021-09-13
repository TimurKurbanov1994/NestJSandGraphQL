import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeachersEntity } from './teachers.entity';
import { Repository } from 'typeorm';
import { InputTeachers } from './input/input.teachers';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(TeachersEntity)
    private readonly teachersRepository: Repository<TeachersEntity>,
  ) {}

  async findAll(): Promise<TeachersEntity[]> {
    return await this.teachersRepository.find();
  }

  async fineOne({ id }): Promise<TeachersEntity> {
    return await this.teachersRepository.findOne(id);
  }

  async create(teacherCreate: TeachersEntity): Promise<TeachersEntity> {
    return await this.teachersRepository.save(teacherCreate);
  }

  async update(id: number, updateTeacher: InputTeachers): Promise<TeachersEntity> {
    const teacher = await this.teachersRepository.findOne(id);
    Object.assign(teacher, updateTeacher);
    return this.teachersRepository.save(teacher);
  }

  async delete(id: number): Promise<TeachersEntity> {
    const deleteTeacher = await this.teachersRepository.findOne(id);
    return await this.teachersRepository.remove(deleteTeacher);
  }
}
