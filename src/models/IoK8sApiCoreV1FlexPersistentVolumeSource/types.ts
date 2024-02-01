import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1FlexPersistentVolumeSourceModelOptions {
  driver: string;
  fsType?: string;
  options?: { [key: string]: string };
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
}
