import { IoK8sApiCoreV1NamespaceModelOptions as IoK8sApiCoreV1Namespace } from '../IoK8sApiCoreV1Namespace';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1NamespaceListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Namespace>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
