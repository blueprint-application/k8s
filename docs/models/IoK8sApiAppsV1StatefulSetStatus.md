# IoK8sApiAppsV1StatefulSetStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableReplicas** | **number** | Total number of available pods (ready for at least minReadySeconds) targeted by this statefulset. | [optional] [default to undefined]
**collisionCount** | **number** | collisionCount is the count of hash collisions for the StatefulSet. The StatefulSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiAppsV1StatefulSetCondition&gt;**](IoK8sApiAppsV1StatefulSetCondition.md) | Represents the latest available observations of a statefulset\&#39;s current state. | [optional] [default to undefined]
**currentReplicas** | **number** | currentReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by currentRevision. | [optional] [default to undefined]
**currentRevision** | **string** | currentRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [0,currentReplicas). | [optional] [default to undefined]
**observedGeneration** | **number** | observedGeneration is the most recent generation observed for this StatefulSet. It corresponds to the StatefulSet\&#39;s generation, which is updated on mutation by the API Server. | [optional] [default to undefined]
**readyReplicas** | **number** | readyReplicas is the number of pods created for this StatefulSet with a Ready Condition. | [optional] [default to undefined]
**replicas** | **number** | replicas is the number of Pods created by the StatefulSet controller. | [default to undefined]
**updateRevision** | **string** | updateRevision, if not empty, indicates the version of the StatefulSet used to generate Pods in the sequence [replicas-updatedReplicas,replicas) | [optional] [default to undefined]
**updatedReplicas** | **number** | updatedReplicas is the number of Pods created by the StatefulSet controller from the StatefulSet version indicated by updateRevision. | [optional] [default to undefined]


