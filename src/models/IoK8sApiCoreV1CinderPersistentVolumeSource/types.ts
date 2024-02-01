import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1CinderPersistentVolumeSourceModelOptions {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  volumeID: string;
}
