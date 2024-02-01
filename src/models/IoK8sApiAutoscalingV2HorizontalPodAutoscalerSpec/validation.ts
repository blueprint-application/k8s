import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAutoscalingV2HorizontalPodAutoscalerSpecSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
