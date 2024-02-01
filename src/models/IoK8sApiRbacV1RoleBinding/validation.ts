import { JSONSchema7 } from 'json-schema';
import { IoK8sApiRbacV1RoleBindingSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiRbacV1RoleBindingSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
