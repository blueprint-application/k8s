import { JSONSchema7 } from 'json-schema';
import { IoK8sApiCoreV1ComponentStatusListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiCoreV1ComponentStatusListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
