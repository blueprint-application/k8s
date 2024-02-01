import { BaseModel } from '../types';
import type { IoK8sApiAppsV1StatefulSetConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1StatefulSetConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // A human readable message indicating details about the transition.
  message?: string;
  // The reason for the condition\'s last transition.
  reason?: string;
  // Status of the condition, one of True, False, Unknown.
  status: string;
  // Type of statefulset condition.
  type: string;

  constructor(data: IoK8sApiAppsV1StatefulSetConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiAppsV1StatefulSetConditionModelOptions): IoK8sApiAppsV1StatefulSetConditionModel {
    return new IoK8sApiAppsV1StatefulSetConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1StatefulSetConditionModel;
