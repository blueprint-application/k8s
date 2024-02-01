# IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroup** | **string** | APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources. | [optional] [default to undefined]
**kind** | **string** | Kind is the type of resource being referenced. This is the same value as in the parameter object\&#39;s metadata. | [default to undefined]
**name** | **string** | Name is the name of resource being referenced. | [default to undefined]
**namespace** | **string** | Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources. | [optional] [default to undefined]


