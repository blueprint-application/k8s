import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionConditionModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition';
import { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNamesModelOptions as IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames } from '../IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames';
import { BaseModel } from '../types';
import type { IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModel extends BaseModel {
  acceptedNames?: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionNames;
  // conditions indicate state for particular aspects of a CustomResourceDefinition
  conditions?: Array<IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionCondition>;
  // storedVersions lists all versions of CustomResources that were ever persisted. Tracking these versions allows a migration path for stored versions in etcd. The field is mutable so a migration controller can finish a migration to another version (ensuring no old objects are left in storage), and then remove the rest of the versions from this list. Versions may not be removed from `spec.versions` while they exist in this list.
  storedVersions?: Array<string>;

  constructor(data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModelOptions) {
    super();
    validate(data);
    this.acceptedNames = data.acceptedNames;
    this.conditions = data.conditions;
    this.storedVersions = data.storedVersions;
  }

  static create(
    data: IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModelOptions,
  ): IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModel {
    return new IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModel(data);
  }

  toObject(): Partial<this> {
    return {
      acceptedNames: this.acceptedNames,
      conditions: this.conditions,
      storedVersions: this.storedVersions,
    } as Partial<this>;
  }
}

export default IoK8sApiextensionsApiserverPkgApisApiextensionsV1CustomResourceDefinitionStatusModel;
