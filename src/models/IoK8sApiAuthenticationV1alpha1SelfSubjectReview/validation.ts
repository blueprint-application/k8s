import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAuthenticationV1alpha1SelfSubjectReviewSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAuthenticationV1alpha1SelfSubjectReviewSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
