import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAuthorizationV1SubjectAccessReviewSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAuthorizationV1SubjectAccessReviewSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
