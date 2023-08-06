import { Process, Processor } from '@nestjs/bull';
import { HEAVY_QUEUE_1 } from './constant';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor(HEAVY_QUEUE_1)
export class HeavyQueue1Consumer {
  readonly logger = new Logger(HeavyQueue1Consumer.name);

  @Process()
  async HeavyQueue1(job: Job<unknown>) {
    this.logger.log(JSON.stringify(job));
    this.logger.debug('Data', job.data);
  }
}
