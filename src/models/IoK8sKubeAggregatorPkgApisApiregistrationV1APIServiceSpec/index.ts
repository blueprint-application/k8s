import { IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModelOptions as IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference } from '../IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference';
import { BaseModel } from '../types';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModel extends BaseModel {
  // CABundle is a PEM encoded CA bundle which will be used to validate an API server\'s serving certificate. If unspecified, system trust roots on the apiserver are used.
  caBundle?: string;
  // Group is the API group name this server hosts
  group?: string;
  // GroupPriorityMinimum is the priority this group should have at least. Higher priority means that the group is preferred by clients over lower priority ones. Note that other versions of this group might specify even higher GroupPriorityMinimum values such that the whole group gets a higher priority. The primary sort is based on GroupPriorityMinimum, ordered highest number to lowest (20 before 10). The secondary sort is based on the alphabetical comparison of the name of the object.  (v1.bar before v1.foo) We\'d recommend something like: *.k8s.io (except extensions) at 18000 and PaaSes (OpenShift, Deis) are recommended to be in the 2000s
  groupPriorityMinimum: number;
  // InsecureSkipTLSVerify disables TLS certificate verification when communicating with this server. This is strongly discouraged.  You should use the CABundle instead.
  insecureSkipTLSVerify?: boolean;
  service?: IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReference;
  // Version is the API version this server hosts.  For example, \"v1\"
  version?: string;
  // VersionPriority controls the ordering of this API version inside of its group.  Must be greater than zero. The primary sort is based on VersionPriority, ordered highest to lowest (20 before 10). Since it\'s inside of a group, the number can be small, probably in the 10s. In case of equal version priorities, the version string will be used to compute the order inside a group. If the version string is \"kube-like\", it will sort above non \"kube-like\" version strings, which are ordered lexicographically. \"Kube-like\" versions start with a \"v\", then are followed by a number (the major version), then optionally the string \"alpha\" or \"beta\" and another number (the minor version). These are sorted first by GA > beta > alpha (where GA is a version with no suffix such as beta or alpha), and then by comparing major version, then minor version. An example sorted list of versions: v10, v2, v1, v11beta2, v10beta3, v3beta1, v12alpha1, v11alpha2, foo1, foo10.
  versionPriority: number;

  constructor(data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModelOptions) {
    super();
    validate(data);
    this.caBundle = data.caBundle;
    this.group = data.group;
    this.groupPriorityMinimum = data.groupPriorityMinimum;
    this.insecureSkipTLSVerify = data.insecureSkipTLSVerify;
    this.service = data.service;
    this.version = data.version;
    this.versionPriority = data.versionPriority;
  }

  static create(
    data: IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModelOptions,
  ): IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModel {
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      caBundle: this.caBundle,
      group: this.group,
      groupPriorityMinimum: this.groupPriorityMinimum,
      insecureSkipTLSVerify: this.insecureSkipTLSVerify,
      service: this.service,
      version: this.version,
      versionPriority: this.versionPriority,
    } as Partial<this>;
  }
}

export default IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceSpecModel;
