import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SecretEnvSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SecretEnvSourceModel extends BaseModel {
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;
  // Specify whether the Secret must be defined
  optional?: boolean;

  constructor(data: IoK8sApiCoreV1SecretEnvSourceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.optional = data.optional;
  }

  static create(data: IoK8sApiCoreV1SecretEnvSourceModelOptions): IoK8sApiCoreV1SecretEnvSourceModel {
    return new IoK8sApiCoreV1SecretEnvSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      optional: this.optional,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SecretEnvSourceModel;
