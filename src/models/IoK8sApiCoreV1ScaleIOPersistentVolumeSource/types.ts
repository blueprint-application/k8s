import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1ScaleIOPersistentVolumeSourceModelOptions {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: IoK8sApiCoreV1SecretReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
