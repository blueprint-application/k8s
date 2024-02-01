import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1CSIPersistentVolumeSourceModelOptions {
  controllerExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  controllerPublishSecretRef?: IoK8sApiCoreV1SecretReference;
  driver: string;
  fsType?: string;
  nodeExpandSecretRef?: IoK8sApiCoreV1SecretReference;
  nodePublishSecretRef?: IoK8sApiCoreV1SecretReference;
  nodeStageSecretRef?: IoK8sApiCoreV1SecretReference;
  readOnly?: boolean;
  volumeAttributes?: { [key: string]: string };
  volumeHandle: string;
}
