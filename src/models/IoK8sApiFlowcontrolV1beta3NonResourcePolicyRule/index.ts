import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModel extends BaseModel {
  // `nonResourceURLs` is a set of url prefixes that a user should have access to and may not be empty. For example:   - \"/healthz\" is legal   - \"/hea*\" is illegal   - \"/hea\" is legal but matches nothing   - \"/hea/_*\" also matches nothing   - \"/healthz/_*\" matches all per-component health checks. \"*\" matches all non-resource urls. if it is present, it must be the only entry. Required.
  nonResourceURLs: Array<string>;
  // `verbs` is a list of matching verbs and may not be empty. \"*\" matches all verbs. If it is present, it must be the only entry. Required.
  verbs: Array<string>;

  constructor(data: IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModelOptions) {
    super();
    validate(data);
    this.nonResourceURLs = data.nonResourceURLs;
    this.verbs = data.verbs;
  }

  static create(
    data: IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModelOptions,
  ): IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModel {
    return new IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModel(data);
  }

  toObject(): Partial<this> {
    return {
      nonResourceURLs: this.nonResourceURLs,
      verbs: this.verbs,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModel;
