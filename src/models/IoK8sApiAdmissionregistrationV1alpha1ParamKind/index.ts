import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1alpha1ParamKindModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1alpha1ParamKindModel extends BaseModel {
  // APIVersion is the API group version the resources belong to. In format of \"group/version\". Required.
  apiVersion?: string;
  // Kind is the API kind the resources belong to. Required.
  kind?: string;

  constructor(data: IoK8sApiAdmissionregistrationV1alpha1ParamKindModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.kind = data.kind;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1alpha1ParamKindModelOptions,
  ): IoK8sApiAdmissionregistrationV1alpha1ParamKindModel {
    return new IoK8sApiAdmissionregistrationV1alpha1ParamKindModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      kind: this.kind,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1alpha1ParamKindModel;
