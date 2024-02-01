import { IoK8sApiStorageV1CSIDriverSpecModelOptions as IoK8sApiStorageV1CSIDriverSpec } from '../IoK8sApiStorageV1CSIDriverSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiStorageV1CSIDriverModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiStorageV1CSIDriverSpec;
}
