import { IoK8sApiAutoscalingV2HPAScalingPolicyModelOptions as IoK8sApiAutoscalingV2HPAScalingPolicy } from '../IoK8sApiAutoscalingV2HPAScalingPolicy';

export interface IoK8sApiAutoscalingV2HPAScalingRulesModelOptions {
  policies?: Array<IoK8sApiAutoscalingV2HPAScalingPolicy>;
  selectPolicy?: string;
  stabilizationWindowSeconds?: number;
}
