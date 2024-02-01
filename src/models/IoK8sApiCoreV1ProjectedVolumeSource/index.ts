import { IoK8sApiCoreV1VolumeProjectionModelOptions as IoK8sApiCoreV1VolumeProjection } from '../IoK8sApiCoreV1VolumeProjection';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ProjectedVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ProjectedVolumeSourceModel extends BaseModel {
  // defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  defaultMode?: number;
  // sources is the list of volume projections
  sources?: Array<IoK8sApiCoreV1VolumeProjection>;

  constructor(data: IoK8sApiCoreV1ProjectedVolumeSourceModelOptions) {
    super();
    validate(data);
    this.defaultMode = data.defaultMode;
    this.sources = data.sources;
  }

  static create(data: IoK8sApiCoreV1ProjectedVolumeSourceModelOptions): IoK8sApiCoreV1ProjectedVolumeSourceModel {
    return new IoK8sApiCoreV1ProjectedVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      defaultMode: this.defaultMode,
      sources: this.sources,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ProjectedVolumeSourceModel;
