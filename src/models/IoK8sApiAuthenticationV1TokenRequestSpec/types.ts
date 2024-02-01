import { IoK8sApiAuthenticationV1BoundObjectReferenceModelOptions as IoK8sApiAuthenticationV1BoundObjectReference } from '../IoK8sApiAuthenticationV1BoundObjectReference';

export interface IoK8sApiAuthenticationV1TokenRequestSpecModelOptions {
  audiences: Array<string>;
  boundObjectRef?: IoK8sApiAuthenticationV1BoundObjectReference;
  expirationSeconds?: number;
}
