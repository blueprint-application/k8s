import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModel extends BaseModel {
  // name is the name of the service. Required
  name: string;
  // namespace is the namespace of the service. Required
  namespace: string;
  // path is an optional URL path at which the webhook will be contacted.
  path?: string;
  // port is an optional service port at which the webhook will be contacted. `port` should be a valid port number (1-65535, inclusive). Defaults to 443 for backward compatibility.
  port?: number;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModelOptions) {
    super();
    validate(data);
    this.name = data.name;
    this.namespace = data.namespace;
    this.path = data.path;
    this.port = data.port;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModel(data);
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

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1ServiceReferenceModel;
