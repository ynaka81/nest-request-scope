import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContextModule } from './context/context.module';
import { ContextService } from './context/context.service';

describe('AppController', () => {
  let appController: AppController;
  let contextService: ContextService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ContextModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = await app.resolve<AppController>(AppController);
    contextService = await app.resolve<ContextService>(ContextService);
  });

  describe('root', () => {
    it('should return "Hello ${content}!"', () => {
      contextService.set('content', 'ynaka81');
      expect(appController.getHello()).toBe('Hello ynaka81!');
    });
  });
});
