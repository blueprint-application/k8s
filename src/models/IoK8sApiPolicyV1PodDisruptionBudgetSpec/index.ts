import { IoK8sApimachineryPkgApisMetaV1LabelSelectorModelOptions as IoK8sApimachineryPkgApisMetaV1LabelSelector } from '../IoK8sApimachineryPkgApisMetaV1LabelSelector';
import { BaseModel } from '../types';
import type { IoK8sApiPolicyV1PodDisruptionBudgetSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiPolicyV1PodDisruptionBudgetSpecModel extends BaseModel {
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  maxUnavailable?: string;
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  minAvailable?: string;
  selector?: IoK8sApimachineryPkgApisMetaV1LabelSelector;
  // UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type=\"Ready\",status=\"True\".  Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy.  IfHealthyBudget policy means that running pods (status.phase=\"Running\"), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction.  AlwaysAllow policy means that all running pods (status.phase=\"Running\"), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction.  Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field.  This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
  unhealthyPodEvictionPolicy?: string;

  constructor(data: IoK8sApiPolicyV1PodDisruptionBudgetSpecModelOptions) {
    super();
    validate(data);
    this.maxUnavailable = data.maxUnavailable;
    this.minAvailable = data.minAvailable;
    this.selector = data.selector;
    this.unhealthyPodEvictionPolicy = data.unhealthyPodEvictionPolicy;
  }

  static create(
    data: IoK8sApiPolicyV1PodDisruptionBudgetSpecModelOptions,
  ): IoK8sApiPolicyV1PodDisruptionBudgetSpecModel {
    return new IoK8sApiPolicyV1PodDisruptionBudgetSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      maxUnavailable: this.maxUnavailable,
      minAvailable: this.minAvailable,
      selector: this.selector,
      unhealthyPodEvictionPolicy: this.unhealthyPodEvictionPolicy,
    } as Partial<this>;
  }
}

export default IoK8sApiPolicyV1PodDisruptionBudgetSpecModel;
