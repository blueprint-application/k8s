# IoK8sApiRbacV1PolicyRuleModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroups** | **Array&lt;string&gt;** | APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed. \&quot;\&quot; represents the core API group and \&quot;*\&quot; represents all API groups. | [optional] [default to undefined]
**nonResourceURLs** | **Array&lt;string&gt;** | NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \&quot;pods\&quot; or \&quot;secrets\&quot;) or non-resource URL paths (such as \&quot;/api\&quot;),  but not both. | [optional] [default to undefined]
**resourceNames** | **Array&lt;string&gt;** | ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed. | [optional] [default to undefined]
**resources** | **Array&lt;string&gt;** | Resources is a list of resources this rule applies to. \&#39;*\&#39; represents all resources. | [optional] [default to undefined]
**verbs** | **Array&lt;string&gt;** | Verbs is a list of Verbs that apply to ALL the ResourceKinds contained in this rule. \&#39;*\&#39; represents all verbs. | [default to undefined]


