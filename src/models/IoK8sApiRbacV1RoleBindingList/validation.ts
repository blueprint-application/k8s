import { JSONSchema7 } from 'json-schema';
import { IoK8sApiRbacV1RoleBindingListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiRbacV1RoleBindingListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
