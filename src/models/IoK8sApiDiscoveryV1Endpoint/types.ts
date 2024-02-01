import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApiDiscoveryV1EndpointConditionsModelOptions as IoK8sApiDiscoveryV1EndpointConditions } from '../IoK8sApiDiscoveryV1EndpointConditions';
import { IoK8sApiDiscoveryV1EndpointHintsModelOptions as IoK8sApiDiscoveryV1EndpointHints } from '../IoK8sApiDiscoveryV1EndpointHints';

export interface IoK8sApiDiscoveryV1EndpointModelOptions {
  addresses: Array<string>;
  conditions?: IoK8sApiDiscoveryV1EndpointConditions;
  deprecatedTopology?: { [key: string]: string };
  hints?: IoK8sApiDiscoveryV1EndpointHints;
  hostname?: string;
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;
  zone?: string;
}
