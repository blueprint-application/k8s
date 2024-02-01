# IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroup** | **string** | APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources. | [optional] [default to undefined]
**name** | **string** | Name is the name of resource being referenced. | [default to undefined]
**resource** | **string** | Resource is the type of resource being referenced, for example \&quot;pods\&quot;. | [default to undefined]
**uid** | **string** | UID identifies exactly one incarnation of the resource. | [default to undefined]


