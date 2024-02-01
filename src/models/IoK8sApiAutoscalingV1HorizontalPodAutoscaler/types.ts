import { IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpecModelOptions as IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec } from '../IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatusModelOptions as IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus } from '../IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAutoscalingV1HorizontalPodAutoscalerModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerSpec;
  status?: IoK8sApiAutoscalingV1HorizontalPodAutoscalerStatus;
}
