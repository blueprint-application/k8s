import { IoK8sApiFlowcontrolV1NonResourcePolicyRuleModelOptions as IoK8sApiFlowcontrolV1NonResourcePolicyRule } from '../IoK8sApiFlowcontrolV1NonResourcePolicyRule';
import { IoK8sApiFlowcontrolV1ResourcePolicyRuleModelOptions as IoK8sApiFlowcontrolV1ResourcePolicyRule } from '../IoK8sApiFlowcontrolV1ResourcePolicyRule';
import { IoK8sApiFlowcontrolV1SubjectModelOptions as IoK8sApiFlowcontrolV1Subject } from '../IoK8sApiFlowcontrolV1Subject';

export interface IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModelOptions {
  nonResourceRules?: Array<IoK8sApiFlowcontrolV1NonResourcePolicyRule>;
  resourceRules?: Array<IoK8sApiFlowcontrolV1ResourcePolicyRule>;
  subjects: Array<IoK8sApiFlowcontrolV1Subject>;
}
