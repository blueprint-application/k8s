import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1ScaleIOVolumeSourceModelOptions {
  fsType?: string;
  gateway: string;
  protectionDomain?: string;
  readOnly?: boolean;
  secretRef: IoK8sApiCoreV1LocalObjectReference;
  sslEnabled?: boolean;
  storageMode?: string;
  storagePool?: string;
  system: string;
  volumeName?: string;
}
