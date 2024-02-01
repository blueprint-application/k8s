import {
  AdmissionregistrationApi,
  AdmissionregistrationV1Api,
  AdmissionregistrationV1alpha1Api,
  AdmissionregistrationV1beta1Api,
  ApiextensionsApi,
  ApiextensionsV1Api,
  ApiregistrationApi,
  ApiregistrationV1Api,
  ApisApi,
  AppsApi,
  AppsV1Api,
  AuthenticationApi,
  AuthenticationV1Api,
  AuthenticationV1alpha1Api,
  AuthenticationV1beta1Api,
  AuthorizationApi,
  AuthorizationV1Api,
  AutoscalingApi,
  AutoscalingV1Api,
  AutoscalingV2Api,
  BatchApi,
  BatchV1Api,
  CertificatesApi,
  CertificatesV1Api,
  CertificatesV1alpha1Api,
  CoordinationApi,
  CoordinationV1Api,
  CoreApi,
  CoreV1Api,
  DiscoveryApi,
  DiscoveryV1Api,
  EventsApi,
  EventsV1Api,
  FlowcontrolApiserverApi,
  FlowcontrolApiserverV1Api,
  FlowcontrolApiserverV1beta3Api,
  InternalApiserverApi,
  InternalApiserverV1alpha1Api,
  LogsApi,
  NetworkingApi,
  NetworkingV1Api,
  NetworkingV1alpha1Api,
  NodeApi,
  NodeV1Api,
  OpenidApi,
  PolicyApi,
  PolicyV1Api,
  RbacAuthorizationApi,
  RbacAuthorizationV1Api,
  ResourceApi,
  ResourceV1alpha2Api,
  SchedulingApi,
  SchedulingV1Api,
  StorageApi,
  StorageV1Api,
  StorageV1alpha1Api,
  VersionApi,
  WellKnownApi,
} from './api';
import { ApiClient, ApiClientConfig } from './client';

export class SDK {
  admissionregistration: AdmissionregistrationApi;
  admissionregistrationV1: AdmissionregistrationV1Api;
  admissionregistrationV1alpha1: AdmissionregistrationV1alpha1Api;
  admissionregistrationV1beta1: AdmissionregistrationV1beta1Api;
  apiextensions: ApiextensionsApi;
  apiextensionsV1: ApiextensionsV1Api;
  apiregistration: ApiregistrationApi;
  apiregistrationV1: ApiregistrationV1Api;
  apis: ApisApi;
  apps: AppsApi;
  appsV1: AppsV1Api;
  authentication: AuthenticationApi;
  authenticationV1: AuthenticationV1Api;
  authenticationV1alpha1: AuthenticationV1alpha1Api;
  authenticationV1beta1: AuthenticationV1beta1Api;
  authorization: AuthorizationApi;
  authorizationV1: AuthorizationV1Api;
  autoscaling: AutoscalingApi;
  autoscalingV1: AutoscalingV1Api;
  autoscalingV2: AutoscalingV2Api;
  batch: BatchApi;
  batchV1: BatchV1Api;
  certificates: CertificatesApi;
  certificatesV1: CertificatesV1Api;
  certificatesV1alpha1: CertificatesV1alpha1Api;
  coordination: CoordinationApi;
  coordinationV1: CoordinationV1Api;
  core: CoreApi;
  coreV1: CoreV1Api;
  discovery: DiscoveryApi;
  discoveryV1: DiscoveryV1Api;
  events: EventsApi;
  eventsV1: EventsV1Api;
  flowcontrolApiserver: FlowcontrolApiserverApi;
  flowcontrolApiserverV1: FlowcontrolApiserverV1Api;
  flowcontrolApiserverV1beta3: FlowcontrolApiserverV1beta3Api;
  internalApiserver: InternalApiserverApi;
  internalApiserverV1alpha1: InternalApiserverV1alpha1Api;
  logs: LogsApi;
  networking: NetworkingApi;
  networkingV1: NetworkingV1Api;
  networkingV1alpha1: NetworkingV1alpha1Api;
  node: NodeApi;
  nodeV1: NodeV1Api;
  openid: OpenidApi;
  policy: PolicyApi;
  policyV1: PolicyV1Api;
  rbacAuthorization: RbacAuthorizationApi;
  rbacAuthorizationV1: RbacAuthorizationV1Api;
  resource: ResourceApi;
  resourceV1alpha2: ResourceV1alpha2Api;
  scheduling: SchedulingApi;
  schedulingV1: SchedulingV1Api;
  storage: StorageApi;
  storageV1: StorageV1Api;
  storageV1alpha1: StorageV1alpha1Api;
  version: VersionApi;
  wellKnown: WellKnownApi;

