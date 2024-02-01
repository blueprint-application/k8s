import { IoK8sApiCoreV1PodDNSConfigOptionModelOptions as IoK8sApiCoreV1PodDNSConfigOption } from '../IoK8sApiCoreV1PodDNSConfigOption';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodDNSConfigModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodDNSConfigModel extends BaseModel {
  // A list of DNS name server IP addresses. This will be appended to the base nameservers generated from DNSPolicy. Duplicated nameservers will be removed.
  nameservers?: Array<string>;
  // A list of DNS resolver options. This will be merged with the base options generated from DNSPolicy. Duplicated entries will be removed. Resolution options given in Options will override those that appear in the base DNSPolicy.
  options?: Array<IoK8sApiCoreV1PodDNSConfigOption>;
  // A list of DNS search domains for host-name lookup. This will be appended to the base search paths generated from DNSPolicy. Duplicated search paths will be removed.
  searches?: Array<string>;

  constructor(data: IoK8sApiCoreV1PodDNSConfigModelOptions) {
    super();
    validate(data);
    this.nameservers = data.nameservers;
    this.options = data.options;
    this.searches = data.searches;
  }

  static create(data: IoK8sApiCoreV1PodDNSConfigModelOptions): IoK8sApiCoreV1PodDNSConfigModel {
    return new IoK8sApiCoreV1PodDNSConfigModel(data);
  }

  toObject(): Partial<this> {
    return {
      nameservers: this.nameservers,
      options: this.options,
      searches: this.searches,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodDNSConfigModel;
