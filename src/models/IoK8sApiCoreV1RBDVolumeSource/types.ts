import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1RBDVolumeSourceModelOptions {
  fsType?: string;
  image: string;
  keyring?: string;
  monitors: Array<string>;
  pool?: string;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  user?: string;
}
