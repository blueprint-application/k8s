import { IoK8sApiResourceV1alpha2PodSchedulingContextModelOptions as IoK8sApiResourceV1alpha2PodSchedulingContext } from '../IoK8sApiResourceV1alpha2PodSchedulingContext';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiResourceV1alpha2PodSchedulingContextListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiResourceV1alpha2PodSchedulingContextListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Items is the list of PodSchedulingContext objects.
  items: Array<IoK8sApiResourceV1alpha2PodSchedulingContext>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiResourceV1alpha2PodSchedulingContextListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiResourceV1alpha2PodSchedulingContextListModelOptions,
  ): IoK8sApiResourceV1alpha2PodSchedulingContextListModel {
    return new IoK8sApiResourceV1alpha2PodSchedulingContextListModel(data);
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

export default IoK8sApiResourceV1alpha2PodSchedulingContextListModel;
