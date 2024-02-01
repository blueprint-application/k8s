import { IoK8sApiCoreV1ResourceQuotaModelOptions as IoK8sApiCoreV1ResourceQuota } from '../IoK8sApiCoreV1ResourceQuota';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1ResourceQuotaListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1ResourceQuota>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
