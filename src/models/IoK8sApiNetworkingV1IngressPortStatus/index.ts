import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressPortStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressPortStatusModel extends BaseModel {
  // error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use   CamelCase names - cloud provider specific error values must have names that comply with the   format foo.example.com/CamelCase.
  error?: string;
  // port is the port number of the ingress port.
  port: number;
  // protocol is the protocol of the ingress port. The supported values are: \"TCP\", \"UDP\", \"SCTP\"
  protocol: string;

  constructor(data: IoK8sApiNetworkingV1IngressPortStatusModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.port = data.port;
    this.protocol = data.protocol;
  }

  static create(data: IoK8sApiNetworkingV1IngressPortStatusModelOptions): IoK8sApiNetworkingV1IngressPortStatusModel {
    return new IoK8sApiNetworkingV1IngressPortStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      port: this.port,
      protocol: this.protocol,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressPortStatusModel;
