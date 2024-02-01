import { IoK8sApiDiscoveryV1EndpointSliceModelOptions as IoK8sApiDiscoveryV1EndpointSlice } from '../IoK8sApiDiscoveryV1EndpointSlice';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiDiscoveryV1EndpointSliceListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiDiscoveryV1EndpointSliceListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is the list of endpoint slices
  items: Array<IoK8sApiDiscoveryV1EndpointSlice>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiDiscoveryV1EndpointSliceListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(data: IoK8sApiDiscoveryV1EndpointSliceListModelOptions): IoK8sApiDiscoveryV1EndpointSliceListModel {
    return new IoK8sApiDiscoveryV1EndpointSliceListModel(data);
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

export default IoK8sApiDiscoveryV1EndpointSliceListModel;
