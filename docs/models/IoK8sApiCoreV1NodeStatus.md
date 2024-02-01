# IoK8sApiCoreV1NodeStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**Array&lt;IoK8sApiCoreV1NodeAddress&gt;**](IoK8sApiCoreV1NodeAddress.md) | List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node\&#39;s address in its own status or consumers of the downward API (status.hostIP). | [optional] [default to undefined]
**allocatable** | **{ [key: string]: string; }** | Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity. | [optional] [default to undefined]
**capacity** | **{ [key: string]: string; }** | Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiCoreV1NodeCondition&gt;**](IoK8sApiCoreV1NodeCondition.md) | Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition | [optional] [default to undefined]
**config** | [**IoK8sApiCoreV1NodeConfigStatus**](IoK8sApiCoreV1NodeConfigStatus.md) |  | [optional] [default to undefined]
**daemonEndpoints** | [**IoK8sApiCoreV1NodeDaemonEndpoints**](IoK8sApiCoreV1NodeDaemonEndpoints.md) |  | [optional] [default to undefined]
**images** | [**Array&lt;IoK8sApiCoreV1ContainerImage&gt;**](IoK8sApiCoreV1ContainerImage.md) | List of container images on this node | [optional] [default to undefined]
**nodeInfo** | [**IoK8sApiCoreV1NodeSystemInfo**](IoK8sApiCoreV1NodeSystemInfo.md) |  | [optional] [default to undefined]
**phase** | **string** | NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated. | [optional] [default to undefined]
**volumesAttached** | [**Array&lt;IoK8sApiCoreV1AttachedVolume&gt;**](IoK8sApiCoreV1AttachedVolume.md) | List of volumes that are attached to the node. | [optional] [default to undefined]
**volumesInUse** | **Array&lt;string&gt;** | List of attachable volumes in use (mounted) by the node. | [optional] [default to undefined]


