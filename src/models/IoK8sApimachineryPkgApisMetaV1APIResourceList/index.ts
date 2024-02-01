import { IoK8sApimachineryPkgApisMetaV1APIResourceModelOptions as IoK8sApimachineryPkgApisMetaV1APIResource } from '../IoK8sApimachineryPkgApisMetaV1APIResource';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1APIResourceListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1APIResourceListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // groupVersion is the group and version this APIResourceList is for.
  groupVersion: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // resources contains the name of the resources and if they are namespaced.
  resources: Array<IoK8sApimachineryPkgApisMetaV1APIResource>;

  constructor(data: IoK8sApimachineryPkgApisMetaV1APIResourceListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.groupVersion = data.groupVersion;
    this.kind = data.kind;
    this.resources = data.resources;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1APIResourceListModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1APIResourceListModel {
    return new IoK8sApimachineryPkgApisMetaV1APIResourceListModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      groupVersion: this.groupVersion,
      kind: this.kind,
      resources: this.resources,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1APIResourceListModel;
