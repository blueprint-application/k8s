import { IoK8sApiCoreV1PersistentVolumeModelOptions as IoK8sApiCoreV1PersistentVolume } from '../IoK8sApiCoreV1PersistentVolume';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1PersistentVolumeListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1PersistentVolume>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
