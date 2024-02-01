import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ServiceAccountTokenProjectionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ServiceAccountTokenProjectionModel extends BaseModel {
  // audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  audience?: string;
  // expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  expirationSeconds?: number;
  // path is the path relative to the mount point of the file to project the token into.
  path: string;

  constructor(data: IoK8sApiCoreV1ServiceAccountTokenProjectionModelOptions) {
    super();
    validate(data);
    this.audience = data.audience;
    this.expirationSeconds = data.expirationSeconds;
    this.path = data.path;
  }

  static create(
    data: IoK8sApiCoreV1ServiceAccountTokenProjectionModelOptions,
  ): IoK8sApiCoreV1ServiceAccountTokenProjectionModel {
    return new IoK8sApiCoreV1ServiceAccountTokenProjectionModel(data);
  }

  toObject(): Partial<this> {
    return {
      audience: this.audience,
      expirationSeconds: this.expirationSeconds,
      path: this.path,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ServiceAccountTokenProjectionModel;
