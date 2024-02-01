import { IoK8sApiCoreV1HTTPHeaderModelOptions as IoK8sApiCoreV1HTTPHeader } from '../IoK8sApiCoreV1HTTPHeader';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1HTTPGetActionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1HTTPGetActionModel extends BaseModel {
  // Host name to connect to, defaults to the pod IP. You probably want to set \"Host\" in httpHeaders instead.
  host?: string;
  // Custom headers to set in the request. HTTP allows repeated headers.
  httpHeaders?: Array<IoK8sApiCoreV1HTTPHeader>;
  // Path to access on the HTTP server.
  path?: string;
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  port: string;
  // Scheme to use for connecting to the host. Defaults to HTTP.
  scheme?: string;

  constructor(data: IoK8sApiCoreV1HTTPGetActionModelOptions) {
    super();
    validate(data);
    this.host = data.host;
    this.httpHeaders = data.httpHeaders;
    this.path = data.path;
    this.port = data.port;
    this.scheme = data.scheme;
  }

  static create(data: IoK8sApiCoreV1HTTPGetActionModelOptions): IoK8sApiCoreV1HTTPGetActionModel {
    return new IoK8sApiCoreV1HTTPGetActionModel(data);
  }

  toObject(): Partial<this> {
    return {
      host: this.host,
      httpHeaders: this.httpHeaders,
      path: this.path,
      port: this.port,
      scheme: this.scheme,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1HTTPGetActionModel;
