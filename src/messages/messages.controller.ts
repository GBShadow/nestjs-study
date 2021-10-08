import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Message } from 'src/messages/Message';
import { MessageDTO } from 'src/messages/MessageDTO';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  findAll() {
    return this.messagesService.findAll();
  }

  @Get(':id')
  findById(@Param() params) {
    return this.messagesService.findById(params.id);
  }

  @Post()
  create(@Body() { text }: MessageDTO) {
    return this.messagesService.create({ text });
  }

  @Put(':id')
  update(@Body() { text }: Message, @Param() params) {
    return this.messagesService.update({ id: params.id, text });
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param() params) {
    return this.messagesService.delete(params.id).catch((error) => {
      throw new NotFoundException(error.message);
    });
  }
}
