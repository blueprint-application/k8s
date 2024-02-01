# IoK8sApiAuthenticationV1UserInfoModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extra** | **{ [key: string]: Array&lt;string&gt;; }** | Any additional information provided by the authenticator. | [optional] [default to undefined]
**groups** | **Array&lt;string&gt;** | The names of groups this user is a part of. | [optional] [default to undefined]
**uid** | **string** | A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs. | [optional] [default to undefined]
**username** | **string** | The name that uniquely identifies this user among all active users. | [optional] [default to undefined]


