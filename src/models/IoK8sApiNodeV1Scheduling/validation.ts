import { JSONSchema7 } from 'json-schema';
import { IoK8sApiNodeV1SchedulingSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiNodeV1SchedulingSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
