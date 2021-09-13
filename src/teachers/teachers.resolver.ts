import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { TeachersService } from './teachers.service';
import { CreateTeachersDto } from './dto/create-teachers.dto';
import { Int } from 'type-graphql';
import { InputTeachers } from './input/input.teachers';


@Resolver()
export class TeachersResolver {
  constructor(private readonly teachersService: TeachersService) {
  }

  @Query(() => String)
  async hello(@Args({ name: 'name', type: () => String})name: string){
    return `Hello => ${name}`
  }

  @Query(() => [CreateTeachersDto])
  async teachersAll(){
    return this.teachersService.findAll()
  }

  @Query(returns => [CreateTeachersDto])
  async getTeacher(@Args('id', { type: () => Int }) id: number) {
    return this.teachersService.fineOne({ id });
  }

  @Mutation(() => CreateTeachersDto)
  async create(@Args('input') teacher: InputTeachers) {
    return this.teachersService.create(teacher);
  }

  @Mutation(() => CreateTeachersDto)
  async update(@Args('input') id: number, teacher: InputTeachers) {
    return this.teachersService.update(id, teacher);
  }
}
