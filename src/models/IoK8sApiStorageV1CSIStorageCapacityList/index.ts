import { IoK8sApiStorageV1CSIStorageCapacityModelOptions as IoK8sApiStorageV1CSIStorageCapacity } from '../IoK8sApiStorageV1CSIStorageCapacity';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1CSIStorageCapacityListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1CSIStorageCapacityListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is the list of CSIStorageCapacity objects.
  items: Array<IoK8sApiStorageV1CSIStorageCapacity>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiStorageV1CSIStorageCapacityListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiStorageV1CSIStorageCapacityListModelOptions,
  ): IoK8sApiStorageV1CSIStorageCapacityListModel {
    return new IoK8sApiStorageV1CSIStorageCapacityListModel(data);
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

export default IoK8sApiStorageV1CSIStorageCapacityListModel;
