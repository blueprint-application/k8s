import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAdmissionregistrationV1alpha1ValidatingAdmissionPolicySchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);