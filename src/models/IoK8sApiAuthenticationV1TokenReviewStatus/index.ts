import { IoK8sApiAuthenticationV1UserInfoModelOptions as IoK8sApiAuthenticationV1UserInfo } from '../IoK8sApiAuthenticationV1UserInfo';
import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1TokenReviewStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1TokenReviewStatusModel extends BaseModel {
  // Audiences are audience identifiers chosen by the authenticator that are compatible with both the TokenReview and token. An identifier is any identifier in the intersection of the TokenReviewSpec audiences and the token\'s audiences. A client of the TokenReview API that sets the spec.audiences field should validate that a compatible audience identifier is returned in the status.audiences field to ensure that the TokenReview server is audience aware. If a TokenReview returns an empty status.audience field where status.authenticated is \"true\", the token is valid against the audience of the Kubernetes API server.
  audiences?: Array<string>;
  // Authenticated indicates that the token was associated with a known user.
  authenticated?: boolean;
  // Error indicates that the token couldn\'t be checked
  error?: string;
  user?: IoK8sApiAuthenticationV1UserInfo;

  constructor(data: IoK8sApiAuthenticationV1TokenReviewStatusModelOptions) {
    super();
    validate(data);
    this.audiences = data.audiences;
    this.authenticated = data.authenticated;
    this.error = data.error;
    this.user = data.user;
  }

  static create(
    data: IoK8sApiAuthenticationV1TokenReviewStatusModelOptions,
  ): IoK8sApiAuthenticationV1TokenReviewStatusModel {
    return new IoK8sApiAuthenticationV1TokenReviewStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      audiences: this.audiences,
      authenticated: this.authenticated,
      error: this.error,
      user: this.user,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1TokenReviewStatusModel;
