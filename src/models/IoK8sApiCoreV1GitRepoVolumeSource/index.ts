import { BaseModel } from '../types';
import type { IoK8sApiCoreV1GitRepoVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1GitRepoVolumeSourceModel extends BaseModel {
  // directory is the target directory name. Must not contain or start with \'..\'.  If \'.\' is supplied, the volume directory will be the git repository.  Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  directory?: string;
  // repository is the URL
  repository: string;
  // revision is the commit hash for the specified revision.
  revision?: string;

  constructor(data: IoK8sApiCoreV1GitRepoVolumeSourceModelOptions) {
    super();
    validate(data);
    this.directory = data.directory;
    this.repository = data.repository;
    this.revision = data.revision;
  }

  static create(data: IoK8sApiCoreV1GitRepoVolumeSourceModelOptions): IoK8sApiCoreV1GitRepoVolumeSourceModel {
    return new IoK8sApiCoreV1GitRepoVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      directory: this.directory,
      repository: this.repository,
      revision: this.revision,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1GitRepoVolumeSourceModel;
