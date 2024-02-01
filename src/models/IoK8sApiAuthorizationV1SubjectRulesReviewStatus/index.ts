import { IoK8sApiAuthorizationV1NonResourceRuleModelOptions as IoK8sApiAuthorizationV1NonResourceRule } from '../IoK8sApiAuthorizationV1NonResourceRule';
import { IoK8sApiAuthorizationV1ResourceRuleModelOptions as IoK8sApiAuthorizationV1ResourceRule } from '../IoK8sApiAuthorizationV1ResourceRule';
import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1SubjectRulesReviewStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1SubjectRulesReviewStatusModel extends BaseModel {
  // EvaluationError can appear in combination with Rules. It indicates an error occurred during rule evaluation, such as an authorizer that doesn\'t support rule evaluation, and that ResourceRules and/or NonResourceRules may be incomplete.
  evaluationError?: string;
  // Incomplete is true when the rules returned by this call are incomplete. This is most commonly encountered when an authorizer, such as an external authorizer, doesn\'t support rules evaluation.
  incomplete: boolean;
  // NonResourceRules is the list of actions the subject is allowed to perform on non-resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
  nonResourceRules: Array<IoK8sApiAuthorizationV1NonResourceRule>;
  // ResourceRules is the list of actions the subject is allowed to perform on resources. The list ordering isn\'t significant, may contain duplicates, and possibly be incomplete.
  resourceRules: Array<IoK8sApiAuthorizationV1ResourceRule>;

  constructor(data: IoK8sApiAuthorizationV1SubjectRulesReviewStatusModelOptions) {
    super();
    validate(data);
    this.evaluationError = data.evaluationError;
    this.incomplete = data.incomplete;
    this.nonResourceRules = data.nonResourceRules;
    this.resourceRules = data.resourceRules;
  }

  static create(
    data: IoK8sApiAuthorizationV1SubjectRulesReviewStatusModelOptions,
  ): IoK8sApiAuthorizationV1SubjectRulesReviewStatusModel {
    return new IoK8sApiAuthorizationV1SubjectRulesReviewStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      evaluationError: this.evaluationError,
      incomplete: this.incomplete,
      nonResourceRules: this.nonResourceRules,
      resourceRules: this.resourceRules,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1SubjectRulesReviewStatusModel;
