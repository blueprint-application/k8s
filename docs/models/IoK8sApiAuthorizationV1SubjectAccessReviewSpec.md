# IoK8sApiAuthorizationV1SubjectAccessReviewSpecModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extra** | **{ [key: string]: Array&lt;string&gt;; }** | Extra corresponds to the user.Info.GetExtra() method from the authenticator.  Since that is input to the authorizer it needs a reflection here. | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | Groups is the groups you\&#39;re testing for. | [optional] [default to undefined]
**nonResourceAttributes** | [**IoK8sApiAuthorizationV1NonResourceAttributes**](IoK8sApiAuthorizationV1NonResourceAttributes.md) |  | [optional] [default to undefined]
**resourceAttributes** | [**IoK8sApiAuthorizationV1ResourceAttributes**](IoK8sApiAuthorizationV1ResourceAttributes.md) |  | [optional] [default to undefined]
**uid** | **string** | UID information about the requesting user. | [optional] [default to undefined]
**user** | **string** | User is the user you\&#39;re testing for. If you specify \&quot;User\&quot; but not \&quot;Groups\&quot;, then is it interpreted as \&quot;What if User were not a member of any groups | [optional] [default to undefined]


