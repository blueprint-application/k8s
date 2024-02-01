import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HPAScalingPolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HPAScalingPolicyModel extends BaseModel {
  // periodSeconds specifies the window of time for which the policy should hold true. PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).
  periodSeconds: number;
  // type is used to specify the scaling policy.
  type: string;
  // value contains the amount of change which is permitted by the policy. It must be greater than zero
  value: number;

  constructor(data: IoK8sApiAutoscalingV2HPAScalingPolicyModelOptions) {
    super();
    validate(data);
    this.periodSeconds = data.periodSeconds;
    this.type = data.type;
    this.value = data.value;
  }

  static create(data: IoK8sApiAutoscalingV2HPAScalingPolicyModelOptions): IoK8sApiAutoscalingV2HPAScalingPolicyModel {
    return new IoK8sApiAutoscalingV2HPAScalingPolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      periodSeconds: this.periodSeconds,
      type: this.type,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2HPAScalingPolicyModel;
