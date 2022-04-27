import { Controller, Get, Param } from '@nestjs/common';
import { PolicyDocumentsService } from './policy-documents.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('policy-documents')
@Controller('policy-documents')
export class PolicyDocumentsController {
  constructor(private readonly policyDocumentsService: PolicyDocumentsService) {}

  @Get('generate')
  generatePolicyDocuments(): string {
    return this.policyDocumentsService.generatePolicyDocuments();
  }

  @Get('/:policyId')
  getQuoteDocument(@Param('policyId') policyId: string): string {
    return  this.policyDocumentsService.getPolicyDocument(policyId);
  }
}
