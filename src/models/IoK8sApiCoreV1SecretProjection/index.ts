import { IoK8sApiCoreV1KeyToPathModelOptions as IoK8sApiCoreV1KeyToPath } from '../IoK8sApiCoreV1KeyToPath';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SecretProjectionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SecretProjectionModel extends BaseModel {
  // items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \'..\' path or start with \'..\'.
  items?: Array<IoK8sApiCoreV1KeyToPath>;
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;
  // optional field specify whether the Secret or its key must be defined
  optional?: boolean;

  constructor(data: IoK8sApiCoreV1SecretProjectionModelOptions) {
    super();
    validate(data);
    this.items = data.items;
    this.name = data.name;
    this.optional = data.optional;
  }

  static create(data: IoK8sApiCoreV1SecretProjectionModelOptions): IoK8sApiCoreV1SecretProjectionModel {
    return new IoK8sApiCoreV1SecretProjectionModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
      name: this.name,
      optional: this.optional,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SecretProjectionModel;
