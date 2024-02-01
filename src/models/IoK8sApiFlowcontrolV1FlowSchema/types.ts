import { IoK8sApiFlowcontrolV1FlowSchemaSpecModelOptions as IoK8sApiFlowcontrolV1FlowSchemaSpec } from '../IoK8sApiFlowcontrolV1FlowSchemaSpec';
import { IoK8sApiFlowcontrolV1FlowSchemaStatusModelOptions as IoK8sApiFlowcontrolV1FlowSchemaStatus } from '../IoK8sApiFlowcontrolV1FlowSchemaStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiFlowcontrolV1FlowSchemaModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1FlowSchemaSpec;
  status?: IoK8sApiFlowcontrolV1FlowSchemaStatus;
}
