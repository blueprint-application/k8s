import { IoK8sApiFlowcontrolV1ExemptPriorityLevelConfigurationModelOptions as IoK8sApiFlowcontrolV1ExemptPriorityLevelConfiguration } from '../IoK8sApiFlowcontrolV1ExemptPriorityLevelConfiguration';
import { IoK8sApiFlowcontrolV1LimitedPriorityLevelConfigurationModelOptions as IoK8sApiFlowcontrolV1LimitedPriorityLevelConfiguration } from '../IoK8sApiFlowcontrolV1LimitedPriorityLevelConfiguration';

export interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecModelOptions {
  exempt?: IoK8sApiFlowcontrolV1ExemptPriorityLevelConfiguration;
  limited?: IoK8sApiFlowcontrolV1LimitedPriorityLevelConfiguration;
  type: string;
}