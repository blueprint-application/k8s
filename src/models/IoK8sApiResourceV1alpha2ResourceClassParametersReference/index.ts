import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModel extends BaseModel {
  // APIGroup is the group for the resource being referenced. It is empty for the core API. This matches the group in the APIVersion that is used when creating the resources.
  apiGroup?: string;
  // Kind is the type of resource being referenced. This is the same value as in the parameter object\'s metadata.
  kind: string;
  // Name is the name of resource being referenced.
  name: string;
  // Namespace that contains the referenced resource. Must be empty for cluster-scoped resources and non-empty for namespaced resources.
  namespace?: string;

  constructor(data: IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(
    data: IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModelOptions,
  ): IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModel {
    return new IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
    } as Partial<this>;
  }
}

export default IoK8sApiResourceV1alpha2ResourceClassParametersReferenceModel;
