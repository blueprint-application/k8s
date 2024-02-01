import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1NetworkPolicyPortModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1NetworkPolicyPortModel extends BaseModel {
  // endPort indicates that the range of ports from port to endPort if set, inclusive, should be allowed by the policy. This field cannot be defined if the port field is not defined or if the port field is defined as a named (string) port. The endPort must be equal or greater than port.
  endPort?: number;
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  port?: string;
  // protocol represents the protocol (TCP, UDP, or SCTP) which traffic must match. If not specified, this field defaults to TCP.
  protocol?: string;

  constructor(data: IoK8sApiNetworkingV1NetworkPolicyPortModelOptions) {
    super();
    validate(data);
    this.endPort = data.endPort;
    this.port = data.port;
    this.protocol = data.protocol;
  }

  static create(data: IoK8sApiNetworkingV1NetworkPolicyPortModelOptions): IoK8sApiNetworkingV1NetworkPolicyPortModel {
    return new IoK8sApiNetworkingV1NetworkPolicyPortModel(data);
  }

  toObject(): Partial<this> {
    return {
      endPort: this.endPort,
      port: this.port,
      protocol: this.protocol,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1NetworkPolicyPortModel;
