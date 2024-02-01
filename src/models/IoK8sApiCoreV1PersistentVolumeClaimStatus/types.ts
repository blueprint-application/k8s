import { IoK8sApiCoreV1ModifyVolumeStatusModelOptions as IoK8sApiCoreV1ModifyVolumeStatus } from '../IoK8sApiCoreV1ModifyVolumeStatus';
import { IoK8sApiCoreV1PersistentVolumeClaimConditionModelOptions as IoK8sApiCoreV1PersistentVolumeClaimCondition } from '../IoK8sApiCoreV1PersistentVolumeClaimCondition';

export interface IoK8sApiCoreV1PersistentVolumeClaimStatusModelOptions {
  accessModes?: Array<string>;
  allocatedResourceStatuses?: { [key: string]: string };
  allocatedResources?: { [key: string]: string };
  capacity?: { [key: string]: string };
  conditions?: Array<IoK8sApiCoreV1PersistentVolumeClaimCondition>;
  currentVolumeAttributesClassName?: string;
  modifyVolumeStatus?: IoK8sApiCoreV1ModifyVolumeStatus;
  phase?: string;
}
