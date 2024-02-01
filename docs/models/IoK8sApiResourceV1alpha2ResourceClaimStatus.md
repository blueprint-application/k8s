# IoK8sApiResourceV1alpha2ResourceClaimStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocation** | [**IoK8sApiResourceV1alpha2AllocationResult**](IoK8sApiResourceV1alpha2AllocationResult.md) |  | [optional] [default to undefined]
**deallocationRequested** | **boolean** | DeallocationRequested indicates that a ResourceClaim is to be deallocated.  The driver then must deallocate this claim and reset the field together with clearing the Allocation field.  While DeallocationRequested is set, no new consumers may be added to ReservedFor. | [optional] [default to undefined]
**driverName** | **string** | DriverName is a copy of the driver name from the ResourceClass at the time when allocation started. | [optional] [default to undefined]
**reservedFor** | [**Array&lt;IoK8sApiResourceV1alpha2ResourceClaimConsumerReference&gt;**](IoK8sApiResourceV1alpha2ResourceClaimConsumerReference.md) | ReservedFor indicates which entities are currently allowed to use the claim. A Pod which references a ResourceClaim which is not reserved for that Pod will not be started.  There can be at most 32 such reservations. This may get increased in the future, but not reduced. | [optional] [default to undefined]


