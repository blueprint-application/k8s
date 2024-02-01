import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TypedObjectReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TypedObjectReferenceModel extends BaseModel {
  // APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  apiGroup?: string;
  // Kind is the type of resource being referenced
  kind: string;
  // Name is the name of resource being referenced
  name: string;
  // Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace\'s owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  namespace?: string;

  constructor(data: IoK8sApiCoreV1TypedObjectReferenceModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
  }

  static create(data: IoK8sApiCoreV1TypedObjectReferenceModelOptions): IoK8sApiCoreV1TypedObjectReferenceModel {
    return new IoK8sApiCoreV1TypedObjectReferenceModel(data);
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

export default IoK8sApiCoreV1TypedObjectReferenceModel;
