import { BaseModel } from '../types';
import type { IoK8sApiCoreV1GRPCActionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1GRPCActionModel extends BaseModel {
  // Port number of the gRPC service. Number must be in the range 1 to 65535.
  port: number;
  // Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).  If this is not specified, the default behavior is defined by gRPC.
  service?: string;

  constructor(data: IoK8sApiCoreV1GRPCActionModelOptions) {
    super();
    validate(data);
    this.port = data.port;
    this.service = data.service;
  }

  static create(data: IoK8sApiCoreV1GRPCActionModelOptions): IoK8sApiCoreV1GRPCActionModel {
    return new IoK8sApiCoreV1GRPCActionModel(data);
  }

  toObject(): Partial<this> {
    return {
      port: this.port,
      service: this.service,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1GRPCActionModel;
