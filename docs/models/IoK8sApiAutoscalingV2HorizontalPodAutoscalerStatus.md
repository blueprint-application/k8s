# IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**Array&lt;IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition&gt;**](IoK8sApiAutoscalingV2HorizontalPodAutoscalerCondition.md) | conditions is the set of conditions required for this autoscaler to scale its target, and indicates whether or not those conditions are met. | [optional] [default to undefined]
**currentMetrics** | [**Array&lt;IoK8sApiAutoscalingV2MetricStatus&gt;**](IoK8sApiAutoscalingV2MetricStatus.md) | currentMetrics is the last read state of the metrics used by this autoscaler. | [optional] [default to undefined]
**currentReplicas** | **number** | currentReplicas is current number of replicas of pods managed by this autoscaler, as last seen by the autoscaler. | [optional] [default to undefined]
**desiredReplicas** | **number** | desiredReplicas is the desired number of replicas of pods managed by this autoscaler, as last calculated by the autoscaler. | [default to undefined]
**lastScaleTime** | **Date** | Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers. | [optional] [default to undefined]
**observedGeneration** | **number** | observedGeneration is the most recent generation observed by this autoscaler. | [optional] [default to undefined]


