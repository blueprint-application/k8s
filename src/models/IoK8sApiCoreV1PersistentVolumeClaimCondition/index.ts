import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeClaimConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeClaimConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastProbeTime?: Date;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // message is the human-readable message indicating details about last transition.
  message?: string;
  // reason is a unique, this should be a short, machine understandable string that gives the reason for condition\'s last transition. If it reports \"Resizing\" that means the underlying persistent volume is being resized.
  reason?: string;
  status: string;
  type: string;

  constructor(data: IoK8sApiCoreV1PersistentVolumeClaimConditionModelOptions) {
    super();
    validate(data);
    this.lastProbeTime = data.lastProbeTime;
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiCoreV1PersistentVolumeClaimConditionModelOptions,
  ): IoK8sApiCoreV1PersistentVolumeClaimConditionModel {
    return new IoK8sApiCoreV1PersistentVolumeClaimConditionModel(data);
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

export default IoK8sApiCoreV1PersistentVolumeClaimConditionModel;
