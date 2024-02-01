import { JSONSchema7 } from 'json-schema';
import { IoK8sApiApiserverinternalV1alpha1StorageVersionListSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiApiserverinternalV1alpha1StorageVersionListSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
