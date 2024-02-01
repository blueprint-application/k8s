import { IoK8sApiCoreV1ExecActionModelOptions as IoK8sApiCoreV1ExecAction } from '../IoK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1GRPCActionModelOptions as IoK8sApiCoreV1GRPCAction } from '../IoK8sApiCoreV1GRPCAction';
import { IoK8sApiCoreV1HTTPGetActionModelOptions as IoK8sApiCoreV1HTTPGetAction } from '../IoK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1TCPSocketActionModelOptions as IoK8sApiCoreV1TCPSocketAction } from '../IoK8sApiCoreV1TCPSocketAction';

export interface IoK8sApiCoreV1ProbeModelOptions {
  exec?: IoK8sApiCoreV1ExecAction;
  failureThreshold?: number;
  grpc?: IoK8sApiCoreV1GRPCAction;
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
  terminationGracePeriodSeconds?: number;
  timeoutSeconds?: number;
}
