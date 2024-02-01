import { JSONSchema7 } from 'json-schema';
import { IoK8sApiNetworkingV1NetworkPolicySpecSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiNetworkingV1NetworkPolicySpecSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
