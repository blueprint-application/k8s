# IoK8sApiCoreV1LocalVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **string** | fsType is the filesystem type to mount. It applies only when the Path is a block device. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. The default value is to auto-select a filesystem if unspecified. | [optional] [default to undefined]
**path** | **string** | path of the full path to the volume on the node. It can be either a directory or block device (disk, partition, ...). | [default to undefined]


