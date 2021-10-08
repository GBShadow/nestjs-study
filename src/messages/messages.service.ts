import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Message } from 'src/messages/Message';
import { MessageDTO } from './MessageDTO';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: uuid(),
      text: 'Message 1',
    },
    {
      id: uuid(),
      text: 'Message 2',
    },
  ];

  findAll() {
    return this.messages;
  }

  findById(id: string) {
    const message = this.messages.find((item) => item.id === id);

    if (!message) {
      throw new Error('Message does not exist');
    }

    return message;
  }

  create({ text }: MessageDTO) {
    const message = { id: uuid(), text };

    this.messages.push(message);

    return message;
  }

  update(message: Message) {
    this.messages = this.messages.map((item) =>
      item.id === message.id ? { ...item, text: message.text } : item,
    );

    return message;
  }

  async delete(id: string) {
    const message = this.messages.find((item) => item.id === id);

    if (!message) {
      throw new Error('Message does not exist');
    }

    this.messages = this.messages.filter((item) => item.id !== id);
  }
}
