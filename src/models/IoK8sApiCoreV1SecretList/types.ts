import { IoK8sApiCoreV1SecretModelOptions as IoK8sApiCoreV1Secret } from '../IoK8sApiCoreV1Secret';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1SecretListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Secret>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
