import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastHeartbeatTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // Human readable message indicating details about last transition.
  message?: string;
  // (brief) reason for the condition\'s last transition.
  reason?: string;
  // Status of the condition, one of True, False, Unknown.
  status: string;
  // Type of node condition.
  type: string;

  constructor(data: IoK8sApiCoreV1NodeConditionModelOptions) {
    super();
    validate(data);
    this.lastHeartbeatTime = data.lastHeartbeatTime;
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1NodeConditionModelOptions): IoK8sApiCoreV1NodeConditionModel {
    return new IoK8sApiCoreV1NodeConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastHeartbeatTime: this.lastHeartbeatTime,
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeConditionModel;
