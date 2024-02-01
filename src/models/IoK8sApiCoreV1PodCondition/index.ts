import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastProbeTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // Human-readable message indicating details about last transition.
  message?: string;
  // Unique, one-word, CamelCase reason for the condition\'s last transition.
  reason?: string;
  // Status is the status of the condition. Can be True, False, Unknown. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
  status: string;
  // Type is the type of the condition. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
  type: string;

  constructor(data: IoK8sApiCoreV1PodConditionModelOptions) {
    super();
    validate(data);
    this.lastProbeTime = data.lastProbeTime;
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1PodConditionModelOptions): IoK8sApiCoreV1PodConditionModel {
    return new IoK8sApiCoreV1PodConditionModel(data);
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

export default IoK8sApiCoreV1PodConditionModel;
