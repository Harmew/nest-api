import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { logger } from './middleware/logger.middleware';
import { CatsModule } from './cats/cats.module';
import { CatsController } from './cats/cats.controller';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [CatsModule, PostsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes(CatsController);
  }
}
