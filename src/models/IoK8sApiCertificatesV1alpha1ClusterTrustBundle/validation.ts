import { JSONSchema7 } from 'json-schema';
import { IoK8sApiCertificatesV1alpha1ClusterTrustBundleSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiCertificatesV1alpha1ClusterTrustBundleSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
