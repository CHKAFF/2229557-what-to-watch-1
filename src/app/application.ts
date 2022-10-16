import {LoggerInterface} from '../common/logger/logger.interface.js';
import {inject, injectable} from 'inversify';
import {COMPONENT} from '../types/component.type.js';

@injectable()
export default class Application {
  constructor(@inject(COMPONENT.LoggerInterface) private logger: LoggerInterface) {}

  async init() {
    this.logger.info(`Application is initialized.`);
  }
}