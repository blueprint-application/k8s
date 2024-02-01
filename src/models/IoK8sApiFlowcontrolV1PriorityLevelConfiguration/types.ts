import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpecModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec';
import { IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatusModelOptions as IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus } from '../IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiFlowcontrolV1PriorityLevelConfigurationModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationSpec;
  status?: IoK8sApiFlowcontrolV1PriorityLevelConfigurationStatus;
}
