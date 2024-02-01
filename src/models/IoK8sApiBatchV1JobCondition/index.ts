import { BaseModel } from '../types';
import type { IoK8sApiBatchV1JobConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1JobConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastProbeTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // Human readable message indicating details about last transition.
  message?: string;
  // (brief) reason for the condition\'s last transition.
  reason?: string;
  // Status of the condition, one of True, False, Unknown.
  status: string;
  // Type of job condition, Complete or Failed.
  type: string;

  constructor(data: IoK8sApiBatchV1JobConditionModelOptions) {
    super();
    validate(data);
    this.lastProbeTime = data.lastProbeTime;
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiBatchV1JobConditionModelOptions): IoK8sApiBatchV1JobConditionModel {
    return new IoK8sApiBatchV1JobConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastProbeTime: this.lastProbeTime,
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1JobConditionModel;
