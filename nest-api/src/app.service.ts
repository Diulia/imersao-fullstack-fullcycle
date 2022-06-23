import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Se mostrar essa mensagem é pq tá rodando certo!';
  }
}
