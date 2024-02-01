import { IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModelOptions as IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec } from '../IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec';
import { IoK8sApiAuthorizationV1SubjectRulesReviewStatusModelOptions as IoK8sApiAuthorizationV1SubjectRulesReviewStatus } from '../IoK8sApiAuthorizationV1SubjectRulesReviewStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAuthorizationV1SelfSubjectRulesReviewModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpec;
  status?: IoK8sApiAuthorizationV1SubjectRulesReviewStatus;
}
