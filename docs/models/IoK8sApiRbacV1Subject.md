# IoK8sApiRbacV1SubjectModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiGroup** | **string** | APIGroup holds the API group of the referenced subject. Defaults to \&quot;\&quot; for ServiceAccount subjects. Defaults to \&quot;rbac.authorization.k8s.io\&quot; for User and Group subjects. | [optional] [default to undefined]
**kind** | **string** | Kind of object being referenced. Values defined by this API group are \&quot;User\&quot;, \&quot;Group\&quot;, and \&quot;ServiceAccount\&quot;. If the Authorizer does not recognized the kind value, the Authorizer should report an error. | [default to undefined]
**name** | **string** | Name of the object being referenced. | [default to undefined]
**namespace** | **string** | Namespace of the referenced object.  If the object kind is non-namespace, such as \&quot;User\&quot; or \&quot;Group\&quot;, and this value is not empty the Authorizer should report an error. | [optional] [default to undefined]


