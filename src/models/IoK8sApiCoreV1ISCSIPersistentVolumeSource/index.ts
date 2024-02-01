import { IoK8sApiCoreV1SecretReferenceModelOptions as IoK8sApiCoreV1SecretReference } from '../IoK8sApiCoreV1SecretReference';
import { BaseModel } from '../types';
import type { IoK8sApiCoreV1ISCSIPersistentVolumeSourceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiCoreV1ISCSIPersistentVolumeSourceModel extends BaseModel {
  // chapAuthDiscovery defines whether support iSCSI Discovery CHAP authentication
  chapAuthDiscovery?: boolean;
  // chapAuthSession defines whether support iSCSI Session CHAP authentication
  chapAuthSession?: boolean;
  // fsType is the filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: \"ext4\", \"xfs\", \"ntfs\". Implicitly inferred to be \"ext4\" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi
  fsType?: string;
  // initiatorName is the custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  initiatorName?: string;
  // iqn is Target iSCSI Qualified Name.
  iqn: string;
  // iscsiInterface is the interface Name that uses an iSCSI transport. Defaults to \'default\' (tcp).
  iscsiInterface?: string;
  // lun is iSCSI Target Lun number.
  lun: number;
  // portals is the iSCSI Target Portal List. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  portals?: Array<string>;
  // readOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  readOnly?: boolean;
  secretRef?: IoK8sApiCoreV1SecretReference;
  // targetPortal is iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  targetPortal: string;

  constructor(data: IoK8sApiCoreV1ISCSIPersistentVolumeSourceModelOptions) {
    super();
    validate(data);
    this.chapAuthDiscovery = data.chapAuthDiscovery;
    this.chapAuthSession = data.chapAuthSession;
    this.fsType = data.fsType;
    this.initiatorName = data.initiatorName;
    this.iqn = data.iqn;
    this.iscsiInterface = data.iscsiInterface;
    this.lun = data.lun;
    this.portals = data.portals;
    this.readOnly = data.readOnly;
    this.secretRef = data.secretRef;
    this.targetPortal = data.targetPortal;
  }

  static create(
    data: IoK8sApiCoreV1ISCSIPersistentVolumeSourceModelOptions,
  ): IoK8sApiCoreV1ISCSIPersistentVolumeSourceModel {
    return new IoK8sApiCoreV1ISCSIPersistentVolumeSourceModel(data);
  }

  toObject(): Partial<this> {
    return {
      chapAuthDiscovery: this.chapAuthDiscovery,
      chapAuthSession: this.chapAuthSession,
      fsType: this.fsType,
      initiatorName: this.initiatorName,
      iqn: this.iqn,
      iscsiInterface: this.iscsiInterface,
      lun: this.lun,
      portals: this.portals,
      readOnly: this.readOnly,
      secretRef: this.secretRef,
      targetPortal: this.targetPortal,
    } as Partial<this>;
  }
}

export default IoK8sApiCoreV1ISCSIPersistentVolumeSourceModel;
