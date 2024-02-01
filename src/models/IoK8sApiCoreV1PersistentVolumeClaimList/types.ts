import { IoK8sApiCoreV1PersistentVolumeClaimModelOptions as IoK8sApiCoreV1PersistentVolumeClaim } from '../IoK8sApiCoreV1PersistentVolumeClaim';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1PersistentVolumeClaimListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1PersistentVolumeClaim>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
