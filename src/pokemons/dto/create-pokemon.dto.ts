import { Prisma } from '.prisma/client';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePokemonDto implements Prisma.PokemonCreateInput {
  @IsString({ message: 'Tem que ser do tipo string' })
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  name: string;

  @IsInt({ message: 'Tem que ser do tipo numerico' })
  @IsOptional()
  height?: number;
}
