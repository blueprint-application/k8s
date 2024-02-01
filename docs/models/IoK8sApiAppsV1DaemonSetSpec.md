# IoK8sApiAppsV1DaemonSetSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minReadySeconds** | **number** | The minimum number of seconds for which a newly created DaemonSet pod should be ready without any of its container crashing, for it to be considered available. Defaults to 0 (pod will be considered available as soon as it is ready). | [optional] [default to undefined]
**revisionHistoryLimit** | **number** | The number of old history to retain to allow rollback. This is a pointer to distinguish between explicit zero and not specified. Defaults to 10. | [optional] [default to undefined]
**selector** | [**IoK8sApimachineryPkgApisMetaV1LabelSelector**](IoK8sApimachineryPkgApisMetaV1LabelSelector.md) |  | [default to undefined]
**template** | [**IoK8sApiCoreV1PodTemplateSpec**](IoK8sApiCoreV1PodTemplateSpec.md) |  | [default to undefined]
**updateStrategy** | [**IoK8sApiAppsV1DaemonSetUpdateStrategy**](IoK8sApiAppsV1DaemonSetUpdateStrategy.md) |  | [optional] [default to undefined]


