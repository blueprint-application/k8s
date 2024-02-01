# IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name matches the pod.spec.resourceClaims[*].Name field. | [optional] [default to undefined]
**unsuitableNodes** | **Array&lt;string&gt;** | UnsuitableNodes lists nodes that the ResourceClaim cannot be allocated for.  The size of this field is limited to 128, the same as for PodSchedulingSpec.PotentialNodes. This may get increased in the future, but not reduced. | [optional] [default to undefined]


