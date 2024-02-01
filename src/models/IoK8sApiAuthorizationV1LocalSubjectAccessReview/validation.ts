import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAuthorizationV1LocalSubjectAccessReviewSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
