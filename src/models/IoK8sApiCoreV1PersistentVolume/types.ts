import { IoK8sApiCoreV1PersistentVolumeSpecModelOptions as IoK8sApiCoreV1PersistentVolumeSpec } from '../IoK8sApiCoreV1PersistentVolumeSpec';
import { IoK8sApiCoreV1PersistentVolumeStatusModelOptions as IoK8sApiCoreV1PersistentVolumeStatus } from '../IoK8sApiCoreV1PersistentVolumeStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1PersistentVolumeModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PersistentVolumeSpec;
  status?: IoK8sApiCoreV1PersistentVolumeStatus;
}
