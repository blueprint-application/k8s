import { IoK8sApiCoreV1AttachedVolumeModelOptions as IoK8sApiCoreV1AttachedVolume } from '../IoK8sApiCoreV1AttachedVolume';
import { IoK8sApiCoreV1ContainerImageModelOptions as IoK8sApiCoreV1ContainerImage } from '../IoK8sApiCoreV1ContainerImage';
import { IoK8sApiCoreV1NodeAddressModelOptions as IoK8sApiCoreV1NodeAddress } from '../IoK8sApiCoreV1NodeAddress';
import { IoK8sApiCoreV1NodeConditionModelOptions as IoK8sApiCoreV1NodeCondition } from '../IoK8sApiCoreV1NodeCondition';
import { IoK8sApiCoreV1NodeConfigStatusModelOptions as IoK8sApiCoreV1NodeConfigStatus } from '../IoK8sApiCoreV1NodeConfigStatus';
import { IoK8sApiCoreV1NodeDaemonEndpointsModelOptions as IoK8sApiCoreV1NodeDaemonEndpoints } from '../IoK8sApiCoreV1NodeDaemonEndpoints';
import { IoK8sApiCoreV1NodeSystemInfoModelOptions as IoK8sApiCoreV1NodeSystemInfo } from '../IoK8sApiCoreV1NodeSystemInfo';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeStatusModel extends BaseModel {
  // List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node\'s address in its own status or consumers of the downward API (status.hostIP).
  addresses?: Array<IoK8sApiCoreV1NodeAddress>;
  // Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
  allocatable?: { [key: string]: string };
  // Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
  capacity?: { [key: string]: string };
  // Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
  conditions?: Array<IoK8sApiCoreV1NodeCondition>;
  config?: IoK8sApiCoreV1NodeConfigStatus;
  daemonEndpoints?: IoK8sApiCoreV1NodeDaemonEndpoints;
  // List of container images on this node
  images?: Array<IoK8sApiCoreV1ContainerImage>;
  nodeInfo?: IoK8sApiCoreV1NodeSystemInfo;
  // NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
  phase?: string;
  // List of volumes that are attached to the node.
  volumesAttached?: Array<IoK8sApiCoreV1AttachedVolume>;
  // List of attachable volumes in use (mounted) by the node.
  volumesInUse?: Array<string>;

  constructor(data: IoK8sApiCoreV1NodeStatusModelOptions) {
    super();
    validate(data);
    this.addresses = data.addresses;
    this.allocatable = data.allocatable;
    this.capacity = data.capacity;
    this.conditions = data.conditions;
    this.config = data.config;
    this.daemonEndpoints = data.daemonEndpoints;
    this.images = data.images;
    this.nodeInfo = data.nodeInfo;
    this.phase = data.phase;
    this.volumesAttached = data.volumesAttached;
    this.volumesInUse = data.volumesInUse;
  }

  static create(data: IoK8sApiCoreV1NodeStatusModelOptions): IoK8sApiCoreV1NodeStatusModel {
    return new IoK8sApiCoreV1NodeStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      addresses: this.addresses,
      allocatable: this.allocatable,
      capacity: this.capacity,
      conditions: this.conditions,
      config: this.config,
      daemonEndpoints: this.daemonEndpoints,
      images: this.images,
      nodeInfo: this.nodeInfo,
      phase: this.phase,
      volumesAttached: this.volumesAttached,
      volumesInUse: this.volumesInUse,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeStatusModel;
