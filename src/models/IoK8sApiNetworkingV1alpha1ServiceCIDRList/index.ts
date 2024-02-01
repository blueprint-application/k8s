import { IoK8sApiNetworkingV1alpha1ServiceCIDRModelOptions as IoK8sApiNetworkingV1alpha1ServiceCIDR } from '../IoK8sApiNetworkingV1alpha1ServiceCIDR';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1alpha1ServiceCIDRListModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1alpha1ServiceCIDRListModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // items is the list of ServiceCIDRs.
  items: Array<IoK8sApiNetworkingV1alpha1ServiceCIDR>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;

  constructor(data: IoK8sApiNetworkingV1alpha1ServiceCIDRListModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.items = data.items;
    this.kind = data.kind;
    this.metadata = data.metadata;
  }

  static create(
    data: IoK8sApiNetworkingV1alpha1ServiceCIDRListModelOptions,
  ): IoK8sApiNetworkingV1alpha1ServiceCIDRListModel {
    return new IoK8sApiNetworkingV1alpha1ServiceCIDRListModel(data);
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

export default IoK8sApiNetworkingV1alpha1ServiceCIDRListModel;
