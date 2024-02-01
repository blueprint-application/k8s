import { IoK8sApiCoreV1NodeAffinityModelOptions as IoK8sApiCoreV1NodeAffinity } from '../IoK8sApiCoreV1NodeAffinity';
import { IoK8sApiCoreV1PodAffinityModelOptions as IoK8sApiCoreV1PodAffinity } from '../IoK8sApiCoreV1PodAffinity';
import { IoK8sApiCoreV1PodAntiAffinityModelOptions as IoK8sApiCoreV1PodAntiAffinity } from '../IoK8sApiCoreV1PodAntiAffinity';

export interface IoK8sApiCoreV1AffinityModelOptions {
  nodeAffinity?: IoK8sApiCoreV1NodeAffinity;
  podAffinity?: IoK8sApiCoreV1PodAffinity;
  podAntiAffinity?: IoK8sApiCoreV1PodAntiAffinity;
}
