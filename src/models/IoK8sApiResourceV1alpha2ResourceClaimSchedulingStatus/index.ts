import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModel extends BaseModel {
  // Name matches the pod.spec.resourceClaims[*].Name field.
  name?: string;
  // UnsuitableNodes lists nodes that the ResourceClaim cannot be allocated for.  The size of this field is limited to 128, the same as for PodSchedulingSpec.PotentialNodes. This may get increased in the future, but not reduced.
  unsuitableNodes?: Array<string>;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.unsuitableNodes = data.unsuitableNodes;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModel {
    return new IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      unsuitableNodes: this.unsuitableNodes,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClaimSchedulingStatusModel;
