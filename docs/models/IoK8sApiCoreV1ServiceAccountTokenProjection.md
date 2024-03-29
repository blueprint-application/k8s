# IoK8sApiCoreV1ServiceAccountTokenProjectionModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **string** | audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver. | [optional] [default to undefined]
**expirationSeconds** | **number** | expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes. | [optional] [default to undefined]
**path** | **string** | path is the path relative to the mount point of the file to project the token into. | [default to undefined]


