import { JSONSchema7 } from 'json-schema';
import { IoK8sApiNetworkingV1alpha1ServiceCIDRStatusSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiNetworkingV1alpha1ServiceCIDRStatusSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
