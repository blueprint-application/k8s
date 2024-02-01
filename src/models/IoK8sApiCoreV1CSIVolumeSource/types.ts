import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1CSIVolumeSourceModelOptions {
  driver: string;
  fsType?: string;
  nodePublishSecretRef?: IoK8sApiCoreV1LocalObjectReference;
  readOnly?: boolean;
  volumeAttributes?: { [key: string]: string };
}
