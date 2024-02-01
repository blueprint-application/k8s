import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1TokenReviewSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1TokenReviewSpecModel extends BaseModel {
  // Audiences is a list of the identifiers that the resource server presented with the token identifies as. Audience-aware token authenticators will verify that the token was intended for at least one of the audiences in this list. If no audiences are provided, the audience will default to the audience of the Kubernetes apiserver.
  audiences?: Array<string>;
  // Token is the opaque bearer token.
  token?: string;

  constructor(data: IoK8sApiAuthenticationV1TokenReviewSpecModelOptions) {
    super();
    validate(data);
    this.audiences = data.audiences;
    this.token = data.token;
  }

  static create(
    data: IoK8sApiAuthenticationV1TokenReviewSpecModelOptions,
  ): IoK8sApiAuthenticationV1TokenReviewSpecModel {
    return new IoK8sApiAuthenticationV1TokenReviewSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      audiences: this.audiences,
      token: this.token,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1TokenReviewSpecModel;
