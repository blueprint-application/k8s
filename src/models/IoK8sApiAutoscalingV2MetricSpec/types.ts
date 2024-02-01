import { IoK8sApiAutoscalingV2ContainerResourceMetricSourceModelOptions as IoK8sApiAutoscalingV2ContainerResourceMetricSource } from '../IoK8sApiAutoscalingV2ContainerResourceMetricSource';
import { IoK8sApiAutoscalingV2ExternalMetricSourceModelOptions as IoK8sApiAutoscalingV2ExternalMetricSource } from '../IoK8sApiAutoscalingV2ExternalMetricSource';
import { IoK8sApiAutoscalingV2ObjectMetricSourceModelOptions as IoK8sApiAutoscalingV2ObjectMetricSource } from '../IoK8sApiAutoscalingV2ObjectMetricSource';
import { IoK8sApiAutoscalingV2PodsMetricSourceModelOptions as IoK8sApiAutoscalingV2PodsMetricSource } from '../IoK8sApiAutoscalingV2PodsMetricSource';
import { IoK8sApiAutoscalingV2ResourceMetricSourceModelOptions as IoK8sApiAutoscalingV2ResourceMetricSource } from '../IoK8sApiAutoscalingV2ResourceMetricSource';

export interface IoK8sApiAutoscalingV2MetricSpecModelOptions {
  containerResource?: IoK8sApiAutoscalingV2ContainerResourceMetricSource;
  external?: IoK8sApiAutoscalingV2ExternalMetricSource;
  object?: IoK8sApiAutoscalingV2ObjectMetricSource;
  pods?: IoK8sApiAutoscalingV2PodsMetricSource;
  resource?: IoK8sApiAutoscalingV2ResourceMetricSource;
  type: string;
}
