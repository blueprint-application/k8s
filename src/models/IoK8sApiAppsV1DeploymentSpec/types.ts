import { IoK8sApiAppsV1DeploymentStrategyModelOptions as IoK8sApiAppsV1DeploymentStrategy } from '../IoK8sApiAppsV1DeploymentStrategy';
import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiAppsV1DeploymentSpecModelOptions {
  minReadySeconds?: number;
  paused?: boolean;
  progressDeadlineSeconds?: number;
  replicas?: number;
  revisionHistoryLimit?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  strategy?: IoK8sApiAppsV1DeploymentStrategy;
  template: IoK8sApiCoreV1PodTemplateSpec;
}
