import { Test, TestingModule } from '@nestjs/testing';
import { ContextService } from './context.service';

describe('ContextService', () => {
  let contextService: ContextService;

  beforeAll(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [ContextService],
    }).compile();

    contextService = await app.resolve<ContextService>(ContextService);
  });

  describe('root', () => {
    it('set and get context', async () => {
      const key = 'key';
      const value = 'value';
      contextService.set(key, value);
      expect(contextService.get(key)).toBe(value);
    });
  });
});
