import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAutoscalingV2MetricTargetSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAutoscalingV2MetricTargetSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
