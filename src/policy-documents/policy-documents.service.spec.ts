import { Test, TestingModule } from '@nestjs/testing';
import { PolicyDocumentsService } from './policy-documents.service';

describe('PolicyDocumentsService', () => {
  let service: PolicyDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PolicyDocumentsService],
    }).compile();

    service = module.get<PolicyDocumentsService>(PolicyDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
