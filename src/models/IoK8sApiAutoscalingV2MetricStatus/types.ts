import { IoK8sApiAutoscalingV2ContainerResourceMetricStatusModelOptions as IoK8sApiAutoscalingV2ContainerResourceMetricStatus } from '../IoK8sApiAutoscalingV2ContainerResourceMetricStatus';
import { IoK8sApiAutoscalingV2ExternalMetricStatusModelOptions as IoK8sApiAutoscalingV2ExternalMetricStatus } from '../IoK8sApiAutoscalingV2ExternalMetricStatus';
import { IoK8sApiAutoscalingV2ObjectMetricStatusModelOptions as IoK8sApiAutoscalingV2ObjectMetricStatus } from '../IoK8sApiAutoscalingV2ObjectMetricStatus';
import { IoK8sApiAutoscalingV2PodsMetricStatusModelOptions as IoK8sApiAutoscalingV2PodsMetricStatus } from '../IoK8sApiAutoscalingV2PodsMetricStatus';
import { IoK8sApiAutoscalingV2ResourceMetricStatusModelOptions as IoK8sApiAutoscalingV2ResourceMetricStatus } from '../IoK8sApiAutoscalingV2ResourceMetricStatus';

export interface IoK8sApiAutoscalingV2MetricStatusModelOptions {
  containerResource?: IoK8sApiAutoscalingV2ContainerResourceMetricStatus;
  external?: IoK8sApiAutoscalingV2ExternalMetricStatus;
  object?: IoK8sApiAutoscalingV2ObjectMetricStatus;
  pods?: IoK8sApiAutoscalingV2PodsMetricStatus;
  resource?: IoK8sApiAutoscalingV2ResourceMetricStatus;
  type: string;
}
