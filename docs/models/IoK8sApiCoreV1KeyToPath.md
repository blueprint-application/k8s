# IoK8sApiCoreV1KeyToPathModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **string** | key is the key to project. | [default to undefined]
**mode** | **number** | mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set. | [optional] [default to undefined]
**path** | **string** | path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element \&#39;..\&#39;. May not start with the string \&#39;..\&#39;. | [default to undefined]


