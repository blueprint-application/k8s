import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAppsV1ReplicaSetSpecSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAppsV1ReplicaSetSpecSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
