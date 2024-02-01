import { IoK8sApiStorageV1alpha1VolumeAttributesClassModelOptions as IoK8sApiStorageV1alpha1VolumeAttributesClass } from '../IoK8sApiStorageV1alpha1VolumeAttributesClass';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiStorageV1alpha1VolumeAttributesClassListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiStorageV1alpha1VolumeAttributesClassListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is the list of VolumeAttributesClass objects.
  items: Array<IoK8sApiStorageV1alpha1VolumeAttributesClass>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiStorageV1alpha1VolumeAttributesClassListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiStorageV1alpha1VolumeAttributesClassListModelOptions,
  ): IoK8sApiStorageV1alpha1VolumeAttributesClassListModel {
    return new IoK8sApiStorageV1alpha1VolumeAttributesClassListModel(data);
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

export default IoK8sApiStorageV1alpha1VolumeAttributesClassListModel;
