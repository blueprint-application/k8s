import { IoK8sApiCoreV1TypedLocalObjectReferenceModelOptions as IoK8sApiCoreV1TypedLocalObjectReference } from '../IoK8sApiCoreV1TypedLocalObjectReference';
import { IoK8sApiNetworkingV1IngressServiceBackendModelOptions as IoK8sApiNetworkingV1IngressServiceBackend } from '../IoK8sApiNetworkingV1IngressServiceBackend';
import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1IngressBackendModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1IngressBackendModel extends BaseModel {
  resource?: IoK8sApiCoreV1TypedLocalObjectReference;
  service?: IoK8sApiNetworkingV1IngressServiceBackend;

  constructor(data: IoK8sApiNetworkingV1IngressBackendModelOptions) {
    super();
    validate(data);
    this.resource = data.resource;
    this.service = data.service;
  }

  static create(data: IoK8sApiNetworkingV1IngressBackendModelOptions): IoK8sApiNetworkingV1IngressBackendModel {
    return new IoK8sApiNetworkingV1IngressBackendModel(data);
  }

  toObject(): Partial<this> {
    return {
      resource: this.resource,
      service: this.service,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1IngressBackendModel;
