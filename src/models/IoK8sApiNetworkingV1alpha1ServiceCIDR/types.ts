import { IoK8sApiNetworkingV1alpha1ServiceCIDRSpecModelOptions as IoK8sApiNetworkingV1alpha1ServiceCIDRSpec } from '../IoK8sApiNetworkingV1alpha1ServiceCIDRSpec';
import { IoK8sApiNetworkingV1alpha1ServiceCIDRStatusModelOptions as IoK8sApiNetworkingV1alpha1ServiceCIDRStatus } from '../IoK8sApiNetworkingV1alpha1ServiceCIDRStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiNetworkingV1alpha1ServiceCIDRModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiNetworkingV1alpha1ServiceCIDRSpec;
  status?: IoK8sApiNetworkingV1alpha1ServiceCIDRStatus;
}
