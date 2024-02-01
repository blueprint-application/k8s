import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModel extends BaseModel {
  // APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
  apiGroup?: string;
  // Name is the name of resource being referenced.
  name: string;
  // Resource is the type of resource being referenced, for example \"pods\".
  resource: string;
  // UID identifies exactly one incarnation of the resource.
  uid: string;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.name = data.name;
    this.resource = data.resource;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModel {
    return new IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      name: this.name,
      resource: this.resource,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClaimConsumerReferenceModel;
