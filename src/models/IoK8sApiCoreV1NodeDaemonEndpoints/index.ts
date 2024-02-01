import { IoK8sApiCoreV1DaemonEndpointModelOptions as IoK8sApiCoreV1DaemonEndpoint } from '../IoK8sApiCoreV1DaemonEndpoint';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1NodeDaemonEndpointsModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1NodeDaemonEndpointsModel extends BaseModel {
  kubeletEndpoint?: IoK8sApiCoreV1DaemonEndpoint;

  constructor(data: IoK8sApiCoreV1NodeDaemonEndpointsModelOptions) {
    super();
    validate(data);
    this.kubeletEndpoint = data.kubeletEndpoint;
  }

  static create(data: IoK8sApiCoreV1NodeDaemonEndpointsModelOptions): IoK8sApiCoreV1NodeDaemonEndpointsModel {
    return new IoK8sApiCoreV1NodeDaemonEndpointsModel(data);
  }

  toObject(): Partial<this> {
    return {
      kubeletEndpoint: this.kubeletEndpoint,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1NodeDaemonEndpointsModel;
