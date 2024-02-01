import { IoK8sApiCoreV1LoadBalancerStatusModelOptions as IoK8sApiCoreV1LoadBalancerStatus } from '../IoK8sApiCoreV1LoadBalancerStatus';
import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';

export interface IoK8sApiCoreV1ServiceStatusModelOptions {
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
  loadBalancer?: IoK8sApiCoreV1LoadBalancerStatus;
}
