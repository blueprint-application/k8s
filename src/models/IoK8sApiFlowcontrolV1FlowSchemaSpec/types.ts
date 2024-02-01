import { IoK8sApiFlowcontrolV1FlowDistinguisherMethodModelOptions as IoK8sApiFlowcontrolV1FlowDistinguisherMethod } from '../IoK8sApiFlowcontrolV1FlowDistinguisherMethod';
import { IoK8sApiFlowcontrolV1PolicyRulesWithSubjectsModelOptions as IoK8sApiFlowcontrolV1PolicyRulesWithSubjects } from '../IoK8sApiFlowcontrolV1PolicyRulesWithSubjects';
import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationReferenceModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationReference } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationReference';

export interface IoK8sApiFlowcontrolV1FlowSchemaSpecModelOptions {
  distinguisherMethod?: IoK8sApiFlowcontrolV1FlowDistinguisherMethod;
  matchingPrecedence?: number;
  priorityLevelConfiguration: IoK8sApiFlowcontrolV1PriorityLevelConfigurationReference;
  rules?: Array<IoK8sApiFlowcontrolV1PolicyRulesWithSubjects>;
}