import { IoK8sApiAutoscalingV1ScaleSpecModelOptions as IoK8sApiAutoscalingV1ScaleSpec } from '../IoK8sApiAutoscalingV1ScaleSpec';
import { IoK8sApiAutoscalingV1ScaleStatusModelOptions as IoK8sApiAutoscalingV1ScaleStatus } from '../IoK8sApiAutoscalingV1ScaleStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAutoscalingV1ScaleModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAutoscalingV1ScaleSpec;
  status?: IoK8sApiAutoscalingV1ScaleStatus;
}
