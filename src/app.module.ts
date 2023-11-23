import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentsModule } from './payments/payments.module';
import { Payment } from './payments/payments.entity';
 
// Importe outras entidades da mesma maneira

@Module({
  imports: [
    PaymentsModule,
    TypeOrmModule.forRoot({
      type: 'mysql', // ou mysql, sqlite, etc., dependendo do seu banco de dados
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pagamentos',
      entities: [Payment],
      synchronize: true, // Cuidado com esta opção em produção!
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
