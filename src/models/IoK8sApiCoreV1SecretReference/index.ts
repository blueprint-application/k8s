import { BaseModel } from '../types';
import type { IoK8sApiCoreV1SecretReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1SecretReferenceModel extends BaseModel {
  // name is unique within a namespace to reference a secret resource.
  name?: string;
  // namespace defines the space within which the secret name must be unique.
  namespace?: string;

  constructor(data: IoK8sApiCoreV1SecretReferenceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(data: IoK8sApiCoreV1SecretReferenceModelOptions): IoK8sApiCoreV1SecretReferenceModel {
    return new IoK8sApiCoreV1SecretReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1SecretReferenceModel;
