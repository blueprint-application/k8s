import { BaseModel } from '../types';
import type { IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModel extends BaseModel {
  // key specifies the audit annotation key. The audit annotation keys of a ValidatingAdmissionPolicy must be unique. The key must be a qualified name ([A-Za-z0-9][-A-Za-z0-9_.]*) no more than 63 bytes in length.  The key is combined with the resource name of the ValidatingAdmissionPolicy to construct an audit annotation key: \"{ValidatingAdmissionPolicy name}/{key}\".  If an admission webhook uses the same resource name as this ValidatingAdmissionPolicy and the same audit annotation key, the annotation key will be identical. In this case, the first annotation written with the key will be included in the audit event and all subsequent annotations with the same key will be discarded.  Required.
  key: string;
  // valueExpression represents the expression which is evaluated by CEL to produce an audit annotation value. The expression must evaluate to either a string or null value. If the expression evaluates to a string, the audit annotation is included with the string value. If the expression evaluates to null or empty string the audit annotation will be omitted. The valueExpression may be no longer than 5kb in length. If the result of the valueExpression is more than 10kb in length, it will be truncated to 10kb.  If multiple ValidatingAdmissionPolicyBinding resources match an API request, then the valueExpression will be evaluated for each binding. All unique values produced by the valueExpressions will be joined together in a comma-separated list.  Required.
  valueExpression: string;

  constructor(data: IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModelOptions) {
    super();
    validate(data);
    this.key = data.key;
    this.valueExpression = data.valueExpression;
  }

  static create(
    data: IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModelOptions,
  ): IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModel {
    return new IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModel(data);
  }

  toObject(): Partial<this> {
    return {
      key: this.key,
      valueExpression: this.valueExpression,
    } as Partial<this>;
  }
}

export default IoK8sApiAdmissionregistrationV1alpha1AuditAnnotationModel;
