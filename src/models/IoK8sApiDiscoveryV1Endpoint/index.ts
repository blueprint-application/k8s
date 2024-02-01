import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { IoK8sApiDiscoveryV1EndpointConditionsModelOptions as IoK8sApiDiscoveryV1EndpointConditions } from '../IoK8sApiDiscoveryV1EndpointConditions';
import { IoK8sApiDiscoveryV1EndpointHintsModelOptions as IoK8sApiDiscoveryV1EndpointHints } from '../IoK8sApiDiscoveryV1EndpointHints';
import { BaseModel } from '../types';
import type { IoK8sApiDiscoveryV1EndpointModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiDiscoveryV1EndpointModel extends BaseModel {
  // addresses of this endpoint. The contents of this field are interpreted according to the corresponding EndpointSlice addressType field. Consumers must handle different types of addresses in the context of their own capabilities. This must contain at least one address but no more than 100. These are all assumed to be fungible and clients may choose to only use the first element. Refer to: https://issue.k8s.io/106267
  addresses: Array<string>;
  conditions?: IoK8sApiDiscoveryV1EndpointConditions;
  // deprecatedTopology contains topology information part of the v1beta1 API. This field is deprecated, and will be removed when the v1beta1 API is removed (no sooner than kubernetes v1.24).  While this field can hold values, it is not writable through the v1 API, and any attempts to write to it will be silently ignored. Topology information can be found in the zone and nodeName fields instead.
  deprecatedTopology?: { [key: string]: string };
  hints?: IoK8sApiDiscoveryV1EndpointHints;
  // hostname of this endpoint. This field may be used by consumers of endpoints to distinguish endpoints from each other (e.g. in DNS names). Multiple endpoints which use the same hostname should be considered fungible (e.g. multiple A values in DNS). Must be lowercase and pass DNS Label (RFC 1123) validation.
  hostname?: string;
  // nodeName represents the name of the Node hosting this endpoint. This can be used to determine endpoints local to a Node.
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;
  // zone is the name of the Zone this endpoint exists in.
  zone?: string;

  constructor(data: IoK8sApiDiscoveryV1EndpointModelOptions) {
    super();
    validate(data);
    this.addresses = data.addresses;
    this.conditions = data.conditions;
    this.deprecatedTopology = data.deprecatedTopology;
    this.hints = data.hints;
    this.hostname = data.hostname;
    this.nodeName = data.nodeName;
    this.targetRef = data.targetRef;
    this.zone = data.zone;
  }

  static create(data: IoK8sApiDiscoveryV1EndpointModelOptions): IoK8sApiDiscoveryV1EndpointModel {
    return new IoK8sApiDiscoveryV1EndpointModel(data);
  }

  toObject(): Partial<this> {
    return {
      addresses: this.addresses,
      conditions: this.conditions,
      deprecatedTopology: this.deprecatedTopology,
      hints: this.hints,
      hostname: this.hostname,
      nodeName: this.nodeName,
      targetRef: this.targetRef,
      zone: this.zone,
    } as Partial<this>;
  }
}

export default IoK8sApiDiscoveryV1EndpointModel;
