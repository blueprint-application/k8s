import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NFSVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NFSVolumeSourceModel extends BaseModel {
  // path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  path: string;
  // readOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  readOnly?: boolean;
  // server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  server: string;

  constructor(data: IoK8sApiCoreV1NFSVolumeSourceModelOptions) {
    super();
    validate(data);
    this.path = data.path;
    this.readOnly = data.readOnly;
    this.server = data.server;
  }

  static create(data: IoK8sApiCoreV1NFSVolumeSourceModelOptions): IoK8sApiCoreV1NFSVolumeSourceModel {
    return new IoK8sApiCoreV1NFSVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      path: this.path,
      readOnly: this.readOnly,
      server: this.server,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NFSVolumeSourceModel;
