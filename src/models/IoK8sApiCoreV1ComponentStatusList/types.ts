import { IoK8sApiCoreV1ComponentStatusModelOptions as IoK8sApiCoreV1ComponentStatus } from '../IoK8sApiCoreV1ComponentStatus';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1ComponentStatusListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1ComponentStatus>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
