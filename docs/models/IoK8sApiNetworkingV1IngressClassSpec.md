# IoK8sApiNetworkingV1IngressClassSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controller** | **string** | controller refers to the name of the controller that should handle this class. This allows for different \&quot;flavors\&quot; that are controlled by the same controller. For example, you may have different parameters for the same implementing controller. This should be specified as a domain-prefixed path no more than 250 characters in length, e.g. \&quot;acme.io/ingress-controller\&quot;. This field is immutable. | [optional] [default to undefined]
**parameters** | [**IoK8sApiNetworkingV1IngressClassParametersReference**](IoK8sApiNetworkingV1IngressClassParametersReference.md) |  | [optional] [default to undefined]


