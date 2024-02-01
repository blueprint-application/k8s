import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';

export interface IoK8sApiCoreV1StorageOSPersistentVolumeSourceModelOptions {
  fsType?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1ObjectReference;
  volumeName?: string;
  volumeNamespace?: string;
}
