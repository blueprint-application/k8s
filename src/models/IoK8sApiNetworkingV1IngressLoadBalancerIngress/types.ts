import { IoK8sApiNetworkingV1IngressPortStatusModelOptions as IoK8sApiNetworkingV1IngressPortStatus } from '../IoK8sApiNetworkingV1IngressPortStatus';

export interface IoK8sApiNetworkingV1IngressLoadBalancerIngressModelOptions {
  hostname?: string;
  ip?: string;
  ports?: Array<IoK8sApiNetworkingV1IngressPortStatus>;
}
