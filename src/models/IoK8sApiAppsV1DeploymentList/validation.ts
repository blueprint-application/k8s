import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAppsV1DeploymentListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAppsV1DeploymentListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
