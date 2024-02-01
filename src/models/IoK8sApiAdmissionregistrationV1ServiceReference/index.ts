import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1ServiceReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1ServiceReferenceModel extends BaseModel {
  // `name` is the name of the service. Required
  name: string;
  // `namespace` is the namespace of the service. Required
  namespace: string;
  // `path` is an optional URL path which will be sent in any request to this service.
  path?: string;
  // If specified, the port on the service that hosting webhook. Default to 443 for backward compatibility. `port` should be a valid port number (1-65535, inclusive).
  port?: number;

  constructor(data: IoK8sApiAdmissionregistrationV1ServiceReferenceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
    this.path = data.path;
    this.port = data.port;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1ServiceReferenceModelOptions,
  ): IoK8sApiAdmissionregistrationV1ServiceReferenceModel {
    return new IoK8sApiAdmissionregistrationV1ServiceReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      name: this.name,
      namespace: this.namespace,
      path: this.path,
      port: this.port,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1ServiceReferenceModel;
