import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressClassParametersReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressClassParametersReferenceModel extends BaseModel {
  // apiGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  apiGroup?: string;
  // kind is the type of resource being referenced.
  kind: string;
  // name is the name of resource being referenced.
  name: string;
  // namespace is the namespace of the resource being referenced. This field is required when scope is set to \"Namespace\" and must be unset when scope is set to \"Cluster\".
  namespace?: string;
  // scope represents if this refers to a cluster or namespace scoped resource. This may be set to \"Cluster\" (default) or \"Namespace\".
  scope?: string;

  constructor(data: IoK8sApiNetworkingV1IngressClassParametersReferenceModelOptions) {
    super();
    validate(data);
    this.apiGroup = data.apiGroup;
    this.kind = data.kind;
    this.name = data.name;
    this.namespace = data.namespace;
    this.scope = data.scope;
  }

  static create(
    data: IoK8sApiNetworkingV1IngressClassParametersReferenceModelOptions,
  ): IoK8sApiNetworkingV1IngressClassParametersReferenceModel {
    return new IoK8sApiNetworkingV1IngressClassParametersReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiGroup: this.apiGroup,
      kind: this.kind,
      name: this.name,
      namespace: this.namespace,
      scope: this.scope,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressClassParametersReferenceModel;
