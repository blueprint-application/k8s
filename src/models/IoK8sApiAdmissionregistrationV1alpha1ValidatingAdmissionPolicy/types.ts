import { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpecModelOptions as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec } from '../IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec';
import { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatusModelOptions as IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus } from '../IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySpec;
  status?: IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyStatus;
}
