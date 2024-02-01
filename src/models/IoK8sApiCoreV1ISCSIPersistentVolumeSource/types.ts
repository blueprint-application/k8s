import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';

export interface IoK8sApiCoreV1ISCSIPersistentVolumeSourceModelOptions {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: Array<string>;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  targetPortal: string;
}
