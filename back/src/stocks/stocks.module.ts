import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StocksService } from './stocks.service';

@Module({
  imports: [ConfigModule],
  providers: [StocksService],
  exports: [StocksService]
})
export class StocksModule {}
