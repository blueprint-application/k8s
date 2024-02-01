import { IoK8sApiCoreV1NodeSelectorModelOptions as IoK8sApiCoreV1NodeSelector } from '../IoK8sApiCoreV1NodeSelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1VolumeNodeAffinityModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1VolumeNodeAffinityModel extends BaseModel {
  required?: IoK8sApiCoreV1NodeSelector;

  constructor(data: IoK8sApiCoreV1VolumeNodeAffinityModelOptions) {
    super();
    validate(data);
    this.required = data.required;
  }

  static create(data: IoK8sApiCoreV1VolumeNodeAffinityModelOptions): IoK8sApiCoreV1VolumeNodeAffinityModel {
    return new IoK8sApiCoreV1VolumeNodeAffinityModel(data);
  }

  toObject(): Partial<this> {
    return {
      required: this.required,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1VolumeNodeAffinityModel;
