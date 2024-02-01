import { IoK8sApiPolicyV1PodDisruptionBudgetSpecModelOptions as IoK8sApiPolicyV1PodDisruptionBudgetSpec } from '../IoK8sApiPolicyV1PodDisruptionBudgetSpec';
import { IoK8sApiPolicyV1PodDisruptionBudgetStatusModelOptions as IoK8sApiPolicyV1PodDisruptionBudgetStatus } from '../IoK8sApiPolicyV1PodDisruptionBudgetStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiPolicyV1PodDisruptionBudgetModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiPolicyV1PodDisruptionBudgetSpec;
  status?: IoK8sApiPolicyV1PodDisruptionBudgetStatus;
}
