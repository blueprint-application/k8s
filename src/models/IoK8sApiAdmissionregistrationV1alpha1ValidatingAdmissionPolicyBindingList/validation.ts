import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicyBindingListSchema[0]
  .schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
