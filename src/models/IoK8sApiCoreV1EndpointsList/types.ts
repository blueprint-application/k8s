import { IoK8sApiCoreV1EndpointsModelOptions as IoK8sApiCoreV1Endpoints } from '../IoK8sApiCoreV1Endpoints';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiCoreV1EndpointsListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiCoreV1Endpoints>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
