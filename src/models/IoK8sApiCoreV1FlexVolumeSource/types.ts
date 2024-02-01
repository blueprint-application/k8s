import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1FlexVolumeSourceModelOptions {
  driver: string;
  fsType?: string;
  options?: { [key: string]: string };
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
}
