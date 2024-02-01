import { BaseModel } from '../types';
import type { IoK8sApiCoreV1DaemonEndpointModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1DaemonEndpointModel extends BaseModel {
  // Port number of the given endpoint.
  port: number;

  constructor(data: IoK8sApiCoreV1DaemonEndpointModelOptions) {
    super();
    validate(data);
    this.port = data.port;
  }

  static create(data: IoK8sApiCoreV1DaemonEndpointModelOptions): IoK8sApiCoreV1DaemonEndpointModel {
    return new IoK8sApiCoreV1DaemonEndpointModel(data);
  }

  toObject(): Partial<this> {
    return {
      port: this.port,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1DaemonEndpointModel;
