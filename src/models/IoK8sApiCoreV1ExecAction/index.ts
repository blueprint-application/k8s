import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ExecActionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ExecActionModel extends BaseModel {
  // Command is the command line to execute inside the container, the working directory for the command  is root (\'/\') in the container\'s filesystem. The command is simply exec\'d, it is not run inside a shell, so traditional shell instructions (\'|\', etc) won\'t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  command?: Array<string>;

  constructor(data: IoK8sApiCoreV1ExecActionModelOptions) {
    super();
    validate(data);
    this.command = data.command;
  }

  static create(data: IoK8sApiCoreV1ExecActionModelOptions): IoK8sApiCoreV1ExecActionModel {
    return new IoK8sApiCoreV1ExecActionModel(data);
  }

  toObject(): Partial<this> {
    return {
      command: this.command,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ExecActionModel;
