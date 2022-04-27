import { Controller, Get, Param } from '@nestjs/common';
import { QuoteDocumentsService } from './quote-documents.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('quote-documents')
@Controller('quote-documents')
export class QuoteDocumentsController {
  constructor(private readonly quoteDocumentsService: QuoteDocumentsService) {}

  @Get('generate')
  generatePolicyDocuments(): string {
    return this.quoteDocumentsService.generateQuoteDocuments();
  }

  @Get('/:quoteId')
  getQuoteDocument(@Param('quoteId') quoteId: string): string {
    return  this.quoteDocumentsService.getQuoteDocument(quoteId);
  }
}
