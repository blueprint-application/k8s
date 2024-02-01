import { BaseModel } from '../types';
import type { IoK8sApiAuthorizationV1NonResourceAttributesModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAuthorizationV1NonResourceAttributesModel extends BaseModel {
  // Path is the URL path of the request
  path?: string;
  // Verb is the standard HTTP verb
  verb?: string;

  constructor(data: IoK8sApiAuthorizationV1NonResourceAttributesModelOptions) {
    super();
    validate(data);
    this.path = data.path;
    this.verb = data.verb;
  }

  static create(
    data: IoK8sApiAuthorizationV1NonResourceAttributesModelOptions,
  ): IoK8sApiAuthorizationV1NonResourceAttributesModel {
    return new IoK8sApiAuthorizationV1NonResourceAttributesModel(data);
  }

  toObject(): Partial<this> {
    return {
      path: this.path,
      verb: this.verb,
    } as Partial<this>;
  }
}

export default IoK8sApiAuthorizationV1NonResourceAttributesModel;
