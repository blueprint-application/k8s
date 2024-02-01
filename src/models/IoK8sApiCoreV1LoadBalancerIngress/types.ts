import { IoK8sApiCoreV1PortStatusModelOptions as IoK8sApiCoreV1PortStatus } from '../IoK8sApiCoreV1PortStatus';

export interface IoK8sApiCoreV1LoadBalancerIngressModelOptions {
  hostname?: string;
  ip?: string;
  ipMode?: string;
  ports?: Array<IoK8sApiCoreV1PortStatus>;
}
