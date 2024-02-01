import { IoK8sApiNodeV1OverheadModelOptions as IoK8sApiNodeV1Overhead } from '../IoK8sApiNodeV1Overhead';
import { IoK8sApiNodeV1SchedulingModelOptions as IoK8sApiNodeV1Scheduling } from '../IoK8sApiNodeV1Scheduling';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiNodeV1RuntimeClassModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiNodeV1RuntimeClassModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // handler specifies the underlying runtime and configuration that the CRI implementation will use to handle pods of this class. The possible values are specific to the node & CRI configuration.  It is assumed that all handlers are available on every node, and handlers of the same name are equivalent on every node. For example, a handler called \"runc\" might specify that the runc OCI runtime (using native Linux containers) will be used to run the containers in a pod. The Handler must be lowercase, conform to the DNS Label (RFC 1123) requirements, and is immutable.
  handler: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  overhead?: IoK8sApiNodeV1Overhead;
  scheduling?: IoK8sApiNodeV1Scheduling;

  constructor(data: IoK8sApiNodeV1RuntimeClassModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.handler = data.handler;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.overhead = data.overhead;
    this.scheduling = data.scheduling;
  }

  static create(data: IoK8sApiNodeV1RuntimeClassModelOptions): IoK8sApiNodeV1RuntimeClassModel {
    return new IoK8sApiNodeV1RuntimeClassModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      handler: this.handler,
      kind: this.kind,
      metadata: this.metadata,
      overhead: this.overhead,
      scheduling: this.scheduling,
    } as Partial<this>;
  }
}

export default IoK8sApiNodeV1RuntimeClassModel;
