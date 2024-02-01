# IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentCPUUtilizationPercentage** | **number** | currentCPUUtilizationPercentage is the current average CPU utilization over all pods, represented as a percentage of requested CPU, e.g. 70 means that an average pod is using now 70% of its requested CPU. | [optional] [default to undefined]
**currentReplicas** | **number** | currentReplicas is the current number of replicas of pods managed by this autoscaler. | [default to undefined]
**desiredReplicas** | **number** | desiredReplicas is the  desired number of replicas of pods managed by this autoscaler. | [default to undefined]
**lastScaleTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**observedGeneration** | **number** | observedGeneration is the most recent generation observed by this autoscaler. | [optional] [default to undefined]


