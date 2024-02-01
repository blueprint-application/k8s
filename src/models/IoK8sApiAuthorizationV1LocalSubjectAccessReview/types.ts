import { IoK8sApiAuthorizationV1SubjectAccessReviewSpecModelOptions as IoK8sApiAuthorizationV1SubjectAccessReviewSpec } from '../IoK8sApiAuthorizationV1SubjectAccessReviewSpec';
import { IoK8sApiAuthorizationV1SubjectAccessReviewStatusModelOptions as IoK8sApiAuthorizationV1SubjectAccessReviewStatus } from '../IoK8sApiAuthorizationV1SubjectAccessReviewStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthorizationV1LocalSubjectAccessReviewModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SubjectAccessReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectAccessReviewStatus;
}
