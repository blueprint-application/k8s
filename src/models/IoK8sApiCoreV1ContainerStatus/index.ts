import { IoK8sApiCoreV1ContainerStateModelOptions as IoK8sApiCoreV1ContainerState } from '../IoK8sApiCoreV1ContainerState';
import { IoK8sApiCoreV1ResourceRequirementsModelOptions as IoK8sApiCoreV1ResourceRequirements } from '../IoK8sApiCoreV1ResourceRequirements';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerStatusModel extends BaseModel {
  // AllocatedResources represents the compute resources allocated for this container by the node. Kubelet sets this value to Container.Resources.Requests upon successful pod admission and after successfully admitting desired pod resize.
  allocatedResources?: { [key: string]: string };
  // ContainerID is the ID of the container in the format \'<type>://<container_id>\'. Where type is a container runtime identifier, returned from Version call of CRI API (for example \"containerd\").
  containerID?: string;
  // Image is the name of container image that the container is running. The container image may not match the image used in the PodSpec, as it may have been resolved by the runtime. More info: https://kubernetes.io/docs/concepts/containers/images.
  image: string;
  // ImageID is the image ID of the container\'s image. The image ID may not match the image ID of the image used in the PodSpec, as it may have been resolved by the runtime.
  imageID: string;
  lastState?: IoK8sApiCoreV1ContainerState;
  // Name is a DNS_LABEL representing the unique name of the container. Each container in a pod must have a unique name across all container types. Cannot be updated.
  name: string;
  // Ready specifies whether the container is currently passing its readiness check. The value will change as readiness probes keep executing. If no readiness probes are specified, this field defaults to true once the container is fully started (see Started field).  The value is typically used to determine whether a container is ready to accept traffic.
  ready: boolean;
  resources?: IoK8sApiCoreV1ResourceRequirements;
  // RestartCount holds the number of times the container has been restarted. Kubelet makes an effort to always increment the value, but there are cases when the state may be lost due to node restarts and then the value may be reset to 0. The value is never negative.
  restartCount: number;
  // Started indicates whether the container has finished its postStart lifecycle hook and passed its startup probe. Initialized as false, becomes true after startupProbe is considered successful. Resets to false when the container is restarted, or if kubelet loses state temporarily. In both cases, startup probes will run again. Is always true when no startupProbe is defined and container is running and has passed the postStart lifecycle hook. The null value must be treated the same as false.
  started?: boolean;
  state?: IoK8sApiCoreV1ContainerState;

  constructor(data: IoK8sApiCoreV1ContainerStatusModelOptions) {
    super();
    validate(data);
    this.allocatedResources = data.allocatedResources;
    this.containerID = data.containerID;
    this.image = data.image;
    this.imageID = data.imageID;
    this.lastState = data.lastState;
    this.name = data.name;
    this.ready = data.ready;
    this.resources = data.resources;
    this.restartCount = data.restartCount;
    this.started = data.started;
    this.state = data.state;
  }

  static create(data: IoK8sApiCoreV1ContainerStatusModelOptions): IoK8sApiCoreV1ContainerStatusModel {
    return new IoK8sApiCoreV1ContainerStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      allocatedResources: this.allocatedResources,
      containerID: this.containerID,
      image: this.image,
      imageID: this.imageID,
      lastState: this.lastState,
      name: this.name,
      ready: this.ready,
      resources: this.resources,
      restartCount: this.restartCount,
      started: this.started,
      state: this.state,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerStatusModel;
