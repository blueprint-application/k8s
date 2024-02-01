import {
  IoK8sApiAuthenticationV1SelfSubjectReviewModelOptions as IoK8sApiAuthenticationV1SelfSubjectReview,
  IoK8sApiAuthenticationV1TokenReviewModelOptions as IoK8sApiAuthenticationV1TokenReview,
} from '../../models';
import { BaseParams } from '../base';

export interface CreateAuthenticationV1SelfSubjectReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthenticationV1SelfSubjectReview;
}

export interface CreateAuthenticationV1TokenReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthenticationV1TokenReview;
}

export default {};
