import { IoK8sApiFlowcontrolV1beta3NonResourcePolicyRuleModelOptions as IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule } from '../IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta3ResourcePolicyRuleModelOptions as IoK8sApiFlowcontrolV1beta3ResourcePolicyRule } from '../IoK8sApiFlowcontrolV1beta3ResourcePolicyRule';
import { IoK8sApiFlowcontrolV1beta3SubjectModelOptions as IoK8sApiFlowcontrolV1beta3Subject } from '../IoK8sApiFlowcontrolV1beta3Subject';

export interface IoK8sApiFlowcontrolV1beta3PolicyRulesWithSubjectsModelOptions {
  nonResourceRules?: Array<IoK8sApiFlowcontrolV1beta3NonResourcePolicyRule>;
  resourceRules?: Array<IoK8sApiFlowcontrolV1beta3ResourcePolicyRule>;
  subjects: Array<IoK8sApiFlowcontrolV1beta3Subject>;
}
