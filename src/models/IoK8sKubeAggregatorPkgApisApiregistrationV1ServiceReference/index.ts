import { BaseModel } from '../types';
import type { IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModel extends BaseModel {
  // Name is the name of the service
  name?: string;
  // Namespace is the namespace of the service
  namespace?: string;
  // If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
  port?: number;

  constructor(data: IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
    this.port = data.port;
  }

  static create(
    data: IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModelOptions,
  ): IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModel {
    return new IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      namespace: this.namespace,
      port: this.port,
    } as Partial<this>;
  }
}

export default IoK8sKubeAggregatorPkgApisApiregistrationV1ServiceReferenceModel;
