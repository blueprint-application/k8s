import { JSONSchema7 } from 'json-schema';
import { IoK8sApiResourceV1alpha2ResourceClassListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiResourceV1alpha2ResourceClassListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
