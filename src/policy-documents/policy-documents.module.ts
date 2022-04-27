import { Module } from '@nestjs/common';
import { PolicyDocumentsController } from './policy-documents.controller';
import { PolicyDocumentsService } from './policy-documents.service';

@Module({
  imports: [],
  providers: [PolicyDocumentsService],
  controllers: [
    PolicyDocumentsController
  ],
  exports: []
})
export class PolicyDocumentsModule {}
