import { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpecModelOptions as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpec } from '../IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpec';
import { IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatusModelOptions as IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus } from '../IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationSpec;
  status?: IoK8sApiFlowcontrolV1beta3PriorityLevelConfigurationStatus;
}
