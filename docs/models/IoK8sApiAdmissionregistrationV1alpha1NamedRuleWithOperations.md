# IoK8sApiAdmissionregistrationV1alpha1NamedRuleWithOperationsModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroups** | **Array&lt;string&gt;** | APIGroups is the API groups the resources belong to. \&#39;*\&#39; is all groups. If \&#39;*\&#39; is present, the length of the slice must be one. Required. | [optional] [default to undefined]
**apiVersions** | **Array&lt;string&gt;** | APIVersions is the API versions the resources belong to. \&#39;*\&#39; is all versions. If \&#39;*\&#39; is present, the length of the slice must be one. Required. | [optional] [default to undefined]
**operations** | **Array&lt;string&gt;** | Operations is the operations the admission hook cares about - CREATE, UPDATE, DELETE, CONNECT or * for all of those operations and any future admission operations that are added. If \&#39;*\&#39; is present, the length of the slice must be one. Required. | [optional] [default to undefined]
**resourceNames** | **Array&lt;string&gt;** | ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. | [optional] [default to undefined]
**resources** | **Array&lt;string&gt;** | Resources is a list of resources this rule applies to.  For example: \&#39;pods\&#39; means pods. \&#39;pods/log\&#39; means the log subresource of pods. \&#39;*\&#39; means all resources, but not subresources. \&#39;pods/_*\&#39; means all subresources of pods. \&#39;*_/scale\&#39; means all scale subresources. \&#39;*_/_*\&#39; means all resources and their subresources.  If wildcard is present, the validation rule will ensure resources do not overlap with each other.  Depending on the enclosing object, subresources might not be allowed. Required. | [optional] [default to undefined]
**scope** | **string** | scope specifies the scope of this rule. Valid values are \&quot;Cluster\&quot;, \&quot;Namespaced\&quot;, and \&quot;*\&quot; \&quot;Cluster\&quot; means that only cluster-scoped resources will match this rule. Namespace API objects are cluster-scoped. \&quot;Namespaced\&quot; means that only namespaced resources will match this rule. \&quot;*\&quot; means that there are no scope restrictions. Subresources match the scope of their parent resource. Default is \&quot;*\&quot;. | [optional] [default to undefined]


