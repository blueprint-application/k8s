import { IoK8sApiCoreV1ObjectFieldSelectorModelOptions as IoK8sApiCoreV1ObjectFieldSelector } from '../IoK8sApiCoreV1ObjectFieldSelector';
import { IoK8sApiCoreV1ResourceFieldSelectorModelOptions as IoK8sApiCoreV1ResourceFieldSelector } from '../IoK8sApiCoreV1ResourceFieldSelector';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1DownwardAPIVolumeFileModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1DownwardAPIVolumeFileModel extends BaseModel {
  fieldRef?: IoK8sApiCoreV1ObjectFieldSelector;
  // Optional: mode bits used to set permissions on this file, must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  mode?: number;
  // Required: Path is  the relative path name of the file to be created. Must not be absolute or contain the \'..\' path. Must be utf-8 encoded. The first item of the relative path must not start with \'..\'
  path: string;
  resourceFieldRef?: IoK8sApiCoreV1ResourceFieldSelector;

  constructor(data: IoK8sApiCoreV1DownwardAPIVolumeFileModelOptions) {
    super();
    validate(data);
    this.fieldRef = data.fieldRef;
    this.mode = data.mode;
    this.path = data.path;
    this.resourceFieldRef = data.resourceFieldRef;
  }

  static create(data: IoK8sApiCoreV1DownwardAPIVolumeFileModelOptions): IoK8sApiCoreV1DownwardAPIVolumeFileModel {
    return new IoK8sApiCoreV1DownwardAPIVolumeFileModel(data);
  }

  toObject(): Partial<this> {
    return {
      fieldRef: this.fieldRef,
      mode: this.mode,
      path: this.path,
      resourceFieldRef: this.resourceFieldRef,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1DownwardAPIVolumeFileModel;
