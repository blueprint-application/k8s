# IoK8sApiSchedulingV1PriorityClassModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **string** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources | [optional] [default to undefined]
**description** | **string** | description is an arbitrary string that usually provides guidelines on when this priority class should be used. | [optional] [default to undefined]
**globalDefault** | **boolean** | globalDefault specifies whether this PriorityClass should be considered as the default priority for pods that do not have any priority class. Only one PriorityClass can be marked as &#x60;globalDefault&#x60;. However, if more than one PriorityClasses exists with their &#x60;globalDefault&#x60; field set to true, the smallest value of such global default PriorityClasses will be used as the default priority. | [optional] [default to undefined]
**kind** | **string** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds | [optional] [default to undefined]
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) |  | [optional] [default to undefined]
**preemptionPolicy** | **string** | preemptionPolicy is the Policy for preempting pods with lower priority. One of Never, PreemptLowerPriority. Defaults to PreemptLowerPriority if unset. | [optional] [default to undefined]
**value** | **number** | value represents the integer value of this priority class. This is the actual priority that pods receive when they have the name of this class in their pod spec. | [default to undefined]


