import { IoK8sApiFlowcontrolV1NonResourcePolicyRuleModelOptions as IoK8sApiFlowcontrolV1NonResourcePolicyRule } from '../IoK8sApiFlowcontrolV1NonResourcePolicyRule';
import { IoK8sApiFlowcontrolV1ResourcePolicyRuleModelOptions as IoK8sApiFlowcontrolV1ResourcePolicyRule } from '../IoK8sApiFlowcontrolV1ResourcePolicyRule';
import { IoK8sApiFlowcontrolV1SubjectModelOptions as IoK8sApiFlowcontrolV1Subject } from '../IoK8sApiFlowcontrolV1Subject';
import { BaseModel } from '../types';
import type { IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModel extends BaseModel {
  // `nonResourceRules` is a list of NonResourcePolicyRules that identify matching requests according to their verb and the target non-resource URL.
  nonResourceRules?: Array<IoK8sApiFlowcontrolV1NonResourcePolicyRule>;
  // `resourceRules` is a slice of ResourcePolicyRules that identify matching requests according to their verb and the target resource. At least one of `resourceRules` and `nonResourceRules` has to be non-empty.
  resourceRules?: Array<IoK8sApiFlowcontrolV1ResourcePolicyRule>;
  // subjects is the list of normal user, serviceaccount, or group that this rule cares about. There must be at least one member in this slice. A slice that includes both the system:authenticated and system:unauthenticated user groups matches every request. Required.
  subjects: Array<IoK8sApiFlowcontrolV1Subject>;

  constructor(data: IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModelOptions) {
    super();
    validate(data);
    this.nonResourceRules = data.nonResourceRules;
    this.resourceRules = data.resourceRules;
    this.subjects = data.subjects;
  }

  static create(
    data: IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModelOptions,
  ): IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModel {
    return new IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModel(data);
  }

  toObject(): Partial<this> {
    return {
      nonResourceRules: this.nonResourceRules,
      resourceRules: this.resourceRules,
      subjects: this.subjects,
    } as Partial<this>;
  }
}

export default IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModel;
