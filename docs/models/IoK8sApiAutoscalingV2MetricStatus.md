# IoK8sApiAutoscalingV2MetricStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerResource** | [**IoK8sApiAutoscalingV2ContainerResourceMetricStatus**](IoK8sApiAutoscalingV2ContainerResourceMetricStatus.md) |  | [optional] [default to undefined]
**external** | [**IoK8sApiAutoscalingV2ExternalMetricStatus**](IoK8sApiAutoscalingV2ExternalMetricStatus.md) |  | [optional] [default to undefined]
**object** | [**IoK8sApiAutoscalingV2ObjectMetricStatus**](IoK8sApiAutoscalingV2ObjectMetricStatus.md) |  | [optional] [default to undefined]
**pods** | [**IoK8sApiAutoscalingV2PodsMetricStatus**](IoK8sApiAutoscalingV2PodsMetricStatus.md) |  | [optional] [default to undefined]
**resource** | [**IoK8sApiAutoscalingV2ResourceMetricStatus**](IoK8sApiAutoscalingV2ResourceMetricStatus.md) |  | [optional] [default to undefined]
**type** | **string** | type is the type of metric source.  It will be one of \&quot;ContainerResource\&quot;, \&quot;External\&quot;, \&quot;Object\&quot;, \&quot;Pods\&quot; or \&quot;Resource\&quot;, each corresponds to a matching field in the object. Note: \&quot;ContainerResource\&quot; type is available on when the feature-gate HPAContainerMetrics is enabled | [default to undefined]


