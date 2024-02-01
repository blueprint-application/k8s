# IoK8sApiCoreV1NodeSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configSource** | [**IoK8sApiCoreV1NodeConfigSource**](IoK8sApiCoreV1NodeConfigSource.md) |  | [optional] [default to undefined]
**externalID** | **string** | Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966 | [optional] [default to undefined]
**podCIDR** | **string** | PodCIDR represents the pod IP range assigned to the node. | [optional] [default to undefined]
**podCIDRs** | **Array&lt;string&gt;** | podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6. | [optional] [default to undefined]
**providerID** | **string** | ID of the node assigned by the cloud provider in the format: &lt;ProviderName&gt;://&lt;ProviderSpecificNodeID&gt; | [optional] [default to undefined]
**taints** | [**Array&lt;IoK8sApiCoreV1Taint&gt;**](IoK8sApiCoreV1Taint.md) | If specified, the node\&#39;s taints. | [optional] [default to undefined]
**unschedulable** | **boolean** | Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration | [optional] [default to undefined]


