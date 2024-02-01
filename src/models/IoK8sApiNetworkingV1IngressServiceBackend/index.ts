import { IoK8sApiNetworkingV1ServiceBackendPortModelOptions as IoK8sApiNetworkingV1ServiceBackendPort } from '../IoK8sApiNetworkingV1ServiceBackendPort';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressServiceBackendModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressServiceBackendModel extends BaseModel {
  // name is the referenced service. The service must exist in the same namespace as the Ingress object.
  name: string;
  port?: IoK8sApiNetworkingV1ServiceBackendPort;

  constructor(data: IoK8sApiNetworkingV1IngressServiceBackendModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.port = data.port;
  }

  static create(
    data: IoK8sApiNetworkingV1IngressServiceBackendModelOptions,
  ): IoK8sApiNetworkingV1IngressServiceBackendModel {
    return new IoK8sApiNetworkingV1IngressServiceBackendModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      port: this.port,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressServiceBackendModel;
