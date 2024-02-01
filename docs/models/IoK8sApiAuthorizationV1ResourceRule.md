# IoK8sApiAuthorizationV1ResourceRuleModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroups** | **Array&lt;string&gt;** | APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.  \&quot;*\&quot; means all. | [optional] [default to undefined]
**resourceNames** | **Array&lt;string&gt;** | ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.  \&quot;*\&quot; means all. | [optional] [default to undefined]
**resources** | **Array&lt;string&gt;** | Resources is a list of resources this rule applies to.  \&quot;*\&quot; means all in the specified apiGroups.  \&quot;*_/foo\&quot; represents the subresource \&#39;foo\&#39; for all resources in the specified apiGroups. | [optional] [default to undefined]
**verbs** | **Array&lt;string&gt;** | Verb is a list of kubernetes resource API verbs, like: get, list, watch, create, update, delete, proxy.  \&quot;*\&quot; means all. | [default to undefined]


