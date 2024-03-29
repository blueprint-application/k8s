import { IoK8sApiCoreV1ContainerStatusModelOptions as IoK8sApiCoreV1ContainerStatus } from '../IoK8sApiCoreV1ContainerStatus';
import { IoK8sApiCoreV1HostIPModelOptions as IoK8sApiCoreV1HostIP } from '../IoK8sApiCoreV1HostIP';
import { IoK8sApiCoreV1PodConditionModelOptions as IoK8sApiCoreV1PodCondition } from '../IoK8sApiCoreV1PodCondition';
import { IoK8sApiCoreV1PodIPModelOptions as IoK8sApiCoreV1PodIP } from '../IoK8sApiCoreV1PodIP';
import { IoK8sApiCoreV1PodResourceClaimStatusModelOptions as IoK8sApiCoreV1PodResourceClaimStatus } from '../IoK8sApiCoreV1PodResourceClaimStatus';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PodStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PodStatusModel extends BaseModel {
  // Current service state of pod. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-conditions
  conditions?: Array<IoK8sApiCoreV1PodCondition>;
  // The list has one entry per container in the manifest. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
  containerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
  // Status for any ephemeral containers that have run in this pod.
  ephemeralContainerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
  // hostIP holds the IP address of the host to which the pod is assigned. Empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns mean that HostIP will not be updated even if there is a node is assigned to pod
  hostIP?: string;
  // hostIPs holds the IP addresses allocated to the host. If this field is specified, the first entry must match the hostIP field. This list is empty if the pod has not started yet. A pod can be assigned to a node that has a problem in kubelet which in turns means that HostIPs will not be updated even if there is a node is assigned to this pod.
  hostIPs?: Array<IoK8sApiCoreV1HostIP>;
  // The list has one entry per init container in the manifest. The most recent successful init container will have ready = true, the most recently started container will have startTime set. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-and-container-status
  initContainerStatuses?: Array<IoK8sApiCoreV1ContainerStatus>;
  // A human readable message indicating details about why the pod is in this condition.
  message?: string;
  // nominatedNodeName is set only when this pod preempts other pods on the node, but it cannot be scheduled right away as preemption victims receive their graceful termination periods. This field does not guarantee that the pod will be scheduled on this node. Scheduler may decide to place the pod elsewhere if other nodes become available sooner. Scheduler may also decide to give the resources on this node to a higher priority pod that is created after preemption. As a result, this field may be different than PodSpec.nodeName when the pod is scheduled.
  nominatedNodeName?: string;
  // The phase of a Pod is a simple, high-level summary of where the Pod is in its lifecycle. The conditions array, the reason and message fields, and the individual container status arrays contain more detail about the pod\'s status. There are five possible phase values:  Pending: The pod has been accepted by the Kubernetes system, but one or more of the container images has not been created. This includes time before being scheduled as well as time spent downloading images over the network, which could take a while. Running: The pod has been bound to a node, and all of the containers have been created. At least one container is still running, or is in the process of starting or restarting. Succeeded: All containers in the pod have terminated in success, and will not be restarted. Failed: All containers in the pod have terminated, and at least one container has terminated in failure. The container either exited with non-zero status or was terminated by the system. Unknown: For some reason the state of the pod could not be obtained, typically due to an error in communicating with the host of the pod.  More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
  phase?: string;
  // podIP address allocated to the pod. Routable at least within the cluster. Empty if not yet allocated.
  podIP?: string;
  // podIPs holds the IP addresses allocated to the pod. If this field is specified, the 0th entry must match the podIP field. Pods may be allocated at most 1 value for each of IPv4 and IPv6. This list is empty if no IPs have been allocated yet.
  podIPs?: Array<IoK8sApiCoreV1PodIP>;
  // The Quality of Service (QOS) classification assigned to the pod based on resource requirements See PodQOSClass type for available QOS classes More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/#quality-of-service-classes
  qosClass?: string;
  // A brief CamelCase message indicating details about why the pod is in this state. e.g. \'Evicted\'
  reason?: string;
  // Status of resources resize desired for pod\'s containers. It is empty if no resources resize is pending. Any changes to container resources will automatically set this to \"Proposed\"
  resize?: string;
  // Status of resource claims.
  resourceClaimStatuses?: Array<IoK8sApiCoreV1PodResourceClaimStatus>;
  // Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
  startTime?: Date;

  constructor(data: IoK8sApiCoreV1PodStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.containerStatuses = data.containerStatuses;
    this.ephemeralContainerStatuses = data.ephemeralContainerStatuses;
    this.hostIP = data.hostIP;
    this.hostIPs = data.hostIPs;
    this.initContainerStatuses = data.initContainerStatuses;
    this.message = data.message;
    this.nominatedNodeName = data.nominatedNodeName;
    this.phase = data.phase;
    this.podIP = data.podIP;
    this.podIPs = data.podIPs;
    this.qosClass = data.qosClass;
    this.reason = data.reason;
    this.resize = data.resize;
    this.resourceClaimStatuses = data.resourceClaimStatuses;
    this.startTime = data.startTime;
  }

  static create(data: IoK8sApiCoreV1PodStatusModelOptions): IoK8sApiCoreV1PodStatusModel {
    return new IoK8sApiCoreV1PodStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      containerStatuses: this.containerStatuses,
      ephemeralContainerStatuses: this.ephemeralContainerStatuses,
      hostIP: this.hostIP,
      hostIPs: this.hostIPs,
      initContainerStatuses: this.initContainerStatuses,
      message: this.message,
      nominatedNodeName: this.nominatedNodeName,
      phase: this.phase,
      podIP: this.podIP,
      podIPs: this.podIPs,
      qosClass: this.qosClass,
      reason: this.reason,
      resize: this.resize,
      resourceClaimStatuses: this.resourceClaimStatuses,
      startTime: this.startTime,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PodStatusModel;
