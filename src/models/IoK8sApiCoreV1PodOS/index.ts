import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodOSModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodOSModel extends BaseModel {
  // Name is the name of the operating system. The currently supported values are linux and windows. Additional value may be defined in future and can be one of: https://github.com/opencontainers/runtime-spec/blob/master/config.md#platform-specific-configuration Clients should expect to handle additional values and treat unrecognized values in this field as os: null
  name: string;

  constructor(data: IoK8sApiCoreV1PodOSModelOptions) {
    super();
    validate(data);
    this.name = data.name;
  }

  static create(data: IoK8sApiCoreV1PodOSModelOptions): IoK8sApiCoreV1PodOSModel {
    return new IoK8sApiCoreV1PodOSModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodOSModel;
