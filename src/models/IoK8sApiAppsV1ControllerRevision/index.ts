import { IoK8sApimachineryPkgApisMetaV1ObjectMetaModelOptions as IoK8sApimachineryPkgApisMetaV1ObjectMeta } from '../IoK8sApimachineryPkgApisMetaV1ObjectMeta';
import { BaseModel } from '../types';
import type { IoK8sApiAppsV1ControllerRevisionModelOptions } from './types';
import { validate } from './validation';

export * from './types';

export class IoK8sApiAppsV1ControllerRevisionModel extends BaseModel {
  // APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
  apiVersion?: string;
  // RawExtension is used to hold extensions in external versions.  To use this, make a field which has RawExtension as its type in your external, versioned struct, and Object in your internal struct. You also need to register your various plugin types.  // Internal package:   type MyAPIObject struct {   runtime.TypeMeta `json:\",inline\"`   MyPlugin runtime.Object `json:\"myPlugin\"`  }   type PluginA struct {   AOption string `json:\"aOption\"`  }  // External package:   type MyAPIObject struct {   runtime.TypeMeta `json:\",inline\"`   MyPlugin runtime.RawExtension `json:\"myPlugin\"`  }   type PluginA struct {   AOption string `json:\"aOption\"`  }  // On the wire, the JSON will look something like this:   {   \"kind\":\"MyAPIObject\",   \"apiVersion\":\"v1\",   \"myPlugin\": {    \"kind\":\"PluginA\",    \"aOption\":\"foo\",   },  }  So what happens? Decode first uses json or yaml to unmarshal the serialized data into your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked. The next step is to copy (using pkg/conversion) into the internal struct. The runtime package\'s DefaultScheme has conversion functions installed which will unpack the JSON stored in RawExtension, turning it into the correct object type, and storing it in the Object. (TODO: In the case where the object is of an unknown type, a runtime.Unknown object will be created and stored.)
  data?: any;
  // Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  kind?: string;
  metadata?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
  // Revision indicates the revision of the state represented by Data.
  revision: number;

  constructor(data: IoK8sApiAppsV1ControllerRevisionModelOptions) {
    super();
    validate(data);
    this.apiVersion = data.apiVersion;
    this.data = data.data;
    this.kind = data.kind;
    this.metadata = data.metadata;
    this.revision = data.revision;
  }

  static create(data: IoK8sApiAppsV1ControllerRevisionModelOptions): IoK8sApiAppsV1ControllerRevisionModel {
    return new IoK8sApiAppsV1ControllerRevisionModel(data);
  }

  toObject(): Partial<this> {
    return {
      apiVersion: this.apiVersion,
      data: this.data,
      kind: this.kind,
      metadata: this.metadata,
      revision: this.revision,
    } as Partial<this>;
  }
}

export default IoK8sApiAppsV1ControllerRevisionModel;
