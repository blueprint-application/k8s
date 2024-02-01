import { BaseModel } from '../types';
import type { IoK8sApiStorageV1TokenRequestModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1TokenRequestModel extends BaseModel {
  // audience is the intended audience of the token in \"TokenRequestSpec\". It will default to the audiences of kube apiserver.
  audience: string;
  // expirationSeconds is the duration of validity of the token in \"TokenRequestSpec\". It has the same default value of \"ExpirationSeconds\" in \"TokenRequestSpec\".
  expirationSeconds?: number;

  constructor(data: IoK8sApiStorageV1TokenRequestModelOptions) {
    super();
    validate(data);
    this.audience = data.audience;
    this.expirationSeconds = data.expirationSeconds;
  }

  static create(data: IoK8sApiStorageV1TokenRequestModelOptions): IoK8sApiStorageV1TokenRequestModel {
    return new IoK8sApiStorageV1TokenRequestModel(data);
  }

  toObject(): Partial<this> {
    return {
      audience: this.audience,
      expirationSeconds: this.expirationSeconds,
    } as Partial<this>;
  }
}

export default IoK8sApiStorageV1TokenRequestModel;
