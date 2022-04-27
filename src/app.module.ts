import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { QuoteDocumentsModule } from './quote-documents/quote-documents.module';
import { PolicyDocumentsModule } from './policy-documents/policy-documents.module';

@Module({
  imports: [QuoteDocumentsModule, PolicyDocumentsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
