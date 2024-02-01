import { IoK8sApiAdmissionregistrationV1alpha1ExpressionWarningModelOptions as IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning } from '../IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning';
import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModel extends BaseModel {
  // The type checking warnings for each expression.
  expressionWarnings?: Array<IoK8sApiAdmissionregistrationV1alpha1ExpressionWarning>;

  constructor(data: IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModelOptions) {
    super();
    validate(data);
    this.expressionWarnings = data.expressionWarnings;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModelOptions,
  ): IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModel {
    return new IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModel(data);
  }

  toObject(): Partial<this> {
    return {
      expressionWarnings: this.expressionWarnings,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1alpha1TypeCheckingModel;
