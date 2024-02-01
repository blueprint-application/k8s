import { IoK8sApiCoreV1PodSpecModelOptions as IoK8sApiCoreV1PodSpec } from '../IoK8sApiCoreV1PodSpec';
import { IoK8sApiCoreV1PodStatusModelOptions as IoK8sApiCoreV1PodStatus } from '../IoK8sApiCoreV1PodStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1PodModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PodSpec;
  status?: IoK8sApiCoreV1PodStatus;
}
