import { IoK8sApiCoreV1ObjectReferenceModelOptions as IoK8sApiCoreV1ObjectReference } from '../IoK8sApiCoreV1ObjectReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1EndpointAddressModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1EndpointAddressModel extends BaseModel {
  // The Hostname of this endpoint
  hostname?: string;
  // The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
  ip: string;
  // Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
  nodeName?: string;
  targetRef?: IoK8sApiCoreV1ObjectReference;

  constructor(data: IoK8sApiCoreV1EndpointAddressModelOptions) {
    super();
    validate(data);
    this.hostname = data.hostname;
    this.ip = data.ip;
    this.nodeName = data.nodeName;
    this.targetRef = data.targetRef;
  }

  static create(data: IoK8sApiCoreV1EndpointAddressModelOptions): IoK8sApiCoreV1EndpointAddressModel {
    return new IoK8sApiCoreV1EndpointAddressModel(data);
  }

  toObject(): Partial<this> {
    return {
      hostname: this.hostname,
      ip: this.ip,
      nodeName: this.nodeName,
      targetRef: this.targetRef,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1EndpointAddressModel;
