import { JSONSchema7 } from 'json-schema';
import { IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicySchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiAppsV1StatefulSetPersistentVolumeClaimRetentionPolicySchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
