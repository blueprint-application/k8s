import { IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirementModelOptions as IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement } from '../IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement';
import { IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPatternModelOptions as IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern } from '../IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1PodFailurePolicyRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1PodFailurePolicyRuleModel extends BaseModel {
  // Specifies the action taken on a pod failure when the requirements are satisfied. Possible values are:  - FailJob: indicates that the pod\'s job is marked as Failed and all   running pods are terminated. - FailIndex: indicates that the pod\'s index is marked as Failed and will   not be restarted.   This value is beta-level. It can be used when the   `JobBackoffLimitPerIndex` feature gate is enabled (enabled by default). - Ignore: indicates that the counter towards the .backoffLimit is not   incremented and a replacement pod is created. - Count: indicates that the pod is handled in the default way - the   counter towards the .backoffLimit is incremented. Additional values are considered to be added in the future. Clients should react to an unknown action by skipping the rule.
  action: string;
  onExitCodes?: IoK8sApiBatchV1PodFailurePolicyOnExitCodesRequirement;
  // Represents the requirement on the pod conditions. The requirement is represented as a list of pod condition patterns. The requirement is satisfied if at least one pattern matches an actual pod condition. At most 20 elements are allowed.
  onPodConditions?: Array<IoK8sApiBatchV1PodFailurePolicyOnPodConditionsPattern>;

  constructor(data: IoK8sApiBatchV1PodFailurePolicyRuleModelOptions) {
    super();
    validate(data);
    this.action = data.action;
    this.onExitCodes = data.onExitCodes;
    this.onPodConditions = data.onPodConditions;
  }

  static create(data: IoK8sApiBatchV1PodFailurePolicyRuleModelOptions): IoK8sApiBatchV1PodFailurePolicyRuleModel {
    return new IoK8sApiBatchV1PodFailurePolicyRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      action: this.action,
      onExitCodes: this.onExitCodes,
      onPodConditions: this.onPodConditions,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1PodFailurePolicyRuleModel;
