import { IoK8sApiCoreV1NodeConfigSourceModelOptions as IoK8sApiCoreV1NodeConfigSource } from '../IoK8sApiCoreV1NodeConfigSource';
import { IoK8sApiCoreV1TaintModelOptions as IoK8sApiCoreV1Taint } from '../IoK8sApiCoreV1Taint';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeSpecModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeSpecModel extends BaseModel {
  configSource?: IoK8sApiCoreV1NodeConfigSource;
  // Deprecated. Not all kubelets will set this field. Remove field after 1.13. see: https://issues.k8s.io/61966
  externalID?: string;
  // PodCIDR represents the pod IP range assigned to the node.
  podCIDR?: string;
  // podCIDRs represents the IP ranges assigned to the node for usage by Pods on that node. If this field is specified, the 0th entry must match the podCIDR field. It may contain at most 1 value for each of IPv4 and IPv6.
  podCIDRs?: Array<string>;
  // ID of the node assigned by the cloud provider in the format: <ProviderName>://<ProviderSpecificNodeID>
  providerID?: string;
  // If specified, the node\'s taints.
  taints?: Array<IoK8sApiCoreV1Taint>;
  // Unschedulable controls node schedulability of new pods. By default, node is schedulable. More info: https://kubernetes.io/docs/concepts/nodes/node/#manual-node-administration
  unschedulable?: boolean;

  constructor(data: IoK8sApiCoreV1NodeSpecModelOptions) {
    super();
    validate(data);
    this.configSource = data.configSource;
    this.externalID = data.externalID;
    this.podCIDR = data.podCIDR;
    this.podCIDRs = data.podCIDRs;
    this.providerID = data.providerID;
    this.taints = data.taints;
    this.unschedulable = data.unschedulable;
  }

  static create(data: IoK8sApiCoreV1NodeSpecModelOptions): IoK8sApiCoreV1NodeSpecModel {
    return new IoK8sApiCoreV1NodeSpecModel(data);
  }

  toObject(): Partial<this> {
    return {
      configSource: this.configSource,
      externalID: this.externalID,
      podCIDR: this.podCIDR,
      podCIDRs: this.podCIDRs,
      providerID: this.providerID,
      taints: this.taints,
      unschedulable: this.unschedulable,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeSpecModel;
