import { IoK8sApiCoreV1ExecActionModelOptions as IoK8sApiCoreV1ExecAction } from '../IoK8sApiCoreV1ExecAction';
import { IoK8sApiCoreV1HTTPGetActionModelOptions as IoK8sApiCoreV1HTTPGetAction } from '../IoK8sApiCoreV1HTTPGetAction';
import { IoK8sApiCoreV1SleepActionModelOptions as IoK8sApiCoreV1SleepAction } from '../IoK8sApiCoreV1SleepAction';
import { IoK8sApiCoreV1TCPSocketActionModelOptions as IoK8sApiCoreV1TCPSocketAction } from '../IoK8sApiCoreV1TCPSocketAction';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1LifecycleHandlerModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1LifecycleHandlerModel extends BaseModel {
  exec?: IoK8sApiCoreV1ExecAction;
  httpGet?: IoK8sApiCoreV1HTTPGetAction;
  sleep?: IoK8sApiCoreV1SleepAction;
  tcpSocket?: IoK8sApiCoreV1TCPSocketAction;

  constructor(data: IoK8sApiCoreV1LifecycleHandlerModelOptions) {
    super();
    validate(data);
    this.exec = data.exec;
    this.httpGet = data.httpGet;
    this.sleep = data.sleep;
    this.tcpSocket = data.tcpSocket;
  }

  static create(data: IoK8sApiCoreV1LifecycleHandlerModelOptions): IoK8sApiCoreV1LifecycleHandlerModel {
    return new IoK8sApiCoreV1LifecycleHandlerModel(data);
  }

  toObject(): Partial<this> {
    return {
      exec: this.exec,
      httpGet: this.httpGet,
      sleep: this.sleep,
      tcpSocket: this.tcpSocket,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1LifecycleHandlerModel;
