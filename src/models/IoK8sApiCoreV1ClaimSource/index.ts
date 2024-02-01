import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ClaimSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ClaimSourceModel extends BaseModel {
  // ResourceClaimName is the name of a ResourceClaim object in the same namespace as this pod.
  resourceClaimName?: string;
  // ResourceClaimTemplateName is the name of a ResourceClaimTemplate object in the same namespace as this pod.  The template will be used to create a new ResourceClaim, which will be bound to this pod. When this pod is deleted, the ResourceClaim will also be deleted. The pod name and resource name, along with a generated component, will be used to form a unique name for the ResourceClaim, which will be recorded in pod.status.resourceClaimStatuses.  This field is immutable and no changes will be made to the corresponding ResourceClaim by the control plane after creating the ResourceClaim.
  resourceClaimTemplateName?: string;

  constructor(data: IoK8sApiCoreV1ClaimSourceModelOptions) {
    super();
    validate(data);
    this.resourceClaimName = data.resourceClaimName;
    this.resourceClaimTemplateName = data.resourceClaimTemplateName;
  }

  static create(data: IoK8sApiCoreV1ClaimSourceModelOptions): IoK8sApiCoreV1ClaimSourceModel {
    return new IoK8sApiCoreV1ClaimSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      resourceClaimName: this.resourceClaimName,
      resourceClaimTemplateName: this.resourceClaimTemplateName,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ClaimSourceModel;
