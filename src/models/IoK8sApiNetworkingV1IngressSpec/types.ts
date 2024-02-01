import { IoK8sApiNetworkingV1IngressBackendModelOptions as IoK8sApiNetworkingV1IngressBackend } from '../IoK8sApiNetworkingV1IngressBackend';
import { IoK8sApiNetworkingV1IngressRuleModelOptions as IoK8sApiNetworkingV1IngressRule } from '../IoK8sApiNetworkingV1IngressRule';
import { IoK8sApiNetworkingV1IngressTLSModelOptions as IoK8sApiNetworkingV1IngressTLS } from '../IoK8sApiNetworkingV1IngressTLS';

export interface IoK8sApiNetworkingV1IngressSpecModelOptions {
  defaultBackend?: IoK8sApiNetworkingV1IngressBackend;
  ingressClassName?: string;
  rules?: Array<IoK8sApiNetworkingV1IngressRule>;
  tls?: Array<IoK8sApiNetworkingV1IngressTLS>;
}
