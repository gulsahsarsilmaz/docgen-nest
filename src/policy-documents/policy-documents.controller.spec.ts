import { Test, TestingModule } from '@nestjs/testing';
import { PolicyDocumentsController } from './policy-documents.controller';
import { PolicyDocumentsService } from './policy-documents.service';

describe('PolicyDocumentsController', () => {
  let controller: PolicyDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyDocumentsController],
      providers: [PolicyDocumentsService]
    }).compile();

    controller = module.get<PolicyDocumentsController>(PolicyDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
