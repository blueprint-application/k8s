import { IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModelOptions as IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from '../IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModelOptions as IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from '../IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1APIGroupModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1APIGroupModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // name is the name of the group.
  name: string;
  preferredVersion?: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
  // a map of client CIDR to server address that is serving this group. This is to help clients reach servers in the most network-efficient way possible. Clients can use the appropriate server address as per the CIDR that they match. In case of multiple matches, clients should use the longest matching CIDR. The server returns only those CIDRs that it thinks that the client can match. For example: the master will return an internal IP CIDR only, if the client reaches the server using an internal IP. Server looks at X-Forwarded-For header or X-Real-Ip header or request.RemoteAddr (in that order) to get the client IP.
  serverAddressByClientCIDRs?: Array<IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
  // versions are the versions supported in this group.
  versions: Array<IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery>;

  constructor(data: IoK8sApimachineryPkgApisMetaV1APIGroupModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.name = data.name;
    this.preferredVersion = data.preferredVersion;
    this.serverAddressByClientCIDRs = data.serverAddressByClientCIDRs;
    this.versions = data.versions;
  }

  static create(data: IoK8sApimachineryPkgApisMetaV1APIGroupModelOptions): IoK8sApimachineryPkgApisMetaV1APIGroupModel {
    return new IoK8sApimachineryPkgApisMetaV1APIGroupModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      name: this.name,
      preferredVersion: this.preferredVersion,
      serverAddressByClientCIDRs: this.serverAddressByClientCIDRs,
      versions: this.versions,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1APIGroupModel;
