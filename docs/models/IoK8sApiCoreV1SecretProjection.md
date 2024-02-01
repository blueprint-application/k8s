# IoK8sApiCoreV1SecretProjectionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**Array&lt;IoK8sApiCoreV1KeyToPath&gt;**](IoK8sApiCoreV1KeyToPath.md) | items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the \&#39;..\&#39; path or start with \&#39;..\&#39;. | [optional] [default to undefined]
**name** | **string** | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names | [optional] [default to undefined]
**optional** | **boolean** | optional field specify whether the Secret or its key must be defined | [optional] [default to undefined]


