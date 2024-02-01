import { BaseModel } from '../types';
import type { IoK8sApimachineryPkgApisMetaV1OwnerReferenceModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApimachineryPkgApisMetaV1OwnerReferenceModel extends BaseModel {
  // API version of the referent.
  apiVersion: string;
  // If true, AND if the owner has the \"foregroundDeletion\" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs \"delete\" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
  blockOwnerDeletion?: boolean;
  // If true, this reference points to the managing controller.
  controller?: boolean;
  // Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind: string;
  // Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  name: string;
  // UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
  uid: string;

  constructor(data: IoK8sApimachineryPkgApisMetaV1OwnerReferenceModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.blockOwnerDeletion = data.blockOwnerDeletion;
    this.controller = data.controller;
    this.kind = data.kind;
    this.name = data.name;
    this.uid = data.uid;
  }

  static create(
    data: IoK8sApimachineryPkgApisMetaV1OwnerReferenceModelOptions,
  ): IoK8sApimachineryPkgApisMetaV1OwnerReferenceModel {
    return new IoK8sApimachineryPkgApisMetaV1OwnerReferenceModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      blockOwnerDeletion: this.blockOwnerDeletion,
      controller: this.controller,
      kind: this.kind,
      name: this.name,
      uid: this.uid,
    } as Partial<this>;
  }
}

export default IoK8sApimachineryPkgApisMetaV1OwnerReferenceModel;
