import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ModifyVolumeStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ModifyVolumeStatusModel extends BaseModel {
  // status is the status of the ControllerModifyVolume operation. It can be in any of following states:  - Pending    Pending indicates that the PersistentVolumeClaim cannot be modified due to unmet requirements, such as    the specified VolumeAttributesClass not existing.  - InProgress    InProgress indicates that the volume is being modified.  - Infeasible   Infeasible indicates that the request has been rejected as invalid by the CSI driver. To    resolve the error, a valid VolumeAttributesClass needs to be specified. Note: New statuses can be added in the future. Consumers should check for unknown statuses and fail appropriately.
  status: string;
  // targetVolumeAttributesClassName is the name of the VolumeAttributesClass the PVC currently being reconciled
  targetVolumeAttributesClassName?: string;

  constructor(data: IoK8sApiCoreV1ModifyVolumeStatusModelOptions) {
    super();
    validate(data);
    this.status = data.status;
    this.targetVolumeAttributesClassName = data.targetVolumeAttributesClassName;
  }

  static create(data: IoK8sApiCoreV1ModifyVolumeStatusModelOptions): IoK8sApiCoreV1ModifyVolumeStatusModel {
    return new IoK8sApiCoreV1ModifyVolumeStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      status: this.status,
      targetVolumeAttributesClassName: this.targetVolumeAttributesClassName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ModifyVolumeStatusModel;
