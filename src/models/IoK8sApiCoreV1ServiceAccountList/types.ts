import { IoK8sApiCoreV1ServiceAccountModelOptions as IoK8sApiCoreV1ServiceAccount } from '../IoK8sApiCoreV1ServiceAccount';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1ServiceAccountListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1ServiceAccount>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
