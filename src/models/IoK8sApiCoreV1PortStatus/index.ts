import { BaseModel } from '../types';
import type { IoK8sApiCoreV1PortStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1PortStatusModel extends BaseModel {
  // Error is to record the problem with the service port The format of the error shall comply with the following rules: - built-in error values shall be specified in this file and those shall use   CamelCase names - cloud provider specific error values must have names that comply with the   format foo.example.com/CamelCase.
  error?: string;
  // Port is the port number of the service port of which status is recorded here
  port: number;
  // Protocol is the protocol of the service port of which status is recorded here The supported values are: \"TCP\", \"UDP\", \"SCTP\"
  protocol: string;

  constructor(data: IoK8sApiCoreV1PortStatusModelOptions) {
    super();
    validate(data);
    this.error = data.error;
    this.port = data.port;
    this.protocol = data.protocol;
  }

  static create(data: IoK8sApiCoreV1PortStatusModelOptions): IoK8sApiCoreV1PortStatusModel {
    return new IoK8sApiCoreV1PortStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      error: this.error,
      port: this.port,
      protocol: this.protocol,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1PortStatusModel;
