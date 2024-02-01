import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1RBDVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1RBDVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd
  fsType?: string;
  // image is the rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  image: string;
  // keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  keyring?: string;
  // monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  monitors: Array<string>;
  // pool is the rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  pool?: string;
  // readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  // user is the rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  user?: string;

  constructor(data: IoK8sApiCoreV1RBDVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.image = data.image;
    this.keyring = data.keyring;
    this.monitors = data.monitors;
    this.pool = data.pool;
    this.readOnly = data.readOnly;
    this.secretRef = data.secretRef;
    this.user = data.user;
  }

  static create(data: IoK8sApiCoreV1RBDVolumeSourceModelOptions): IoK8sApiCoreV1RBDVolumeSourceModel {
    return new IoK8sApiCoreV1RBDVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      image: this.image,
      keyring: this.keyring,
      monitors: this.monitors,
      pool: this.pool,
      readOnly: this.readOnly,
      secretRef: this.secretRef,
      user: this.user,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1RBDVolumeSourceModel;
