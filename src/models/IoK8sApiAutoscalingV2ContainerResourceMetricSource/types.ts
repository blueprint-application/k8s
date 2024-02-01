import { IoK8sApiAutoscalingV2MetricTargetModelOptions as IoK8sApiAutoscalingV2MetricTarget } from '../IoK8sApiAutoscalingV2MetricTarget';

export interface IoK8sApiAutoscalingV2ContainerResourceMetricSourceModelOptions {
  container: string;
  name: string;
  target: IoK8sApiAutoscalingV2MetricTarget;
}
