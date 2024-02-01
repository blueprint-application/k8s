# IoK8sApiCoreV1LoadBalancerIngressModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **string** | Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers) | [optional] [default to undefined]
**ip** | **string** | IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers) | [optional] [default to undefined]
**ipMode** | **string** | IPMode specifies how the load-balancer IP behaves, and may only be specified when the ip field is specified. Setting this to \&quot;VIP\&quot; indicates that traffic is delivered to the node with the destination set to the load-balancer\&#39;s IP and port. Setting this to \&quot;Proxy\&quot; indicates that traffic is delivered to the node or pod with the destination set to the node\&#39;s IP and node port or the pod\&#39;s IP and port. Service implementations may use this information to adjust traffic routing. | [optional] [default to undefined]
**ports** | [**Array&lt;IoK8sApiCoreV1PortStatus&gt;**](IoK8sApiCoreV1PortStatus.md) | Ports is a list of records of service ports If used, every port defined in the service should have an entry in it | [optional] [default to undefined]


