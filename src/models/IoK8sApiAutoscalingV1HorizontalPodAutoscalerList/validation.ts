import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAutoscalingV1HorizontalPodAutoscalerListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAutoscalingV1HorizontalPodAutoscalerListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
