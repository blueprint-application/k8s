# IoK8sApiCoreV1PortworxVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **string** | fSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] [default to undefined]
**volumeID** | **string** | volumeID uniquely identifies a Portworx volume | [default to undefined]


