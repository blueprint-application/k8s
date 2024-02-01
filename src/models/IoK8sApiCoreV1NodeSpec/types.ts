import { IoK8sApiCoreV1NodeConfigSourceModelOptions as IoK8sApiCoreV1NodeConfigSource } from '../IoK8sApiCoreV1NodeConfigSource';
import { IoK8sApiCoreV1TaintModelOptions as IoK8sApiCoreV1Taint } from '../IoK8sApiCoreV1Taint';

export interface IoK8sApiCoreV1NodeSpecModelOptions {
  configSource?: IoK8sApiCoreV1NodeConfigSource;
  externalID?: string;
  podCIDR?: string;
  podCIDRs?: Array<string>;
  providerID?: string;
  taints?: Array<IoK8sApiCoreV1Taint>;
  unschedulable?: boolean;
}
