# IoK8sApiCoreV1FlexVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | **string** | driver is the name of the driver to use for this volume. | [default to undefined]
**fsType** | **string** | fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. The default filesystem depends on FlexVolume script. | [optional] [default to undefined]
**options** | **{ [key: string]: string; }** | options is Optional: this field holds extra command options if any. | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly is Optional: defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] [default to undefined]
**secretRef** | [**IoK8sApiCoreV1LocalObjectReference**](IoK8sApiCoreV1LocalObjectReference.md) |  | [optional] [default to undefined]


