import { IoK8sApiCoreV1LocalObjectReferenceModelOptions as IoK8sApiCoreV1LocalObjectReference } from '../IoK8sApiCoreV1LocalObjectReference';

export interface IoK8sApiCoreV1ISCSIVolumeSourceModelOptions {
  chapAuthDiscovery?: boolean;
  chapAuthSession?: boolean;
  fsType?: string;
  initiatorName?: string;
  iqn: string;
  iscsiInterface?: string;
  lun: number;
  portals?: Array<string>;
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1LocalObjectReference;
  targetPortal: string;
}
