import { IoK8sApiCoreV1DownwardAPIVolumeFileModelOptions as IoK8sApiCoreV1DownwardAPIVolumeFile } from '../IoK8sApiCoreV1DownwardAPIVolumeFile';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1DownwardAPIVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1DownwardAPIVolumeSourceModel extends BaseModel {
  // Optional: mode bits to use on created files by default. Must be a Optional: mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  defaultMode?: number;
  // Items is a list of downward API volume file
  items?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;

  constructor(data: IoK8sApiCoreV1DownwardAPIVolumeSourceModelOptions) {
    super();
    validate(data);
    this.defaultMode = data.defaultMode;
    this.items = data.items;
  }

  static create(data: IoK8sApiCoreV1DownwardAPIVolumeSourceModelOptions): IoK8sApiCoreV1DownwardAPIVolumeSourceModel {
    return new IoK8sApiCoreV1DownwardAPIVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      defaultMode: this.defaultMode,
      items: this.items,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1DownwardAPIVolumeSourceModel;
