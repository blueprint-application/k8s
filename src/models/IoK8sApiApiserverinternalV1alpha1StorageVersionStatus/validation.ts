import { JSONSchema7 } from 'json-schema';
import { IoK8sApiApiserverinternalV1alpha1StorageVersionStatusSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiApiserverinternalV1alpha1StorageVersionStatusSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
