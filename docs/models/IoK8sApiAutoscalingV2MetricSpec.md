# IoK8sApiAutoscalingV2MetricSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerResource** | [**IoK8sApiAutoscalingV2ContainerResourceMetricSource**](IoK8sApiAutoscalingV2ContainerResourceMetricSource.md) |  | [optional] [default to undefined]
**external** | [**IoK8sApiAutoscalingV2ExternalMetricSource**](IoK8sApiAutoscalingV2ExternalMetricSource.md) |  | [optional] [default to undefined]
**object** | [**IoK8sApiAutoscalingV2ObjectMetricSource**](IoK8sApiAutoscalingV2ObjectMetricSource.md) |  | [optional] [default to undefined]
**pods** | [**IoK8sApiAutoscalingV2PodsMetricSource**](IoK8sApiAutoscalingV2PodsMetricSource.md) |  | [optional] [default to undefined]
**resource** | [**IoK8sApiAutoscalingV2ResourceMetricSource**](IoK8sApiAutoscalingV2ResourceMetricSource.md) |  | [optional] [default to undefined]
**type** | **string** | type is the type of metric source.  It should be one of \&quot;ContainerResource\&quot;, \&quot;External\&quot;, \&quot;Object\&quot;, \&quot;Pods\&quot; or \&quot;Resource\&quot;, each mapping to a matching field in the object. Note: \&quot;ContainerResource\&quot; type is available on when the feature-gate HPAContainerMetrics is enabled | [default to undefined]


