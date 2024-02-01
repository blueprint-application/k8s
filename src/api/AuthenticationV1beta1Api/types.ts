import { IoK8sApiAuthenticationV1beta1SelfSubjectReviewModelOptions as IoK8sApiAuthenticationV1beta1SelfSubjectReview } from '../../models';
import { BaseParams } from '../base';

export interface CreateAuthenticationV1beta1SelfSubjectReviewParams extends BaseParams {
  query?: {
    dryRun?: string;
    fieldManager?: string;
    fieldValidation?: string;
    pretty?: string;
  };
  body: IoK8sApiAuthenticationV1beta1SelfSubjectReview;
}

export default {};
