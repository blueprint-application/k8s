import { IoK8sApiCoreV1EventModelOptions as IoK8sApiCoreV1Event } from '../IoK8sApiCoreV1Event';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1EventListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Event>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
