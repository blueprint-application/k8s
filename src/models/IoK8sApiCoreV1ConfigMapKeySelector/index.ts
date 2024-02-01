import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ConfigMapKeySelectorModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ConfigMapKeySelectorModel extends BaseModel {
  // The key to select.
  key: string;
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;
  // Specify whether the ConfigMap or its key must be defined
  optional?: boolean;

  constructor(data: IoK8sApiCoreV1ConfigMapKeySelectorModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.name = data.name;
    this.optional = data.optional;
  }

  static create(data: IoK8sApiCoreV1ConfigMapKeySelectorModelOptions): IoK8sApiCoreV1ConfigMapKeySelectorModel {
    return new IoK8sApiCoreV1ConfigMapKeySelectorModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      name: this.name,
      optional: this.optional,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ConfigMapKeySelectorModel;
