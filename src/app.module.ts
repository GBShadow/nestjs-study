import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './logger.middleware';
import { MessagesModule } from './messages/messages.module';
import { PokemonsController } from './pokemons/pokemons.controller';
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [MessagesModule, PokemonsModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(PokemonsController);
  }
}
