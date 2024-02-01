import { IoK8sApimachineryPkgApisMetaV1ListMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ListMeta } from '../IoK8sApimachineryPkgApisMetaV1ListMeta';
import { IoK8sApimachineryPkgApisMetaV1StatusDetailsModelOptions as IoK8sApimachineryPkgApisMetaV1StatusDetails } from '../IoK8sApimachineryPkgApisMetaV1StatusDetails';
import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1StatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1StatusModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Suggested HTTP return code for this status, 0 if not set.
  code?: number;
  details?: IoK8sApimachineryPkgApisMetaV1StatusDetails;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  // A human-readable description of the status of this operation.
  message?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ListMeta;
  // A machine-readable description of why this operation is in the \"Failure\" status. If this value is empty there is no information available. A Reason clarifies an HTTP status code but does not override it.
  reason?: string;
  // Status of the operation. One of: \"Success\" or \"Failure\". More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  status?: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1StatusModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.code = data.code;
    this.details = data.details;
    this.kind = data.kind;
    this.message = data.message;
    this.metadata = data.metadata;
    this.reason = data.reason;
    this.status = data.status;
  }

  static create(data: IoK8sApimachineryPkgApisMetaV1StatusModelOptions): IoK8sApimachineryPkgApisMetaV1StatusModel {
    return new IoK8sApimachineryPkgApisMetaV1StatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      code: this.code,
      details: this.details,
      kind: this.kind,
      message: this.message,
      metadata: this.metadata,
      reason: this.reason,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1StatusModel;
