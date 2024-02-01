import { IoK8sApiCoreV1DownwardAPIVolumeFileModelOptions as IoK8sApiCoreV1DownwardAPIVolumeFile } from '../IoK8sApiCoreV1DownwardAPIVolumeFile';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1DownwardAPIProjectionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1DownwardAPIProjectionModel extends BaseModel {
  // Items is a list of DownwardAPIVolume file
  items?: Array<IoK8sApiCoreV1DownwardAPIVolumeFile>;

  constructor(data: IoK8sApiCoreV1DownwardAPIProjectionModelOptions) {
    super();
    validate(data);
    this.items = data.items;
  }

  static create(data: IoK8sApiCoreV1DownwardAPIProjectionModelOptions): IoK8sApiCoreV1DownwardAPIProjectionModel {
    return new IoK8sApiCoreV1DownwardAPIProjectionModel(data);
  }

  toObject(): Partial<this> {
    return {
      items: this.items,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1DownwardAPIProjectionModel;
