import { JSONSchema7 } from 'json-schema';
import { IoK8sApiCoreV1ContainerPortSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiCoreV1ContainerPortSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
