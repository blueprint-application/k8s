import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiSchedulingV1PriorityClassModelOptions {
  apiVersion?: string;
  description?: string;
  globalDefault?: boolean;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  preemptionPolicy?: string;
  value: number;
}
