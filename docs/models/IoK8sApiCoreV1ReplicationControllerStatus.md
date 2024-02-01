# IoK8sApiCoreV1ReplicationControllerStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableReplicas** | **number** | The number of available replicas (ready for at least minReadySeconds) for this replication controller. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiCoreV1ReplicationControllerCondition&gt;**](IoK8sApiCoreV1ReplicationControllerCondition.md) | Represents the latest available observations of a replication controller\&#39;s current state. | [optional] [default to undefined]
**fullyLabeledReplicas** | **number** | The number of pods that have labels matching the labels of the pod template of the replication controller. | [optional] [default to undefined]
**observedGeneration** | **number** | ObservedGeneration reflects the generation of the most recently observed replication controller. | [optional] [default to undefined]
**readyReplicas** | **number** | The number of ready replicas for this replication controller. | [optional] [default to undefined]
**replicas** | **number** | Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller#what-is-a-replicationcontroller | [default to undefined]


