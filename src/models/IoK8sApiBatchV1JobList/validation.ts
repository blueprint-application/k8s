import { JSONSchema7 } from 'json-schema';
import { IoK8sApiBatchV1JobListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiBatchV1JobListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
