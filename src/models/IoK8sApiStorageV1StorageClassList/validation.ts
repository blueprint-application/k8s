import { JSONSchema7 } from 'json-schema';
import { IoK8sApiStorageV1StorageClassListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiStorageV1StorageClassListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
