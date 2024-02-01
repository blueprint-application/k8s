import { IoK8sApiCoreV1NodeModelOptions as IoK8sApiCoreV1Node } from '../IoK8sApiCoreV1Node';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1NodeListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Node>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
