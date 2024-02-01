import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1CephFSPersistentVolumeSourceModelOptions {
  monitors: Array<string>;
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: IoK8sApiCoreV1SecretReference;
  user?: string;
}
