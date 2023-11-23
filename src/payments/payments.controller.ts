import { BadRequestException, Body, Controller ,Post } from '@nestjs/common';
import { ApiTags} from '@nestjs/swagger';
import { PaymentService } from './payments.service';
 

export class CreateUserDTO {
  readonly name: string;
  readonly cpfCnpj: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
  readonly addressNumber: string;
  readonly province: string;
  readonly postalCode: string;
  readonly mobilePhone: string;
  readonly complement: string;
  readonly externalReference: string;
  readonly notificationDisabled: boolean;
  readonly additionalEmails: string;
  readonly stateInscription: string;
  readonly municipalInscription: string;
  readonly observations: string;
}


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

  @Post('create-client')
  async createCliente(@Body() createUserDTO: CreateUserDTO) {

    try {
        const result = await this.paymentService.createCliente(createUserDTO);
        return result;
    } catch (error) {
        throw new BadRequestException(error.message);
    }
}
}
