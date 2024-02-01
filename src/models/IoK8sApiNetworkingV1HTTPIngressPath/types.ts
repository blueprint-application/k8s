import { IoK8sApiNetworkingV1IngressBackendModelOptions as IoK8sApiNetworkingV1IngressBackend } from '../IoK8sApiNetworkingV1IngressBackend';

export interface IoK8sApiNetworkingV1HTTPIngressPathModelOptions {
  backend: IoK8sApiNetworkingV1IngressBackend;
  path?: string;
  pathType: string;
}
