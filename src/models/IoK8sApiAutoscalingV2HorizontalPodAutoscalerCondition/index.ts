import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  lastTransitionTime?: Date;
  // message is a human-readable explanation containing details about the transition
  message?: string;
  // reason is the reason for the condition\'s last transition.
  reason?: string;
  // status is the status of the condition (True, False, Unknown)
  status: string;
  // type describes the current condition
  type: string;

  constructor(data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModelOptions) {
    super();
    validate(data);
    this.lastTransitionTime = data.lastTransitionTime;
    this.message = data.message;
    this.reason = data.reason;
    this.status = data.status;
    this.type = data.type;
  }

  static create(
    data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModelOptions,
  ): IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModel {
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModel(data);
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

export default IoK8sApiAutoscalingV2HorizontalPodAutoscalerConditionModel;
