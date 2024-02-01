import { JSONSchema7 } from 'json-schema';
import { IoK8sApiBatchV1UncountedTerminatedPodsSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiBatchV1UncountedTerminatedPodsSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
