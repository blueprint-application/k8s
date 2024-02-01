import { IoK8sApiCoreV1PodModelOptions as IoK8sApiCoreV1Pod } from '../IoK8sApiCoreV1Pod';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1PodListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Pod>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
