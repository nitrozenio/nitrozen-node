export type Callback<T> = (error: NitrozenError | null, data: T | null, response?: any) => void;

export class NitrozenError extends Error {
  name: 'NitrozenError';
  statusCode: number | null;
  errors: Record<string, string[]> | null;
  constructor(message: string, statusCode?: number | null, errors?: Record<string, string[]> | null);
}

// ─── Models ──────────────────────────────────────────────────────────────────

export class Entry {
  id?: number;
  title?: string;
  content?: string;
  category?: Entry.CategoryEnum;
  is_published?: boolean;
  published_at?: Date;
  created_at?: Date;
  updated_at?: Date;
  static constructFromObject(data: any, obj?: Entry): Entry;
  static validateJSON(data: any): boolean;
  static CategoryEnum: {
    readonly new: 'new';
    readonly improvement: 'improvement';
    readonly fix: 'fix';
    readonly announcement: 'announcement';
  };
}

export namespace Entry {
  type CategoryEnum = 'new' | 'improvement' | 'fix' | 'announcement';
}

export class EntryInput {
  title: string;
  content: string;
  category: EntryInput.CategoryEnum;
  is_published?: boolean;
  published_at?: Date;
  constructor(title: string, content: string, category: EntryInput.CategoryEnum);
  static constructFromObject(data: any, obj?: EntryInput): EntryInput;
  static validateJSON(data: any): boolean;
  static RequiredProperties: string[];
  static CategoryEnum: {
    readonly new: 'new';
    readonly improvement: 'improvement';
    readonly fix: 'fix';
    readonly announcement: 'announcement';
  };
}

export namespace EntryInput {
  type CategoryEnum = 'new' | 'improvement' | 'fix' | 'announcement';
}

export class Project {
  id?: number;
  name?: string;
  slug?: string;
  description?: string;
  custom_domain?: string;
  domain_verification_status?: Project.DomainVerificationStatusEnum;
  entries_count?: number;
  created_at?: Date;
  updated_at?: Date;
  static constructFromObject(data: any, obj?: Project): Project;
  static validateJSON(data: any): boolean;
  static DomainVerificationStatusEnum: {
    readonly pending: 'pending';
    readonly verified: 'verified';
    readonly failed: 'failed';
  };
}

export namespace Project {
  type DomainVerificationStatusEnum = 'pending' | 'verified' | 'failed';
}

export class ProjectInput {
  name: string;
  description?: string;
  constructor(name: string);
  static constructFromObject(data: any, obj?: ProjectInput): ProjectInput;
  static validateJSON(data: any): boolean;
  static RequiredProperties: string[];
}

export class User {
  id?: number;
  name?: string;
  email?: string;
  plan?: UserPlan;
  created_at?: Date;
  static constructFromObject(data: any, obj?: User): User;
  static validateJSON(data: any): boolean;
}

export class UserPlan {
  id?: number;
  name?: string;
  plan_type?: UserPlan.PlanTypeEnum;
  max_projects?: number;
  max_entries_per_month?: number;
  custom_domain_allowed?: boolean;
  analytics_enabled?: boolean;
  api_access_enabled?: boolean;
  api_rate_limit?: number;
  static constructFromObject(data: any, obj?: UserPlan): UserPlan;
  static validateJSON(data: any): boolean;
  static PlanTypeEnum: {
    readonly free: 'free';
    readonly subscription: 'subscription';
    readonly lifetime: 'lifetime';
  };
}

export namespace UserPlan {
  type PlanTypeEnum = 'free' | 'subscription' | 'lifetime';
}

export class TokenInfo {
  id?: number;
  name?: string;
  last_used_at?: Date;
  created_at?: Date;
  static constructFromObject(data: any, obj?: TokenInfo): TokenInfo;
  static validateJSON(data: any): boolean;
}

export class NewToken {
  id?: number;
  name?: string;
  token?: string;
  created_at?: Date;
  static constructFromObject(data: any, obj?: NewToken): NewToken;
  static validateJSON(data: any): boolean;
}

export class TokensPostRequest {
  name: string;
  constructor(name: string);
  static constructFromObject(data: any, obj?: TokensPostRequest): TokensPostRequest;
  static validateJSON(data: any): boolean;
  static RequiredProperties: string[];
}

