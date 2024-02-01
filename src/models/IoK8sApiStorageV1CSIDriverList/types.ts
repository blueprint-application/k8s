import { IoK8sApiStorageV1CSIDriverModelOptions as IoK8sApiStorageV1CSIDriver } from '../IoK8sApiStorageV1CSIDriver';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiStorageV1CSIDriverListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiStorageV1CSIDriver>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
