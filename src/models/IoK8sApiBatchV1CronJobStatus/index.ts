import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1CronJobStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1CronJobStatusModel extends BaseModel {
  // A list of pointers to currently running jobs.
  active?: Array<IoK8sApiCoreV1ObjectReference>;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastScheduleTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastSuccessfulTime?: Date;

  constructor(data: IoK8sApiBatchV1CronJobStatusModelOptions) {
    super();
    validate(data);
    this.active = data.active;
    this.lastScheduleTime = data.lastScheduleTime;
    this.lastSuccessfulTime = data.lastSuccessfulTime;
  }

  static create(data: IoK8sApiBatchV1CronJobStatusModelOptions): IoK8sApiBatchV1CronJobStatusModel {
    return new IoK8sApiBatchV1CronJobStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      active: this.active,
      lastScheduleTime: this.lastScheduleTime,
      lastSuccessfulTime: this.lastSuccessfulTime,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1CronJobStatusModel;
