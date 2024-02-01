import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAutoscalingV2MetricValueStatusSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAutoscalingV2MetricValueStatusSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
