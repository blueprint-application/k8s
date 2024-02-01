import { IoK8sApiNetworkingV1IngressClassModelOptions as IoK8sApiNetworkingV1IngressClass } from '../IoK8sApiNetworkingV1IngressClass';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiNetworkingV1IngressClassListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiNetworkingV1IngressClass>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
