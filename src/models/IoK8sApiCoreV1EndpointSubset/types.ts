import { IoK8sApiCoreV1EndpointAddressModelOptions as IoK8sApiCoreV1EndpointAddress } from '../IoK8sApiCoreV1EndpointAddress';
import { IoK8sApiCoreV1EndpointPortModelOptions as IoK8sApiCoreV1EndpointPort } from '../IoK8sApiCoreV1EndpointPort';

export interface IoK8sApiCoreV1EndpointSubsetModelOptions {
  addresses?: Array<IoK8sApiCoreV1EndpointAddress>;
  notReadyAddresses?: Array<IoK8sApiCoreV1EndpointAddress>;
  ports?: Array<IoK8sApiCoreV1EndpointPort>;
}