export class PaginationMeta {
  current_page?: number;
  last_page?: number;
  per_page?: number;
  total?: number;
  static constructFromObject(data: any, obj?: PaginationMeta): PaginationMeta;
  static validateJSON(data: any): boolean;
}

export class Usage {
  projects_count?: number;
  entries_this_month?: number;
  limits?: UsageLimits;
  plan_name?: string;
  static constructFromObject(data: any, obj?: Usage): Usage;
  static validateJSON(data: any): boolean;
}

export class UsageLimits {
  max_projects?: number;
  max_entries_per_month?: number;
  static constructFromObject(data: any, obj?: UsageLimits): UsageLimits;
  static validateJSON(data: any): boolean;
}

export class ValidationError {
  message?: string;
  errors?: Record<string, string[]>;
  static constructFromObject(data: any, obj?: ValidationError): ValidationError;
  static validateJSON(data: any): boolean;
}

// Response wrappers
export class ProjectsGet200Response {
  data?: Project[];
  static constructFromObject(data: any, obj?: ProjectsGet200Response): ProjectsGet200Response;
  static validateJSON(data: any): boolean;
}

export class ProjectsPost201Response {
  data?: Project;
  static constructFromObject(data: any, obj?: ProjectsPost201Response): ProjectsPost201Response;
  static validateJSON(data: any): boolean;
}

export class ProjectsProjectEntriesGet200Response {
  data?: Entry[];
  meta?: PaginationMeta;
  static constructFromObject(data: any, obj?: ProjectsProjectEntriesGet200Response): ProjectsProjectEntriesGet200Response;
  static validateJSON(data: any): boolean;
}

export class ProjectsProjectEntriesPost201Response {
  data?: Entry;
  static constructFromObject(data: any, obj?: ProjectsProjectEntriesPost201Response): ProjectsProjectEntriesPost201Response;
  static validateJSON(data: any): boolean;
}

export class PublicProjectsSlugEntriesGet200Response {
  data?: Entry[];
  meta?: PaginationMeta;
  static constructFromObject(data: any, obj?: PublicProjectsSlugEntriesGet200Response): PublicProjectsSlugEntriesGet200Response;
  static validateJSON(data: any): boolean;
}

export class TokensGet200Response {
  data?: TokenInfo[];
  static constructFromObject(data: any, obj?: TokensGet200Response): TokensGet200Response;
  static validateJSON(data: any): boolean;
}

export class TokensPost201Response {
  data?: NewToken;
  static constructFromObject(data: any, obj?: TokensPost201Response): TokensPost201Response;
  static validateJSON(data: any): boolean;
}

export class UserGet200Response {
  data?: User;
  static constructFromObject(data: any, obj?: UserGet200Response): UserGet200Response;
  static validateJSON(data: any): boolean;
}

export class UserUsageGet200Response {
  data?: Usage;
  static constructFromObject(data: any, obj?: UserUsageGet200Response): UserUsageGet200Response;
  static validateJSON(data: any): boolean;
}

// ─── ApiClient ────────────────────────────────────────────────────────────────

export class ApiClient {
  basePath: string;
  authentications: {
    BearerAuth: { type: 'bearer'; accessToken?: string | (() => string) };
  };
  defaultHeaders: Record<string, string>;
  timeout: number;
  cache: boolean;
  enableCookies: boolean;
  requestAgent: any;
  plugins: any[] | null;

  constructor(basePath?: string);

  static create(accessToken: string | (() => string)): ApiClient;

  static instance: ApiClient;

  callApi(
    path: string,
    httpMethod: string,
    pathParams: Record<string, any>,
    queryParams: Record<string, any>,
    headerParams: Record<string, any>,
    formParams: Record<string, any>,
    bodyParam: any,
    authNames: string[],
    contentTypes: string[],
    accepts: string[],
    returnType: any,
    apiBasePath: string | null,
    callback: Callback<any>
  ): any;

