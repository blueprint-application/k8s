import { IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpecModelOptions as IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec } from '../IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec';
import { IoK8sApiAuthorizationV1SubjectAccessReviewStatusModelOptions as IoK8sApiAuthorizationV1SubjectAccessReviewStatus } from '../IoK8sApiAuthorizationV1SubjectAccessReviewStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthorizationV1SelfSubjectAccessReviewModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SelfSubjectAccessReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}
