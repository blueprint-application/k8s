# IoK8sApiAppsV1DaemonSetStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collisionCount** | **number** | Count of hash collisions for the DaemonSet. The DaemonSet controller uses this field as a collision avoidance mechanism when it needs to create the name for the newest ControllerRevision. | [optional] [default to undefined]
**conditions** | [**Array&lt;IoK8sApiAppsV1DaemonSetCondition&gt;**](IoK8sApiAppsV1DaemonSetCondition.md) | Represents the latest available observations of a DaemonSet\&#39;s current state. | [optional] [default to undefined]
**currentNumberScheduled** | **number** | The number of nodes that are running at least 1 daemon pod and are supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ | [default to undefined]
**desiredNumberScheduled** | **number** | The total number of nodes that should be running the daemon pod (including nodes correctly running the daemon pod). More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ | [default to undefined]
**numberAvailable** | **number** | The number of nodes that should be running the daemon pod and have one or more of the daemon pod running and available (ready for at least spec.minReadySeconds) | [optional] [default to undefined]
**numberMisscheduled** | **number** | The number of nodes that are running the daemon pod, but are not supposed to run the daemon pod. More info: https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/ | [default to undefined]
**numberReady** | **number** | numberReady is the number of nodes that should be running the daemon pod and have one or more of the daemon pod running with a Ready Condition. | [default to undefined]
**numberUnavailable** | **number** | The number of nodes that should be running the daemon pod and have none of the daemon pod running and available (ready for at least spec.minReadySeconds) | [optional] [default to undefined]
**observedGeneration** | **number** | The most recent generation observed by the daemon set controller. | [optional] [default to undefined]
**updatedNumberScheduled** | **number** | The total number of nodes that are running updated daemon pod | [optional] [default to undefined]


