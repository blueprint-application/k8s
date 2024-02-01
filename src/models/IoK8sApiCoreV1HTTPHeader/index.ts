import { BaseModel } from '../types';
import type { IoK8sApiCoreV1HTTPHeaderModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1HTTPHeaderModel extends BaseModel {
  // The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  name: string;
  // The header field value
  value: string;

  constructor(data: IoK8sApiCoreV1HTTPHeaderModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: IoK8sApiCoreV1HTTPHeaderModelOptions): IoK8sApiCoreV1HTTPHeaderModel {
    return new IoK8sApiCoreV1HTTPHeaderModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1HTTPHeaderModel;
