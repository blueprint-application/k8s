import { BaseModel } from '../types';
import type { IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModel extends BaseModel {
  // fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  fsType?: string;
  // partition is the partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as \"1\". Similarly, the volume partition for /dev/sda is \"0\" (or you can leave the property empty).
  partition?: number;
  // readOnly value true will force the readOnly setting in VolumeMounts. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  readOnly?: boolean;
  // volumeID is unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  volumeID: string;

  constructor(data: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModelOptions) {
    super();
    validate(data);
    this.fsType = data.fsType;
    this.partition = data.partition;
    this.readOnly = data.readOnly;
    this.volumeID = data.volumeID;
  }

  static create(
    data: IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModelOptions,
  ): IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModel {
    return new IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      fsType: this.fsType,
      partition: this.partition,
      readOnly: this.readOnly,
      volumeID: this.volumeID,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1AWSElasticBlockStoreVolumeSourceModel;
