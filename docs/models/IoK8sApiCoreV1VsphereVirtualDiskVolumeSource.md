# IoK8sApiCoreV1VsphereVirtualDiskVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **string** | fsType is filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. | [optional] [default to undefined]
**storagePolicyID** | **string** | storagePolicyID is the storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName. | [optional] [default to undefined]
**storagePolicyName** | **string** | storagePolicyName is the storage Policy Based Management (SPBM) profile name. | [optional] [default to undefined]
**volumePath** | **string** | volumePath is the path that identifies vSphere volume vmdk | [default to undefined]


