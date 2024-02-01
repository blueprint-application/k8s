import { IoK8sApiCoreV1PodTemplateSpecModelOptions as IoK8sApiCoreV1PodTemplateSpec } from '../IoK8sApiCoreV1PodTemplateSpec';
import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';

export interface IoK8sApiAppsV1ReplicaSetSpecModelOptions {
  minReadySeconds?: number;
  replicas?: number;
  selector: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  template?: IoK8sApiCoreV1PodTemplateSpec;
}
