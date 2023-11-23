import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
import { PaymentsController } from './payments.controller';
import { Payment } from './payments.entity';
import { PaymentService } from './payments.service';

@Module({
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentService],
  controllers: [PaymentsController],
})
export class PaymentsModule {}
