# IoK8sApiNetworkingV1IngressLoadBalancerIngressModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **string** | hostname is set for load-balancer ingress points that are DNS based. | [optional] [default to undefined]
**ip** | **string** | ip is set for load-balancer ingress points that are IP based. | [optional] [default to undefined]
**ports** | [**Array&lt;IoK8sApiNetworkingV1IngressPortStatus&gt;**](IoK8sApiNetworkingV1IngressPortStatus.md) | ports provides information about the ports exposed by this LoadBalancer. | [optional] [default to undefined]


