import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModel extends BaseModel {
  // APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
  apiGroup?: string;
  // Kind is the type of resource being referenced. This is the same value as in the parameter object\'s metadata, for example \"ConfigMap\".
  kind: string;
  // Name is the name of resource being referenced.
  name: string;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModel {
    return new IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      kind: this.kind,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClaimParametersReferenceModel;
