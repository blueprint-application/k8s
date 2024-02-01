import { BaseModel } from '../types';
import type { IoK8sApiCoreV1TCPSocketActionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1TCPSocketActionModel extends BaseModel {
  // Optional: Host name to connect to, defaults to the pod IP.
  host?: string;
  // IntOrString is a type that can hold an int32 or a string.  When used in JSON or YAML marshalling and unmarshalling, it produces or consumes the inner type.  This allows you to have, for example, a JSON field that can accept a name or number.
  port: string;

  constructor(data: IoK8sApiCoreV1TCPSocketActionModelOptions) {
    super();
    validate(data);
    this.host = data.host;
    this.port = data.port;
  }

  static create(data: IoK8sApiCoreV1TCPSocketActionModelOptions): IoK8sApiCoreV1TCPSocketActionModel {
    return new IoK8sApiCoreV1TCPSocketActionModel(data);
  }

  toObject(): Partial<this> {
    return {
      host: this.host,
      port: this.port,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1TCPSocketActionModel;
