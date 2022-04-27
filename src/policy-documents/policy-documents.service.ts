import { Injectable } from '@nestjs/common';

@Injectable()
export class PolicyDocumentsService {

  generatePolicyDocuments(): string {
    return 'Policy Document is generated!';
  }

  getPolicyDocument(policyId: string): string {
    return `Policy Document with id ${policyId} is retrieved!`;
  }
}
