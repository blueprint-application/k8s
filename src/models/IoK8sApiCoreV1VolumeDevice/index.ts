import { BaseModel } from '../types';
import type { IoK8sApiCoreV1VolumeDeviceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1VolumeDeviceModel extends BaseModel {
  // devicePath is the path inside of the container that the device will be mapped to.
  devicePath: string;
  // name must match the name of a persistentVolumeClaim in the pod
  name: string;

  constructor(data: IoK8sApiCoreV1VolumeDeviceModelOptions) {
    super();
    validate(data);
    this.devicePath = data.devicePath;
    this.name = data.name;
  }

  static create(data: IoK8sApiCoreV1VolumeDeviceModelOptions): IoK8sApiCoreV1VolumeDeviceModel {
    return new IoK8sApiCoreV1VolumeDeviceModel(data);
  }

  toObject(): Partial<this> {
    return {
      devicePath: this.devicePath,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1VolumeDeviceModel;
