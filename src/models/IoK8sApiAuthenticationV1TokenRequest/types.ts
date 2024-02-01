import { IoK8sApiAuthenticationV1TokenRequestSpecModelOptions as IoK8sApiAuthenticationV1TokenRequestSpec } from '../IoK8sApiAuthenticationV1TokenRequestSpec';
import { IoK8sApiAuthenticationV1TokenRequestStatusModelOptions as IoK8sApiAuthenticationV1TokenRequestStatus } from '../IoK8sApiAuthenticationV1TokenRequestStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthenticationV1TokenRequestModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthenticationV1TokenRequestSpec;
  status?: IoK8sApiAuthenticationV1TokenRequestStatus;
}
