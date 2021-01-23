import { Injectable } from '@nestjs/common';
import { ContextService } from './context/context.service';

@Injectable()
export class AppService {
  constructor(private contextService: ContextService) {}

  getHello(): string {
    const content = this.contextService.get('content');
    return `Hello ${content}!`;
  }
}
