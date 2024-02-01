import { JSONSchema7 } from 'json-schema';
import { IoK8sApimachineryPkgApisMetaV1APIResourceListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApimachineryPkgApisMetaV1APIResourceListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
