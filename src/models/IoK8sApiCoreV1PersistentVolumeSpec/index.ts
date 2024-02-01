import { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModelOptions as IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource } from '../IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource';
import { IoK8sApiCoreV1AzureDiskVolumeSourceModelOptions as IoK8sApiCoreV1AzureDiskVolumeSource } from '../IoK8sApiCoreV1AzureDiskVolumeSource';
import { IoK8sApiCoreV1AzureFilePersistentVolumeSourceModelOptions as IoK8sApiCoreV1AzureFilePersistentVolumeSource } from '../IoK8sApiCoreV1AzureFilePersistentVolumeSource';
import { IoK8sApiCoreV1CSIPersistentVolumeSourceModelOptions as IoK8sApiCoreV1CSIPersistentVolumeSource } from '../IoK8sApiCoreV1CSIPersistentVolumeSource';
import { IoK8sApiCoreV1CephFSPersistentVolumeSourceModelOptions as IoK8sApiCoreV1CephFSPersistentVolumeSource } from '../IoK8sApiCoreV1CephFSPersistentVolumeSource';
import { IoK8sApiCoreV1CinderPersistentVolumeSourceModelOptions as IoK8sApiCoreV1CinderPersistentVolumeSource } from '../IoK8sApiCoreV1CinderPersistentVolumeSource';
import { IoK8sApiCoreV1FCVolumeSourceModelOptions as IoK8sApiCoreV1FCVolumeSource } from '../IoK8sApiCoreV1FCVolumeSource';
import { IoK8sApiCoreV1FlexPersistentVolumeSourceModelOptions as IoK8sApiCoreV1FlexPersistentVolumeSource } from '../IoK8sApiCoreV1FlexPersistentVolumeSource';
import { IoK8sApiCoreV1FlockerVolumeSourceModelOptions as IoK8sApiCoreV1FlockerVolumeSource } from '../IoK8sApiCoreV1FlockerVolumeSource';
import { IoK8sApiCoreV1GCEPersistentDiskVolumeSourceModelOptions as IoK8sApiCoreV1GCEPersistentDiskVolumeSource } from '../IoK8sApiCoreV1GCEPersistentDiskVolumeSource';
import { IoK8sApiCoreV1GlusterfsPersistentVolumeSourceModelOptions as IoK8sApiCoreV1GlusterfsPersistentVolumeSource } from '../IoK8sApiCoreV1GlusterfsPersistentVolumeSource';
import { IoK8sApiCoreV1HostPathVolumeSourceModelOptions as IoK8sApiCoreV1HostPathVolumeSource } from '../IoK8sApiCoreV1HostPathVolumeSource';
import { IoK8sApiCoreV1ISCSIPersistentVolumeSourceModelOptions as IoK8sApiCoreV1ISCSIPersistentVolumeSource } from '../IoK8sApiCoreV1ISCSIPersistentVolumeSource';
import { IoK8sApiCoreV1LocalVolumeSourceModelOptions as IoK8sApiCoreV1LocalVolumeSource } from '../IoK8sApiCoreV1LocalVolumeSource';
import { IoK8sApiCoreV1NFSVolumeSourceModelOptions as IoK8sApiCoreV1NFSVolumeSource } from '../IoK8sApiCoreV1NFSVolumeSource';
import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApiCoreV1PhotonPersistentDiskVolumeSourceModelOptions as IoK8sApiCoreV1PhotonPersistentDiskVolumeSource } from '../IoK8sApiCoreV1PhotonPersistentDiskVolumeSource';
import { IoK8sApiCoreV1PortworxVolumeSourceModelOptions as IoK8sApiCoreV1PortworxVolumeSource } from '../IoK8sApiCoreV1PortworxVolumeSource';
import { IoK8sApiCoreV1QuobyteVolumeSourceModelOptions as IoK8sApiCoreV1QuobyteVolumeSource } from '../IoK8sApiCoreV1QuobyteVolumeSource';
import { IoK8sApiCoreV1RBDPersistentVolumeSourceModelOptions as IoK8sApiCoreV1RBDPersistentVolumeSource } from '../IoK8sApiCoreV1RBDPersistentVolumeSource';
import { IoK8sApiCoreV1ScaleIOPersistentVolumeSourceModelOptions as IoK8sApiCoreV1ScaleIOPersistentVolumeSource } from '../IoK8sApiCoreV1ScaleIOPersistentVolumeSource';
import { IoK8sApiCoreV1StorageOSPersistentVolumeSourceModelOptions as IoK8sApiCoreV1StorageOSPersistentVolumeSource } from '../IoK8sApiCoreV1StorageOSPersistentVolumeSource';
import { IoK8sApiCoreV1VolumeNodeAffinityModelOptions as IoK8sApiCoreV1VolumeNodeAffinity } from '../IoK8sApiCoreV1VolumeNodeAffinity';
import { IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModelOptions as IoK8sApiCoreV1VsphereVirtualDiskVolumeSource } from '../IoK8sApiCoreV1VsphereVirtualDiskVolumeSource';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PersistentVolumeSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PersistentVolumeSpecModel extends BaseModel {
  // accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
  accessModes?: Array<string>;
  awsElasticBlockStore?: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource;
  azureDisk?: IoK8sApiCoreV1AzureDiskVolumeSource;
  azureFile?: IoK8sApiCoreV1AzureFilePersistentVolumeSource;
  // capacity is the description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
  capacity?: { [key: string]: string };
  cephfs?: IoK8sApiCoreV1CephFSPersistentVolumeSource;
  cinder?: IoK8sApiCoreV1CinderPersistentVolumeSource;
  claimRef?: IoK8sApiCoreV1ObjectReference;
  csi?: IoK8sApiCoreV1CSIPersistentVolumeSource;
  fc?: IoK8sApiCoreV1FCVolumeSource;
  flexVolume?: IoK8sApiCoreV1FlexPersistentVolumeSource;
  flocker?: IoK8sApiCoreV1FlockerVolumeSource;
  gcePersistentDisk?: IoK8sApiCoreV1GCEPersistentDiskVolumeSource;
  glusterfs?: IoK8sApiCoreV1GlusterfsPersistentVolumeSource;
  hostPath?: IoK8sApiCoreV1HostPathVolumeSource;
  iscsi?: IoK8sApiCoreV1ISCSIPersistentVolumeSource;
  local?: IoK8sApiCoreV1LocalVolumeSource;
  // mountOptions is the list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
  mountOptions?: Array<string>;
  nfs?: IoK8sApiCoreV1NFSVolumeSource;
  nodeAffinity?: IoK8sApiCoreV1VolumeNodeAffinity;
  // persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
  persistentVolumeReclaimPolicy?: string;
  photonPersistentDisk?: IoK8sApiCoreV1PhotonPersistentDiskVolumeSource;
  portworxVolume?: IoK8sApiCoreV1PortworxVolumeSource;
  quobyte?: IoK8sApiCoreV1QuobyteVolumeSource;
  rbd?: IoK8sApiCoreV1RBDPersistentVolumeSource;
  scaleIO?: IoK8sApiCoreV1ScaleIOPersistentVolumeSource;
  // storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
  storageClassName?: string;
  storageos?: IoK8sApiCoreV1StorageOSPersistentVolumeSource;
  // Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature.
  volumeAttributesClassName?: string;
  // volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
  volumeMode?: string;
  vsphereVolume?: IoK8sApiCoreV1VsphereVirtualDiskVolumeSource;

  constructor(data: IoK8sApiCoreV1PersistentVolumeSpecModelOptions) {
    super();
    validate(data);
    this.accessModes = data.accessModes;
    this.awsElasticBlockStore = data.awsElasticBlockStore;
    this.azureDisk = data.azureDisk;
    this.azureFile = data.azureFile;
    this.capacity = data.capacity;
    this.cephfs = data.cephfs;
    this.cinder = data.cinder;
    this.claimRef = data.claimRef;
    this.csi = data.csi;
    this.fc = data.fc;
    this.flexVolume = data.flexVolume;
    this.flocker = data.flocker;
    this.gcePersistentDisk = data.gcePersistentDisk;
    this.glusterfs = data.glusterfs;
    this.hostPath = data.hostPath;
    this.iscsi = data.iscsi;
    this.local = data.local;
    this.mountOptions = data.mountOptions;
    this.nfs = data.nfs;
    this.nodeAffinity = data.nodeAffinity;
    this.persistentVolumeReclaimPolicy = data.persistentVolumeReclaimPolicy;
    this.photonPersistentDisk = data.photonPersistentDisk;
    this.portworxVolume = data.portworxVolume;
    this.quobyte = data.quobyte;
    this.rbd = data.rbd;
    this.scaleIO = data.scaleIO;
    this.storageClassName = data.storageClassName;
    this.storageos = data.storageos;
    this.volumeAttributesClassName = data.volumeAttributesClassName;
    this.volumeMode = data.volumeMode;
    this.vsphereVolume = data.vsphereVolume;
  }

  static create(data: IoK8sApiCoreV1PersistentVolumeSpecModelOptions): IoK8sApiCoreV1PersistentVolumeSpecModel {
    return new IoK8sApiCoreV1PersistentVolumeSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      accessModes: this.accessModes,
      awsElasticBlockStore: this.awsElasticBlockStore,
      azureDisk: this.azureDisk,
      azureFile: this.azureFile,
      capacity: this.capacity,
      cephfs: this.cephfs,
      cinder: this.cinder,
      claimRef: this.claimRef,
      csi: this.csi,
      fc: this.fc,
      flexVolume: this.flexVolume,
      flocker: this.flocker,
      gcePersistentDisk: this.gcePersistentDisk,
      glusterfs: this.glusterfs,
      hostPath: this.hostPath,
      iscsi: this.iscsi,
      local: this.local,
      mountOptions: this.mountOptions,
      nfs: this.nfs,
      nodeAffinity: this.nodeAffinity,
      persistentVolumeReclaimPolicy: this.persistentVolumeReclaimPolicy,
      photonPersistentDisk: this.photonPersistentDisk,
      portworxVolume: this.portworxVolume,
      quobyte: this.quobyte,
      rbd: this.rbd,
      scaleIO: this.scaleIO,
      storageClassName: this.storageClassName,
      storageos: this.storageos,
      volumeAttributesClassName: this.volumeAttributesClassName,
      volumeMode: this.volumeMode,
      vsphereVolume: this.vsphereVolume,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PersistentVolumeSpecModel;
