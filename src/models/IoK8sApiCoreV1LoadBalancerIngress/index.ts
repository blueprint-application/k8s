import { IoK8sApiCoreV1PortStatusModelOptions as IoK8sApiCoreV1PortStatus } from '../IoK8sApiCoreV1PortStatus';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LoadBalancerIngressModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LoadBalancerIngressModel extends BaseModel {
  // Hostname is set for load-balancer ingress points that are DNS based (typically AWS load-balancers)
  hostname?: string;
  // IP is set for load-balancer ingress points that are IP based (typically GCE or OpenStack load-balancers)
  ip?: string;
  // IPMode specifies how the load-balancer IP behaves, and may only be specified when the ip field is specified. Setting this to \"VIP\" indicates that traffic is delivered to the node with the destination set to the load-balancer\'s IP and port. Setting this to \"Proxy\" indicates that traffic is delivered to the node or pod with the destination set to the node\'s IP and node port or the pod\'s IP and port. Service implementations may use this information to adjust traffic routing.
  ipMode?: string;
  // Ports is a list of records of service ports If used, every port defined in the service should have an entry in it
  ports?: Array<IoK8sApiCoreV1PortStatus>;

  constructor(data: IoK8sApiCoreV1LoadBalancerIngressModelOptions) {
    super();
    validate(data);
    this.hostname = data.hostname;
    this.ip = data.ip;
    this.ipMode = data.ipMode;
    this.ports = data.ports;
  }

  static create(data: IoK8sApiCoreV1LoadBalancerIngressModelOptions): IoK8sApiCoreV1LoadBalancerIngressModel {
    return new IoK8sApiCoreV1LoadBalancerIngressModel(data);
  }

  toObject(): Partial<this> {
    return {
      hostname: this.hostname,
      ip: this.ip,
      ipMode: this.ipMode,
      ports: this.ports,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LoadBalancerIngressModel;
