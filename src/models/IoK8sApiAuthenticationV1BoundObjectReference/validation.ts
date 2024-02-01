import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAuthenticationV1BoundObjectReferenceSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAuthenticationV1BoundObjectReferenceSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
