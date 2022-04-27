import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteDocumentsService {

  generateQuoteDocuments(): string {
    return 'Quote Document is generated!';
  }

  getQuoteDocument(quoteId: string): string {
    return `Quote Document with id ${quoteId} is retrieved!`;
  }
}
