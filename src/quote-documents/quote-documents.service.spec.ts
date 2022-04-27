import { Test, TestingModule } from '@nestjs/testing';
import { QuoteDocumentsService } from './quote-documents.service';

describe('QuoteDocumentsService', () => {
  let service: QuoteDocumentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteDocumentsService],
    }).compile();

    service = module.get<QuoteDocumentsService>(QuoteDocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
