import { IoK8sApiCoreV1PersistentVolumeClaimSpecModelOptions as IoK8sApiCoreV1PersistentVolumeClaimSpec } from '../IoK8sApiCoreV1PersistentVolumeClaimSpec';
import { IoK8sApiCoreV1PersistentVolumeClaimStatusModelOptions as IoK8sApiCoreV1PersistentVolumeClaimStatus } from '../IoK8sApiCoreV1PersistentVolumeClaimStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1PersistentVolumeClaimModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiCoreV1PersistentVolumeClaimSpec;
  status?: IoK8sApiCoreV1PersistentVolumeClaimStatus;
}
