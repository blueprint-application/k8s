import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ConfigMapEnvSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ConfigMapEnvSourceModel extends BaseModel {
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;
  // Specify whether the ConfigMap must be defined
  optional?: boolean;

  constructor(data: IoK8sApiCoreV1ConfigMapEnvSourceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.optional = data.optional;
  }

  static create(data: IoK8sApiCoreV1ConfigMapEnvSourceModelOptions): IoK8sApiCoreV1ConfigMapEnvSourceModel {
    return new IoK8sApiCoreV1ConfigMapEnvSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      optional: this.optional,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ConfigMapEnvSourceModel;
