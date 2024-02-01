# IoK8sApiCoreV1EndpointAddressModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **string** | The Hostname of this endpoint | [optional] [default to undefined]
**ip** | **string** | The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16). | [default to undefined]
**nodeName** | **string** | Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node. | [optional] [default to undefined]
**targetRef** | [**IoK8sApiCoreV1ObjectReference**](IoK8sApiCoreV1ObjectReference.md) |  | [optional] [default to undefined]


