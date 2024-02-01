# IoK8sApiCoreV1AzureDiskVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cachingMode** | **string** | cachingMode is the Host Caching mode: None, Read Only, Read Write. | [optional] [default to undefined]
**diskName** | **string** | diskName is the Name of the data disk in the blob storage | [default to undefined]
**diskURI** | **string** | diskURI is the URI of data disk in the blob storage | [default to undefined]
**fsType** | **string** | fsType is Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. | [optional] [default to undefined]
**kind** | **string** | kind expected values are Shared: multiple blob disks per storage account  Dedicated: single blob disk per storage account  Managed: azure managed data disk (only in managed availability set). defaults to shared | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] [default to undefined]


