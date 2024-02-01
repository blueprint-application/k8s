import { JSONSchema7 } from 'json-schema';
import { IoK8sApiCoreV1KeyToPathSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiCoreV1KeyToPathSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
