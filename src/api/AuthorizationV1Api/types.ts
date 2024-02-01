import {
  IoK8sApiAuthorizationV1LocalSubjectAccessReviewModelOptions as IoK8sApiAuthorizationV1LocalSubjectAccessReview,
  IoK8sApiAuthorizationV1SelfSubjectAccessReviewModelOptions as IoK8sApiAuthorizationV1SelfSubjectAccessReview,
  IoK8sApiAuthorizationV1SelfSubjectRulesReviewModelOptions as IoK8sApiAuthorizationV1SelfSubjectRulesReview,
  IoK8sApiAuthorizationV1SubjectAccessReviewModelOptions as IoK8sApiAuthorizationV1SubjectAccessReview,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateAuthorizationV1NamespacedLocalSubjectAccessReviewParams extends BaseParams {
  path: {
    namespace: string;
  };
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthorizationV1LocalSubjectAccessReview;
}

export interface CreateAuthorizationV1SelfSubjectAccessReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthorizationV1SelfSubjectAccessReview;
}

export interface CreateAuthorizationV1SelfSubjectRulesReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthorizationV1SelfSubjectRulesReview;
}

export interface CreateAuthorizationV1SubjectAccessReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthorizationV1SubjectAccessReview;
}

export default {};
