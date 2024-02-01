import { IoK8sApiAuthenticationV1alpha1SelfSubjectReviewModelOptions as IoK8sApiAuthenticationV1alpha1SelfSubjectReview } from '../../models';
import { BaseParams } from '../base';

export interface CreateAuthenticationV1alpha1SelfSubjectReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthenticationV1alpha1SelfSubjectReview;
}

export default {};
