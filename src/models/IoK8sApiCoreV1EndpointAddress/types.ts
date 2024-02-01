import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';

export interface IoK8sApiCoreV1EndpointAddressModelOptions {
  hostname?: string;
  ip: string;
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;
}
