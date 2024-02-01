import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModel extends BaseModel {
  // The path to the field that refers the expression. For example, the reference to the expression of the first item of validations is \"spec.validations[0].expression\"
  fieldRef: string;
  // The content of type checking information in a human-readable form. Each line of the warning contains the type that the expression is checked against, followed by the type check error from the compiler.
  warning: string;

  constructor(data: IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModelOptions) {
    super();
    validate(data);
    this.fieldRef = data.fieldRef;
    this.warning = data.warning;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModelOptions,
  ): IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModel {
    return new IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModel(data);
  }

  toObject(): Partial<this> {
    return {
      fieldRef: this.fieldRef,
      warning: this.warning,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModel;
