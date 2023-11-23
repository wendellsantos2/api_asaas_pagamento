import { BadRequestException, Body, Controller ,Post } from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';
import { PaymentService } from './payments.service';
 

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
