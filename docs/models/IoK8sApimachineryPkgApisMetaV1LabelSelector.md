# IoK8sApimachineryPkgApisMetaV1LabelSelectorModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matchExpressions** | [**Array&lt;IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement&gt;**](IoK8sApimachineryPkgApisMetaV1LabelSelectorRequirement.md) | matchExpressions is a list of label selector requirements. The requirements are ANDed. | [optional] [default to undefined]
**matchLabels** | **{ [key: string]: string; }** | matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is \&quot;key\&quot;, the operator is \&quot;In\&quot;, and the values array contains only \&quot;value\&quot;. The requirements are ANDed. | [optional] [default to undefined]


