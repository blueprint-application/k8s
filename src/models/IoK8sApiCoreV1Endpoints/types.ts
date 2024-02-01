import { IoK8sApiCoreV1EndpointSubsetModelOptions as IoK8sApiCoreV1EndpointSubset } from '../IoK8sApiCoreV1EndpointSubset';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiCoreV1EndpointsModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  subsets?: Array<IoK8sApiCoreV1EndpointSubset>;
}
