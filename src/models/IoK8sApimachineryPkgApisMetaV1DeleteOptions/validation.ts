import { JSONSchema7 } from 'json-schema';
import { IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApimachineryPkgApisMetaV1DeleteOptionsSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