  constructor(config: ApiClientConfig) {
    const apiClient = new ApiClient(config);
    this.admissionregistration = new AdmissionregistrationApi(apiClient);
    this.admissionregistrationV1 = new AdmissionregistrationV1Api(apiClient);
    this.admissionregistrationV1alpha1 = new AdmissionregistrationV1alpha1Api(apiClient);
    this.admissionregistrationV1beta1 = new AdmissionregistrationV1beta1Api(apiClient);
    this.apiextensions = new ApiextensionsApi(apiClient);
    this.apiextensionsV1 = new ApiextensionsV1Api(apiClient);
    this.apiregistration = new ApiregistrationApi(apiClient);
    this.apiregistrationV1 = new ApiregistrationV1Api(apiClient);
    this.apis = new ApisApi(apiClient);
    this.apps = new AppsApi(apiClient);
    this.appsV1 = new AppsV1Api(apiClient);
    this.authentication = new AuthenticationApi(apiClient);
    this.authenticationV1 = new AuthenticationV1Api(apiClient);
    this.authenticationV1alpha1 = new AuthenticationV1alpha1Api(apiClient);
    this.authenticationV1beta1 = new AuthenticationV1beta1Api(apiClient);
    this.authorization = new AuthorizationApi(apiClient);
    this.authorizationV1 = new AuthorizationV1Api(apiClient);
    this.autoscaling = new AutoscalingApi(apiClient);
    this.autoscalingV1 = new AutoscalingV1Api(apiClient);
    this.autoscalingV2 = new AutoscalingV2Api(apiClient);
    this.batch = new BatchApi(apiClient);
    this.batchV1 = new BatchV1Api(apiClient);
    this.certificates = new CertificatesApi(apiClient);
    this.certificatesV1 = new CertificatesV1Api(apiClient);
    this.certificatesV1alpha1 = new CertificatesV1alpha1Api(apiClient);
    this.coordination = new CoordinationApi(apiClient);
    this.coordinationV1 = new CoordinationV1Api(apiClient);
    this.core = new CoreApi(apiClient);
    this.coreV1 = new CoreV1Api(apiClient);
    this.discovery = new DiscoveryApi(apiClient);
    this.discoveryV1 = new DiscoveryV1Api(apiClient);
    this.events = new EventsApi(apiClient);
    this.eventsV1 = new EventsV1Api(apiClient);
    this.flowcontrolApiserver = new FlowcontrolApiserverApi(apiClient);
    this.flowcontrolApiserverV1 = new FlowcontrolApiserverV1Api(apiClient);
    this.flowcontrolApiserverV1beta3 = new FlowcontrolApiserverV1beta3Api(apiClient);
    this.internalApiserver = new InternalApiserverApi(apiClient);
    this.internalApiserverV1alpha1 = new InternalApiserverV1alpha1Api(apiClient);
    this.logs = new LogsApi(apiClient);
    this.networking = new NetworkingApi(apiClient);
    this.networkingV1 = new NetworkingV1Api(apiClient);
    this.networkingV1alpha1 = new NetworkingV1alpha1Api(apiClient);
    this.node = new NodeApi(apiClient);
    this.nodeV1 = new NodeV1Api(apiClient);
    this.openid = new OpenidApi(apiClient);
    this.policy = new PolicyApi(apiClient);
    this.policyV1 = new PolicyV1Api(apiClient);
    this.rbacAuthorization = new RbacAuthorizationApi(apiClient);
    this.rbacAuthorizationV1 = new RbacAuthorizationV1Api(apiClient);
    this.resource = new ResourceApi(apiClient);
    this.resourceV1alpha2 = new ResourceV1alpha2Api(apiClient);
    this.scheduling = new SchedulingApi(apiClient);
    this.schedulingV1 = new SchedulingV1Api(apiClient);
    this.storage = new StorageApi(apiClient);
    this.storageV1 = new StorageV1Api(apiClient);
    this.storageV1alpha1 = new StorageV1alpha1Api(apiClient);
    this.version = new VersionApi(apiClient);
    this.wellKnown = new WellKnownApi(apiClient);
  }

  static create(config: ApiClientConfig): SDK {
    return new SDK(config);
  }
}
