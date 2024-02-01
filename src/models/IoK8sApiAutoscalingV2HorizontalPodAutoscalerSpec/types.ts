import { IoK8sApiAutoscalingV2CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV2CrossVersionObjectReference } from '../IoK8sApiAutoscalingV2CrossVersionObjectReference';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehaviorModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior';
import { IoK8sApiAutoscalingV2MetricSpecModelOptions as IoK8sApiAutoscalingV2MetricSpec } from '../IoK8sApiAutoscalingV2MetricSpec';

export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModelOptions {
  behavior?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerBehavior;
  maxReplicas: number;
  metrics?: Array<IoK8sApiAutoscalingV2MetricSpec>;
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV2CrossVersionObjectReference;
}
