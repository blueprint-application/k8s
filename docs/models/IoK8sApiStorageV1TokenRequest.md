# IoK8sApiStorageV1TokenRequestModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **string** | audience is the intended audience of the token in \&quot;TokenRequestSpec\&quot;. It will default to the audiences of kube apiserver. | [default to undefined]
**expirationSeconds** | **number** | expirationSeconds is the duration of validity of the token in \&quot;TokenRequestSpec\&quot;. It has the same default value of \&quot;ExpirationSeconds\&quot; in \&quot;TokenRequestSpec\&quot;. | [optional] [default to undefined]


