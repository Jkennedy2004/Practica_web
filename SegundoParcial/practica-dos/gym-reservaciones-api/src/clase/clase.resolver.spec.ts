import { Test, TestingModule } from '@nestjs/testing';
import { ClaseResolver } from './clase.resolver';
import { ClaseService } from './clase.service';

describe('ClaseResolver', () => {
  let resolver: ClaseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClaseResolver, ClaseService],
    }).compile();

    resolver = module.get<ClaseResolver>(ClaseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
