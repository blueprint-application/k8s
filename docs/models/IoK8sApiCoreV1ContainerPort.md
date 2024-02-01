# IoK8sApiCoreV1ContainerPortModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containerPort** | **number** | Number of port to expose on the pod\&#39;s IP address. This must be a valid port number, 0 &lt; x &lt; 65536. | [default to undefined]
**hostIP** | **string** | What host IP to bind the external port to. | [optional] [default to undefined]
**hostPort** | **number** | Number of port to expose on the host. If specified, this must be a valid port number, 0 &lt; x &lt; 65536. If HostNetwork is specified, this must match ContainerPort. Most containers do not need this. | [optional] [default to undefined]
**name** | **string** | If specified, this must be an IANA_SVC_NAME and unique within the pod. Each named port in a pod must have a unique name. Name for the port that can be referred to by services. | [optional] [default to undefined]
**protocol** | **string** | Protocol for port. Must be UDP, TCP, or SCTP. Defaults to \&quot;TCP\&quot;. | [optional] [default to undefined]


