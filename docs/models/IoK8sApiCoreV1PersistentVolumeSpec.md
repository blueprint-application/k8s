# IoK8sApiCoreV1PersistentVolumeSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessModes** | **Array&lt;string&gt;** | accessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes | [optional] [default to undefined]
**awsElasticBlockStore** | [**IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource**](IoK8sApiCoreV1AWSElasticBlockStoreVolumeSource.md) |  | [optional] [default to undefined]
**azureDisk** | [**IoK8sApiCoreV1AzureDiskVolumeSource**](IoK8sApiCoreV1AzureDiskVolumeSource.md) |  | [optional] [default to undefined]
**azureFile** | [**IoK8sApiCoreV1AzureFilePersistentVolumeSource**](IoK8sApiCoreV1AzureFilePersistentVolumeSource.md) |  | [optional] [default to undefined]
**capacity** | **{ [key: string]: string; }** | capacity is the description of the persistent volume\&#39;s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity | [optional] [default to undefined]
**cephfs** | [**IoK8sApiCoreV1CephFSPersistentVolumeSource**](IoK8sApiCoreV1CephFSPersistentVolumeSource.md) |  | [optional] [default to undefined]
**cinder** | [**IoK8sApiCoreV1CinderPersistentVolumeSource**](IoK8sApiCoreV1CinderPersistentVolumeSource.md) |  | [optional] [default to undefined]
**claimRef** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | [optional] [default to undefined]
**csi** | [**IoK8sApiCoreV1CSIPersistentVolumeSource**](IoK8sApiCoreV1CSIPersistentVolumeSource.md) |  | [optional] [default to undefined]
**fc** | [**IoK8sApiCoreV1FCVolumeSource**](IoK8sApiCoreV1FCVolumeSource.md) |  | [optional] [default to undefined]
**flexVolume** | [**IoK8sApiCoreV1FlexPersistentVolumeSource**](IoK8sApiCoreV1FlexPersistentVolumeSource.md) |  | [optional] [default to undefined]
**flocker** | [**IoK8sApiCoreV1FlockerVolumeSource**](IoK8sApiCoreV1FlockerVolumeSource.md) |  | [optional] [default to undefined]
**gcePersistentDisk** | [**IoK8sApiCoreV1GCEPersistentDiskVolumeSource**](IoK8sApiCoreV1GCEPersistentDiskVolumeSource.md) |  | [optional] [default to undefined]
**glusterfs** | [**IoK8sApiCoreV1GlusterfsPersistentVolumeSource**](IoK8sApiCoreV1GlusterfsPersistentVolumeSource.md) |  | [optional] [default to undefined]
**hostPath** | [**IoK8sApiCoreV1HostPathVolumeSource**](IoK8sApiCoreV1HostPathVolumeSource.md) |  | [optional] [default to undefined]
**iscsi** | [**IoK8sApiCoreV1ISCSIPersistentVolumeSource**](IoK8sApiCoreV1ISCSIPersistentVolumeSource.md) |  | [optional] [default to undefined]
**local** | [**IoK8sApiCoreV1LocalVolumeSource**](IoK8sApiCoreV1LocalVolumeSource.md) |  | [optional] [default to undefined]
**mountOptions** | **Array&lt;string&gt;** | mountOptions is the list of mount options, e.g. [\&quot;ro\&quot;, \&quot;soft\&quot;]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options | [optional] [default to undefined]
**nfs** | [**IoK8sApiCoreV1NFSVolumeSource**](IoK8sApiCoreV1NFSVolumeSource.md) |  | [optional] [default to undefined]
**nodeAffinity** | [**IoK8sApiCoreV1VolumeNodeAffinity**](IoK8sApiCoreV1VolumeNodeAffinity.md) |  | [optional] [default to undefined]
**persistentVolumeReclaimPolicy** | **string** | persistentVolumeReclaimPolicy defines what happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming | [optional] [default to undefined]
**photonPersistentDisk** | [**IoK8sApiCoreV1PhotonPersistentDiskVolumeSource**](IoK8sApiCoreV1PhotonPersistentDiskVolumeSource.md) |  | [optional] [default to undefined]
**portworxVolume** | [**IoK8sApiCoreV1PortworxVolumeSource**](IoK8sApiCoreV1PortworxVolumeSource.md) |  | [optional] [default to undefined]
**quobyte** | [**IoK8sApiCoreV1QuobyteVolumeSource**](IoK8sApiCoreV1QuobyteVolumeSource.md) |  | [optional] [default to undefined]
**rbd** | [**IoK8sApiCoreV1RBDPersistentVolumeSource**](IoK8sApiCoreV1RBDPersistentVolumeSource.md) |  | [optional] [default to undefined]
**scaleIO** | [**IoK8sApiCoreV1ScaleIOPersistentVolumeSource**](IoK8sApiCoreV1ScaleIOPersistentVolumeSource.md) |  | [optional] [default to undefined]
**storageClassName** | **string** | storageClassName is the name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass. | [optional] [default to undefined]
**storageos** | [**IoK8sApiCoreV1StorageOSPersistentVolumeSource**](IoK8sApiCoreV1StorageOSPersistentVolumeSource.md) |  | [optional] [default to undefined]
**volumeAttributesClassName** | **string** | Name of VolumeAttributesClass to which this persistent volume belongs. Empty value is not allowed. When this field is not set, it indicates that this volume does not belong to any VolumeAttributesClass. This field is mutable and can be changed by the CSI driver after a volume has been updated successfully to a new class. For an unbound PersistentVolume, the volumeAttributesClassName will be matched with unbound PersistentVolumeClaims during the binding process. This is an alpha field and requires enabling VolumeAttributesClass feature. | [optional] [default to undefined]
**volumeMode** | **string** | volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec. | [optional] [default to undefined]
**vsphereVolume** | [**IoK8sApiCoreV1VsphereVirtualDiskVolumeSource**](IoK8sApiCoreV1VsphereVirtualDiskVolumeSource.md) |  | [optional] [default to undefined]


