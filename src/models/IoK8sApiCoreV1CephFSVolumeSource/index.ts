import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1CephFSVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1CephFSVolumeSourceModel extends BaseModel {
  // monitors is Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  monitors: Array<string>;
  // path is Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  path?: string;
  // readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  readOnly?: boolean;
  // secretFile is Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  secretFile?: string;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  // user is optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  user?: string;

  constructor(data: IoK8sApiCoreV1CephFSVolumeSourceModelOptions) {
    super();
    validate(data);
    this.monitors = data.monitors;
    this.path = data.path;
    this.readOnly = data.readOnly;
    this.secretFile = data.secretFile;
    this.secretRef = data.secretRef;
    this.user = data.user;
  }

  static create(data: IoK8sApiCoreV1CephFSVolumeSourceModelOptions): IoK8sApiCoreV1CephFSVolumeSourceModel {
    return new IoK8sApiCoreV1CephFSVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      monitors: this.monitors,
      path: this.path,
      readOnly: this.readOnly,
      secretFile: this.secretFile,
      secretRef: this.secretRef,
      user: this.user,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1CephFSVolumeSourceModel;
