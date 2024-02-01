import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1TokenRequestStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1TokenRequestStatusModel extends BaseModel {
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  expirationTimestamp: Date;
  // Token is the opaque bearer token.
  token: string;

  constructor(data: IoK8sApiAuthenticationV1TokenRequestStatusModelOptions) {
    super();
    validate(data);
    this.expirationTimestamp = data.expirationTimestamp;
    this.token = data.token;
  }

  static create(
    data: IoK8sApiAuthenticationV1TokenRequestStatusModelOptions,
  ): IoK8sApiAuthenticationV1TokenRequestStatusModel {
    return new IoK8sApiAuthenticationV1TokenRequestStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      expirationTimestamp: this.expirationTimestamp,
      token: this.token,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1TokenRequestStatusModel;
