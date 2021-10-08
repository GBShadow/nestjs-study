import { IsString, IsNotEmpty } from 'class-validator';

export class MessageDTO {
  @IsString()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  text: string;
}
