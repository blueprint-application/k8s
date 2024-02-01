import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatusModelOptions as IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus } from '../IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAutoscalingV2HorizontalPodAutoscalerModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpec;
  status?: IoK8sApiAutoscalingV2HorizontalPodAutoscalerStatus;
}
