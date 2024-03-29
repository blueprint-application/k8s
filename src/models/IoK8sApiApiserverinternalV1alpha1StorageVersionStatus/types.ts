import { IoK8sApiApiserverinternalV1alpha1ServerStorageVersionModelOptions as IoK8sApiApiserverinternalV1alpha1ServerStorageVersion } from '../IoK8sApiApiserverinternalV1alpha1ServerStorageVersion';
import { IoK8sApiApiserverinternalV1alpha1StorageVersionConditionModelOptions as IoK8sApiApiserverinternalV1alpha1StorageVersionCondition } from '../IoK8sApiApiserverinternalV1alpha1StorageVersionCondition';

export interface IoK8sApiApiserverinternalV1alpha1StorageVersionStatusModelOptions {
  commonEncodingVersion?: string;
  conditions?: Array<IoK8sApiApiserverinternalV1alpha1StorageVersionCondition>;
  storageVersions?: Array<IoK8sApiApiserverinternalV1alpha1ServerStorageVersion>;
}
