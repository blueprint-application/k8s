import { IoK8sApiNetworkingV1IngressModelOptions as IoK8sApiNetworkingV1Ingress } from '../IoK8sApiNetworkingV1Ingress';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiNetworkingV1IngressListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiNetworkingV1Ingress>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
