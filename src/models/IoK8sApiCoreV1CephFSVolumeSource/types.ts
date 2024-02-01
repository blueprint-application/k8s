import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1CephFSVolumeSourceModelOptions {
  monitors: Array<string>;
  path?: string;
  readOnly?: boolean;
  secretFile?: string;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  user?: string;
}
