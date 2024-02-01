# IoK8sApiAppsV1ReplicaSetStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableReplicas** | **number** | The number of available replicas (ready for at least minReadySeconds) for this replica set. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiAppsV1ReplicaSetCondition&gt;**](IoK8sApiAppsV1ReplicaSetCondition.md) | Represents the latest available observations of a replica set\&#39;s current state. | [optional] [default to undefined]
**fullyLabeledReplicas** | **number** | The number of pods that have labels matching the labels of the pod template of the replicaset. | [optional] [default to undefined]
**observedGeneration** | **number** | ObservedGeneration reflects the generation of the most recently observed ReplicaSet. | [optional] [default to undefined]
**readyReplicas** | **number** | readyReplicas is the number of pods targeted by this ReplicaSet with a Ready Condition. | [optional] [default to undefined]
**replicas** | **number** | Replicas is the most recently observed number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller | [default to undefined]


