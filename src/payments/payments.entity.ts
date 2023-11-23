import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Payment {
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number; // Referência ao usuário que fez o pagamento

  @Column()
  amount: number; // Quantidade paga

  @Column()
  timestamp: Date; // Data e hora do pagamento

  // Você pode adicionar mais campos conforme necessário, como status do pagamento, método de pagamento, etc.
}
