import { IoK8sApiCoreV1ConfigMapModelOptions as IoK8sApiCoreV1ConfigMap } from '../IoK8sApiCoreV1ConfigMap';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1ConfigMapListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1ConfigMap>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
