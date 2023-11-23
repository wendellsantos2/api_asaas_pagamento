import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { PaymentService } from './payments.service';
import { Payment } from './payments.entity';

export class SaleCreateLinkPaymentDTO {
    
    billingType: string;
    chargeType: string;
    name: string;
    description: string;
    endDate: string; // ou Date, se preferir
    value: number;
    dueDateLimitDays: number;
    subscriptionCycle: string;
    maxInstallmentCount: number;
    notificationEnabled: boolean;
 
}


@ApiTags('pagamentos')
@Controller('payments')
export class PaymentsController {
  constructor(private paymentService: PaymentService) {} // Injeção do PaymentService


  @ApiOperation({ summary: 'Listar todos os pagamentos' })
  @ApiResponse({ status: 200, description: 'Lista de pagamentos obtida com sucesso.' })
  @Get()
  async getAll(): Promise<Payment[]> {
    return this.paymentService.findAll();
  }

  @Post('create-link')
  async createPaymentLink(@Body() saleCreateLinkPaymentDTO: SaleCreateLinkPaymentDTO) {

      try {
          const result = await this.paymentService.createPaymentLink(saleCreateLinkPaymentDTO);
          return result;
      } catch (error) {
          throw new BadRequestException(error.message);
      }
  }
}
