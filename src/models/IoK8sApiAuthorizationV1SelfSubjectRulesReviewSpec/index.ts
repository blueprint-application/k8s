import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModel extends BaseModel {
  // Namespace to evaluate rules for. Required.
  namespace?: string;

  constructor(data: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModelOptions) {
    super();
    validate(data);
    this.namespace = data.namespace;
  }

  static create(
    data: IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModelOptions,
  ): IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModel {
    return new IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1SelfSubjectRulesReviewSpecModel;
