# IoK8sApiCoordinationV1LeaseSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquireTime** | **Date** | MicroTime is version of Time with microsecond level precision. | [optional] [default to undefined]
**holderIdentity** | **string** | holderIdentity contains the identity of the holder of a current lease. | [optional] [default to undefined]
**leaseDurationSeconds** | **number** | leaseDurationSeconds is a duration that candidates for a lease need to wait to force acquire it. This is measure against time of last observed renewTime. | [optional] [default to undefined]
**leaseTransitions** | **number** | leaseTransitions is the number of transitions of a lease between holders. | [optional] [default to undefined]
**renewTime** | **Date** | MicroTime is version of Time with microsecond level precision. | [optional] [default to undefined]


