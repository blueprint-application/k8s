import { IoK8sApiCoreV1EndpointSubsetModelOptions as IoK8sApiCoreV1EndpointSubset } from '../IoK8sApiCoreV1EndpointSubset';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EndpointsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EndpointsModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
  subsets?: Array<IoK8sApiCoreV1EndpointSubset>;

  constructor(data: IoK8sApiCoreV1EndpointsModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.subsets = data.subsets;
  }

  static create(data: IoK8sApiCoreV1EndpointsModelOptions): IoK8sApiCoreV1EndpointsModel {
    return new IoK8sApiCoreV1EndpointsModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      subsets: this.subsets,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EndpointsModel;
