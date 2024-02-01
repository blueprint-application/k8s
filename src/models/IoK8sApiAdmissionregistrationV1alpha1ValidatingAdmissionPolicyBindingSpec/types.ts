import { IoK8sApiAdmissionregistrationV1alpha1MatchResourcesModelOptions as IoK8sApiAdmissionregistrationV1alpha1MatchResources } from '../IoK8sApiAdmissionregistrationV1alpha1MatchResources';
import { IoK8sApiAdmissionregistrationV1alpha1ParamRefModelOptions as IoK8sApiAdmissionregistrationV1alpha1ParamRef } from '../IoK8sApiAdmissionregistrationV1alpha1ParamRef';

export interface IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingSpecModelOptions {
  matchResources?: IoK8sApiAdmissionregistrationV1alpha1MatchResources;
  paramRef?: IoK8sApiAdmissionregistrationV1alpha1ParamRef;
  policyName?: string;
  validationActions?: Array<string>;
}
