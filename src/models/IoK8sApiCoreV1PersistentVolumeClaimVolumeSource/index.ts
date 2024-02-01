import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModel extends BaseModel {
  // claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  claimName: string;
  // readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  readOnly?: boolean;

  constructor(data: IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModelOptions) {
    super();
    validate(data);
    this.claimName = data.claimName;
    this.readOnly = data.readOnly;
  }

  static create(
    data: IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModelOptions,
  ): IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModel {
    return new IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      claimName: this.claimName,
      readOnly: this.readOnly,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModel;
