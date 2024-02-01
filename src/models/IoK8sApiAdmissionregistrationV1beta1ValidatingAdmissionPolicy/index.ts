import { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecModelOptions as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec } from '../IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec';
import { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModelOptions as IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus } from '../IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpec;
  status?: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatus;

  constructor(data: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.spec = data.spec;
    this.status = data.status;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModelOptions,
  ): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModel {
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
      metadata: this.metadata,
      spec: this.spec,
      status: this.status,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyModel;
