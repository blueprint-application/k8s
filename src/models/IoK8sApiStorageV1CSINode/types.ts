import { IoK8sApiStorageV1CSINodeSpecModelOptions as IoK8sApiStorageV1CSINodeSpec } from '../IoK8sApiStorageV1CSINodeSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1CSINodeModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1CSINodeSpec;
}
