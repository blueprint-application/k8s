import { IoK8sApiAuthenticationV1TokenReviewSpecModelOptions as IoK8sApiAuthenticationV1TokenReviewSpec } from '../IoK8sApiAuthenticationV1TokenReviewSpec';
import { IoK8sApiAuthenticationV1TokenReviewStatusModelOptions as IoK8sApiAuthenticationV1TokenReviewStatus } from '../IoK8sApiAuthenticationV1TokenReviewStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthenticationV1TokenReviewModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthenticationV1TokenReviewSpec;
  status?: IoK8sApiAuthenticationV1TokenReviewStatus;
}
