import { IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModelOptions as IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference } from '../IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference';

export interface IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModelOptions {
  caBundle?: string;
  group?: string;
  groupPriorityMinimum: number;
  insecureSkipTLSVerify?: boolean;
  service?: IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference;
  version?: string;
  versionPriority: number;
}
