import { PartialType } from '@nestjs/mapped-types';
import { CreatePokemonDto } from './create-pokemon.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdatePokemonDto extends PartialType(CreatePokemonDto) {
  @IsString({ message: 'Tem que ser do tipo string' })
  @IsOptional()
  name: string;

  @IsInt({ message: 'Tem que ser do tipo numerico' })
  @IsOptional()
  height?: number;
}
