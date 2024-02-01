import { JSONSchema7 } from 'json-schema';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceColumnDefinitionSchema[0]
  .schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
