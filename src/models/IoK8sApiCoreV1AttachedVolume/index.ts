import { BaseModel } from '../types';
import type { IoK8sApiCoreV1AttachedVolumeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1AttachedVolumeModel extends BaseModel {
  // DevicePath represents the device path where the volume should be available
  devicePath: string;
  // Name of the attached volume
  name: string;

  constructor(data: IoK8sApiCoreV1AttachedVolumeModelOptions) {
    super();
    validate(data);
    this.devicePath = data.devicePath;
    this.name = data.name;
  }

  static create(data: IoK8sApiCoreV1AttachedVolumeModelOptions): IoK8sApiCoreV1AttachedVolumeModel {
    return new IoK8sApiCoreV1AttachedVolumeModel(data);
  }

  toObject(): Partial<this> {
    return {
      devicePath: this.devicePath,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1AttachedVolumeModel;
