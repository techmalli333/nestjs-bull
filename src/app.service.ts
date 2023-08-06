import { Injectable } from '@nestjs/common';
import { HEAVY_QUEUE_1 } from './constant';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue(HEAVY_QUEUE_1) private readonly heavy_queue_1: Queue,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async heavyQueue1() {
    await this.heavy_queue_1.add(
      {
        data: {
          file_id: '12345',
        },
      },
      { delay: 2000 }, // 2 seconds delayed
    );
  }
}
