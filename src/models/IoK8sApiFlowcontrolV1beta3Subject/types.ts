import { IoK8sApiFlowcontrolV1beta3GroupSubjectModelOptions as IoK8sApiFlowcontrolV1beta3GroupSubject } from '../IoK8sApiFlowcontrolV1beta3GroupSubject';
import { IoK8sApiFlowcontrolV1beta3ServiceAccountSubjectModelOptions as IoK8sApiFlowcontrolV1beta3ServiceAccountSubject } from '../IoK8sApiFlowcontrolV1beta3ServiceAccountSubject';
import { IoK8sApiFlowcontrolV1beta3UserSubjectModelOptions as IoK8sApiFlowcontrolV1beta3UserSubject } from '../IoK8sApiFlowcontrolV1beta3UserSubject';

export interface IoK8sApiFlowcontrolV1beta3SubjectModelOptions {
  group?: IoK8sApiFlowcontrolV1beta3GroupSubject;
  kind: string;
  serviceAccount?: IoK8sApiFlowcontrolV1beta3ServiceAccountSubject;
  user?: IoK8sApiFlowcontrolV1beta3UserSubject;
}
