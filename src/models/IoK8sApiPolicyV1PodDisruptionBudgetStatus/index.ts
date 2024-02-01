import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';
import { BaseModel } from '../types';
import type { IoK8sApiPolicyV1PodDisruptionBudgetStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiPolicyV1PodDisruptionBudgetStatusModel extends BaseModel {
  // Conditions contain conditions for PDB. The disruption controller sets the DisruptionAllowed condition. The following are known values for the reason field (additional reasons could be added in the future): - SyncFailed: The controller encountered an error and wasn\'t able to compute               the number of allowed disruptions. Therefore no disruptions are               allowed and the status of the condition will be False. - InsufficientPods: The number of pods are either at or below the number                     required by the PodDisruptionBudget. No disruptions are                     allowed and the status of the condition will be False. - SufficientPods: There are more pods than required by the PodDisruptionBudget.                   The condition will be True, and the number of allowed                   disruptions are provided by the disruptionsAllowed property.
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
  // current number of healthy pods
  currentHealthy: number;
  // minimum desired number of healthy pods
  desiredHealthy: number;
  // DisruptedPods contains information about pods whose eviction was processed by the API server eviction subresource handler but has not yet been observed by the PodDisruptionBudget controller. A pod will be in this map from the time when the API server processed the eviction request to the time when the pod is seen by PDB controller as having been marked for deletion (or after a timeout). The key in the map is the name of the pod and the value is the time when the API server processed the eviction request. If the deletion didn\'t occur and a pod is still there it will be removed from the list automatically by PodDisruptionBudget controller after some time. If everything goes smooth this map should be empty for the most of the time. Large number of entries in the map may indicate problems with pod deletions.
  disruptedPods?: { [key: string]: Date };
  // Number of pod disruptions that are currently allowed.
  disruptionsAllowed: number;
  // total number of pods counted by this disruption budget
  expectedPods: number;
  // Most recent generation observed when updating this PDB status. DisruptionsAllowed and other status information is valid only if observedGeneration equals to PDB\'s object generation.
  observedGeneration?: number;

  constructor(data: IoK8sApiPolicyV1PodDisruptionBudgetStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.currentHealthy = data.currentHealthy;
    this.desiredHealthy = data.desiredHealthy;
    this.disruptedPods = data.disruptedPods;
    this.disruptionsAllowed = data.disruptionsAllowed;
    this.expectedPods = data.expectedPods;
    this.observedGeneration = data.observedGeneration;
  }

  static create(
    data: IoK8sApiPolicyV1PodDisruptionBudgetStatusModelOptions,
  ): IoK8sApiPolicyV1PodDisruptionBudgetStatusModel {
    return new IoK8sApiPolicyV1PodDisruptionBudgetStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      currentHealthy: this.currentHealthy,
      desiredHealthy: this.desiredHealthy,
      disruptedPods: this.disruptedPods,
      disruptionsAllowed: this.disruptionsAllowed,
      expectedPods: this.expectedPods,
      observedGeneration: this.observedGeneration,
    } as Partial<this>;
  }
}

export default IoK8sApiPolicyV1PodDisruptionBudgetStatusModel;
