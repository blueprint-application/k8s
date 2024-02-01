import { IoK8sApiAuthenticationV1BoundObjectReferenceModelOptions as IoK8sApiAuthenticationV1BoundObjectReference } from '../IoK8sApiAuthenticationV1BoundObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1TokenRequestSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1TokenRequestSpecModel extends BaseModel {
  // Audiences are the intendend audiences of the token. A recipient of a token must identify themself with an identifier in the list of audiences of the token, and otherwise should reject the token. A token issued for multiple audiences may be used to authenticate against any of the audiences listed but implies a high degree of trust between the target audiences.
  audiences: Array<string>;
  boundObjectRef?: IoK8sApiAuthenticationV1BoundObjectReference;
  // ExpirationSeconds is the requested duration of validity of the request. The token issuer may return a token with a different validity duration so a client needs to check the \'expiration\' field in a response.
  expirationSeconds?: number;

  constructor(data: IoK8sApiAuthenticationV1TokenRequestSpecModelOptions) {
    super();
    validate(data);
    this.audiences = data.audiences;
    this.boundObjectRef = data.boundObjectRef;
    this.expirationSeconds = data.expirationSeconds;
  }

  static create(
    data: IoK8sApiAuthenticationV1TokenRequestSpecModelOptions,
  ): IoK8sApiAuthenticationV1TokenRequestSpecModel {
    return new IoK8sApiAuthenticationV1TokenRequestSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      audiences: this.audiences,
      boundObjectRef: this.boundObjectRef,
      expirationSeconds: this.expirationSeconds,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1TokenRequestSpecModel;
