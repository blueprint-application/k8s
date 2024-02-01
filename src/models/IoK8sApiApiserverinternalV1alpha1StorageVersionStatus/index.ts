import { IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModelOptions as IoK8sApiApiserverinternalV1alpha1ServerStorageVersion } from '../IoK8sApiApiserverinternalV1alpha1ServerStorageVersion';
import { IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModelOptions as IoK8sApiApiserverinternalV1alpha1StorageVersionCondition } from '../IoK8sApiApiserverinternalV1alpha1StorageVersionCondition';
import { BaseModel } from '../types';
import type { IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModel extends BaseModel {
  // If all API server instances agree on the same encoding storage version, then this field is set to that version. Otherwise this field is left empty. API servers should finish updating its storageVersionStatus entry before serving write operations, so that this field will be in sync with the reality.
  commonEncodingVersion?: string;
  // The latest available observations of the storageVersion\'s state.
  conditions?: Array<IoK8sApiApiserverinternalV1alpha1StorageVersionCondition>;
  // The reported versions per API server instance.
  storageVersions?: Array<IoK8sApiApiserverinternalV1alpha1ServerStorageVersion>;

  constructor(data: IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModelOptions) {
    super();
    validate(data);
    this.commonEncodingVersion = data.commonEncodingVersion;
    this.conditions = data.conditions;
    this.storageVersions = data.storageVersions;
  }

  static create(
    data: IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModelOptions,
  ): IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModel {
    return new IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      commonEncodingVersion: this.commonEncodingVersion,
      conditions: this.conditions,
      storageVersions: this.storageVersions,
    } as Partial<this>;
  }
}

export default IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModel;
