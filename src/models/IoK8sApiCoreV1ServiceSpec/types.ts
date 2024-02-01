import { IoK8sApiCoreV1ServicePortModelOptions as IoK8sApiCoreV1ServicePort } from '../IoK8sApiCoreV1ServicePort';
import { IoK8sApiCoreV1SessionAffinityConfigModelOptions as IoK8sApiCoreV1SessionAffinityConfig } from '../IoK8sApiCoreV1SessionAffinityConfig';

export interface IoK8sApiCoreV1ServiceSpecModelOptions {
  allocateLoadBalancerNodePorts?: boolean;
  clusterIP?: string;
  clusterIPs?: Array<string>;
  externalIPs?: Array<string>;
  externalName?: string;
  externalTrafficPolicy?: string;
  healthCheckNodePort?: number;
  internalTrafficPolicy?: string;
  ipFamilies?: Array<string>;
  ipFamilyPolicy?: string;
  loadBalancerClass?: string;
  loadBalancerIP?: string;
  loadBalancerSourceRanges?: Array<string>;
  ports?: Array<IoK8sApiCoreV1ServicePort>;
  publishNotReadyAddresses?: boolean;
  selector?: { [key: string]: string };
  sessionAffinity?: string;
  sessionAffinityConfig?: IoK8sApiCoreV1SessionAffinityConfig;
  type?: string;
}
