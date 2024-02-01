import { IoK8sApiAdmissionregistrationV1beta1MatchResourcesModelOptions as IoK8sApiAdmissionregistrationV1beta1MatchResources } from '../IoK8sApiAdmissionregistrationV1beta1MatchResources';
import { IoK8sApiAdmissionregistrationV1beta1ParamRefModelOptions as IoK8sApiAdmissionregistrationV1beta1ParamRef } from '../IoK8sApiAdmissionregistrationV1beta1ParamRef';

export interface IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicyBindingSpecModelOptions {
  matchResources?: IoK8sApiAdmissionregistrationV1beta1MatchResources;
  paramRef?: IoK8sApiAdmissionregistrationV1beta1ParamRef;
  policyName?: string;
  validationActions?: Array<string>;
}
