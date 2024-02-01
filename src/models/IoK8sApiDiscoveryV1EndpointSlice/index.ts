import { IoK8sApiDiscoveryV1EndpointModelOptions as IoK8sApiDiscoveryV1Endpoint } from '../IoK8sApiDiscoveryV1Endpoint';
import { IoK8sApiDiscoveryV1EndpointPortModelOptions as IoK8sApiDiscoveryV1EndpointPort } from '../IoK8sApiDiscoveryV1EndpointPort';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiDiscoveryV1EndpointSliceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiDiscoveryV1EndpointSliceModel extends BaseModel {
  // addressType specifies the type of address carried by this EndpointSlice. All addresses in this slice must be the same type. This field is immutable after creation. The following address types are currently supported: * IPv4: Represents an IPv4 Address. * IPv6: Represents an IPv6 Address. * FQDN: Represents a Fully Qualified Domain Name.
  addressType: string;
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // endpoints is a list of unique endpoints in this slice. Each slice may include a maximum of 1000 endpoints.
  endpoints: Array<IoK8sApiDiscoveryV1Endpoint>;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // ports specifies the list of network ports exposed by each endpoint in this slice. Each port must have a unique name. When ports is empty, it indicates that there are no defined ports. When a port is defined with a nil port value, it indicates \"all ports\". Each slice may include a maximum of 100 ports.
  ports?: Array<IoK8sApiDiscoveryV1EndpointPort>;

  constructor(data: IoK8sApiDiscoveryV1EndpointSliceModelOptions) {
    super();
    validate(data);
    this.addressType = data.addressType;
    this.apiVersion = data.apiVersion;
    this.endpoints = data.endpoints;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.ports = data.ports;
  }

  static create(data: IoK8sApiDiscoveryV1EndpointSliceModelOptions): IoK8sApiDiscoveryV1EndpointSliceModel {
    return new IoK8sApiDiscoveryV1EndpointSliceModel(data);
  }

  toObject(): Partial<this> {
    return {
      addressType: this.addressType,
      apiVersion: this.apiVersion,
      endpoints: this.endpoints,
      kind: this.kind,
      metadata: this.metadata,
      ports: this.ports,
    } as Partial<this>;
  }
}

export default IoK8sApiDiscoveryV1EndpointSliceModel;
