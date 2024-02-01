# IoK8sApiCoreV1FCVolumeSourceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fsType** | **string** | fsType is the filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. \&quot;ext4\&quot;, \&quot;xfs\&quot;, \&quot;ntfs\&quot;. Implicitly inferred to be \&quot;ext4\&quot; if unspecified. | [optional] [default to undefined]
**lun** | **number** | lun is Optional: FC target lun number | [optional] [default to undefined]
**readOnly** | **boolean** | readOnly is Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. | [optional] [default to undefined]
**targetWWNs** | **Array&lt;string&gt;** | targetWWNs is Optional: FC target worldwide names (WWNs) | [optional] [default to undefined]
**wwids** | **Array&lt;string&gt;** | wwids Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously. | [optional] [default to undefined]


