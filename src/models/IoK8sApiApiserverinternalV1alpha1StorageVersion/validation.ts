import { JSONSchema7 } from 'json-schema';
import { IoK8sApiApiserverinternalV1alpha1StorageVersionSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiApiserverinternalV1alpha1StorageVersionSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
