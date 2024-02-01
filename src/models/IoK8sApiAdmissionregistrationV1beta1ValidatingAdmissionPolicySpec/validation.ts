import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAdmissionregistrationV1beta1ValidatingAdmissionPolicySpecSchema[0]
  .schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
