import { JSONSchema7 } from 'json-schema';
import { IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sKubeAggregatorPkgApisApiregistrationV1APIServiceListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
