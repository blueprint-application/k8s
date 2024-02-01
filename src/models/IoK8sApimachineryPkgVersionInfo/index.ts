import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgVersionInfoModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgVersionInfoModel extends BaseModel {
  buildDate: string;
  compiler: string;
  gitCommit: string;
  gitTreeState: string;
  gitVersion: string;
  goVersion: string;
  major: string;
  minor: string;
  platform: string;

  constructor(data: IoK8sApimachineryPkgVersionInfoModelOptions) {
    super();
    validate(data);
    this.buildDate = data.buildDate;
    this.compiler = data.compiler;
    this.gitCommit = data.gitCommit;
    this.gitTreeState = data.gitTreeState;
    this.gitVersion = data.gitVersion;
    this.goVersion = data.goVersion;
    this.major = data.major;
    this.minor = data.minor;
    this.platform = data.platform;
  }

  static create(data: IoK8sApimachineryPkgVersionInfoModelOptions): IoK8sApimachineryPkgVersionInfoModel {
    return new IoK8sApimachineryPkgVersionInfoModel(data);
  }

  toObject(): Partial<this> {
    return {
      buildDate: this.buildDate,
      compiler: this.compiler,
      gitCommit: this.gitCommit,
      gitTreeState: this.gitTreeState,
      gitVersion: this.gitVersion,
      goVersion: this.goVersion,
      major: this.major,
      minor: this.minor,
      platform: this.platform,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgVersionInfoModel;