  callApi(
    path: string,
    httpMethod: string,
    pathParams: Record<string, any>,
    queryParams: Record<string, any>,
    headerParams: Record<string, any>,
    formParams: Record<string, any>,
    bodyParam: any,
    authNames: string[],
    contentTypes: string[],
    accepts: string[],
    returnType: any,
    apiBasePath: string | null,
    callback?: undefined
  ): Promise<any>;
}

// ─── API classes ─────────────────────────────────────────────────────────────

export class AuthenticationApi {
  apiClient: ApiClient;
  constructor(apiClient?: ApiClient);

  tokensGet(): Promise<TokensGet200Response>;
  tokensGet(callback: Callback<TokensGet200Response>): void;

  tokensPost(tokensPostRequest: TokensPostRequest): Promise<TokensPost201Response>;
  tokensPost(tokensPostRequest: TokensPostRequest, callback: Callback<TokensPost201Response>): void;

  tokensTokenDelete(token: number): Promise<null>;
  tokensTokenDelete(token: number, callback: Callback<null>): void;
}

export interface ListEntriesOpts {
  category?: Entry.CategoryEnum;
  status?: 'published' | 'draft';
  page?: number;
  perPage?: number;
}

export class EntriesApi {
  apiClient: ApiClient;
  constructor(apiClient?: ApiClient);

  projectsProjectEntriesGet(project: number, opts?: ListEntriesOpts): Promise<ProjectsProjectEntriesGet200Response>;
  projectsProjectEntriesGet(project: number, opts: ListEntriesOpts | null | undefined, callback: Callback<ProjectsProjectEntriesGet200Response>): void;

  projectsProjectEntriesPost(project: number, entryInput: EntryInput): Promise<ProjectsProjectEntriesPost201Response>;
  projectsProjectEntriesPost(project: number, entryInput: EntryInput, callback: Callback<ProjectsProjectEntriesPost201Response>): void;

  projectsProjectEntriesEntryGet(project: number, entry: number): Promise<ProjectsProjectEntriesPost201Response>;
  projectsProjectEntriesEntryGet(project: number, entry: number, callback: Callback<ProjectsProjectEntriesPost201Response>): void;

  projectsProjectEntriesEntryPut(project: number, entry: number, entryInput: EntryInput): Promise<ProjectsProjectEntriesPost201Response>;
  projectsProjectEntriesEntryPut(project: number, entry: number, entryInput: EntryInput, callback: Callback<ProjectsProjectEntriesPost201Response>): void;

  projectsProjectEntriesEntryDelete(project: number, entry: number): Promise<null>;
  projectsProjectEntriesEntryDelete(project: number, entry: number, callback: Callback<null>): void;
}

export class ProjectsApi {
  apiClient: ApiClient;
  constructor(apiClient?: ApiClient);

  projectsGet(): Promise<ProjectsGet200Response>;
  projectsGet(callback: Callback<ProjectsGet200Response>): void;

  projectsPost(projectInput: ProjectInput): Promise<ProjectsPost201Response>;
  projectsPost(projectInput: ProjectInput, callback: Callback<ProjectsPost201Response>): void;

  projectsProjectGet(project: number): Promise<ProjectsPost201Response>;
  projectsProjectGet(project: number, callback: Callback<ProjectsPost201Response>): void;

  projectsProjectPut(project: number, projectInput: ProjectInput): Promise<ProjectsPost201Response>;
  projectsProjectPut(project: number, projectInput: ProjectInput, callback: Callback<ProjectsPost201Response>): void;

  projectsProjectDelete(project: number): Promise<null>;
  projectsProjectDelete(project: number, callback: Callback<null>): void;
}

export class PublicApi {
  apiClient: ApiClient;
  constructor(apiClient?: ApiClient);

  publicProjectsSlugEntriesGet(slug: string): Promise<PublicProjectsSlugEntriesGet200Response>;
  publicProjectsSlugEntriesGet(slug: string, callback: Callback<PublicProjectsSlugEntriesGet200Response>): void;
}

export class UsersApi {
  apiClient: ApiClient;
  constructor(apiClient?: ApiClient);

  userGet(): Promise<UserGet200Response>;
  userGet(callback: Callback<UserGet200Response>): void;

  userUsageGet(): Promise<UserUsageGet200Response>;
  userUsageGet(callback: Callback<UserUsageGet200Response>): void;
}
