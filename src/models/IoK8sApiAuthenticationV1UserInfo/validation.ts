import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAuthenticationV1UserInfoSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAuthenticationV1UserInfoSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
