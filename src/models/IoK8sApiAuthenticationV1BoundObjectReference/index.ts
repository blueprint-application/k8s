import { BaseModel } from '../types';
import type { IoK8sApiAuthenticationV1BoundObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthenticationV1BoundObjectReferenceModel extends BaseModel {
  // API version of the referent.
  apiVersion?: string;
  // Kind of the referent. Valid kinds are \'Pod\' and \'Secret\'.
  kind?: string;
  // Name of the referent.
  name?: string;
  // UID of the referent.
  uid?: string;

  constructor(data: IoK8sApiAuthenticationV1BoundObjectReferenceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.name = data.name;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApiAuthenticationV1BoundObjectReferenceModelOptions,
  ): IoK8sApiAuthenticationV1BoundObjectReferenceModel {
    return new IoK8sApiAuthenticationV1BoundObjectReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      name: this.name,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthenticationV1BoundObjectReferenceModel;
