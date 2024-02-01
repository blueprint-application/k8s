# IoK8sApiCoreV1ScaleIOVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **string** | fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Default is \&quot;xfs\&quot;. | [optional] [default to undefined]
**gateway** | **string** | gateway is the host address of the ScaleIO API Gateway. | [default to undefined]
**protectionDomain** | **string** | protectionDomain is the name of the ScaleIO Protection Domain for the configured storage. | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] [default to undefined]
**secretRef** | [**IoK8sApiCoreV1LocalObjectReference**](IoK8sApiCoreV1LocalObjectReference.md) |  | [default to undefined]
**sslEnabled** | **boolean** | sslEnabled Flag enable/disable SSL communication with Gateway, default false | [optional] [default to undefined]
**storageMode** | **string** | storageMode indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned. | [optional] [default to undefined]
**storagePool** | **string** | storagePool is the ScaleIO Storage Pool associated with the protection domain. | [optional] [default to undefined]
**system** | **string** | system is the name of the storage system as configured in ScaleIO. | [default to undefined]
**volumeName** | **string** | volumeName is the name of a volume already created in the ScaleIO system that is associated with this volume source. | [optional] [default to undefined]


