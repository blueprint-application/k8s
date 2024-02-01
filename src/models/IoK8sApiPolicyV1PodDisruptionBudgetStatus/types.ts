import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';

export interface IoK8sApiPolicyV1PodDisruptionBudgetStatusModelOptions {
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
  currentHealthy: number;
  desiredHealthy: number;
  disruptedPods?: { [key: string]: Date };
  disruptionsAllowed: number;
  expectedPods: number;
  observedGeneration?: number;
}
