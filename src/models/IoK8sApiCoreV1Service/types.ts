import { IoK8sApiCoreV1ServiceSpecModelOptions as IoK8sApiCoreV1ServiceSpec } from '../IoK8sApiCoreV1ServiceSpec';
import { IoK8sApiCoreV1ServiceStatusModelOptions as IoK8sApiCoreV1ServiceStatus } from '../IoK8sApiCoreV1ServiceStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1ServiceModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1ServiceSpec;
  status?: IoK8sApiCoreV1ServiceStatus;
}
