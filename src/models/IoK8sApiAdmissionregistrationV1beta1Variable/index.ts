import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1beta1VariableModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1beta1VariableModel extends BaseModel {
  // Expression is the expression that will be evaluated as the value of the variable. The CEL expression has access to the same identifiers as the CEL expressions in Validation.
  expression: string;
  // Name is the name of the variable. The name must be a valid CEL identifier and unique among all variables. The variable can be accessed in other expressions through `variables` For example, if name is \"foo\", the variable will be available as `variables.foo`
  name: string;

  constructor(data: IoK8sApiAdmissionregistrationV1beta1VariableModelOptions) {
    super();
    validate(data);
    this.expression = data.expression;
    this.name = data.name;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1beta1VariableModelOptions,
  ): IoK8sApiAdmissionregistrationV1beta1VariableModel {
    return new IoK8sApiAdmissionregistrationV1beta1VariableModel(data);
  }

  toObject(): Partial<this> {
    return {
      expression: this.expression,
      name: this.name,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1beta1VariableModel;
