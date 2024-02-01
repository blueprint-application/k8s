import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ContainerPortModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ContainerPortModel extends BaseModel {
  // Number of port to expose on the pod\'s IP address. This must be a valid port number, 0 < x < 65536.
  containerPort: number;
  // What host IP to bind the external port to.
  hostIP?: string;
  // Number of port to expose on the host. If specified, this must be a valid port number, 0 < x < 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this.
  hostPort?: number;
  // If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services.
  name?: string;
  // Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \"TCP\".
  protocol?: string;

  constructor(data: IoK8sApiCoreV1ContainerPortModelOptions) {
    super();
    validate(data);
    this.containerPort = data.containerPort;
    this.hostIP = data.hostIP;
    this.hostPort = data.hostPort;
    this.name = data.name;
    this.protocol = data.protocol;
  }

  static create(data: IoK8sApiCoreV1ContainerPortModelOptions): IoK8sApiCoreV1ContainerPortModel {
    return new IoK8sApiCoreV1ContainerPortModel(data);
  }

  toObject(): Partial<this> {
    return {
      containerPort: this.containerPort,
      hostIP: this.hostIP,
      hostPort: this.hostPort,
      name: this.name,
      protocol: this.protocol,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ContainerPortModel;
