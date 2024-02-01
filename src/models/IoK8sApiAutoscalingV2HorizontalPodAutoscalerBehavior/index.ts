import { IoK8sApiAutoscalingV2HPAScalingRulesModelOptions as IoK8sApiAutoscalingV2HPAScalingRules } from '../IoK8sApiAutoscalingV2HPAScalingRules';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModel extends BaseModel {
  scaleDown?: IoK8sApiAutoscalingV2HPAScalingRules;
  scaleUp?: IoK8sApiAutoscalingV2HPAScalingRules;

  constructor(data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModelOptions) {
    super();
    validate(data);
    this.scaleDown = data.scaleDown;
    this.scaleUp = data.scaleUp;
  }

  static create(
    data: IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModelOptions,
  ): IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModel {
    return new IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModel(data);
  }

  toObject(): Partial<this> {
    return {
      scaleDown: this.scaleDown,
      scaleUp: this.scaleUp,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModel;
