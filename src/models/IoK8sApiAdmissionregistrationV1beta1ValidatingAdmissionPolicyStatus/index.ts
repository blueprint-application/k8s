import { IoK8sApiAdmissionregistrationV1beta1TypeCheckingModelOptions as IoK8sApiAdmissionregistrationV1beta1TypeChecking } from '../IoK8sApiAdmissionregistrationV1beta1TypeChecking';
import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModel extends BaseModel {
  // The conditions represent the latest available observations of a policy\'s current state.
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
  // The generation observed by the controller.
  observedGeneration?: number;
  typeChecking?: IoK8sApiAdmissionregistrationV1beta1TypeChecking;

  constructor(data: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModelOptions) {
    super();
    validate(data);
    this.conditions = data.conditions;
    this.observedGeneration = data.observedGeneration;
    this.typeChecking = data.typeChecking;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModelOptions,
  ): IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModel {
    return new IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      conditions: this.conditions,
      observedGeneration: this.observedGeneration,
      typeChecking: this.typeChecking,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModel;
