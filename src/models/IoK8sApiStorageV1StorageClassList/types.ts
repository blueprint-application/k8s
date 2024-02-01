import { IoK8sApiStorageV1StorageClassModelOptions as IoK8sApiStorageV1StorageClass } from '../IoK8sApiStorageV1StorageClass';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiStorageV1StorageClassListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiStorageV1StorageClass>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
