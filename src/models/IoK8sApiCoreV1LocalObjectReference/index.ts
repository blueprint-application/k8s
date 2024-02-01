import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LocalObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LocalObjectReferenceModel extends BaseModel {
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  name?: string;

  constructor(data: IoK8sApiCoreV1LocalObjectReferenceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiCoreV1LocalObjectReferenceModelOptions): IoK8sApiCoreV1LocalObjectReferenceModel {
    return new IoK8sApiCoreV1LocalObjectReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LocalObjectReferenceModel;
