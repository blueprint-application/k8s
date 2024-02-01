import { IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions as IoK8sApiCoreV1TypedLocalObjectReference } from '../IoK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiNetworkingV1IngressServiceBackendModelOptions as IoK8sApiNetworkingV1IngressServiceBackend } from '../IoK8sApiNetworkingV1IngressServiceBackend';

export interface IoK8sApiNetworkingV1IngressBackendModelOptions {
  resource?: IoK8sApiCoreV1TypedLocalObjectReference;
  service?: IoK8sApiNetworkingV1IngressServiceBackend;
}
