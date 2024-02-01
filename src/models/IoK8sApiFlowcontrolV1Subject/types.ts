import { IoK8sApiFlowcontrolV1GroupSubjectModelOptions as IoK8sApiFlowcontrolV1GroupSubject } from '../IoK8sApiFlowcontrolV1GroupSubject';
import { IoK8sApiFlowcontrolV1ServiceAccountSubjectModelOptions as IoK8sApiFlowcontrolV1ServiceAccountSubject } from '../IoK8sApiFlowcontrolV1ServiceAccountSubject';
import { IoK8sApiFlowcontrolV1UserSubjectModelOptions as IoK8sApiFlowcontrolV1UserSubject } from '../IoK8sApiFlowcontrolV1UserSubject';

export interface IoK8sApiFlowcontrolV1SubjectModelOptions {
  group?: IoK8sApiFlowcontrolV1GroupSubject;
  kind: string;
  serviceAccount?: IoK8sApiFlowcontrolV1ServiceAccountSubject;
  user?: IoK8sApiFlowcontrolV1UserSubject;
}
