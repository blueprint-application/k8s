import { JSONSchema7 } from 'json-schema';
import { IoK8sApiNetworkingV1IngressLoadBalancerStatusSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiNetworkingV1IngressLoadBalancerStatusSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
