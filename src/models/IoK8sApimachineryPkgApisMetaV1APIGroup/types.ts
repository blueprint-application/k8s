import { IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscoveryModelOptions as IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery } from '../IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery';
import { IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDRModelOptions as IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR } from '../IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR';

export interface IoK8sApimachineryPkgApisMetaV1APIGroupModelOptions {
  apiVersion?: string;
  kind?: string;
  name: string;
  preferredVersion?: IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery;
  serverAddressByClientCIDRs?: Array<IoK8sApimachineryPkgApisMetaV1ServerAddressByClientCIDR>;
  versions: Array<IoK8sApimachineryPkgApisMetaV1GroupVersionForDiscovery>;
}
