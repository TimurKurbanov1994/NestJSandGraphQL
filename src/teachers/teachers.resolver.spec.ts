import { Test, TestingModule } from '@nestjs/testing';
import { TeachersResolver } from './teachers.resolver';

describe('TeachersResolver', () => {
  let resolver: TeachersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeachersResolver],
    }).compile();

    resolver = module.get<TeachersResolver>(TeachersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
