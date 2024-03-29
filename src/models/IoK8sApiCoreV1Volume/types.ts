import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModelOptions as IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from '../IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import { IoK8sApiCoreV1AzureDiskVolumeSourceModelOptions as IoK8sApiCoreV1AzureDiskVolumeSource } from '../IoK8sApiCoreV1AzureDiskVolumeSource';
import { IoK8sApiCoreV1AzureFileVolumeSourceModelOptions as IoK8sApiCoreV1AzureFileVolumeSource } from '../IoK8sApiCoreV1AzureFileVolumeSource';
import { IoK8sApiCoreV1CSIVolumeSourceModelOptions as IoK8sApiCoreV1CSIVolumeSource } from '../IoK8sApiCoreV1CSIVolumeSource';
import { IoK8sApiCoreV1CephFSVolumeSourceModelOptions as IoK8sApiCoreV1CephFSVolumeSource } from '../IoK8sApiCoreV1CephFSVolumeSource';
import { IoK8sApiCoreV1CinderVolumeSourceModelOptions as IoK8sApiCoreV1CinderVolumeSource } from '../IoK8sApiCoreV1CinderVolumeSource';
import { IoK8sApiCoreV1ConfigMapVolumeSourceModelOptions as IoK8sApiCoreV1ConfigMapVolumeSource } from '../IoK8sApiCoreV1ConfigMapVolumeSource';
import { IoK8sApiCoreV1DownwardAPIVolumeSourceModelOptions as IoK8sApiCoreV1DownwardAPIVolumeSource } from '../IoK8sApiCoreV1DownwardAPIVolumeSource';
import { IoK8sApiCoreV1EmptyDirVolumeSourceModelOptions as IoK8sApiCoreV1EmptyDirVolumeSource } from '../IoK8sApiCoreV1EmptyDirVolumeSource';
import { IoK8sApiCoreV1EphemeralVolumeSourceModelOptions as IoK8sApiCoreV1EphemeralVolumeSource } from '../IoK8sApiCoreV1EphemeralVolumeSource';
import { IoK8sApiCoreV1FCVolumeSourceModelOptions as IoK8sApiCoreV1FCVolumeSource } from '../IoK8sApiCoreV1FCVolumeSource';
import { IoK8sApiCoreV1FlexVolumeSourceModelOptions as IoK8sApiCoreV1FlexVolumeSource } from '../IoK8sApiCoreV1FlexVolumeSource';
import { IoK8sApiCoreV1FlockerVolumeSourceModelOptions as IoK8sApiCoreV1FlockerVolumeSource } from '../IoK8sApiCoreV1FlockerVolumeSource';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModelOptions as IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from '../IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import { IoK8sApiCoreV1GitRepoVolumeSourceModelOptions as IoK8sApiCoreV1GitRepoVolumeSource } from '../IoK8sApiCoreV1GitRepoVolumeSource';
import { IoK8sApiCoreV1GlusterfsVolumeSourceModelOptions as IoK8sApiCoreV1GlusterfsVolumeSource } from '../IoK8sApiCoreV1GlusterfsVolumeSource';
import { IoK8sApiCoreV1HostPathVolumeSourceModelOptions as IoK8sApiCoreV1HostPathVolumeSource } from '../IoK8sApiCoreV1HostPathVolumeSource';
import { IoK8sApiCoreV1ISCSIVolumeSourceModelOptions as IoK8sApiCoreV1ISCSIVolumeSource } from '../IoK8sApiCoreV1ISCSIVolumeSource';
import { IoK8sApiCoreV1NFSVolumeSourceModelOptions as IoK8sApiCoreV1NFSVolumeSource } from '../IoK8sApiCoreV1NFSVolumeSource';
import { IoK8sApiCoreV1PersistentVolumeClaimVolumeSourceModelOptions as IoK8sApiCoreV1PersistentVolumeClaimVolumeSource } from '../IoK8sApiCoreV1PersistentVolumeClaimVolumeSource';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModelOptions as IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from '../IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import { IoK8sApiCoreV1PortworxVolumeSourceModelOptions as IoK8sApiCoreV1PortworxVolumeSource } from '../IoK8sApiCoreV1PortworxVolumeSource';
import { IoK8sApiCoreV1ProjectedVolumeSourceModelOptions as IoK8sApiCoreV1ProjectedVolumeSource } from '../IoK8sApiCoreV1ProjectedVolumeSource';
import { IoK8sApiCoreV1QuobyteVolumeSourceModelOptions as IoK8sApiCoreV1QuobyteVolumeSource } from '../IoK8sApiCoreV1QuobyteVolumeSource';
import { IoK8sApiCoreV1RBDVolumeSourceModelOptions as IoK8sApiCoreV1RBDVolumeSource } from '../IoK8sApiCoreV1RBDVolumeSource';
import { IoK8sApiCoreV1ScaleIOVolumeSourceModelOptions as IoK8sApiCoreV1ScaleIOVolumeSource } from '../IoK8sApiCoreV1ScaleIOVolumeSource';
import { IoK8sApiCoreV1SecretVolumeSourceModelOptions as IoK8sApiCoreV1SecretVolumeSource } from '../IoK8sApiCoreV1SecretVolumeSource';
import { IoK8sApiCoreV1StorageOSVolumeSourceModelOptions as IoK8sApiCoreV1StorageOSVolumeSource } from '../IoK8sApiCoreV1StorageOSVolumeSource';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModelOptions as IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from '../IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';

export interface IoK8sApiCoreV1VolumeModelOptions {
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  azureFile?: IoK8sApiCoreV1AzureFileVolumeSource;
  cephfs?: IoK8sApiCoreV1CephFSVolumeSource;
  cinder?: IoK8sApiCoreV1CinderVolumeSource;
  configMap?: IoK8sApiCoreV1ConfigMapVolumeSource;
  csi?: IoK8sApiCoreV1CSIVolumeSource;
  downwardAPI?: IoK8sApiCoreV1DownwardAPIVolumeSource;
  emptyDir?: IoK8sApiCoreV1EmptyDirVolumeSource;
  ephemeral?: IoK8sApiCoreV1EphemeralVolumeSource;
  fc?: IoK8sApiCoreV1FCVolumeSource;
  flexVolume?: IoK8sApiCoreV1FlexVolumeSource;
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  gitRepo?: IoK8sApiCoreV1GitRepoVolumeSource;
  glusterfs?: IoK8sApiCoreV1GlusterfsVolumeSource;
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  iscsi?: IoK8sApiCoreV1ISCSIVolumeSource;
  name: string;
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  persistentVolumeClaim?: IoK8sApiCoreV1PersistentVolumeClaimVolumeSource;
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  projected?: IoK8sApiCoreV1ProjectedVolumeSource;
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  rbd?: IoK8sApiCoreV1RBDVolumeSource;
  scaleIO?: IoK8sApiCoreV1ScaleIOVolumeSource;
  secret?: IoK8sApiCoreV1SecretVolumeSource;
  storageos?: IoK8sApiCoreV1StorageOSVolumeSource;
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;
}
