import { IoK8sApiStorageV1CSINodeModelOptions as IoK8sApiStorageV1CSINode } from '../IoK8sApiStorageV1CSINode';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiStorageV1CSINodeListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiStorageV1CSINode>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
