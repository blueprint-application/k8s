import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1SubjectAccessReviewStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1SubjectAccessReviewStatusModel extends BaseModel {
  // Allowed is required. True if the action would be allowed, false otherwise.
  allowed: boolean;
  // Denied is optional. True if the action would be denied, otherwise false. If both allowed is false and denied is false, then the authorizer has no opinion on whether to authorize the action. Denied may not be true if Allowed is true.
  denied?: boolean;
  // EvaluationError is an indication that some error occurred during the authorization check. It is entirely possible to get an error and be able to continue determine authorization status in spite of it. For instance, RBAC can be missing a role, but enough roles are still present and bound to reason about the request.
  evaluationError?: string;
  // Reason is optional.  It indicates why a request was allowed or denied.
  reason?: string;

  constructor(data: IoK8sApiAuthorizationV1SubjectAccessReviewStatusModelOptions) {
    super();
    validate(data);
    this.allowed = data.allowed;
    this.denied = data.denied;
    this.evaluationError = data.evaluationError;
    this.reason = data.reason;
  }

  static create(
    data: IoK8sApiAuthorizationV1SubjectAccessReviewStatusModelOptions,
  ): IoK8sApiAuthorizationV1SubjectAccessReviewStatusModel {
    return new IoK8sApiAuthorizationV1SubjectAccessReviewStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      allowed: this.allowed,
      denied: this.denied,
      evaluationError: this.evaluationError,
      reason: this.reason,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1SubjectAccessReviewStatusModel;
