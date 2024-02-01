import { BaseModel } from '../types';
import type { IoK8sApiCoreV1HostPathVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1HostPathVolumeSourceModel extends BaseModel {
  // path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  path: string;
  // type for HostPath Volume Defaults to \"\" More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  type?: string;

  constructor(data: IoK8sApiCoreV1HostPathVolumeSourceModelOptions) {
    super();
    validate(data);
    this.path = data.path;
    this.type = data.type;
  }

  static create(data: IoK8sApiCoreV1HostPathVolumeSourceModelOptions): IoK8sApiCoreV1HostPathVolumeSourceModel {
    return new IoK8sApiCoreV1HostPathVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      path: this.path,
      type: this.type,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1HostPathVolumeSourceModel;
