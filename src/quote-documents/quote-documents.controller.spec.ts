import { Test, TestingModule } from '@nestjs/testing';
import { QuoteDocumentsController } from './quote-documents.controller';
import { QuoteDocumentsService } from './quote-documents.service';

describe('QuoteDocumentsController', () => {
  let controller: QuoteDocumentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteDocumentsController],
      providers: [QuoteDocumentsService]
    }).compile();

    controller = module.get<QuoteDocumentsController>(QuoteDocumentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
