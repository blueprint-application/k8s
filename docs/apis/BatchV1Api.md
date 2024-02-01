# BatchV1Api

All URIs are relative to *http://localhost*

| Method                                               | HTTP request                                         | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| [**createBatchV1NamespacedCronJob**](BatchV1Api.md#createbatchv1namespacedcronjob) | **POST** /apis/batch/v1/namespaces/{namespace}/cronjobs |  |
| [**createBatchV1NamespacedJob**](BatchV1Api.md#createbatchv1namespacedjob) | **POST** /apis/batch/v1/namespaces/{namespace}/jobs |  |
| [**deleteBatchV1CollectionNamespacedCronJob**](BatchV1Api.md#deletebatchv1collectionnamespacedcronjob) | **DELETE** /apis/batch/v1/namespaces/{namespace}/cronjobs |  |
| [**deleteBatchV1CollectionNamespacedJob**](BatchV1Api.md#deletebatchv1collectionnamespacedjob) | **DELETE** /apis/batch/v1/namespaces/{namespace}/jobs |  |
| [**deleteBatchV1NamespacedCronJob**](BatchV1Api.md#deletebatchv1namespacedcronjob) | **DELETE** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name} |  |
| [**deleteBatchV1NamespacedJob**](BatchV1Api.md#deletebatchv1namespacedjob) | **DELETE** /apis/batch/v1/namespaces/{namespace}/jobs/{name} |  |
| [**getBatchV1APIResources**](BatchV1Api.md#getbatchv1apiresources) | **GET** /apis/batch/v1/ |  |
| [**listBatchV1CronJobForAllNamespaces**](BatchV1Api.md#listbatchv1cronjobforallnamespaces) | **GET** /apis/batch/v1/cronjobs |  |
| [**listBatchV1JobForAllNamespaces**](BatchV1Api.md#listbatchv1jobforallnamespaces) | **GET** /apis/batch/v1/jobs |  |
| [**listBatchV1NamespacedCronJob**](BatchV1Api.md#listbatchv1namespacedcronjob) | **GET** /apis/batch/v1/namespaces/{namespace}/cronjobs |  |
| [**listBatchV1NamespacedJob**](BatchV1Api.md#listbatchv1namespacedjob) | **GET** /apis/batch/v1/namespaces/{namespace}/jobs |  |
| [**patchBatchV1NamespacedCronJob**](BatchV1Api.md#patchbatchv1namespacedcronjob) | **PATCH** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name} |  |
| [**patchBatchV1NamespacedCronJobStatus**](BatchV1Api.md#patchbatchv1namespacedcronjobstatus) | **PATCH** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status |  |
| [**patchBatchV1NamespacedJob**](BatchV1Api.md#patchbatchv1namespacedjob) | **PATCH** /apis/batch/v1/namespaces/{namespace}/jobs/{name} |  |
| [**patchBatchV1NamespacedJobStatus**](BatchV1Api.md#patchbatchv1namespacedjobstatus) | **PATCH** /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status |  |
| [**readBatchV1NamespacedCronJob**](BatchV1Api.md#readbatchv1namespacedcronjob) | **GET** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name} |  |
| [**readBatchV1NamespacedCronJobStatus**](BatchV1Api.md#readbatchv1namespacedcronjobstatus) | **GET** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status |  |
| [**readBatchV1NamespacedJob**](BatchV1Api.md#readbatchv1namespacedjob) | **GET** /apis/batch/v1/namespaces/{namespace}/jobs/{name} |  |
| [**readBatchV1NamespacedJobStatus**](BatchV1Api.md#readbatchv1namespacedjobstatus) | **GET** /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status |  |
| [**replaceBatchV1NamespacedCronJob**](BatchV1Api.md#replacebatchv1namespacedcronjob) | **PUT** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name} |  |
| [**replaceBatchV1NamespacedCronJobStatus**](BatchV1Api.md#replacebatchv1namespacedcronjobstatus) | **PUT** /apis/batch/v1/namespaces/{namespace}/cronjobs/{name}/status |  |
| [**replaceBatchV1NamespacedJob**](BatchV1Api.md#replacebatchv1namespacedjob) | **PUT** /apis/batch/v1/namespaces/{namespace}/jobs/{name} |  |
| [**replaceBatchV1NamespacedJobStatus**](BatchV1Api.md#replacebatchv1namespacedjobstatus) | **PUT** /apis/batch/v1/namespaces/{namespace}/jobs/{name}/status |  |
| [**watchBatchV1CronJobListForAllNamespaces**](BatchV1Api.md#watchbatchv1cronjoblistforallnamespaces) | **GET** /apis/batch/v1/watch/cronjobs |  |
| [**watchBatchV1JobListForAllNamespaces**](BatchV1Api.md#watchbatchv1joblistforallnamespaces) | **GET** /apis/batch/v1/watch/jobs |  |
| [**watchBatchV1NamespacedCronJob**](BatchV1Api.md#watchbatchv1namespacedcronjob) | **GET** /apis/batch/v1/watch/namespaces/{namespace}/cronjobs/{name} |  |
| [**watchBatchV1NamespacedCronJobList**](BatchV1Api.md#watchbatchv1namespacedcronjoblist) | **GET** /apis/batch/v1/watch/namespaces/{namespace}/cronjobs |  |
| [**watchBatchV1NamespacedJob**](BatchV1Api.md#watchbatchv1namespacedjob) | **GET** /apis/batch/v1/watch/namespaces/{namespace}/jobs/{name} |  |
| [**watchBatchV1NamespacedJobList**](BatchV1Api.md#watchbatchv1namespacedjoblist) | **GET** /apis/batch/v1/watch/namespaces/{namespace}/jobs |  |


## **createBatchV1NamespacedCronJob**
> IoK8sApiBatchV1CronJob createBatchV1NamespacedCronJob(body)

create a CronJob

### Example

```typescript
import { SDK, CreateBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      concurrencyPolicy: "concurrencyPolicy_example",
      failedJobsHistoryLimit: 1,
      jobTemplate: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          backoffLimit: 1,
          backoffLimitPerIndex: 1,
          completionMode: "completionMode_example",
          completions: 1,
          manualSelector: true,
          maxFailedIndexes: 1,
          parallelism: 1,
          podFailurePolicy: {
            rules: [
              {
                action: "action_example",
                onExitCodes: {
                  containerName: "containerName_example",
                  operator: "operator_example",
                  values: [
                    1,
                  ],
                },
                onPodConditions: [
                  {
                    status: "status_example",
                    type: "type_example",
                  },
                ],
              },
            ],
          },
          podReplacementPolicy: "podReplacementPolicy_example",
          selector: {
            matchExpressions: [
              {
                key: "key_example",
                operator: "operator_example",
                values: [
                  "values_example",
                ],
              },
            ],
            matchLabels: {
              "key": "key_example",
            },
          },
          suspend: true,
          template: {
            metadata: {
              annotations: {
                "key": "key_example",
              },
              creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
              deletionGracePeriodSeconds: 1,
              deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
              finalizers: [
                "finalizers_example",
              ],
              generateName: "generateName_example",
              generation: 1,
              labels: {
                "key": "key_example",
              },
              managedFields: [
                {
                  apiVersion: "apiVersion_example",
                  fieldsType: "fieldsType_example",
                  fieldsV1: {},
                  manager: "manager_example",
                  operation: "operation_example",
                  subresource: "subresource_example",
                  time: new Date('1970-01-01T00:00:00.00Z'),
                },
              ],
              name: "name_example",
              namespace: "namespace_example",
              ownerReferences: [
                {
                  apiVersion: "apiVersion_example",
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: "kind_example",
                  name: "name_example",
                  uid: "uid_example",
                },
              ],
              resourceVersion: "resourceVersion_example",
              selfLink: "selfLink_example",
              uid: "uid_example",
            },
            spec: {
              activeDeadlineSeconds: 1,
              affinity: {
                nodeAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      preference: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchFields: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: {
                    nodeSelectorTerms: [
                      {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchFields: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                      },
                    ],
                  },
                },
                podAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      podAffinityTerm: {
                        labelSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        matchLabelKeys: [
                          "matchLabelKeys_example",
                        ],
                        mismatchLabelKeys: [
                          "mismatchLabelKeys_example",
                        ],
                        namespaceSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        namespaces: [
                          "namespaces_example",
                        ],
                        topologyKey: "topologyKey_example",
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      matchLabelKeys: [
                        "matchLabelKeys_example",
                      ],
                      mismatchLabelKeys: [
                        "mismatchLabelKeys_example",
                      ],
                      namespaceSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      namespaces: [
                        "namespaces_example",
                      ],
                      topologyKey: "topologyKey_example",
                    },
                  ],
                },
                podAntiAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      podAffinityTerm: {
                        labelSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        matchLabelKeys: [
                          "matchLabelKeys_example",
                        ],
                        mismatchLabelKeys: [
                          "mismatchLabelKeys_example",
                        ],
                        namespaceSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        namespaces: [
                          "namespaces_example",
                        ],
                        topologyKey: "topologyKey_example",
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      matchLabelKeys: [
                        "matchLabelKeys_example",
                      ],
                      mismatchLabelKeys: [
                        "mismatchLabelKeys_example",
                      ],
                      namespaceSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      namespaces: [
                        "namespaces_example",
                      ],
                      topologyKey: "topologyKey_example",
                    },
                  ],
                },
              },
              automountServiceAccountToken: true,
              containers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              dnsConfig: {
                nameservers: [
                  "nameservers_example",
                ],
                options: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                searches: [
                  "searches_example",
                ],
              },
              dnsPolicy: "dnsPolicy_example",
              enableServiceLinks: true,
              ephemeralContainers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  targetContainerName: "targetContainerName_example",
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              hostAliases: [
                {
                  hostnames: [
                    "hostnames_example",
                  ],
                  ip: "ip_example",
                },
              ],
              hostIPC: true,
              hostNetwork: true,
              hostPID: true,
              hostUsers: true,
              hostname: "hostname_example",
              imagePullSecrets: [
                {
                  name: "name_example",
                },
              ],
              initContainers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              nodeName: "nodeName_example",
              nodeSelector: {
                "key": "key_example",
              },
              os: {
                name: "name_example",
              },
              overhead: {
                "key": "key_example",
              },
              preemptionPolicy: "preemptionPolicy_example",
              priority: 1,
              priorityClassName: "priorityClassName_example",
              readinessGates: [
                {
                  conditionType: "conditionType_example",
                },
              ],
              resourceClaims: [
                {
                  name: "name_example",
                  source: {
                    resourceClaimName: "resourceClaimName_example",
                    resourceClaimTemplateName: "resourceClaimTemplateName_example",
                  },
                },
              ],
              restartPolicy: "restartPolicy_example",
              runtimeClassName: "runtimeClassName_example",
              schedulerName: "schedulerName_example",
              schedulingGates: [
                {
                  name: "name_example",
                },
              ],
              securityContext: {
                fsGroup: 1,
                fsGroupChangePolicy: "fsGroupChangePolicy_example",
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                supplementalGroups: [
                  1,
                ],
                sysctls: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              serviceAccount: "serviceAccount_example",
              serviceAccountName: "serviceAccountName_example",
              setHostnameAsFQDN: true,
              shareProcessNamespace: true,
              subdomain: "subdomain_example",
              terminationGracePeriodSeconds: 1,
              tolerations: [
                {
                  effect: "effect_example",
                  key: "key_example",
                  operator: "operator_example",
                  tolerationSeconds: 1,
                  value: "value_example",
                },
              ],
              topologySpreadConstraints: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  maxSkew: 1,
                  minDomains: 1,
                  nodeAffinityPolicy: "nodeAffinityPolicy_example",
                  nodeTaintsPolicy: "nodeTaintsPolicy_example",
                  topologyKey: "topologyKey_example",
                  whenUnsatisfiable: "whenUnsatisfiable_example",
                },
              ],
              volumes: [
                {
                  awsElasticBlockStore: {
                    fsType: "fsType_example",
                    partition: 1,
                    readOnly: true,
                    volumeID: "volumeID_example",
                  },
                  azureDisk: {
                    cachingMode: "cachingMode_example",
                    diskName: "diskName_example",
                    diskURI: "diskURI_example",
                    fsType: "fsType_example",
                    kind: "kind_example",
                    readOnly: true,
                  },
                  azureFile: {
                    readOnly: true,
                    secretName: "secretName_example",
                    shareName: "shareName_example",
                  },
                  cephfs: {
                    monitors: [
                      "monitors_example",
                    ],
                    path: "path_example",
                    readOnly: true,
                    secretFile: "secretFile_example",
                    secretRef: {
                      name: "name_example",
                    },
                    user: "user_example",
                  },
                  cinder: {
                    fsType: "fsType_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    volumeID: "volumeID_example",
                  },
                  configMap: {
                    defaultMode: 1,
                    items: [
                      {
                        key: "key_example",
                        mode: 1,
                        path: "path_example",
                      },
                    ],
                    name: "name_example",
                    optional: true,
                  },
                  csi: {
                    driver: "driver_example",
                    fsType: "fsType_example",
                    nodePublishSecretRef: {
                      name: "name_example",
                    },
                    readOnly: true,
                    volumeAttributes: {
                      "key": "key_example",
                    },
                  },
                  downwardAPI: {
                    defaultMode: 1,
                    items: [
                      {
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        mode: 1,
                        path: "path_example",
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                      },
                    ],
                  },
                  emptyDir: {
                    medium: "medium_example",
                    sizeLimit: "sizeLimit_example",
                  },
                  ephemeral: {
                    volumeClaimTemplate: {
                      metadata: {
                        annotations: {
                          "key": "key_example",
                        },
                        creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                        deletionGracePeriodSeconds: 1,
                        deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                        finalizers: [
                          "finalizers_example",
                        ],
                        generateName: "generateName_example",
                        generation: 1,
                        labels: {
                          "key": "key_example",
                        },
                        managedFields: [
                          {
                            apiVersion: "apiVersion_example",
                            fieldsType: "fieldsType_example",
                            fieldsV1: {},
                            manager: "manager_example",
                            operation: "operation_example",
                            subresource: "subresource_example",
                            time: new Date('1970-01-01T00:00:00.00Z'),
                          },
                        ],
                        name: "name_example",
                        namespace: "namespace_example",
                        ownerReferences: [
                          {
                            apiVersion: "apiVersion_example",
                            blockOwnerDeletion: true,
                            controller: true,
                            kind: "kind_example",
                            name: "name_example",
                            uid: "uid_example",
                          },
                        ],
                        resourceVersion: "resourceVersion_example",
                        selfLink: "selfLink_example",
                        uid: "uid_example",
                      },
                      spec: {
                        accessModes: [
                          "accessModes_example",
                        ],
                        dataSource: {
                          apiGroup: "apiGroup_example",
                          kind: "kind_example",
                          name: "name_example",
                        },
                        dataSourceRef: {
                          apiGroup: "apiGroup_example",
                          kind: "kind_example",
                          name: "name_example",
                          namespace: "namespace_example",
                        },
                        resources: {
                          limits: {
                            "key": "key_example",
                          },
                          requests: {
                            "key": "key_example",
                          },
                        },
                        selector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        storageClassName: "storageClassName_example",
                        volumeAttributesClassName: "volumeAttributesClassName_example",
                        volumeMode: "volumeMode_example",
                        volumeName: "volumeName_example",
                      },
                    },
                  },
                  fc: {
                    fsType: "fsType_example",
                    lun: 1,
                    readOnly: true,
                    targetWWNs: [
                      "targetWWNs_example",
                    ],
                    wwids: [
                      "wwids_example",
                    ],
                  },
                  flexVolume: {
                    driver: "driver_example",
                    fsType: "fsType_example",
                    options: {
                      "key": "key_example",
                    },
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                  },
                  flocker: {
                    datasetName: "datasetName_example",
                    datasetUUID: "datasetUUID_example",
                  },
                  gcePersistentDisk: {
                    fsType: "fsType_example",
                    partition: 1,
                    pdName: "pdName_example",
                    readOnly: true,
                  },
                  gitRepo: {
                    directory: "directory_example",
                    repository: "repository_example",
                    revision: "revision_example",
                  },
                  glusterfs: {
                    endpoints: "endpoints_example",
                    path: "path_example",
                    readOnly: true,
                  },
                  hostPath: {
                    path: "path_example",
                    type: "type_example",
                  },
                  iscsi: {
                    chapAuthDiscovery: true,
                    chapAuthSession: true,
                    fsType: "fsType_example",
                    initiatorName: "initiatorName_example",
                    iqn: "iqn_example",
                    iscsiInterface: "iscsiInterface_example",
                    lun: 1,
                    portals: [
                      "portals_example",
                    ],
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    targetPortal: "targetPortal_example",
                  },
                  name: "name_example",
                  nfs: {
                    path: "path_example",
                    readOnly: true,
                    server: "server_example",
                  },
                  persistentVolumeClaim: {
                    claimName: "claimName_example",
                    readOnly: true,
                  },
                  photonPersistentDisk: {
                    fsType: "fsType_example",
                    pdID: "pdID_example",
                  },
                  portworxVolume: {
                    fsType: "fsType_example",
                    readOnly: true,
                    volumeID: "volumeID_example",
                  },
                  projected: {
                    defaultMode: 1,
                    sources: [
                      {
                        clusterTrustBundle: {
                          labelSelector: {
                            matchExpressions: [
                              {
                                key: "key_example",
                                operator: "operator_example",
                                values: [
                                  "values_example",
                                ],
                              },
                            ],
                            matchLabels: {
                              "key": "key_example",
                            },
                          },
                          name: "name_example",
                          optional: true,
                          path: "path_example",
                          signerName: "signerName_example",
                        },
                        configMap: {
                          items: [
                            {
                              key: "key_example",
                              mode: 1,
                              path: "path_example",
                            },
                          ],
                          name: "name_example",
                          optional: true,
                        },
                        downwardAPI: {
                          items: [
                            {
                              fieldRef: {
                                apiVersion: "apiVersion_example",
                                fieldPath: "fieldPath_example",
                              },
                              mode: 1,
                              path: "path_example",
                              resourceFieldRef: {
                                containerName: "containerName_example",
                                divisor: "divisor_example",
                                resource: "resource_example",
                              },
                            },
                          ],
                        },
                        secret: {
                          items: [
                            {
                              key: "key_example",
                              mode: 1,
                              path: "path_example",
                            },
                          ],
                          name: "name_example",
                          optional: true,
                        },
                        serviceAccountToken: {
                          audience: "audience_example",
                          expirationSeconds: 1,
                          path: "path_example",
                        },
                      },
                    ],
                  },
                  quobyte: {
                    group: "group_example",
                    readOnly: true,
                    registry: "registry_example",
                    tenant: "tenant_example",
                    user: "user_example",
                    volume: "volume_example",
                  },
                  rbd: {
                    fsType: "fsType_example",
                    image: "image_example",
                    keyring: "keyring_example",
                    monitors: [
                      "monitors_example",
                    ],
                    pool: "pool_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    user: "user_example",
                  },
                  scaleIO: {
                    fsType: "fsType_example",
                    gateway: "gateway_example",
                    protectionDomain: "protectionDomain_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    sslEnabled: true,
                    storageMode: "storageMode_example",
                    storagePool: "storagePool_example",
                    system: "system_example",
                    volumeName: "volumeName_example",
                  },
                  secret: {
                    defaultMode: 1,
                    items: [
                      {
                        key: "key_example",
                        mode: 1,
                        path: "path_example",
                      },
                    ],
                    optional: true,
                    secretName: "secretName_example",
                  },
                  storageos: {
                    fsType: "fsType_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    volumeName: "volumeName_example",
                    volumeNamespace: "volumeNamespace_example",
                  },
                  vsphereVolume: {
                    fsType: "fsType_example",
                    storagePolicyID: "storagePolicyID_example",
                    storagePolicyName: "storagePolicyName_example",
                    volumePath: "volumePath_example",
                  },
                },
              ],
            },
          },
          ttlSecondsAfterFinished: 1,
        },
      },
      schedule: "schedule_example",
      startingDeadlineSeconds: 1,
      successfulJobsHistoryLimit: 1,
      suspend: true,
      timeZone: "timeZone_example",
    },
    status: {
      active: [
        {
          apiVersion: "apiVersion_example",
          fieldPath: "fieldPath_example",
          kind: "kind_example",
          name: "name_example",
          namespace: "namespace_example",
          resourceVersion: "resourceVersion_example",
          uid: "uid_example",
        },
      ],
      lastScheduleTime: new Date('1970-01-01T00:00:00.00Z'),
      lastSuccessfulTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.createBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiBatchV1CronJob**|  |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **createBatchV1NamespacedJob**
> IoK8sApiBatchV1Job createBatchV1NamespacedJob(body)

create a Job

### Example

```typescript
import { SDK, CreateBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      activeDeadlineSeconds: 1,
      backoffLimit: 1,
      backoffLimitPerIndex: 1,
      completionMode: "completionMode_example",
      completions: 1,
      manualSelector: true,
      maxFailedIndexes: 1,
      parallelism: 1,
      podFailurePolicy: {
        rules: [
          {
            action: "action_example",
            onExitCodes: {
              containerName: "containerName_example",
              operator: "operator_example",
              values: [
                1,
              ],
            },
            onPodConditions: [
              {
                status: "status_example",
                type: "type_example",
              },
            ],
          },
        ],
      },
      podReplacementPolicy: "podReplacementPolicy_example",
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      suspend: true,
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    matchLabelKeys: [
                      "matchLabelKeys_example",
                    ],
                    mismatchLabelKeys: [
                      "mismatchLabelKeys_example",
                    ],
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  mismatchLabelKeys: [
                    "mismatchLabelKeys_example",
                  ],
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    matchLabelKeys: [
                      "matchLabelKeys_example",
                    ],
                    mismatchLabelKeys: [
                      "mismatchLabelKeys_example",
                    ],
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  mismatchLabelKeys: [
                    "mismatchLabelKeys_example",
                  ],
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostUsers: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          os: {
            name: "name_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          resourceClaims: [
            {
              name: "name_example",
              source: {
                resourceClaimName: "resourceClaimName_example",
                resourceClaimTemplateName: "resourceClaimTemplateName_example",
              },
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          schedulingGates: [
            {
              name: "name_example",
            },
          ],
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              matchLabelKeys: [
                "matchLabelKeys_example",
              ],
              maxSkew: 1,
              minDomains: 1,
              nodeAffinityPolicy: "nodeAffinityPolicy_example",
              nodeTaintsPolicy: "nodeTaintsPolicy_example",
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                      namespace: "namespace_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeAttributesClassName: "volumeAttributesClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    clusterTrustBundle: {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      name: "name_example",
                      optional: true,
                      path: "path_example",
                      signerName: "signerName_example",
                    },
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      ttlSecondsAfterFinished: 1,
    },
    status: {
      active: 1,
      completedIndexes: "completedIndexes_example",
      completionTime: new Date('1970-01-01T00:00:00.00Z'),
      conditions: [
        {
          lastProbeTime: new Date('1970-01-01T00:00:00.00Z'),
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      failed: 1,
      failedIndexes: "failedIndexes_example",
      ready: 1,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      succeeded: 1,
      terminating: 1,
      uncountedTerminatedPods: {
        failed: [
          "failed_example",
        ],
        succeeded: [
          "succeeded_example",
        ],
      },
    },
  },
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.createBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiBatchV1Job**|  |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **deleteBatchV1CollectionNamespacedCronJob**
> IoK8sApimachineryPkgApisMetaV1Status deleteBatchV1CollectionNamespacedCronJob()

delete collection of CronJob

### Example

```typescript
import { SDK, DeleteBatchV1CollectionNamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
  };
  const result: IoK8sApimachineryPkgApisMetaV1Status = await sdk.batchV1.deleteBatchV1CollectionNamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApimachineryPkgApisMetaV1DeleteOptions**|  |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined |
| **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1Status**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **deleteBatchV1CollectionNamespacedJob**
> IoK8sApimachineryPkgApisMetaV1Status deleteBatchV1CollectionNamespacedJob()

delete collection of Job

### Example

```typescript
import { SDK, DeleteBatchV1CollectionNamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
  };
  const result: IoK8sApimachineryPkgApisMetaV1Status = await sdk.batchV1.deleteBatchV1CollectionNamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApimachineryPkgApisMetaV1DeleteOptions**|  |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined |
| **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1Status**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **deleteBatchV1NamespacedCronJob**
> IoK8sApimachineryPkgApisMetaV1Status deleteBatchV1NamespacedCronJob()

delete a CronJob

### Example

```typescript
import { SDK, DeleteBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
  };
  const result: IoK8sApimachineryPkgApisMetaV1Status = await sdk.batchV1.deleteBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApimachineryPkgApisMetaV1DeleteOptions**|  |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined |
| **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined |
| **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1Status**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **deleteBatchV1NamespacedJob**
> IoK8sApimachineryPkgApisMetaV1Status deleteBatchV1NamespacedJob()

delete a Job

### Example

```typescript
import { SDK, DeleteBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    dryRun: [
      "dryRun_example",
    ],
    gracePeriodSeconds: 1,
    kind: "kind_example",
    orphanDependents: true,
    preconditions: {
      resourceVersion: "resourceVersion_example",
      uid: "uid_example",
    },
    propagationPolicy: "propagationPolicy_example",
  },
  };
  const result: IoK8sApimachineryPkgApisMetaV1Status = await sdk.batchV1.deleteBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApimachineryPkgApisMetaV1DeleteOptions**|  |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **gracePeriodSeconds** | [**number**] | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | (optional) defaults to undefined |
| **orphanDependents** | [**boolean**] | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object\&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | (optional) defaults to undefined |
| **propagationPolicy** | [**string**] | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: \&#39;Orphan\&#39; - orphan the dependents; \&#39;Background\&#39; - allow the garbage collector to delete the dependents in the background; \&#39;Foreground\&#39; - a cascading policy that deletes all dependents in the foreground. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1Status**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **202** | Accepted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **getBatchV1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getBatchV1APIResources()

get available resources

### Example

```typescript
import { SDK, GetBatchV1APIResourcesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const result: IoK8sApimachineryPkgApisMetaV1APIResourceList = await sdk.batchV1.getBatchV1APIResources()
}
```

### Parameters
This endpoint does not need any parameter. |


### Return type

**IoK8sApimachineryPkgApisMetaV1APIResourceList**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **listBatchV1CronJobForAllNamespaces**
> IoK8sApiBatchV1CronJobList listBatchV1CronJobForAllNamespaces()

list or watch objects of kind CronJob

### Example

```typescript
import { SDK, ListBatchV1CronJobForAllNamespacesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: IoK8sApiBatchV1CronJobList = await sdk.batchV1.listBatchV1CronJobForAllNamespaces(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJobList**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **listBatchV1JobForAllNamespaces**
> IoK8sApiBatchV1JobList listBatchV1JobForAllNamespaces()

list or watch objects of kind Job

### Example

```typescript
import { SDK, ListBatchV1JobForAllNamespacesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: IoK8sApiBatchV1JobList = await sdk.batchV1.listBatchV1JobForAllNamespaces(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1JobList**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **listBatchV1NamespacedCronJob**
> IoK8sApiBatchV1CronJobList listBatchV1NamespacedCronJob()

list or watch objects of kind CronJob

### Example

```typescript
import { SDK, ListBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
  };
  const result: IoK8sApiBatchV1CronJobList = await sdk.batchV1.listBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJobList**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **listBatchV1NamespacedJob**
> IoK8sApiBatchV1JobList listBatchV1NamespacedJob()

list or watch objects of kind Job

### Example

```typescript
import { SDK, ListBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
  };
  const result: IoK8sApiBatchV1JobList = await sdk.batchV1.listBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1JobList**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **patchBatchV1NamespacedCronJob**
> IoK8sApiBatchV1CronJob patchBatchV1NamespacedCronJob(body)

partially update the specified CronJob

### Example

```typescript
import { SDK, PatchBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {},
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.patchBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **any**|  |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |
| **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **patchBatchV1NamespacedCronJobStatus**
> IoK8sApiBatchV1CronJob patchBatchV1NamespacedCronJobStatus(body)

partially update status of the specified CronJob

### Example

```typescript
import { SDK, PatchBatchV1NamespacedCronJobStatusParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {},
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.patchBatchV1NamespacedCronJobStatus(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **any**|  |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |
| **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **patchBatchV1NamespacedJob**
> IoK8sApiBatchV1Job patchBatchV1NamespacedJob(body)

partially update the specified Job

### Example

```typescript
import { SDK, PatchBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {},
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.patchBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **any**|  |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |
| **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **patchBatchV1NamespacedJobStatus**
> IoK8sApiBatchV1Job patchBatchV1NamespacedJobStatus(body)

partially update status of the specified Job

### Example

```typescript
import { SDK, PatchBatchV1NamespacedJobStatusParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {},
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.patchBatchV1NamespacedJobStatus(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **any**|  |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. This field is required for apply requests (application/apply-patch) but optional for non-apply patch types (JsonPatch, MergePatch, StrategicMergePatch). | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |
| **force** | [**boolean**] | Force is going to \&quot;force\&quot; Apply requests. It means user will re-acquire conflicting fields owned by other people. Force flag must be unset for non-apply patch requests. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json, application/apply-patch+yaml
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **readBatchV1NamespacedCronJob**
> IoK8sApiBatchV1CronJob readBatchV1NamespacedCronJob()

read the specified CronJob

### Example

```typescript
import { SDK, ReadBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.readBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **readBatchV1NamespacedCronJobStatus**
> IoK8sApiBatchV1CronJob readBatchV1NamespacedCronJobStatus()

read status of the specified CronJob

### Example

```typescript
import { SDK, ReadBatchV1NamespacedCronJobStatusParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.readBatchV1NamespacedCronJobStatus(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **readBatchV1NamespacedJob**
> IoK8sApiBatchV1Job readBatchV1NamespacedJob()

read the specified Job

### Example

```typescript
import { SDK, ReadBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.readBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **readBatchV1NamespacedJobStatus**
> IoK8sApiBatchV1Job readBatchV1NamespacedJobStatus()

read status of the specified Job

### Example

```typescript
import { SDK, ReadBatchV1NamespacedJobStatusParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.readBatchV1NamespacedJobStatus(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **replaceBatchV1NamespacedCronJob**
> IoK8sApiBatchV1CronJob replaceBatchV1NamespacedCronJob(body)

replace the specified CronJob

### Example

```typescript
import { SDK, ReplaceBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      concurrencyPolicy: "concurrencyPolicy_example",
      failedJobsHistoryLimit: 1,
      jobTemplate: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          backoffLimit: 1,
          backoffLimitPerIndex: 1,
          completionMode: "completionMode_example",
          completions: 1,
          manualSelector: true,
          maxFailedIndexes: 1,
          parallelism: 1,
          podFailurePolicy: {
            rules: [
              {
                action: "action_example",
                onExitCodes: {
                  containerName: "containerName_example",
                  operator: "operator_example",
                  values: [
                    1,
                  ],
                },
                onPodConditions: [
                  {
                    status: "status_example",
                    type: "type_example",
                  },
                ],
              },
            ],
          },
          podReplacementPolicy: "podReplacementPolicy_example",
          selector: {
            matchExpressions: [
              {
                key: "key_example",
                operator: "operator_example",
                values: [
                  "values_example",
                ],
              },
            ],
            matchLabels: {
              "key": "key_example",
            },
          },
          suspend: true,
          template: {
            metadata: {
              annotations: {
                "key": "key_example",
              },
              creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
              deletionGracePeriodSeconds: 1,
              deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
              finalizers: [
                "finalizers_example",
              ],
              generateName: "generateName_example",
              generation: 1,
              labels: {
                "key": "key_example",
              },
              managedFields: [
                {
                  apiVersion: "apiVersion_example",
                  fieldsType: "fieldsType_example",
                  fieldsV1: {},
                  manager: "manager_example",
                  operation: "operation_example",
                  subresource: "subresource_example",
                  time: new Date('1970-01-01T00:00:00.00Z'),
                },
              ],
              name: "name_example",
              namespace: "namespace_example",
              ownerReferences: [
                {
                  apiVersion: "apiVersion_example",
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: "kind_example",
                  name: "name_example",
                  uid: "uid_example",
                },
              ],
              resourceVersion: "resourceVersion_example",
              selfLink: "selfLink_example",
              uid: "uid_example",
            },
            spec: {
              activeDeadlineSeconds: 1,
              affinity: {
                nodeAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      preference: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchFields: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: {
                    nodeSelectorTerms: [
                      {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchFields: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                      },
                    ],
                  },
                },
                podAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      podAffinityTerm: {
                        labelSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        matchLabelKeys: [
                          "matchLabelKeys_example",
                        ],
                        mismatchLabelKeys: [
                          "mismatchLabelKeys_example",
                        ],
                        namespaceSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        namespaces: [
                          "namespaces_example",
                        ],
                        topologyKey: "topologyKey_example",
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      matchLabelKeys: [
                        "matchLabelKeys_example",
                      ],
                      mismatchLabelKeys: [
                        "mismatchLabelKeys_example",
                      ],
                      namespaceSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      namespaces: [
                        "namespaces_example",
                      ],
                      topologyKey: "topologyKey_example",
                    },
                  ],
                },
                podAntiAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      podAffinityTerm: {
                        labelSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        matchLabelKeys: [
                          "matchLabelKeys_example",
                        ],
                        mismatchLabelKeys: [
                          "mismatchLabelKeys_example",
                        ],
                        namespaceSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        namespaces: [
                          "namespaces_example",
                        ],
                        topologyKey: "topologyKey_example",
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      matchLabelKeys: [
                        "matchLabelKeys_example",
                      ],
                      mismatchLabelKeys: [
                        "mismatchLabelKeys_example",
                      ],
                      namespaceSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      namespaces: [
                        "namespaces_example",
                      ],
                      topologyKey: "topologyKey_example",
                    },
                  ],
                },
              },
              automountServiceAccountToken: true,
              containers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              dnsConfig: {
                nameservers: [
                  "nameservers_example",
                ],
                options: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                searches: [
                  "searches_example",
                ],
              },
              dnsPolicy: "dnsPolicy_example",
              enableServiceLinks: true,
              ephemeralContainers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  targetContainerName: "targetContainerName_example",
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              hostAliases: [
                {
                  hostnames: [
                    "hostnames_example",
                  ],
                  ip: "ip_example",
                },
              ],
              hostIPC: true,
              hostNetwork: true,
              hostPID: true,
              hostUsers: true,
              hostname: "hostname_example",
              imagePullSecrets: [
                {
                  name: "name_example",
                },
              ],
              initContainers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              nodeName: "nodeName_example",
              nodeSelector: {
                "key": "key_example",
              },
              os: {
                name: "name_example",
              },
              overhead: {
                "key": "key_example",
              },
              preemptionPolicy: "preemptionPolicy_example",
              priority: 1,
              priorityClassName: "priorityClassName_example",
              readinessGates: [
                {
                  conditionType: "conditionType_example",
                },
              ],
              resourceClaims: [
                {
                  name: "name_example",
                  source: {
                    resourceClaimName: "resourceClaimName_example",
                    resourceClaimTemplateName: "resourceClaimTemplateName_example",
                  },
                },
              ],
              restartPolicy: "restartPolicy_example",
              runtimeClassName: "runtimeClassName_example",
              schedulerName: "schedulerName_example",
              schedulingGates: [
                {
                  name: "name_example",
                },
              ],
              securityContext: {
                fsGroup: 1,
                fsGroupChangePolicy: "fsGroupChangePolicy_example",
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                supplementalGroups: [
                  1,
                ],
                sysctls: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              serviceAccount: "serviceAccount_example",
              serviceAccountName: "serviceAccountName_example",
              setHostnameAsFQDN: true,
              shareProcessNamespace: true,
              subdomain: "subdomain_example",
              terminationGracePeriodSeconds: 1,
              tolerations: [
                {
                  effect: "effect_example",
                  key: "key_example",
                  operator: "operator_example",
                  tolerationSeconds: 1,
                  value: "value_example",
                },
              ],
              topologySpreadConstraints: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  maxSkew: 1,
                  minDomains: 1,
                  nodeAffinityPolicy: "nodeAffinityPolicy_example",
                  nodeTaintsPolicy: "nodeTaintsPolicy_example",
                  topologyKey: "topologyKey_example",
                  whenUnsatisfiable: "whenUnsatisfiable_example",
                },
              ],
              volumes: [
                {
                  awsElasticBlockStore: {
                    fsType: "fsType_example",
                    partition: 1,
                    readOnly: true,
                    volumeID: "volumeID_example",
                  },
                  azureDisk: {
                    cachingMode: "cachingMode_example",
                    diskName: "diskName_example",
                    diskURI: "diskURI_example",
                    fsType: "fsType_example",
                    kind: "kind_example",
                    readOnly: true,
                  },
                  azureFile: {
                    readOnly: true,
                    secretName: "secretName_example",
                    shareName: "shareName_example",
                  },
                  cephfs: {
                    monitors: [
                      "monitors_example",
                    ],
                    path: "path_example",
                    readOnly: true,
                    secretFile: "secretFile_example",
                    secretRef: {
                      name: "name_example",
                    },
                    user: "user_example",
                  },
                  cinder: {
                    fsType: "fsType_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    volumeID: "volumeID_example",
                  },
                  configMap: {
                    defaultMode: 1,
                    items: [
                      {
                        key: "key_example",
                        mode: 1,
                        path: "path_example",
                      },
                    ],
                    name: "name_example",
                    optional: true,
                  },
                  csi: {
                    driver: "driver_example",
                    fsType: "fsType_example",
                    nodePublishSecretRef: {
                      name: "name_example",
                    },
                    readOnly: true,
                    volumeAttributes: {
                      "key": "key_example",
                    },
                  },
                  downwardAPI: {
                    defaultMode: 1,
                    items: [
                      {
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        mode: 1,
                        path: "path_example",
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                      },
                    ],
                  },
                  emptyDir: {
                    medium: "medium_example",
                    sizeLimit: "sizeLimit_example",
                  },
                  ephemeral: {
                    volumeClaimTemplate: {
                      metadata: {
                        annotations: {
                          "key": "key_example",
                        },
                        creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                        deletionGracePeriodSeconds: 1,
                        deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                        finalizers: [
                          "finalizers_example",
                        ],
                        generateName: "generateName_example",
                        generation: 1,
                        labels: {
                          "key": "key_example",
                        },
                        managedFields: [
                          {
                            apiVersion: "apiVersion_example",
                            fieldsType: "fieldsType_example",
                            fieldsV1: {},
                            manager: "manager_example",
                            operation: "operation_example",
                            subresource: "subresource_example",
                            time: new Date('1970-01-01T00:00:00.00Z'),
                          },
                        ],
                        name: "name_example",
                        namespace: "namespace_example",
                        ownerReferences: [
                          {
                            apiVersion: "apiVersion_example",
                            blockOwnerDeletion: true,
                            controller: true,
                            kind: "kind_example",
                            name: "name_example",
                            uid: "uid_example",
                          },
                        ],
                        resourceVersion: "resourceVersion_example",
                        selfLink: "selfLink_example",
                        uid: "uid_example",
                      },
                      spec: {
                        accessModes: [
                          "accessModes_example",
                        ],
                        dataSource: {
                          apiGroup: "apiGroup_example",
                          kind: "kind_example",
                          name: "name_example",
                        },
                        dataSourceRef: {
                          apiGroup: "apiGroup_example",
                          kind: "kind_example",
                          name: "name_example",
                          namespace: "namespace_example",
                        },
                        resources: {
                          limits: {
                            "key": "key_example",
                          },
                          requests: {
                            "key": "key_example",
                          },
                        },
                        selector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        storageClassName: "storageClassName_example",
                        volumeAttributesClassName: "volumeAttributesClassName_example",
                        volumeMode: "volumeMode_example",
                        volumeName: "volumeName_example",
                      },
                    },
                  },
                  fc: {
                    fsType: "fsType_example",
                    lun: 1,
                    readOnly: true,
                    targetWWNs: [
                      "targetWWNs_example",
                    ],
                    wwids: [
                      "wwids_example",
                    ],
                  },
                  flexVolume: {
                    driver: "driver_example",
                    fsType: "fsType_example",
                    options: {
                      "key": "key_example",
                    },
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                  },
                  flocker: {
                    datasetName: "datasetName_example",
                    datasetUUID: "datasetUUID_example",
                  },
                  gcePersistentDisk: {
                    fsType: "fsType_example",
                    partition: 1,
                    pdName: "pdName_example",
                    readOnly: true,
                  },
                  gitRepo: {
                    directory: "directory_example",
                    repository: "repository_example",
                    revision: "revision_example",
                  },
                  glusterfs: {
                    endpoints: "endpoints_example",
                    path: "path_example",
                    readOnly: true,
                  },
                  hostPath: {
                    path: "path_example",
                    type: "type_example",
                  },
                  iscsi: {
                    chapAuthDiscovery: true,
                    chapAuthSession: true,
                    fsType: "fsType_example",
                    initiatorName: "initiatorName_example",
                    iqn: "iqn_example",
                    iscsiInterface: "iscsiInterface_example",
                    lun: 1,
                    portals: [
                      "portals_example",
                    ],
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    targetPortal: "targetPortal_example",
                  },
                  name: "name_example",
                  nfs: {
                    path: "path_example",
                    readOnly: true,
                    server: "server_example",
                  },
                  persistentVolumeClaim: {
                    claimName: "claimName_example",
                    readOnly: true,
                  },
                  photonPersistentDisk: {
                    fsType: "fsType_example",
                    pdID: "pdID_example",
                  },
                  portworxVolume: {
                    fsType: "fsType_example",
                    readOnly: true,
                    volumeID: "volumeID_example",
                  },
                  projected: {
                    defaultMode: 1,
                    sources: [
                      {
                        clusterTrustBundle: {
                          labelSelector: {
                            matchExpressions: [
                              {
                                key: "key_example",
                                operator: "operator_example",
                                values: [
                                  "values_example",
                                ],
                              },
                            ],
                            matchLabels: {
                              "key": "key_example",
                            },
                          },
                          name: "name_example",
                          optional: true,
                          path: "path_example",
                          signerName: "signerName_example",
                        },
                        configMap: {
                          items: [
                            {
                              key: "key_example",
                              mode: 1,
                              path: "path_example",
                            },
                          ],
                          name: "name_example",
                          optional: true,
                        },
                        downwardAPI: {
                          items: [
                            {
                              fieldRef: {
                                apiVersion: "apiVersion_example",
                                fieldPath: "fieldPath_example",
                              },
                              mode: 1,
                              path: "path_example",
                              resourceFieldRef: {
                                containerName: "containerName_example",
                                divisor: "divisor_example",
                                resource: "resource_example",
                              },
                            },
                          ],
                        },
                        secret: {
                          items: [
                            {
                              key: "key_example",
                              mode: 1,
                              path: "path_example",
                            },
                          ],
                          name: "name_example",
                          optional: true,
                        },
                        serviceAccountToken: {
                          audience: "audience_example",
                          expirationSeconds: 1,
                          path: "path_example",
                        },
                      },
                    ],
                  },
                  quobyte: {
                    group: "group_example",
                    readOnly: true,
                    registry: "registry_example",
                    tenant: "tenant_example",
                    user: "user_example",
                    volume: "volume_example",
                  },
                  rbd: {
                    fsType: "fsType_example",
                    image: "image_example",
                    keyring: "keyring_example",
                    monitors: [
                      "monitors_example",
                    ],
                    pool: "pool_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    user: "user_example",
                  },
                  scaleIO: {
                    fsType: "fsType_example",
                    gateway: "gateway_example",
                    protectionDomain: "protectionDomain_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    sslEnabled: true,
                    storageMode: "storageMode_example",
                    storagePool: "storagePool_example",
                    system: "system_example",
                    volumeName: "volumeName_example",
                  },
                  secret: {
                    defaultMode: 1,
                    items: [
                      {
                        key: "key_example",
                        mode: 1,
                        path: "path_example",
                      },
                    ],
                    optional: true,
                    secretName: "secretName_example",
                  },
                  storageos: {
                    fsType: "fsType_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    volumeName: "volumeName_example",
                    volumeNamespace: "volumeNamespace_example",
                  },
                  vsphereVolume: {
                    fsType: "fsType_example",
                    storagePolicyID: "storagePolicyID_example",
                    storagePolicyName: "storagePolicyName_example",
                    volumePath: "volumePath_example",
                  },
                },
              ],
            },
          },
          ttlSecondsAfterFinished: 1,
        },
      },
      schedule: "schedule_example",
      startingDeadlineSeconds: 1,
      successfulJobsHistoryLimit: 1,
      suspend: true,
      timeZone: "timeZone_example",
    },
    status: {
      active: [
        {
          apiVersion: "apiVersion_example",
          fieldPath: "fieldPath_example",
          kind: "kind_example",
          name: "name_example",
          namespace: "namespace_example",
          resourceVersion: "resourceVersion_example",
          uid: "uid_example",
        },
      ],
      lastScheduleTime: new Date('1970-01-01T00:00:00.00Z'),
      lastSuccessfulTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.replaceBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiBatchV1CronJob**|  |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **replaceBatchV1NamespacedCronJobStatus**
> IoK8sApiBatchV1CronJob replaceBatchV1NamespacedCronJobStatus(body)

replace status of the specified CronJob

### Example

```typescript
import { SDK, ReplaceBatchV1NamespacedCronJobStatusParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      concurrencyPolicy: "concurrencyPolicy_example",
      failedJobsHistoryLimit: 1,
      jobTemplate: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          backoffLimit: 1,
          backoffLimitPerIndex: 1,
          completionMode: "completionMode_example",
          completions: 1,
          manualSelector: true,
          maxFailedIndexes: 1,
          parallelism: 1,
          podFailurePolicy: {
            rules: [
              {
                action: "action_example",
                onExitCodes: {
                  containerName: "containerName_example",
                  operator: "operator_example",
                  values: [
                    1,
                  ],
                },
                onPodConditions: [
                  {
                    status: "status_example",
                    type: "type_example",
                  },
                ],
              },
            ],
          },
          podReplacementPolicy: "podReplacementPolicy_example",
          selector: {
            matchExpressions: [
              {
                key: "key_example",
                operator: "operator_example",
                values: [
                  "values_example",
                ],
              },
            ],
            matchLabels: {
              "key": "key_example",
            },
          },
          suspend: true,
          template: {
            metadata: {
              annotations: {
                "key": "key_example",
              },
              creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
              deletionGracePeriodSeconds: 1,
              deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
              finalizers: [
                "finalizers_example",
              ],
              generateName: "generateName_example",
              generation: 1,
              labels: {
                "key": "key_example",
              },
              managedFields: [
                {
                  apiVersion: "apiVersion_example",
                  fieldsType: "fieldsType_example",
                  fieldsV1: {},
                  manager: "manager_example",
                  operation: "operation_example",
                  subresource: "subresource_example",
                  time: new Date('1970-01-01T00:00:00.00Z'),
                },
              ],
              name: "name_example",
              namespace: "namespace_example",
              ownerReferences: [
                {
                  apiVersion: "apiVersion_example",
                  blockOwnerDeletion: true,
                  controller: true,
                  kind: "kind_example",
                  name: "name_example",
                  uid: "uid_example",
                },
              ],
              resourceVersion: "resourceVersion_example",
              selfLink: "selfLink_example",
              uid: "uid_example",
            },
            spec: {
              activeDeadlineSeconds: 1,
              affinity: {
                nodeAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      preference: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchFields: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: {
                    nodeSelectorTerms: [
                      {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchFields: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                      },
                    ],
                  },
                },
                podAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      podAffinityTerm: {
                        labelSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        matchLabelKeys: [
                          "matchLabelKeys_example",
                        ],
                        mismatchLabelKeys: [
                          "mismatchLabelKeys_example",
                        ],
                        namespaceSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        namespaces: [
                          "namespaces_example",
                        ],
                        topologyKey: "topologyKey_example",
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      matchLabelKeys: [
                        "matchLabelKeys_example",
                      ],
                      mismatchLabelKeys: [
                        "mismatchLabelKeys_example",
                      ],
                      namespaceSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      namespaces: [
                        "namespaces_example",
                      ],
                      topologyKey: "topologyKey_example",
                    },
                  ],
                },
                podAntiAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [
                    {
                      podAffinityTerm: {
                        labelSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        matchLabelKeys: [
                          "matchLabelKeys_example",
                        ],
                        mismatchLabelKeys: [
                          "mismatchLabelKeys_example",
                        ],
                        namespaceSelector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        namespaces: [
                          "namespaces_example",
                        ],
                        topologyKey: "topologyKey_example",
                      },
                      weight: 1,
                    },
                  ],
                  requiredDuringSchedulingIgnoredDuringExecution: [
                    {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      matchLabelKeys: [
                        "matchLabelKeys_example",
                      ],
                      mismatchLabelKeys: [
                        "mismatchLabelKeys_example",
                      ],
                      namespaceSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      namespaces: [
                        "namespaces_example",
                      ],
                      topologyKey: "topologyKey_example",
                    },
                  ],
                },
              },
              automountServiceAccountToken: true,
              containers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              dnsConfig: {
                nameservers: [
                  "nameservers_example",
                ],
                options: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                searches: [
                  "searches_example",
                ],
              },
              dnsPolicy: "dnsPolicy_example",
              enableServiceLinks: true,
              ephemeralContainers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  targetContainerName: "targetContainerName_example",
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              hostAliases: [
                {
                  hostnames: [
                    "hostnames_example",
                  ],
                  ip: "ip_example",
                },
              ],
              hostIPC: true,
              hostNetwork: true,
              hostPID: true,
              hostUsers: true,
              hostname: "hostname_example",
              imagePullSecrets: [
                {
                  name: "name_example",
                },
              ],
              initContainers: [
                {
                  args: [
                    "args_example",
                  ],
                  command: [
                    "command_example",
                  ],
                  env: [
                    {
                      name: "name_example",
                      value: "value_example",
                      valueFrom: {
                        configMapKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                        secretKeyRef: {
                          key: "key_example",
                          name: "name_example",
                          optional: true,
                        },
                      },
                    },
                  ],
                  envFrom: [
                    {
                      configMapRef: {
                        name: "name_example",
                        optional: true,
                      },
                      prefix: "prefix_example",
                      secretRef: {
                        name: "name_example",
                        optional: true,
                      },
                    },
                  ],
                  image: "image_example",
                  imagePullPolicy: "imagePullPolicy_example",
                  lifecycle: {
                    postStart: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                    preStop: {
                      exec: {
                        command: [
                          "command_example",
                        ],
                      },
                      httpGet: {
                        host: "host_example",
                        httpHeaders: [
                          {
                            name: "name_example",
                            value: "value_example",
                          },
                        ],
                        path: "path_example",
                        port: "port_example",
                        scheme: "scheme_example",
                      },
                      sleep: {
                        seconds: 1,
                      },
                      tcpSocket: {
                        host: "host_example",
                        port: "port_example",
                      },
                    },
                  },
                  livenessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  name: "name_example",
                  ports: [
                    {
                      containerPort: 1,
                      hostIP: "hostIP_example",
                      hostPort: 1,
                      name: "name_example",
                      protocol: "protocol_example",
                    },
                  ],
                  readinessProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  resizePolicy: [
                    {
                      resourceName: "resourceName_example",
                      restartPolicy: "restartPolicy_example",
                    },
                  ],
                  resources: {
                    claims: [
                      {
                        name: "name_example",
                      },
                    ],
                    limits: {
                      "key": "key_example",
                    },
                    requests: {
                      "key": "key_example",
                    },
                  },
                  restartPolicy: "restartPolicy_example",
                  securityContext: {
                    allowPrivilegeEscalation: true,
                    capabilities: {
                      add: [
                        "add_example",
                      ],
                      drop: [
                        "drop_example",
                      ],
                    },
                    privileged: true,
                    procMount: "procMount_example",
                    readOnlyRootFilesystem: true,
                    runAsGroup: 1,
                    runAsNonRoot: true,
                    runAsUser: 1,
                    seLinuxOptions: {
                      level: "level_example",
                      role: "role_example",
                      type: "type_example",
                      user: "user_example",
                    },
                    seccompProfile: {
                      localhostProfile: "localhostProfile_example",
                      type: "type_example",
                    },
                    windowsOptions: {
                      gmsaCredentialSpec: "gmsaCredentialSpec_example",
                      gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                      hostProcess: true,
                      runAsUserName: "runAsUserName_example",
                    },
                  },
                  startupProbe: {
                    exec: {
                      command: [
                        "command_example",
                      ],
                    },
                    failureThreshold: 1,
                    grpc: {
                      port: 1,
                      service: "service_example",
                    },
                    httpGet: {
                      host: "host_example",
                      httpHeaders: [
                        {
                          name: "name_example",
                          value: "value_example",
                        },
                      ],
                      path: "path_example",
                      port: "port_example",
                      scheme: "scheme_example",
                    },
                    initialDelaySeconds: 1,
                    periodSeconds: 1,
                    successThreshold: 1,
                    tcpSocket: {
                      host: "host_example",
                      port: "port_example",
                    },
                    terminationGracePeriodSeconds: 1,
                    timeoutSeconds: 1,
                  },
                  stdin: true,
                  stdinOnce: true,
                  terminationMessagePath: "terminationMessagePath_example",
                  terminationMessagePolicy: "terminationMessagePolicy_example",
                  tty: true,
                  volumeDevices: [
                    {
                      devicePath: "devicePath_example",
                      name: "name_example",
                    },
                  ],
                  volumeMounts: [
                    {
                      mountPath: "mountPath_example",
                      mountPropagation: "mountPropagation_example",
                      name: "name_example",
                      readOnly: true,
                      subPath: "subPath_example",
                      subPathExpr: "subPathExpr_example",
                    },
                  ],
                  workingDir: "workingDir_example",
                },
              ],
              nodeName: "nodeName_example",
              nodeSelector: {
                "key": "key_example",
              },
              os: {
                name: "name_example",
              },
              overhead: {
                "key": "key_example",
              },
              preemptionPolicy: "preemptionPolicy_example",
              priority: 1,
              priorityClassName: "priorityClassName_example",
              readinessGates: [
                {
                  conditionType: "conditionType_example",
                },
              ],
              resourceClaims: [
                {
                  name: "name_example",
                  source: {
                    resourceClaimName: "resourceClaimName_example",
                    resourceClaimTemplateName: "resourceClaimTemplateName_example",
                  },
                },
              ],
              restartPolicy: "restartPolicy_example",
              runtimeClassName: "runtimeClassName_example",
              schedulerName: "schedulerName_example",
              schedulingGates: [
                {
                  name: "name_example",
                },
              ],
              securityContext: {
                fsGroup: 1,
                fsGroupChangePolicy: "fsGroupChangePolicy_example",
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                supplementalGroups: [
                  1,
                ],
                sysctls: [
                  {
                    name: "name_example",
                    value: "value_example",
                  },
                ],
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              serviceAccount: "serviceAccount_example",
              serviceAccountName: "serviceAccountName_example",
              setHostnameAsFQDN: true,
              shareProcessNamespace: true,
              subdomain: "subdomain_example",
              terminationGracePeriodSeconds: 1,
              tolerations: [
                {
                  effect: "effect_example",
                  key: "key_example",
                  operator: "operator_example",
                  tolerationSeconds: 1,
                  value: "value_example",
                },
              ],
              topologySpreadConstraints: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  maxSkew: 1,
                  minDomains: 1,
                  nodeAffinityPolicy: "nodeAffinityPolicy_example",
                  nodeTaintsPolicy: "nodeTaintsPolicy_example",
                  topologyKey: "topologyKey_example",
                  whenUnsatisfiable: "whenUnsatisfiable_example",
                },
              ],
              volumes: [
                {
                  awsElasticBlockStore: {
                    fsType: "fsType_example",
                    partition: 1,
                    readOnly: true,
                    volumeID: "volumeID_example",
                  },
                  azureDisk: {
                    cachingMode: "cachingMode_example",
                    diskName: "diskName_example",
                    diskURI: "diskURI_example",
                    fsType: "fsType_example",
                    kind: "kind_example",
                    readOnly: true,
                  },
                  azureFile: {
                    readOnly: true,
                    secretName: "secretName_example",
                    shareName: "shareName_example",
                  },
                  cephfs: {
                    monitors: [
                      "monitors_example",
                    ],
                    path: "path_example",
                    readOnly: true,
                    secretFile: "secretFile_example",
                    secretRef: {
                      name: "name_example",
                    },
                    user: "user_example",
                  },
                  cinder: {
                    fsType: "fsType_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    volumeID: "volumeID_example",
                  },
                  configMap: {
                    defaultMode: 1,
                    items: [
                      {
                        key: "key_example",
                        mode: 1,
                        path: "path_example",
                      },
                    ],
                    name: "name_example",
                    optional: true,
                  },
                  csi: {
                    driver: "driver_example",
                    fsType: "fsType_example",
                    nodePublishSecretRef: {
                      name: "name_example",
                    },
                    readOnly: true,
                    volumeAttributes: {
                      "key": "key_example",
                    },
                  },
                  downwardAPI: {
                    defaultMode: 1,
                    items: [
                      {
                        fieldRef: {
                          apiVersion: "apiVersion_example",
                          fieldPath: "fieldPath_example",
                        },
                        mode: 1,
                        path: "path_example",
                        resourceFieldRef: {
                          containerName: "containerName_example",
                          divisor: "divisor_example",
                          resource: "resource_example",
                        },
                      },
                    ],
                  },
                  emptyDir: {
                    medium: "medium_example",
                    sizeLimit: "sizeLimit_example",
                  },
                  ephemeral: {
                    volumeClaimTemplate: {
                      metadata: {
                        annotations: {
                          "key": "key_example",
                        },
                        creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                        deletionGracePeriodSeconds: 1,
                        deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                        finalizers: [
                          "finalizers_example",
                        ],
                        generateName: "generateName_example",
                        generation: 1,
                        labels: {
                          "key": "key_example",
                        },
                        managedFields: [
                          {
                            apiVersion: "apiVersion_example",
                            fieldsType: "fieldsType_example",
                            fieldsV1: {},
                            manager: "manager_example",
                            operation: "operation_example",
                            subresource: "subresource_example",
                            time: new Date('1970-01-01T00:00:00.00Z'),
                          },
                        ],
                        name: "name_example",
                        namespace: "namespace_example",
                        ownerReferences: [
                          {
                            apiVersion: "apiVersion_example",
                            blockOwnerDeletion: true,
                            controller: true,
                            kind: "kind_example",
                            name: "name_example",
                            uid: "uid_example",
                          },
                        ],
                        resourceVersion: "resourceVersion_example",
                        selfLink: "selfLink_example",
                        uid: "uid_example",
                      },
                      spec: {
                        accessModes: [
                          "accessModes_example",
                        ],
                        dataSource: {
                          apiGroup: "apiGroup_example",
                          kind: "kind_example",
                          name: "name_example",
                        },
                        dataSourceRef: {
                          apiGroup: "apiGroup_example",
                          kind: "kind_example",
                          name: "name_example",
                          namespace: "namespace_example",
                        },
                        resources: {
                          limits: {
                            "key": "key_example",
                          },
                          requests: {
                            "key": "key_example",
                          },
                        },
                        selector: {
                          matchExpressions: [
                            {
                              key: "key_example",
                              operator: "operator_example",
                              values: [
                                "values_example",
                              ],
                            },
                          ],
                          matchLabels: {
                            "key": "key_example",
                          },
                        },
                        storageClassName: "storageClassName_example",
                        volumeAttributesClassName: "volumeAttributesClassName_example",
                        volumeMode: "volumeMode_example",
                        volumeName: "volumeName_example",
                      },
                    },
                  },
                  fc: {
                    fsType: "fsType_example",
                    lun: 1,
                    readOnly: true,
                    targetWWNs: [
                      "targetWWNs_example",
                    ],
                    wwids: [
                      "wwids_example",
                    ],
                  },
                  flexVolume: {
                    driver: "driver_example",
                    fsType: "fsType_example",
                    options: {
                      "key": "key_example",
                    },
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                  },
                  flocker: {
                    datasetName: "datasetName_example",
                    datasetUUID: "datasetUUID_example",
                  },
                  gcePersistentDisk: {
                    fsType: "fsType_example",
                    partition: 1,
                    pdName: "pdName_example",
                    readOnly: true,
                  },
                  gitRepo: {
                    directory: "directory_example",
                    repository: "repository_example",
                    revision: "revision_example",
                  },
                  glusterfs: {
                    endpoints: "endpoints_example",
                    path: "path_example",
                    readOnly: true,
                  },
                  hostPath: {
                    path: "path_example",
                    type: "type_example",
                  },
                  iscsi: {
                    chapAuthDiscovery: true,
                    chapAuthSession: true,
                    fsType: "fsType_example",
                    initiatorName: "initiatorName_example",
                    iqn: "iqn_example",
                    iscsiInterface: "iscsiInterface_example",
                    lun: 1,
                    portals: [
                      "portals_example",
                    ],
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    targetPortal: "targetPortal_example",
                  },
                  name: "name_example",
                  nfs: {
                    path: "path_example",
                    readOnly: true,
                    server: "server_example",
                  },
                  persistentVolumeClaim: {
                    claimName: "claimName_example",
                    readOnly: true,
                  },
                  photonPersistentDisk: {
                    fsType: "fsType_example",
                    pdID: "pdID_example",
                  },
                  portworxVolume: {
                    fsType: "fsType_example",
                    readOnly: true,
                    volumeID: "volumeID_example",
                  },
                  projected: {
                    defaultMode: 1,
                    sources: [
                      {
                        clusterTrustBundle: {
                          labelSelector: {
                            matchExpressions: [
                              {
                                key: "key_example",
                                operator: "operator_example",
                                values: [
                                  "values_example",
                                ],
                              },
                            ],
                            matchLabels: {
                              "key": "key_example",
                            },
                          },
                          name: "name_example",
                          optional: true,
                          path: "path_example",
                          signerName: "signerName_example",
                        },
                        configMap: {
                          items: [
                            {
                              key: "key_example",
                              mode: 1,
                              path: "path_example",
                            },
                          ],
                          name: "name_example",
                          optional: true,
                        },
                        downwardAPI: {
                          items: [
                            {
                              fieldRef: {
                                apiVersion: "apiVersion_example",
                                fieldPath: "fieldPath_example",
                              },
                              mode: 1,
                              path: "path_example",
                              resourceFieldRef: {
                                containerName: "containerName_example",
                                divisor: "divisor_example",
                                resource: "resource_example",
                              },
                            },
                          ],
                        },
                        secret: {
                          items: [
                            {
                              key: "key_example",
                              mode: 1,
                              path: "path_example",
                            },
                          ],
                          name: "name_example",
                          optional: true,
                        },
                        serviceAccountToken: {
                          audience: "audience_example",
                          expirationSeconds: 1,
                          path: "path_example",
                        },
                      },
                    ],
                  },
                  quobyte: {
                    group: "group_example",
                    readOnly: true,
                    registry: "registry_example",
                    tenant: "tenant_example",
                    user: "user_example",
                    volume: "volume_example",
                  },
                  rbd: {
                    fsType: "fsType_example",
                    image: "image_example",
                    keyring: "keyring_example",
                    monitors: [
                      "monitors_example",
                    ],
                    pool: "pool_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    user: "user_example",
                  },
                  scaleIO: {
                    fsType: "fsType_example",
                    gateway: "gateway_example",
                    protectionDomain: "protectionDomain_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    sslEnabled: true,
                    storageMode: "storageMode_example",
                    storagePool: "storagePool_example",
                    system: "system_example",
                    volumeName: "volumeName_example",
                  },
                  secret: {
                    defaultMode: 1,
                    items: [
                      {
                        key: "key_example",
                        mode: 1,
                        path: "path_example",
                      },
                    ],
                    optional: true,
                    secretName: "secretName_example",
                  },
                  storageos: {
                    fsType: "fsType_example",
                    readOnly: true,
                    secretRef: {
                      name: "name_example",
                    },
                    volumeName: "volumeName_example",
                    volumeNamespace: "volumeNamespace_example",
                  },
                  vsphereVolume: {
                    fsType: "fsType_example",
                    storagePolicyID: "storagePolicyID_example",
                    storagePolicyName: "storagePolicyName_example",
                    volumePath: "volumePath_example",
                  },
                },
              ],
            },
          },
          ttlSecondsAfterFinished: 1,
        },
      },
      schedule: "schedule_example",
      startingDeadlineSeconds: 1,
      successfulJobsHistoryLimit: 1,
      suspend: true,
      timeZone: "timeZone_example",
    },
    status: {
      active: [
        {
          apiVersion: "apiVersion_example",
          fieldPath: "fieldPath_example",
          kind: "kind_example",
          name: "name_example",
          namespace: "namespace_example",
          resourceVersion: "resourceVersion_example",
          uid: "uid_example",
        },
      ],
      lastScheduleTime: new Date('1970-01-01T00:00:00.00Z'),
      lastSuccessfulTime: new Date('1970-01-01T00:00:00.00Z'),
    },
  },
  };
  const result: IoK8sApiBatchV1CronJob = await sdk.batchV1.replaceBatchV1NamespacedCronJobStatus(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiBatchV1CronJob**|  |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1CronJob**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **replaceBatchV1NamespacedJob**
> IoK8sApiBatchV1Job replaceBatchV1NamespacedJob(body)

replace the specified Job

### Example

```typescript
import { SDK, ReplaceBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      activeDeadlineSeconds: 1,
      backoffLimit: 1,
      backoffLimitPerIndex: 1,
      completionMode: "completionMode_example",
      completions: 1,
      manualSelector: true,
      maxFailedIndexes: 1,
      parallelism: 1,
      podFailurePolicy: {
        rules: [
          {
            action: "action_example",
            onExitCodes: {
              containerName: "containerName_example",
              operator: "operator_example",
              values: [
                1,
              ],
            },
            onPodConditions: [
              {
                status: "status_example",
                type: "type_example",
              },
            ],
          },
        ],
      },
      podReplacementPolicy: "podReplacementPolicy_example",
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      suspend: true,
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    matchLabelKeys: [
                      "matchLabelKeys_example",
                    ],
                    mismatchLabelKeys: [
                      "mismatchLabelKeys_example",
                    ],
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  mismatchLabelKeys: [
                    "mismatchLabelKeys_example",
                  ],
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    matchLabelKeys: [
                      "matchLabelKeys_example",
                    ],
                    mismatchLabelKeys: [
                      "mismatchLabelKeys_example",
                    ],
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  mismatchLabelKeys: [
                    "mismatchLabelKeys_example",
                  ],
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostUsers: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          os: {
            name: "name_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          resourceClaims: [
            {
              name: "name_example",
              source: {
                resourceClaimName: "resourceClaimName_example",
                resourceClaimTemplateName: "resourceClaimTemplateName_example",
              },
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          schedulingGates: [
            {
              name: "name_example",
            },
          ],
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              matchLabelKeys: [
                "matchLabelKeys_example",
              ],
              maxSkew: 1,
              minDomains: 1,
              nodeAffinityPolicy: "nodeAffinityPolicy_example",
              nodeTaintsPolicy: "nodeTaintsPolicy_example",
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                      namespace: "namespace_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeAttributesClassName: "volumeAttributesClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    clusterTrustBundle: {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      name: "name_example",
                      optional: true,
                      path: "path_example",
                      signerName: "signerName_example",
                    },
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      ttlSecondsAfterFinished: 1,
    },
    status: {
      active: 1,
      completedIndexes: "completedIndexes_example",
      completionTime: new Date('1970-01-01T00:00:00.00Z'),
      conditions: [
        {
          lastProbeTime: new Date('1970-01-01T00:00:00.00Z'),
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      failed: 1,
      failedIndexes: "failedIndexes_example",
      ready: 1,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      succeeded: 1,
      terminating: 1,
      uncountedTerminatedPods: {
        failed: [
          "failed_example",
        ],
        succeeded: [
          "succeeded_example",
        ],
      },
    },
  },
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.replaceBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiBatchV1Job**|  |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **replaceBatchV1NamespacedJobStatus**
> IoK8sApiBatchV1Job replaceBatchV1NamespacedJobStatus(body)

replace status of the specified Job

### Example

```typescript
import { SDK, ReplaceBatchV1NamespacedJobStatusParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
    data: {
    apiVersion: "apiVersion_example",
    kind: "kind_example",
    metadata: {
      annotations: {
        "key": "key_example",
      },
      creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      deletionGracePeriodSeconds: 1,
      deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
      finalizers: [
        "finalizers_example",
      ],
      generateName: "generateName_example",
      generation: 1,
      labels: {
        "key": "key_example",
      },
      managedFields: [
        {
          apiVersion: "apiVersion_example",
          fieldsType: "fieldsType_example",
          fieldsV1: {},
          manager: "manager_example",
          operation: "operation_example",
          subresource: "subresource_example",
          time: new Date('1970-01-01T00:00:00.00Z'),
        },
      ],
      name: "name_example",
      namespace: "namespace_example",
      ownerReferences: [
        {
          apiVersion: "apiVersion_example",
          blockOwnerDeletion: true,
          controller: true,
          kind: "kind_example",
          name: "name_example",
          uid: "uid_example",
        },
      ],
      resourceVersion: "resourceVersion_example",
      selfLink: "selfLink_example",
      uid: "uid_example",
    },
    spec: {
      activeDeadlineSeconds: 1,
      backoffLimit: 1,
      backoffLimitPerIndex: 1,
      completionMode: "completionMode_example",
      completions: 1,
      manualSelector: true,
      maxFailedIndexes: 1,
      parallelism: 1,
      podFailurePolicy: {
        rules: [
          {
            action: "action_example",
            onExitCodes: {
              containerName: "containerName_example",
              operator: "operator_example",
              values: [
                1,
              ],
            },
            onPodConditions: [
              {
                status: "status_example",
                type: "type_example",
              },
            ],
          },
        ],
      },
      podReplacementPolicy: "podReplacementPolicy_example",
      selector: {
        matchExpressions: [
          {
            key: "key_example",
            operator: "operator_example",
            values: [
              "values_example",
            ],
          },
        ],
        matchLabels: {
          "key": "key_example",
        },
      },
      suspend: true,
      template: {
        metadata: {
          annotations: {
            "key": "key_example",
          },
          creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          deletionGracePeriodSeconds: 1,
          deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
          finalizers: [
            "finalizers_example",
          ],
          generateName: "generateName_example",
          generation: 1,
          labels: {
            "key": "key_example",
          },
          managedFields: [
            {
              apiVersion: "apiVersion_example",
              fieldsType: "fieldsType_example",
              fieldsV1: {},
              manager: "manager_example",
              operation: "operation_example",
              subresource: "subresource_example",
              time: new Date('1970-01-01T00:00:00.00Z'),
            },
          ],
          name: "name_example",
          namespace: "namespace_example",
          ownerReferences: [
            {
              apiVersion: "apiVersion_example",
              blockOwnerDeletion: true,
              controller: true,
              kind: "kind_example",
              name: "name_example",
              uid: "uid_example",
            },
          ],
          resourceVersion: "resourceVersion_example",
          selfLink: "selfLink_example",
          uid: "uid_example",
        },
        spec: {
          activeDeadlineSeconds: 1,
          affinity: {
            nodeAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  preference: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: [
                  {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchFields: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            podAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    matchLabelKeys: [
                      "matchLabelKeys_example",
                    ],
                    mismatchLabelKeys: [
                      "mismatchLabelKeys_example",
                    ],
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  mismatchLabelKeys: [
                    "mismatchLabelKeys_example",
                  ],
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
            podAntiAffinity: {
              preferredDuringSchedulingIgnoredDuringExecution: [
                {
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    matchLabelKeys: [
                      "matchLabelKeys_example",
                    ],
                    mismatchLabelKeys: [
                      "mismatchLabelKeys_example",
                    ],
                    namespaceSelector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    namespaces: [
                      "namespaces_example",
                    ],
                    topologyKey: "topologyKey_example",
                  },
                  weight: 1,
                },
              ],
              requiredDuringSchedulingIgnoredDuringExecution: [
                {
                  labelSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  matchLabelKeys: [
                    "matchLabelKeys_example",
                  ],
                  mismatchLabelKeys: [
                    "mismatchLabelKeys_example",
                  ],
                  namespaceSelector: {
                    matchExpressions: [
                      {
                        key: "key_example",
                        operator: "operator_example",
                        values: [
                          "values_example",
                        ],
                      },
                    ],
                    matchLabels: {
                      "key": "key_example",
                    },
                  },
                  namespaces: [
                    "namespaces_example",
                  ],
                  topologyKey: "topologyKey_example",
                },
              ],
            },
          },
          automountServiceAccountToken: true,
          containers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          dnsConfig: {
            nameservers: [
              "nameservers_example",
            ],
            options: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            searches: [
              "searches_example",
            ],
          },
          dnsPolicy: "dnsPolicy_example",
          enableServiceLinks: true,
          ephemeralContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              targetContainerName: "targetContainerName_example",
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          hostAliases: [
            {
              hostnames: [
                "hostnames_example",
              ],
              ip: "ip_example",
            },
          ],
          hostIPC: true,
          hostNetwork: true,
          hostPID: true,
          hostUsers: true,
          hostname: "hostname_example",
          imagePullSecrets: [
            {
              name: "name_example",
            },
          ],
          initContainers: [
            {
              args: [
                "args_example",
              ],
              command: [
                "command_example",
              ],
              env: [
                {
                  name: "name_example",
                  value: "value_example",
                  valueFrom: {
                    configMapKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                    secretKeyRef: {
                      key: "key_example",
                      name: "name_example",
                      optional: true,
                    },
                  },
                },
              ],
              envFrom: [
                {
                  configMapRef: {
                    name: "name_example",
                    optional: true,
                  },
                  prefix: "prefix_example",
                  secretRef: {
                    name: "name_example",
                    optional: true,
                  },
                },
              ],
              image: "image_example",
              imagePullPolicy: "imagePullPolicy_example",
              lifecycle: {
                postStart: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
                preStop: {
                  exec: {
                    command: [
                      "command_example",
                    ],
                  },
                  httpGet: {
                    host: "host_example",
                    httpHeaders: [
                      {
                        name: "name_example",
                        value: "value_example",
                      },
                    ],
                    path: "path_example",
                    port: "port_example",
                    scheme: "scheme_example",
                  },
                  sleep: {
                    seconds: 1,
                  },
                  tcpSocket: {
                    host: "host_example",
                    port: "port_example",
                  },
                },
              },
              livenessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              name: "name_example",
              ports: [
                {
                  containerPort: 1,
                  hostIP: "hostIP_example",
                  hostPort: 1,
                  name: "name_example",
                  protocol: "protocol_example",
                },
              ],
              readinessProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              resizePolicy: [
                {
                  resourceName: "resourceName_example",
                  restartPolicy: "restartPolicy_example",
                },
              ],
              resources: {
                claims: [
                  {
                    name: "name_example",
                  },
                ],
                limits: {
                  "key": "key_example",
                },
                requests: {
                  "key": "key_example",
                },
              },
              restartPolicy: "restartPolicy_example",
              securityContext: {
                allowPrivilegeEscalation: true,
                capabilities: {
                  add: [
                    "add_example",
                  ],
                  drop: [
                    "drop_example",
                  ],
                },
                privileged: true,
                procMount: "procMount_example",
                readOnlyRootFilesystem: true,
                runAsGroup: 1,
                runAsNonRoot: true,
                runAsUser: 1,
                seLinuxOptions: {
                  level: "level_example",
                  role: "role_example",
                  type: "type_example",
                  user: "user_example",
                },
                seccompProfile: {
                  localhostProfile: "localhostProfile_example",
                  type: "type_example",
                },
                windowsOptions: {
                  gmsaCredentialSpec: "gmsaCredentialSpec_example",
                  gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
                  hostProcess: true,
                  runAsUserName: "runAsUserName_example",
                },
              },
              startupProbe: {
                exec: {
                  command: [
                    "command_example",
                  ],
                },
                failureThreshold: 1,
                grpc: {
                  port: 1,
                  service: "service_example",
                },
                httpGet: {
                  host: "host_example",
                  httpHeaders: [
                    {
                      name: "name_example",
                      value: "value_example",
                    },
                  ],
                  path: "path_example",
                  port: "port_example",
                  scheme: "scheme_example",
                },
                initialDelaySeconds: 1,
                periodSeconds: 1,
                successThreshold: 1,
                tcpSocket: {
                  host: "host_example",
                  port: "port_example",
                },
                terminationGracePeriodSeconds: 1,
                timeoutSeconds: 1,
              },
              stdin: true,
              stdinOnce: true,
              terminationMessagePath: "terminationMessagePath_example",
              terminationMessagePolicy: "terminationMessagePolicy_example",
              tty: true,
              volumeDevices: [
                {
                  devicePath: "devicePath_example",
                  name: "name_example",
                },
              ],
              volumeMounts: [
                {
                  mountPath: "mountPath_example",
                  mountPropagation: "mountPropagation_example",
                  name: "name_example",
                  readOnly: true,
                  subPath: "subPath_example",
                  subPathExpr: "subPathExpr_example",
                },
              ],
              workingDir: "workingDir_example",
            },
          ],
          nodeName: "nodeName_example",
          nodeSelector: {
            "key": "key_example",
          },
          os: {
            name: "name_example",
          },
          overhead: {
            "key": "key_example",
          },
          preemptionPolicy: "preemptionPolicy_example",
          priority: 1,
          priorityClassName: "priorityClassName_example",
          readinessGates: [
            {
              conditionType: "conditionType_example",
            },
          ],
          resourceClaims: [
            {
              name: "name_example",
              source: {
                resourceClaimName: "resourceClaimName_example",
                resourceClaimTemplateName: "resourceClaimTemplateName_example",
              },
            },
          ],
          restartPolicy: "restartPolicy_example",
          runtimeClassName: "runtimeClassName_example",
          schedulerName: "schedulerName_example",
          schedulingGates: [
            {
              name: "name_example",
            },
          ],
          securityContext: {
            fsGroup: 1,
            fsGroupChangePolicy: "fsGroupChangePolicy_example",
            runAsGroup: 1,
            runAsNonRoot: true,
            runAsUser: 1,
            seLinuxOptions: {
              level: "level_example",
              role: "role_example",
              type: "type_example",
              user: "user_example",
            },
            seccompProfile: {
              localhostProfile: "localhostProfile_example",
              type: "type_example",
            },
            supplementalGroups: [
              1,
            ],
            sysctls: [
              {
                name: "name_example",
                value: "value_example",
              },
            ],
            windowsOptions: {
              gmsaCredentialSpec: "gmsaCredentialSpec_example",
              gmsaCredentialSpecName: "gmsaCredentialSpecName_example",
              hostProcess: true,
              runAsUserName: "runAsUserName_example",
            },
          },
          serviceAccount: "serviceAccount_example",
          serviceAccountName: "serviceAccountName_example",
          setHostnameAsFQDN: true,
          shareProcessNamespace: true,
          subdomain: "subdomain_example",
          terminationGracePeriodSeconds: 1,
          tolerations: [
            {
              effect: "effect_example",
              key: "key_example",
              operator: "operator_example",
              tolerationSeconds: 1,
              value: "value_example",
            },
          ],
          topologySpreadConstraints: [
            {
              labelSelector: {
                matchExpressions: [
                  {
                    key: "key_example",
                    operator: "operator_example",
                    values: [
                      "values_example",
                    ],
                  },
                ],
                matchLabels: {
                  "key": "key_example",
                },
              },
              matchLabelKeys: [
                "matchLabelKeys_example",
              ],
              maxSkew: 1,
              minDomains: 1,
              nodeAffinityPolicy: "nodeAffinityPolicy_example",
              nodeTaintsPolicy: "nodeTaintsPolicy_example",
              topologyKey: "topologyKey_example",
              whenUnsatisfiable: "whenUnsatisfiable_example",
            },
          ],
          volumes: [
            {
              awsElasticBlockStore: {
                fsType: "fsType_example",
                partition: 1,
                readOnly: true,
                volumeID: "volumeID_example",
              },
              azureDisk: {
                cachingMode: "cachingMode_example",
                diskName: "diskName_example",
                diskURI: "diskURI_example",
                fsType: "fsType_example",
                kind: "kind_example",
                readOnly: true,
              },
              azureFile: {
                readOnly: true,
                secretName: "secretName_example",
                shareName: "shareName_example",
              },
              cephfs: {
                monitors: [
                  "monitors_example",
                ],
                path: "path_example",
                readOnly: true,
                secretFile: "secretFile_example",
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              cinder: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeID: "volumeID_example",
              },
              configMap: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                name: "name_example",
                optional: true,
              },
              csi: {
                driver: "driver_example",
                fsType: "fsType_example",
                nodePublishSecretRef: {
                  name: "name_example",
                },
                readOnly: true,
                volumeAttributes: {
                  "key": "key_example",
                },
              },
              downwardAPI: {
                defaultMode: 1,
                items: [
                  {
                    fieldRef: {
                      apiVersion: "apiVersion_example",
                      fieldPath: "fieldPath_example",
                    },
                    mode: 1,
                    path: "path_example",
                    resourceFieldRef: {
                      containerName: "containerName_example",
                      divisor: "divisor_example",
                      resource: "resource_example",
                    },
                  },
                ],
              },
              emptyDir: {
                medium: "medium_example",
                sizeLimit: "sizeLimit_example",
              },
              ephemeral: {
                volumeClaimTemplate: {
                  metadata: {
                    annotations: {
                      "key": "key_example",
                    },
                    creationTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    deletionGracePeriodSeconds: 1,
                    deletionTimestamp: new Date('1970-01-01T00:00:00.00Z'),
                    finalizers: [
                      "finalizers_example",
                    ],
                    generateName: "generateName_example",
                    generation: 1,
                    labels: {
                      "key": "key_example",
                    },
                    managedFields: [
                      {
                        apiVersion: "apiVersion_example",
                        fieldsType: "fieldsType_example",
                        fieldsV1: {},
                        manager: "manager_example",
                        operation: "operation_example",
                        subresource: "subresource_example",
                        time: new Date('1970-01-01T00:00:00.00Z'),
                      },
                    ],
                    name: "name_example",
                    namespace: "namespace_example",
                    ownerReferences: [
                      {
                        apiVersion: "apiVersion_example",
                        blockOwnerDeletion: true,
                        controller: true,
                        kind: "kind_example",
                        name: "name_example",
                        uid: "uid_example",
                      },
                    ],
                    resourceVersion: "resourceVersion_example",
                    selfLink: "selfLink_example",
                    uid: "uid_example",
                  },
                  spec: {
                    accessModes: [
                      "accessModes_example",
                    ],
                    dataSource: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                    },
                    dataSourceRef: {
                      apiGroup: "apiGroup_example",
                      kind: "kind_example",
                      name: "name_example",
                      namespace: "namespace_example",
                    },
                    resources: {
                      limits: {
                        "key": "key_example",
                      },
                      requests: {
                        "key": "key_example",
                      },
                    },
                    selector: {
                      matchExpressions: [
                        {
                          key: "key_example",
                          operator: "operator_example",
                          values: [
                            "values_example",
                          ],
                        },
                      ],
                      matchLabels: {
                        "key": "key_example",
                      },
                    },
                    storageClassName: "storageClassName_example",
                    volumeAttributesClassName: "volumeAttributesClassName_example",
                    volumeMode: "volumeMode_example",
                    volumeName: "volumeName_example",
                  },
                },
              },
              fc: {
                fsType: "fsType_example",
                lun: 1,
                readOnly: true,
                targetWWNs: [
                  "targetWWNs_example",
                ],
                wwids: [
                  "wwids_example",
                ],
              },
              flexVolume: {
                driver: "driver_example",
                fsType: "fsType_example",
                options: {
                  "key": "key_example",
                },
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
              },
              flocker: {
                datasetName: "datasetName_example",
                datasetUUID: "datasetUUID_example",
              },
              gcePersistentDisk: {
                fsType: "fsType_example",
                partition: 1,
                pdName: "pdName_example",
                readOnly: true,
              },
              gitRepo: {
                directory: "directory_example",
                repository: "repository_example",
                revision: "revision_example",
              },
              glusterfs: {
                endpoints: "endpoints_example",
                path: "path_example",
                readOnly: true,
              },
              hostPath: {
                path: "path_example",
                type: "type_example",
              },
              iscsi: {
                chapAuthDiscovery: true,
                chapAuthSession: true,
                fsType: "fsType_example",
                initiatorName: "initiatorName_example",
                iqn: "iqn_example",
                iscsiInterface: "iscsiInterface_example",
                lun: 1,
                portals: [
                  "portals_example",
                ],
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                targetPortal: "targetPortal_example",
              },
              name: "name_example",
              nfs: {
                path: "path_example",
                readOnly: true,
                server: "server_example",
              },
              persistentVolumeClaim: {
                claimName: "claimName_example",
                readOnly: true,
              },
              photonPersistentDisk: {
                fsType: "fsType_example",
                pdID: "pdID_example",
              },
              portworxVolume: {
                fsType: "fsType_example",
                readOnly: true,
                volumeID: "volumeID_example",
              },
              projected: {
                defaultMode: 1,
                sources: [
                  {
                    clusterTrustBundle: {
                      labelSelector: {
                        matchExpressions: [
                          {
                            key: "key_example",
                            operator: "operator_example",
                            values: [
                              "values_example",
                            ],
                          },
                        ],
                        matchLabels: {
                          "key": "key_example",
                        },
                      },
                      name: "name_example",
                      optional: true,
                      path: "path_example",
                      signerName: "signerName_example",
                    },
                    configMap: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    downwardAPI: {
                      items: [
                        {
                          fieldRef: {
                            apiVersion: "apiVersion_example",
                            fieldPath: "fieldPath_example",
                          },
                          mode: 1,
                          path: "path_example",
                          resourceFieldRef: {
                            containerName: "containerName_example",
                            divisor: "divisor_example",
                            resource: "resource_example",
                          },
                        },
                      ],
                    },
                    secret: {
                      items: [
                        {
                          key: "key_example",
                          mode: 1,
                          path: "path_example",
                        },
                      ],
                      name: "name_example",
                      optional: true,
                    },
                    serviceAccountToken: {
                      audience: "audience_example",
                      expirationSeconds: 1,
                      path: "path_example",
                    },
                  },
                ],
              },
              quobyte: {
                group: "group_example",
                readOnly: true,
                registry: "registry_example",
                tenant: "tenant_example",
                user: "user_example",
                volume: "volume_example",
              },
              rbd: {
                fsType: "fsType_example",
                image: "image_example",
                keyring: "keyring_example",
                monitors: [
                  "monitors_example",
                ],
                pool: "pool_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                user: "user_example",
              },
              scaleIO: {
                fsType: "fsType_example",
                gateway: "gateway_example",
                protectionDomain: "protectionDomain_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                sslEnabled: true,
                storageMode: "storageMode_example",
                storagePool: "storagePool_example",
                system: "system_example",
                volumeName: "volumeName_example",
              },
              secret: {
                defaultMode: 1,
                items: [
                  {
                    key: "key_example",
                    mode: 1,
                    path: "path_example",
                  },
                ],
                optional: true,
                secretName: "secretName_example",
              },
              storageos: {
                fsType: "fsType_example",
                readOnly: true,
                secretRef: {
                  name: "name_example",
                },
                volumeName: "volumeName_example",
                volumeNamespace: "volumeNamespace_example",
              },
              vsphereVolume: {
                fsType: "fsType_example",
                storagePolicyID: "storagePolicyID_example",
                storagePolicyName: "storagePolicyName_example",
                volumePath: "volumePath_example",
              },
            },
          ],
        },
      },
      ttlSecondsAfterFinished: 1,
    },
    status: {
      active: 1,
      completedIndexes: "completedIndexes_example",
      completionTime: new Date('1970-01-01T00:00:00.00Z'),
      conditions: [
        {
          lastProbeTime: new Date('1970-01-01T00:00:00.00Z'),
          lastTransitionTime: new Date('1970-01-01T00:00:00.00Z'),
          message: "message_example",
          reason: "reason_example",
          status: "status_example",
          type: "type_example",
        },
      ],
      failed: 1,
      failedIndexes: "failedIndexes_example",
      ready: 1,
      startTime: new Date('1970-01-01T00:00:00.00Z'),
      succeeded: 1,
      terminating: 1,
      uncountedTerminatedPods: {
        failed: [
          "failed_example",
        ],
        succeeded: [
          "succeeded_example",
        ],
      },
    },
  },
  };
  const result: IoK8sApiBatchV1Job = await sdk.batchV1.replaceBatchV1NamespacedJobStatus(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **body** | **IoK8sApiBatchV1Job**|  |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **dryRun** | [**string**] | When present, indicates that modifications should not be persisted. An invalid or unrecognized dryRun directive will result in an error response and no further processing of the request. Valid values are: - All: all dry run stages will be processed | (optional) defaults to undefined |
| **fieldManager** | [**string**] | fieldManager is a name associated with the actor or entity that is making these changes. The value must be less than or 128 characters long, and only contain printable characters, as defined by https://golang.org/pkg/unicode/#IsPrint. | (optional) defaults to undefined |
| **fieldValidation** | [**string**] | fieldValidation instructs the server on how to handle objects in the request (POST/PUT/PATCH) containing unknown or duplicate fields. Valid values are: - Ignore: This will ignore any unknown fields that are silently dropped from the object, and will ignore all but the last duplicate field that the decoder encounters. This is the default behavior prior to v1.23. - Warn: This will send a warning via the standard warning response header for each unknown field that is dropped from the object, and for each duplicate field that is encountered. The request will still succeed if there are no other errors, and will only persist the last of any duplicate fields. This is the default in v1.23+ - Strict: This will fail the request with a BadRequest error if any unknown fields would be dropped from the object, or if any duplicate fields are present. The error returned from the server will contain all unknown and duplicate fields encountered. | (optional) defaults to undefined |


### Return type

**IoK8sApiBatchV1Job**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **201** | Created |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **watchBatchV1CronJobListForAllNamespaces**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchBatchV1CronJobListForAllNamespaces()

watch individual changes to a list of CronJob. deprecated: use the \'watch\' parameter with a list operation instead.

### Example

```typescript
import { SDK, WatchBatchV1CronJobListForAllNamespacesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: IoK8sApimachineryPkgApisMetaV1WatchEvent = await sdk.batchV1.watchBatchV1CronJobListForAllNamespaces(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1WatchEvent**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **watchBatchV1JobListForAllNamespaces**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchBatchV1JobListForAllNamespaces()

watch individual changes to a list of Job. deprecated: use the \'watch\' parameter with a list operation instead.

### Example

```typescript
import { SDK, WatchBatchV1JobListForAllNamespacesParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
  };
  const result: IoK8sApimachineryPkgApisMetaV1WatchEvent = await sdk.batchV1.watchBatchV1JobListForAllNamespaces(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1WatchEvent**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **watchBatchV1NamespacedCronJob**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchBatchV1NamespacedCronJob()

watch changes to an object of kind CronJob. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.

### Example

```typescript
import { SDK, WatchBatchV1NamespacedCronJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
  };
  const result: IoK8sApimachineryPkgApisMetaV1WatchEvent = await sdk.batchV1.watchBatchV1NamespacedCronJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | name of the CronJob | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1WatchEvent**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **watchBatchV1NamespacedCronJobList**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchBatchV1NamespacedCronJobList()

watch individual changes to a list of CronJob. deprecated: use the \'watch\' parameter with a list operation instead.

### Example

```typescript
import { SDK, WatchBatchV1NamespacedCronJobListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
  };
  const result: IoK8sApimachineryPkgApisMetaV1WatchEvent = await sdk.batchV1.watchBatchV1NamespacedCronJobList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1WatchEvent**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **watchBatchV1NamespacedJob**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchBatchV1NamespacedJob()

watch changes to an object of kind Job. deprecated: use the \'watch\' parameter with a list operation instead, filtered to a single item with the \'fieldSelector\' parameter.

### Example

```typescript
import { SDK, WatchBatchV1NamespacedJobParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      name: string, // required
      namespace: string, // required
    },
  };
  const result: IoK8sApimachineryPkgApisMetaV1WatchEvent = await sdk.batchV1.watchBatchV1NamespacedJob(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **name** | [**string**] | name of the Job | defaults to undefined |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1WatchEvent**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


## **watchBatchV1NamespacedJobList**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchBatchV1NamespacedJobList()

watch individual changes to a list of Job. deprecated: use the \'watch\' parameter with a list operation instead.

### Example

```typescript
import { SDK, WatchBatchV1NamespacedJobListParams } from '';

const sdk = new SDK({ /* ... */ }); // or SDK.create({ /* ... */ });

async function someHandler () {
  const params = {
    path: {
      namespace: string, // required
    },
  };
  const result: IoK8sApimachineryPkgApisMetaV1WatchEvent = await sdk.batchV1.watchBatchV1NamespacedJobList(params)
    .catch((error: AxiosError) => {
      console.error(error);
    });
  console.log(result);
}
```

### Parameters

| Name          | Type          | Description   | Notes                                 |
| ------------- | ------------- | ------------- | ------------- |
| **namespace** | [**string**] | object name and auth scope, such as for teams and projects | defaults to undefined |
| **allowWatchBookmarks** | [**boolean**] | allowWatchBookmarks requests watch events with type \&quot;BOOKMARK\&quot;. Servers that do not implement bookmarks may ignore this flag and bookmarks are sent at the server\&#39;s discretion. Clients should not assume bookmarks are returned at any specific interval, nor may they assume the server will send any BOOKMARK event during a session. If this is not a watch, this field is ignored. | (optional) defaults to undefined |
| **_continue** | [**string**] | The continue option should be set when retrieving more results from the server. Since this value is server defined, clients may only use the continue value from a previous query result with identical query parameters (except for the value of continue) and the server may reject a continue value it does not recognize. If the specified continue value is no longer valid whether due to expiration (generally five to fifteen minutes) or a configuration change on the server, the server will respond with a 410 ResourceExpired error together with a continue token. If the client needs a consistent list, it must restart their list without the continue field. Otherwise, the client may send another list request with the token received with the 410 error, the server will respond with a list starting from the next key, but from the latest snapshot, which is inconsistent from the previous list results - objects that are created, modified, or deleted after the first list request will be included in the response, as long as their keys are after the \&quot;next key\&quot;.  This field is not supported when watch is true. Clients may start a watch from the last resourceVersion value returned by the server and not miss any modifications. | (optional) defaults to undefined |
| **fieldSelector** | [**string**] | A selector to restrict the list of returned objects by their fields. Defaults to everything. | (optional) defaults to undefined |
| **labelSelector** | [**string**] | A selector to restrict the list of returned objects by their labels. Defaults to everything. | (optional) defaults to undefined |
| **limit** | [**number**] | limit is a maximum number of responses to return for a list call. If more items exist, the server will set the &#x60;continue&#x60; field on the list metadata to a value that can be used with the same initial query to retrieve the next set of results. Setting a limit may return fewer than the requested amount of items (up to zero items) in the event all requested objects are filtered out and clients should only use the presence of the continue field to determine whether more results are available. Servers may choose not to support the limit argument and will return all of the available results. If limit is specified and the continue field is empty, clients may assume that no more results are available. This field is not supported if watch is true.  The server guarantees that the objects returned when using continue will be identical to issuing a single list call without a limit - that is, no objects created, modified, or deleted after the first request is issued will be included in any subsequent continued requests. This is sometimes referred to as a consistent snapshot, and ensures that a client that is using limit to receive smaller chunks of a very large result can ensure they see all possible objects. If objects are updated during a chunked list the version of the object that was present at the time the first list result was calculated is returned. | (optional) defaults to undefined |
| **pretty** | [**string**] | If \&#39;true\&#39;, then the output is pretty printed. Defaults to \&#39;false\&#39; unless the user-agent indicates a browser or command-line HTTP tool (curl and wget). | (optional) defaults to undefined |
| **resourceVersion** | [**string**] | resourceVersion sets a constraint on what resource versions a request may be served from. See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **resourceVersionMatch** | [**string**] | resourceVersionMatch determines how resourceVersion is applied to list calls. It is highly recommended that resourceVersionMatch be set for list calls where resourceVersion is set See https://kubernetes.io/docs/reference/using-api/api-concepts/#resource-versions for details.  Defaults to unset | (optional) defaults to undefined |
| **sendInitialEvents** | [**boolean**] | &#x60;sendInitialEvents&#x3D;true&#x60; may be set together with &#x60;watch&#x3D;true&#x60;. In that case, the watch stream will begin with synthetic events to produce the current state of objects in the collection. Once all such events have been sent, a synthetic \&quot;Bookmark\&quot; event  will be sent. The bookmark will report the ResourceVersion (RV) corresponding to the set of objects, and be marked with &#x60;\&quot;k8s.io/initial-events-end\&quot;: \&quot;true\&quot;&#x60; annotation. Afterwards, the watch stream will proceed as usual, sending watch events corresponding to changes (subsequent to the RV) to objects watched.  When &#x60;sendInitialEvents&#x60; option is set, we require &#x60;resourceVersionMatch&#x60; option to also be set. The semantic of the watch request is as following: - &#x60;resourceVersionMatch&#x60; &#x3D; NotOlderThan   is interpreted as \&quot;data at least as new as the provided &#x60;resourceVersion&#x60;\&quot;   and the bookmark event is send when the state is synced   to a &#x60;resourceVersion&#x60; at least as fresh as the one provided by the ListOptions.   If &#x60;resourceVersion&#x60; is unset, this is interpreted as \&quot;consistent read\&quot; and the   bookmark event is send when the state is synced at least to the moment   when request started being processed. - &#x60;resourceVersionMatch&#x60; set to any other value or unset   Invalid error is returned.  Defaults to true if &#x60;resourceVersion&#x3D;\&quot;\&quot;&#x60; or &#x60;resourceVersion&#x3D;\&quot;0\&quot;&#x60; (for backward compatibility reasons) and to false otherwise. | (optional) defaults to undefined |
| **timeoutSeconds** | [**number**] | Timeout for the list/watch call. This limits the duration of the call, regardless of any activity or inactivity. | (optional) defaults to undefined |
| **watch** | [**boolean**] | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | (optional) defaults to undefined |


### Return type

**IoK8sApimachineryPkgApisMetaV1WatchEvent**

### Authorization

[BearerToken](../authorization.md#BearerToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](BatchV1Api.md#batchv1api) [[Back to API list]](../apis.md#documentation) [[Back to Model list]](../models.md#documentation) [[Back to README]](../../readme.md)


