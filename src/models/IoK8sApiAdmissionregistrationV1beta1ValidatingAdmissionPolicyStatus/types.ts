import { IoK8sApiAdmissionregistrationV1beta1TypeCheckingModelOptions as IoK8sApiAdmissionregistrationV1beta1TypeChecking } from '../IoK8sApiAdmissionregistrationV1beta1TypeChecking';
import { IoK8sApimachineryPkgApisMetaV1ConditionModelOptions as IoK8sApimachineryPkgApisMetaV1Condition } from '../IoK8sApimachineryPkgApisMetaV1Condition';

export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyStatusModelOptions {
  conditions?: Array<IoK8sApimachineryPkgApisMetaV1Condition>;
  observedGeneration?: number;
  typeChecking?: IoK8sApiAdmissionregistrationV1beta1TypeChecking;
}
