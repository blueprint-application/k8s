import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1alpha1ParentReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1alpha1ParentReferenceModel extends BaseModel {
  // Group is the group of the object being referenced.
  group?: string;
  // Name is the name of the object being referenced.
  name?: string;
  // Namespace is the namespace of the object being referenced.
  namespace?: string;
  // Resource is the resource of the object being referenced.
  resource?: string;

  constructor(data: IoK8sApiNetworkingV1alpha1ParentReferenceModelOptions) {
    super();
    validate(data);
    this.group = data.group;
    this.name = data.name;
    this.namespace = data.namespace;
    this.resource = data.resource;
  }

  static create(
    data: IoK8sApiNetworkingV1alpha1ParentReferenceModelOptions,
  ): IoK8sApiNetworkingV1alpha1ParentReferenceModel {
    return new IoK8sApiNetworkingV1alpha1ParentReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      group: this.group,
      name: this.name,
      namespace: this.namespace,
      resource: this.resource,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1alpha1ParentReferenceModel;
