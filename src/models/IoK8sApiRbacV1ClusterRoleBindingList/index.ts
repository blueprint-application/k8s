import { IoK8sApiRbacV1ClusterRoleBindingModelOptions as IoK8sApiRbacV1ClusterRoleBinding } from '../IoK8sApiRbacV1ClusterRoleBinding';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiRbacV1ClusterRoleBindingListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1ClusterRoleBindingListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Items is a list of ClusterRoleBindings
  items: Array<IoK8sApiRbacV1ClusterRoleBinding>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiRbacV1ClusterRoleBindingListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiRbacV1ClusterRoleBindingListModelOptions): IoK8sApiRbacV1ClusterRoleBindingListModel {
    return new IoK8sApiRbacV1ClusterRoleBindingListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      items: this.items,
      kind: this.kind,
      metadata: this.metadata,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1ClusterRoleBindingListModel;
