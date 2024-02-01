import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAutoscalingV2MetricIdentifierSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAutoscalingV2MetricIdentifierSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
