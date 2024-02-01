import { IoK8sApiCoreV1ExecActionModelOptions as IoK8sApiCoreV1ExecAction } from '../IoK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1HTTPGetActionModelOptions as IoK8sApiCoreV1HTTPGetAction } from '../IoK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1SleepActionModelOptions as IoK8sApiCoreV1SleepAction } from '../IoK8sApiCoreV1SleepAction';
import { IoK8sApiCoreV1TCPSocketActionModelOptions as IoK8sApiCoreV1TCPSocketAction } from '../IoK8sApiCoreV1TCPSocketAction';

export interface IoK8sApiCoreV1LifecycleHandlerModelOptions {
  exec?: IoK8sApiCoreV1ExecAction;
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  sleep?: IoK8sApiCoreV1SleepAction;
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
}
