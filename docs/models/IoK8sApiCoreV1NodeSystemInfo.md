# IoK8sApiCoreV1NodeSystemInfoModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**architecture** | **string** | The Architecture reported by the node | [default to undefined]
**bootID** | **string** | Boot ID reported by the node. | [default to undefined]
**containerRuntimeVersion** | **string** | ContainerRuntime Version reported by the node through runtime remote API (e.g. containerd://1.4.2). | [default to undefined]
**kernelVersion** | **string** | Kernel Version reported by the node from \&#39;uname -r\&#39; (e.g. 3.16.0-0.bpo.4-amd64). | [default to undefined]
**kubeProxyVersion** | **string** | KubeProxy Version reported by the node. | [default to undefined]
**kubeletVersion** | **string** | Kubelet Version reported by the node. | [default to undefined]
**machineID** | **string** | MachineID reported by the node. For unique machine identification in the cluster this field is preferred. Learn more from man(5) machine-id: http://man7.org/linux/man-pages/man5/machine-id.5.html | [default to undefined]
**operatingSystem** | **string** | The Operating System reported by the node | [default to undefined]
**osImage** | **string** | OS Image reported by the node from /etc/os-release (e.g. Debian GNU/Linux 7 (wheezy)). | [default to undefined]
**systemUUID** | **string** | SystemUUID reported by the node. For unique machine identification MachineID is preferred. This field is specific to Red Hat hosts https://access.redhat.com/documentation/en-us/red_hat_subscription_management/1/html/rhsm/uuid | [default to undefined]


