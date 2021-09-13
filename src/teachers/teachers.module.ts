import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersEntity } from './teachers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeachersResolver } from './teachers.resolver';


@Module({
  imports: [TypeOrmModule.forFeature([TeachersEntity])],
  providers: [TeachersService, TeachersResolver],
})
export class TeachersModule {}
