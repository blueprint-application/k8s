import { JSONSchema7 } from 'json-schema';
import { IoK8sApiRbacV1ClusterRoleSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiRbacV1ClusterRoleSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
