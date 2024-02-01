# IoK8sApiCoreV1ResourceRequirementsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**claims** | [**Array&lt;IoK8sApiCoreV1ResourceClaim&gt;**](IoK8sApiCoreV1ResourceClaim.md) | Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container.  This is an alpha field and requires enabling the DynamicResourceAllocation feature gate.  This field is immutable. It can only be set for containers. | [optional] [default to undefined]
**limits** | **{ [key: string]: string; }** | Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ | [optional] [default to undefined]
**requests** | **{ [key: string]: string; }** | Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ | [optional] [default to undefined]


