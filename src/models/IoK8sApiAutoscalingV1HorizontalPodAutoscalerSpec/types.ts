import { IoK8sApiAutoscalingV1CrossVersionObjectReferenceModelOptions as IoK8sApiAutoscalingV1CrossVersionObjectReference } from '../IoK8sApiAutoscalingV1CrossVersionObjectReference';

export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModelOptions {
  maxReplicas: number;
  minReplicas?: number;
  scaleTargetRef: IoK8sApiAutoscalingV1CrossVersionObjectReference;
  targetCPUUtilizationPercentage?: number;
}
