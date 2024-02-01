# IoK8sApiStorageV1StorageClassModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowVolumeExpansion** | **boolean** | allowVolumeExpansion shows whether the storage class allow volume expand. | [optional] [default to undefined]
**allowedTopologies** | [**Array&lt;IoK8sApiCoreV1TopologySelectorTerm&gt;**](IoK8sApiCoreV1TopologySelectorTerm.md) | allowedTopologies restrict the node topologies where volumes can be dynamically provisioned. Each volume plugin defines its own supported topology specifications. An empty TopologySelectorTerm list means there is no topology restriction. This field is only honored by servers that enable the VolumeScheduling feature. | [optional] [default to undefined]
**apiVersion** | **string** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] [default to undefined]
**kind** | **string** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] [default to undefined]
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] [default to undefined]
**mountOptions** | **Array&lt;string&gt;** | mountOptions controls the mountOptions for dynamically provisioned PersistentVolumes of this storage class. e.g. [\&quot;ro\&quot;, \&quot;soft\&quot;]. Not validated - mount of the PVs will simply fail if one is invalid. | [optional] [default to undefined]
**parameters** | **{ [key: string]: string; }** | parameters holds the parameters for the provisioner that should create volumes of this storage class. | [optional] [default to undefined]
**provisioner** | **string** | provisioner indicates the type of the provisioner. | [default to undefined]
**reclaimPolicy** | **string** | reclaimPolicy controls the reclaimPolicy for dynamically provisioned PersistentVolumes of this storage class. Defaults to Delete. | [optional] [default to undefined]
**volumeBindingMode** | **string** | volumeBindingMode indicates how PersistentVolumeClaims should be provisioned and bound.  When unset, VolumeBindingImmediate is used. This field is only honored by servers that enable the VolumeScheduling feature. | [optional] [default to undefined]


