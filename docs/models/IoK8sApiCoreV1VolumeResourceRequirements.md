# IoK8sApiCoreV1VolumeResourceRequirementsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | **{ [key: string]: string; }** | Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ | [optional] [default to undefined]
**requests** | **{ [key: string]: string; }** | Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ | [optional] [default to undefined]


