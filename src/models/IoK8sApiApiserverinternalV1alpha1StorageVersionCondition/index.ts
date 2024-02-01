import { BaseModel } from '../types';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // A human readable message indicating details about the transition.
  message?: string;
  // If set, this represents the .metadata.generation that the condition was set based upon.
  observedGeneration?: number;
  // The reason for the condition\'s last transition.
  reason: string;
  // Status of the condition, one of True, False, Unknown.
  status: string;
  // Type of the condition.
  type: string;

  constructor(data: IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.observedGeneration = data.observedGeneration;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModelOptions,
  ): IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModel {
    return new IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModel(data);
  }

  toObject(): Partial<this> {
    return {
      lastTransitionTime: this.lastTransitionTime,
      message: this.message,
      observedGeneration: this.observedGeneration,
      reason: this.reason,
      status: this.status,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModel;
