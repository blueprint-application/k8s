import { IoK8sApimachineryPkgApisMetaV1APIGroupModelOptions as IoK8sApimachineryPkgApisMetaV1APIGroup } from '../IoK8sApimachineryPkgApisMetaV1APIGroup';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1APIGroupListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1APIGroupListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // groups is a list of APIGroup.
  groups: Array<IoK8sApimachineryPkgApisMetaV1APIGroup>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1APIGroupListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.groups = data.groups;
    this.kind = data.kind;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1APIGroupListModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1APIGroupListModel {
    return new IoK8sApimachineryPkgApisMetaV1APIGroupListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      groups: this.groups,
      kind: this.kind,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1APIGroupListModel;
