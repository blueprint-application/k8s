# IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**behavior** | [**IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior**](IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior.md) |  | [optional] [default to undefined]
**maxReplicas** | **number** | maxReplicas is the upper limit for the number of replicas to which the autoscaler can scale up. It cannot be less that minReplicas. | [default to undefined]
**metrics** | [**Array&lt;IoK8sApiAutoscalingV2MetricSpec&gt;**](IoK8sApiAutoscalingV2MetricSpec.md) | metrics contains the specifications for which to use to calculate the desired replica count (the maximum replica count across all metrics will be used).  The desired replica count is calculated multiplying the ratio between the target value and the current value by the current number of pods.  Ergo, metrics used must decrease as the pod count is increased, and vice-versa.  See the individual metric source types for more information about how each type of metric must respond. If not set, the default metric will be set to 80% average CPU utilization. | [optional] [default to undefined]
**minReplicas** | **number** | minReplicas is the lower limit for the number of replicas to which the autoscaler can scale down.  It defaults to 1 pod.  minReplicas is allowed to be 0 if the alpha feature gate HPAScaleToZero is enabled and at least one Object or External metric is configured.  Scaling is active as long as at least one metric value is available. | [optional] [default to undefined]
**scaleTargetRef** | [**IoK8sApiAutoscalingV2CrossVersionObjectReference**](IoK8sApiAutoscalingV2CrossVersionObjectReference.md) |  | [default to undefined]


