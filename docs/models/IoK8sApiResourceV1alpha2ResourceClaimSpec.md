# IoK8sApiResourceV1alpha2ResourceClaimSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allocationMode** | **string** | Allocation can start immediately or when a Pod wants to use the resource. \&quot;WaitForFirstConsumer\&quot; is the default. | [optional] [default to undefined]
**parametersRef** | [**IoK8sApiResourceV1alpha2ResourceClaimParametersReference**](IoK8sApiResourceV1alpha2ResourceClaimParametersReference.md) |  | [optional] [default to undefined]
**resourceClassName** | **string** | ResourceClassName references the driver and additional parameters via the name of a ResourceClass that was created as part of the driver deployment. | [default to undefined]


