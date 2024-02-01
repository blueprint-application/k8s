import { IoK8sApiCoreV1ServiceModelOptions as IoK8sApiCoreV1Service } from '../IoK8sApiCoreV1Service';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1ServiceListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Service>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
