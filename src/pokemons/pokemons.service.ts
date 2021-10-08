import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createPokemonDto: CreatePokemonDto) {
    return this.prisma.pokemon.create({
      data: {
        name: createPokemonDto.name,
        height: createPokemonDto.height,
      },
    });
  }

  findAll() {
    return this.prisma.pokemon.findMany({
      orderBy: {
        height: 'desc',
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} pokemon`;
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.prisma.pokemon.upsert({
      create: {
        name: updatePokemonDto.name,
        height: updatePokemonDto.height,
      },
      update: {
        name: updatePokemonDto.name,
        height: updatePokemonDto.height,
      },
      where: {
        name: updatePokemonDto.name,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} pokemon`;
  }
}
