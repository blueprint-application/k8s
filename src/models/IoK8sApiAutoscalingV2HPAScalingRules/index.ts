import { IoK8sApiAutoscalingV2HPAScalingPolicyModelOptions as IoK8sApiAutoscalingV2HPAScalingPolicy } from '../IoK8sApiAutoscalingV2HPAScalingPolicy';
import { BaseModel } from '../types';
import type { IoK8sApiAutoscalingV2HPAScalingRulesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAutoscalingV2HPAScalingRulesModel extends BaseModel {
  // policies is a list of potential scaling polices which can be used during scaling. At least one policy must be specified, otherwise the HPAScalingRules will be discarded as invalid
  policies?: Array<IoK8sApiAutoscalingV2HPAScalingPolicy>;
  // selectPolicy is used to specify which policy should be used. If not set, the default value Max is used.
  selectPolicy?: string;
  // stabilizationWindowSeconds is the number of seconds for which past recommendations should be considered while scaling up or scaling down. StabilizationWindowSeconds must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).
  stabilizationWindowSeconds?: number;

  constructor(data: IoK8sApiAutoscalingV2HPAScalingRulesModelOptions) {
    super();
    validate(data);
    this.policies = data.policies;
    this.selectPolicy = data.selectPolicy;
    this.stabilizationWindowSeconds = data.stabilizationWindowSeconds;
  }

  static create(data: IoK8sApiAutoscalingV2HPAScalingRulesModelOptions): IoK8sApiAutoscalingV2HPAScalingRulesModel {
    return new IoK8sApiAutoscalingV2HPAScalingRulesModel(data);
  }

  toObject(): Partial<this> {
    return {
      policies: this.policies,
      selectPolicy: this.selectPolicy,
      stabilizationWindowSeconds: this.stabilizationWindowSeconds,
    } as Partial<this>;
  }
}

export default IoK8sApiAutoscalingV2HPAScalingRulesModel;
