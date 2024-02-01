# IoK8sApiAppsV1DeploymentStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availableReplicas** | **number** | Total number of available pods (ready for at least minReadySeconds) targeted by this deployment. | [optional] [default to undefined]
**collisionCount** | **number** | Count of hash collisions for the Deployment. The Deployment controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ReplicaSet. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiAppsV1DeploymentCondition&gt;**](IoK8sApiAppsV1DeploymentCondition.md) | Represents the latest available observations of a deployment\&#39;s current state. | [optional] [default to undefined]
**observedGeneration** | **number** | The generation observed by the deployment controller. | [optional] [default to undefined]
**readyReplicas** | **number** | readyReplicas is the number of pods targeted by this Deployment with a Ready Condition. | [optional] [default to undefined]
**replicas** | **number** | Total number of non-terminated pods targeted by this deployment (their labels match the selector). | [optional] [default to undefined]
**unavailableReplicas** | **number** | Total number of unavailable pods targeted by this deployment. This is the total number of pods that are still required for the deployment to have 100% available capacity. They may either be pods that are running but not yet available or pods that still have not been created. | [optional] [default to undefined]
**updatedReplicas** | **number** | Total number of non-terminated pods targeted by this deployment that have the desired template spec. | [optional] [default to undefined]


