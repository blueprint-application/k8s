import { IoK8sApiCoreV1ExecActionModelOptions as IoK8sApiCoreV1ExecAction } from '../IoK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1GRPCActionModelOptions as IoK8sApiCoreV1GRPCAction } from '../IoK8sApiCoreV1GRPCAction';
import { IoK8sApiCoreV1HTTPGetActionModelOptions as IoK8sApiCoreV1HTTPGetAction } from '../IoK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1TCPSocketActionModelOptions as IoK8sApiCoreV1TCPSocketAction } from '../IoK8sApiCoreV1TCPSocketAction';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ProbeModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ProbeModel extends BaseModel {
  exec?: IoK8sApiCoreV1ExecAction;
  // Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  failureThreshold?: number;
  grpc?: IoK8sApiCoreV1GRPCAction;
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  // Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  initialDelaySeconds?: number;
  // How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  periodSeconds?: number;
  // Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  successThreshold?: number;
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;
  // Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod\'s terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  terminationGracePeriodSeconds?: number;
  // Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  timeoutSeconds?: number;

  constructor(data: IoK8sApiCoreV1ProbeModelOptions) {
    super();
    validate(data);
    this.exec = data.exec;
    this.failureThreshold = data.failureThreshold;
    this.grpc = data.grpc;
    this.httpGet = data.httpGet;
    this.initialDelaySeconds = data.initialDelaySeconds;
    this.periodSeconds = data.periodSeconds;
    this.successThreshold = data.successThreshold;
    this.tcpSocket = data.tcpSocket;
    this.terminationGracePeriodSeconds = data.terminationGracePeriodSeconds;
    this.timeoutSeconds = data.timeoutSeconds;
  }

  static create(data: IoK8sApiCoreV1ProbeModelOptions): IoK8sApiCoreV1ProbeModel {
    return new IoK8sApiCoreV1ProbeModel(data);
  }

  toObject(): Partial<this> {
    return {
      exec: this.exec,
      failureThreshold: this.failureThreshold,
      grpc: this.grpc,
      httpGet: this.httpGet,
      initialDelaySeconds: this.initialDelaySeconds,
      periodSeconds: this.periodSeconds,
      successThreshold: this.successThreshold,
      tcpSocket: this.tcpSocket,
      terminationGracePeriodSeconds: this.terminationGracePeriodSeconds,
      timeoutSeconds: this.timeoutSeconds,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ProbeModel;
