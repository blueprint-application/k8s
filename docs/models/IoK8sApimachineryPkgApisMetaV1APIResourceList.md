# IoK8sApimachineryPkgApisMetaV1APIResourceListModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **string** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] [default to undefined]
**groupVersion** | **string** | groupVersion is the group and version this APIResourceList is for. | [default to undefined]
**kind** | **string** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] [default to undefined]
**resources** | [**Array&lt;IoK8sApimachineryPkgApisMetaV1APIResource&gt;**](IoK8sApimachineryPkgApisMetaV1APIResource.md) | resources contains the name of the resources and if they are namespaced. | [default to undefined]


