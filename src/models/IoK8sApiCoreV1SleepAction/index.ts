import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SleepActionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SleepActionModel extends BaseModel {
  // Seconds is the number of seconds to sleep.
  seconds: number;

  constructor(data: IoK8sApiCoreV1SleepActionModelOptions) {
    super();
    validate(data);
    this.seconds = data.seconds;
  }

  static create(data: IoK8sApiCoreV1SleepActionModelOptions): IoK8sApiCoreV1SleepActionModel {
    return new IoK8sApiCoreV1SleepActionModel(data);
  }

  toObject(): Partial<this> {
    return {
      seconds: this.seconds,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SleepActionModel;
