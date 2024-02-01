import { IoK8sApiRbacV1RoleRefModelOptions as IoK8sApiRbacV1RoleRef } from '../IoK8sApiRbacV1RoleRef';
import { IoK8sApiRbacV1SubjectModelOptions as IoK8sApiRbacV1Subject } from '../IoK8sApiRbacV1Subject';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiRbacV1ClusterRoleBindingModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiRbacV1ClusterRoleBindingModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  roleRef: IoK8sApiRbacV1RoleRef;
  // Subjects holds references to the objects the role applies to.
  subjects?: Array<IoK8sApiRbacV1Subject>;

  constructor(data: IoK8sApiRbacV1ClusterRoleBindingModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.roleRef = data.roleRef;
    this.subjects = data.subjects;
  }

  static create(data: IoK8sApiRbacV1ClusterRoleBindingModelOptions): IoK8sApiRbacV1ClusterRoleBindingModel {
    return new IoK8sApiRbacV1ClusterRoleBindingModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      roleRef: this.roleRef,
      subjects: this.subjects,
    } as Partial<this>;
  }
}

export default IoK8sApiRbacV1ClusterRoleBindingModel;
