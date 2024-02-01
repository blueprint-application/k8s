import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1RBDPersistentVolumeSourceModelOptions {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: Array<string>;
  pool?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  user?: string;
}
