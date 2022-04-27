import { Module } from '@nestjs/common';
import { QuoteDocumentsController } from './quote-documents.controller';
import { QuoteDocumentsService } from './quote-documents.service';

@Module({
  imports: [],
  providers: [QuoteDocumentsService],
  controllers: [
    QuoteDocumentsController
  ],
  exports: []
})
export class QuoteDocumentsModule {}
