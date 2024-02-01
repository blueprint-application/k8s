import { IoK8sApiStorageV1CSIStorageCapacityModelOptions as IoK8sApiStorageV1CSIStorageCapacity } from '../IoK8sApiStorageV1CSIStorageCapacity';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiStorageV1CSIStorageCapacityListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiStorageV1CSIStorageCapacity>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
