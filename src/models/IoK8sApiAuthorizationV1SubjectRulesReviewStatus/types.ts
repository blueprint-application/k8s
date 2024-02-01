import { IoK8sApiAuthorizationV1NonResourceRuleModelOptions as IoK8sApiAuthorizationV1NonResourceRule } from '../IoK8sApiAuthorizationV1NonResourceRule';
import { IoK8sApiAuthorizationV1ResourceRuleModelOptions as IoK8sApiAuthorizationV1ResourceRule } from '../IoK8sApiAuthorizationV1ResourceRule';

export interface IoK8sApiAuthorizationV1SubjectRulesReviewStatusModelOptions {
  evaluationError?: string;
  incomplete: boolean;
  nonResourceRules: Array<IoK8sApiAuthorizationV1NonResourceRule>;
  resourceRules: Array<IoK8sApiAuthorizationV1ResourceRule>;
}
