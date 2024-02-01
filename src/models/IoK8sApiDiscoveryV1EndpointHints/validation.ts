import { JSONSchema7 } from 'json-schema';
import { IoK8sApiDiscoveryV1EndpointHintsSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiDiscoveryV1EndpointHintsSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
