import { BaseModel } from '../types';
import type { IoK8sApiNetworkingV1ServiceBackendPortModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNetworkingV1ServiceBackendPortModel extends BaseModel {
  // name is the name of the port on the Service. This is a mutually exclusive setting with \"Number\".
  name?: string;
  // number is the numerical port number (e.g. 80) on the Service. This is a mutually exclusive setting with \"Name\".
  number?: number;

  constructor(data: IoK8sApiNetworkingV1ServiceBackendPortModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.number = data.number;
  }

  static create(data: IoK8sApiNetworkingV1ServiceBackendPortModelOptions): IoK8sApiNetworkingV1ServiceBackendPortModel {
    return new IoK8sApiNetworkingV1ServiceBackendPortModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      number: this.number,
    } as Partial<this>;
  }
}

export default IoK8sApiNetworkingV1ServiceBackendPortModel;
