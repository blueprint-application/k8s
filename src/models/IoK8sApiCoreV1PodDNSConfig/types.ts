import { IoK8sApiCoreV1PodDNSConfigOptionModelOptions as IoK8sApiCoreV1PodDNSConfigOption } from '../IoK8sApiCoreV1PodDNSConfigOption';

export interface IoK8sApiCoreV1PodDNSConfigModelOptions {
  nameservers?: Array<string>;
  options?: Array<IoK8sApiCoreV1PodDNSConfigOption>;
  searches?: Array<string>;
}
