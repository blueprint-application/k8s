import { IoK8sApiNetworkingV1IngressSpecModelOptions as IoK8sApiNetworkingV1IngressSpec } from '../IoK8sApiNetworkingV1IngressSpec';
import { IoK8sApiNetworkingV1IngressStatusModelOptions as IoK8sApiNetworkingV1IngressStatus } from '../IoK8sApiNetworkingV1IngressStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiNetworkingV1IngressModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1IngressSpec;
  status?: IoK8sApiNetworkingV1IngressStatus;
}
