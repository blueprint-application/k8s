import { IoK8sApiFlowcontrolV1beta3FlowSchemaSpecModelOptions as IoK8sApiFlowcontrolV1beta3FlowSchemaSpec } from '../IoK8sApiFlowcontrolV1beta3FlowSchemaSpec';
import { IoK8sApiFlowcontrolV1beta3FlowSchemaStatusModelOptions as IoK8sApiFlowcontrolV1beta3FlowSchemaStatus } from '../IoK8sApiFlowcontrolV1beta3FlowSchemaStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';

export interface IoK8sApiFlowcontrolV1beta3FlowSchemaModelOptions {
  apiVersion?: string;
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  spec?: IoK8sApiFlowcontrolV1beta3FlowSchemaSpec;
  status?: IoK8sApiFlowcontrolV1beta3FlowSchemaStatus;
}
