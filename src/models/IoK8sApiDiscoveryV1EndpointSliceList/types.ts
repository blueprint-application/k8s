import { IoK8sApiDiscoveryV1EndpointSliceModelOptions as IoK8sApiDiscoveryV1EndpointSlice } from '../IoK8sApiDiscoveryV1EndpointSlice';
import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';

export interface IoK8sApiDiscoveryV1EndpointSliceListModelOptions {
  apiVersion?: string;
  items: Array<IoK8sApiDiscoveryV1EndpointSlice>;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
}
