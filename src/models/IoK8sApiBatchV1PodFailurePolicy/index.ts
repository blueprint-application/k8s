import { IoK8sApiBatchV1PodFailurePolicyRuleModelOptions as IoK8sApiBatchV1PodFailurePolicyRule } from '../IoK8sApiBatchV1PodFailurePolicyRule';
import { BaseModel } from '../types';
import type { IoK8sApiBatchV1PodFailurePolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiBatchV1PodFailurePolicyModel extends BaseModel {
  // A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
  rules: Array<IoK8sApiBatchV1PodFailurePolicyRule>;

  constructor(data: IoK8sApiBatchV1PodFailurePolicyModelOptions) {
    super();
    validate(data);
    this.rules = data.rules;
  }

  static create(data: IoK8sApiBatchV1PodFailurePolicyModelOptions): IoK8sApiBatchV1PodFailurePolicyModel {
    return new IoK8sApiBatchV1PodFailurePolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      rules: this.rules,
    } as Partial<this>;
  }
}

export default IoK8sApiBatchV1PodFailurePolicyModel;
