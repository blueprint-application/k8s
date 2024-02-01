import { JSONSchema7 } from 'json-schema';
import { IoK8sApiFlowcontrolV1beta3FlowSchemaConditionSchema } from '../../schemas';
import { validate as defaultValidate } from '../validation';

const schema = IoK8sApiFlowcontrolV1beta3FlowSchemaConditionSchema[0].schema as unknown as JSONSchema7;
export const validate = defaultValidate.bind(null, schema);
