import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodDNSConfigOptionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodDNSConfigOptionModel extends BaseModel {
  // Required.
  name?: string;
  value?: string;

  constructor(data: IoK8sApiCoreV1PodDNSConfigOptionModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.value = data.value;
  }

  static create(data: IoK8sApiCoreV1PodDNSConfigOptionModelOptions): IoK8sApiCoreV1PodDNSConfigOptionModel {
    return new IoK8sApiCoreV1PodDNSConfigOptionModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      value: this.value,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodDNSConfigOptionModel;
