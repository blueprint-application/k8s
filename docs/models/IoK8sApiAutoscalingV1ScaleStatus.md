# IoK8sApiAutoscalingV1ScaleStatusModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**replicas** | **number** | replicas is the actual number of observed instances of the scaled object. | [default to undefined]
**selector** | **string** | selector is the label query over pods that should match the replicas count. This is same as the label selector but in the string format to avoid introspection by clients. The string will be in the same format as the query-param syntax. More info about label selectors: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ | [optional] [default to undefined]


