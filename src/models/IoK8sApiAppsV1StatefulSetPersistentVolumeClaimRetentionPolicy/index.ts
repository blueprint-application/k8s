import { BaseModel } from '../types';
import type { IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModel extends BaseModel {
  // WhenDeleted specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is deleted. The default policy of `Retain` causes PVCs to not be affected by StatefulSet deletion. The `Delete` policy causes those PVCs to be deleted.
  whenDeleted?: string;
  // WhenScaled specifies what happens to PVCs created from StatefulSet VolumeClaimTemplates when the StatefulSet is scaled down. The default policy of `Retain` causes PVCs to not be affected by a scaledown. The `Delete` policy causes the associated PVCs for any excess pods above the replica count to be deleted.
  whenScaled?: string;

  constructor(data: IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModelOptions) {
    super();
    validate(data);
    this.whenDeleted = data.whenDeleted;
    this.whenScaled = data.whenScaled;
  }

  static create(
    data: IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModelOptions,
  ): IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModel {
    return new IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      whenDeleted: this.whenDeleted,
      whenScaled: this.whenScaled,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicyModel;
