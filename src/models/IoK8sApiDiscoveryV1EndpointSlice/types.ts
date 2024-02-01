import { IoK8sApiDiscoveryV1EndpointModelOptions as IoK8sApiDiscoveryV1Endpoint } from '../IoK8sApiDiscoveryV1Endpoint';
import { IoK8sApiDiscoveryV1EndpointPortModelOptions as IoK8sApiDiscoveryV1EndpointPort } from '../IoK8sApiDiscoveryV1EndpointPort';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiDiscoveryV1EndpointSliceModelOptions {
  addressType: string;
  apiVersion?: string;
  endpoints: Array<IoK8sApiDiscoveryV1Endpoint>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  ports?: Array<IoK8sApiDiscoveryV1EndpointPort>;
}
