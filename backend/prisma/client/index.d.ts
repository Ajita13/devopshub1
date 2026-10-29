
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Pipeline
 * 
 */
export type Pipeline = $Result.DefaultSelection<Prisma.$PipelinePayload>
/**
 * Model Build
 * 
 */
export type Build = $Result.DefaultSelection<Prisma.$BuildPayload>
/**
 * Model Deployment
 * 
 */
export type Deployment = $Result.DefaultSelection<Prisma.$DeploymentPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model SystemLog
 * 
 */
export type SystemLog = $Result.DefaultSelection<Prisma.$SystemLogPayload>
/**
 * Model ProjectSecret
 * 
 */
export type ProjectSecret = $Result.DefaultSelection<Prisma.$ProjectSecretPayload>
/**
 * Model EnvironmentConfig
 * 
 */
export type EnvironmentConfig = $Result.DefaultSelection<Prisma.$EnvironmentConfigPayload>
/**
 * Model ReleaseRecord
 * 
 */
export type ReleaseRecord = $Result.DefaultSelection<Prisma.$ReleaseRecordPayload>
/**
 * Model TriggerItem
 * 
 */
export type TriggerItem = $Result.DefaultSelection<Prisma.$TriggerItemPayload>
/**
 * Model WebhookItem
 * 
 */
export type WebhookItem = $Result.DefaultSelection<Prisma.$WebhookItemPayload>
/**
 * Model ServiceItem
 * 
 */
export type ServiceItem = $Result.DefaultSelection<Prisma.$ServiceItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pipeline`: Exposes CRUD operations for the **Pipeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pipelines
    * const pipelines = await prisma.pipeline.findMany()
    * ```
    */
  get pipeline(): Prisma.PipelineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.build`: Exposes CRUD operations for the **Build** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Builds
    * const builds = await prisma.build.findMany()
    * ```
    */
  get build(): Prisma.BuildDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deployment`: Exposes CRUD operations for the **Deployment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deployments
    * const deployments = await prisma.deployment.findMany()
    * ```
    */
  get deployment(): Prisma.DeploymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemLog`: Exposes CRUD operations for the **SystemLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemLogs
    * const systemLogs = await prisma.systemLog.findMany()
    * ```
    */
  get systemLog(): Prisma.SystemLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projectSecret`: Exposes CRUD operations for the **ProjectSecret** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectSecrets
    * const projectSecrets = await prisma.projectSecret.findMany()
    * ```
    */
  get projectSecret(): Prisma.ProjectSecretDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.environmentConfig`: Exposes CRUD operations for the **EnvironmentConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EnvironmentConfigs
    * const environmentConfigs = await prisma.environmentConfig.findMany()
    * ```
    */
  get environmentConfig(): Prisma.EnvironmentConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.releaseRecord`: Exposes CRUD operations for the **ReleaseRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReleaseRecords
    * const releaseRecords = await prisma.releaseRecord.findMany()
    * ```
    */
  get releaseRecord(): Prisma.ReleaseRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.triggerItem`: Exposes CRUD operations for the **TriggerItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TriggerItems
    * const triggerItems = await prisma.triggerItem.findMany()
    * ```
    */
  get triggerItem(): Prisma.TriggerItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.webhookItem`: Exposes CRUD operations for the **WebhookItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookItems
    * const webhookItems = await prisma.webhookItem.findMany()
    * ```
    */
  get webhookItem(): Prisma.WebhookItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceItem`: Exposes CRUD operations for the **ServiceItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceItems
    * const serviceItems = await prisma.serviceItem.findMany()
    * ```
    */
  get serviceItem(): Prisma.ServiceItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Pipeline: 'Pipeline',
    Build: 'Build',
    Deployment: 'Deployment',
    ActivityLog: 'ActivityLog',
    SystemLog: 'SystemLog',
    ProjectSecret: 'ProjectSecret',
    EnvironmentConfig: 'EnvironmentConfig',
    ReleaseRecord: 'ReleaseRecord',
    TriggerItem: 'TriggerItem',
    WebhookItem: 'WebhookItem',
    ServiceItem: 'ServiceItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "refreshToken" | "pipeline" | "build" | "deployment" | "activityLog" | "systemLog" | "projectSecret" | "environmentConfig" | "releaseRecord" | "triggerItem" | "webhookItem" | "serviceItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Pipeline: {
        payload: Prisma.$PipelinePayload<ExtArgs>
        fields: Prisma.PipelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PipelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PipelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          findFirst: {
            args: Prisma.PipelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PipelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          findMany: {
            args: Prisma.PipelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          create: {
            args: Prisma.PipelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          createMany: {
            args: Prisma.PipelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PipelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          delete: {
            args: Prisma.PipelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          update: {
            args: Prisma.PipelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          deleteMany: {
            args: Prisma.PipelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PipelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PipelineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          upsert: {
            args: Prisma.PipelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          aggregate: {
            args: Prisma.PipelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePipeline>
          }
          groupBy: {
            args: Prisma.PipelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PipelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PipelineCountArgs<ExtArgs>
            result: $Utils.Optional<PipelineCountAggregateOutputType> | number
          }
        }
      }
      Build: {
        payload: Prisma.$BuildPayload<ExtArgs>
        fields: Prisma.BuildFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BuildFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BuildFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findFirst: {
            args: Prisma.BuildFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BuildFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          findMany: {
            args: Prisma.BuildFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          create: {
            args: Prisma.BuildCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          createMany: {
            args: Prisma.BuildCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BuildCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          delete: {
            args: Prisma.BuildDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          update: {
            args: Prisma.BuildUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          deleteMany: {
            args: Prisma.BuildDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BuildUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BuildUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>[]
          }
          upsert: {
            args: Prisma.BuildUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BuildPayload>
          }
          aggregate: {
            args: Prisma.BuildAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBuild>
          }
          groupBy: {
            args: Prisma.BuildGroupByArgs<ExtArgs>
            result: $Utils.Optional<BuildGroupByOutputType>[]
          }
          count: {
            args: Prisma.BuildCountArgs<ExtArgs>
            result: $Utils.Optional<BuildCountAggregateOutputType> | number
          }
        }
      }
      Deployment: {
        payload: Prisma.$DeploymentPayload<ExtArgs>
        fields: Prisma.DeploymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeploymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeploymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findFirst: {
            args: Prisma.DeploymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeploymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          findMany: {
            args: Prisma.DeploymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          create: {
            args: Prisma.DeploymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          createMany: {
            args: Prisma.DeploymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeploymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          delete: {
            args: Prisma.DeploymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          update: {
            args: Prisma.DeploymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          deleteMany: {
            args: Prisma.DeploymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeploymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeploymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>[]
          }
          upsert: {
            args: Prisma.DeploymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeploymentPayload>
          }
          aggregate: {
            args: Prisma.DeploymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeployment>
          }
          groupBy: {
            args: Prisma.DeploymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeploymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeploymentCountArgs<ExtArgs>
            result: $Utils.Optional<DeploymentCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivityLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      SystemLog: {
        payload: Prisma.$SystemLogPayload<ExtArgs>
        fields: Prisma.SystemLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findFirst: {
            args: Prisma.SystemLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          findMany: {
            args: Prisma.SystemLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          create: {
            args: Prisma.SystemLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          createMany: {
            args: Prisma.SystemLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          delete: {
            args: Prisma.SystemLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          update: {
            args: Prisma.SystemLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          deleteMany: {
            args: Prisma.SystemLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>[]
          }
          upsert: {
            args: Prisma.SystemLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemLogPayload>
          }
          aggregate: {
            args: Prisma.SystemLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemLog>
          }
          groupBy: {
            args: Prisma.SystemLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemLogCountArgs<ExtArgs>
            result: $Utils.Optional<SystemLogCountAggregateOutputType> | number
          }
        }
      }
      ProjectSecret: {
        payload: Prisma.$ProjectSecretPayload<ExtArgs>
        fields: Prisma.ProjectSecretFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectSecretFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectSecretFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>
          }
          findFirst: {
            args: Prisma.ProjectSecretFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectSecretFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>
          }
          findMany: {
            args: Prisma.ProjectSecretFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>[]
          }
          create: {
            args: Prisma.ProjectSecretCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>
          }
          createMany: {
            args: Prisma.ProjectSecretCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectSecretCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>[]
          }
          delete: {
            args: Prisma.ProjectSecretDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>
          }
          update: {
            args: Prisma.ProjectSecretUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>
          }
          deleteMany: {
            args: Prisma.ProjectSecretDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectSecretUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectSecretUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>[]
          }
          upsert: {
            args: Prisma.ProjectSecretUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectSecretPayload>
          }
          aggregate: {
            args: Prisma.ProjectSecretAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectSecret>
          }
          groupBy: {
            args: Prisma.ProjectSecretGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectSecretGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectSecretCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectSecretCountAggregateOutputType> | number
          }
        }
      }
      EnvironmentConfig: {
        payload: Prisma.$EnvironmentConfigPayload<ExtArgs>
        fields: Prisma.EnvironmentConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnvironmentConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnvironmentConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>
          }
          findFirst: {
            args: Prisma.EnvironmentConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnvironmentConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>
          }
          findMany: {
            args: Prisma.EnvironmentConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>[]
          }
          create: {
            args: Prisma.EnvironmentConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>
          }
          createMany: {
            args: Prisma.EnvironmentConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnvironmentConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>[]
          }
          delete: {
            args: Prisma.EnvironmentConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>
          }
          update: {
            args: Prisma.EnvironmentConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>
          }
          deleteMany: {
            args: Prisma.EnvironmentConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnvironmentConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnvironmentConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>[]
          }
          upsert: {
            args: Prisma.EnvironmentConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnvironmentConfigPayload>
          }
          aggregate: {
            args: Prisma.EnvironmentConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnvironmentConfig>
          }
          groupBy: {
            args: Prisma.EnvironmentConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnvironmentConfigCountArgs<ExtArgs>
            result: $Utils.Optional<EnvironmentConfigCountAggregateOutputType> | number
          }
        }
      }
      ReleaseRecord: {
        payload: Prisma.$ReleaseRecordPayload<ExtArgs>
        fields: Prisma.ReleaseRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReleaseRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReleaseRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>
          }
          findFirst: {
            args: Prisma.ReleaseRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReleaseRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>
          }
          findMany: {
            args: Prisma.ReleaseRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>[]
          }
          create: {
            args: Prisma.ReleaseRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>
          }
          createMany: {
            args: Prisma.ReleaseRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReleaseRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>[]
          }
          delete: {
            args: Prisma.ReleaseRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>
          }
          update: {
            args: Prisma.ReleaseRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>
          }
          deleteMany: {
            args: Prisma.ReleaseRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReleaseRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReleaseRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>[]
          }
          upsert: {
            args: Prisma.ReleaseRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReleaseRecordPayload>
          }
          aggregate: {
            args: Prisma.ReleaseRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReleaseRecord>
          }
          groupBy: {
            args: Prisma.ReleaseRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReleaseRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReleaseRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ReleaseRecordCountAggregateOutputType> | number
          }
        }
      }
      TriggerItem: {
        payload: Prisma.$TriggerItemPayload<ExtArgs>
        fields: Prisma.TriggerItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>
          }
          findFirst: {
            args: Prisma.TriggerItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>
          }
          findMany: {
            args: Prisma.TriggerItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>[]
          }
          create: {
            args: Prisma.TriggerItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>
          }
          createMany: {
            args: Prisma.TriggerItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>[]
          }
          delete: {
            args: Prisma.TriggerItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>
          }
          update: {
            args: Prisma.TriggerItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>
          }
          deleteMany: {
            args: Prisma.TriggerItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>[]
          }
          upsert: {
            args: Prisma.TriggerItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerItemPayload>
          }
          aggregate: {
            args: Prisma.TriggerItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTriggerItem>
          }
          groupBy: {
            args: Prisma.TriggerItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerItemCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerItemCountAggregateOutputType> | number
          }
        }
      }
      WebhookItem: {
        payload: Prisma.$WebhookItemPayload<ExtArgs>
        fields: Prisma.WebhookItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>
          }
          findFirst: {
            args: Prisma.WebhookItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>
          }
          findMany: {
            args: Prisma.WebhookItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>[]
          }
          create: {
            args: Prisma.WebhookItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>
          }
          createMany: {
            args: Prisma.WebhookItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>[]
          }
          delete: {
            args: Prisma.WebhookItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>
          }
          update: {
            args: Prisma.WebhookItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>
          }
          deleteMany: {
            args: Prisma.WebhookItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebhookItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>[]
          }
          upsert: {
            args: Prisma.WebhookItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookItemPayload>
          }
          aggregate: {
            args: Prisma.WebhookItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookItem>
          }
          groupBy: {
            args: Prisma.WebhookItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookItemCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookItemCountAggregateOutputType> | number
          }
        }
      }
      ServiceItem: {
        payload: Prisma.$ServiceItemPayload<ExtArgs>
        fields: Prisma.ServiceItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          findFirst: {
            args: Prisma.ServiceItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          findMany: {
            args: Prisma.ServiceItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          create: {
            args: Prisma.ServiceItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          createMany: {
            args: Prisma.ServiceItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          delete: {
            args: Prisma.ServiceItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          update: {
            args: Prisma.ServiceItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          deleteMany: {
            args: Prisma.ServiceItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>[]
          }
          upsert: {
            args: Prisma.ServiceItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceItemPayload>
          }
          aggregate: {
            args: Prisma.ServiceItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceItem>
          }
          groupBy: {
            args: Prisma.ServiceItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceItemCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    pipeline?: PipelineOmit
    build?: BuildOmit
    deployment?: DeploymentOmit
    activityLog?: ActivityLogOmit
    systemLog?: SystemLogOmit
    projectSecret?: ProjectSecretOmit
    environmentConfig?: EnvironmentConfigOmit
    releaseRecord?: ReleaseRecordOmit
    triggerItem?: TriggerItemOmit
    webhookItem?: WebhookItemOmit
    serviceItem?: ServiceItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshTokens: number
    pipelines: number
    builds: number
    deployments: number
    activities: number
    logs: number
    secrets: number
    environments: number
    releases: number
    triggers: number
    webhooks: number
    services: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    pipelines?: boolean | UserCountOutputTypeCountPipelinesArgs
    builds?: boolean | UserCountOutputTypeCountBuildsArgs
    deployments?: boolean | UserCountOutputTypeCountDeploymentsArgs
    activities?: boolean | UserCountOutputTypeCountActivitiesArgs
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    secrets?: boolean | UserCountOutputTypeCountSecretsArgs
    environments?: boolean | UserCountOutputTypeCountEnvironmentsArgs
    releases?: boolean | UserCountOutputTypeCountReleasesArgs
    triggers?: boolean | UserCountOutputTypeCountTriggersArgs
    webhooks?: boolean | UserCountOutputTypeCountWebhooksArgs
    services?: boolean | UserCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPipelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PipelineWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecretsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSecretWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnvironmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentConfigWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReleasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleaseRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTriggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceItemWhereInput
  }


  /**
   * Count Type PipelineCountOutputType
   */

  export type PipelineCountOutputType = {
    builds: number
  }

  export type PipelineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    builds?: boolean | PipelineCountOutputTypeCountBuildsArgs
  }

  // Custom InputTypes
  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineCountOutputType
     */
    select?: PipelineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeCountBuildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    avatar: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    avatar: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatar: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatar?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    avatar: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    pipelines?: boolean | User$pipelinesArgs<ExtArgs>
    builds?: boolean | User$buildsArgs<ExtArgs>
    deployments?: boolean | User$deploymentsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    secrets?: boolean | User$secretsArgs<ExtArgs>
    environments?: boolean | User$environmentsArgs<ExtArgs>
    releases?: boolean | User$releasesArgs<ExtArgs>
    triggers?: boolean | User$triggersArgs<ExtArgs>
    webhooks?: boolean | User$webhooksArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatar?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "avatar" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    pipelines?: boolean | User$pipelinesArgs<ExtArgs>
    builds?: boolean | User$buildsArgs<ExtArgs>
    deployments?: boolean | User$deploymentsArgs<ExtArgs>
    activities?: boolean | User$activitiesArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    secrets?: boolean | User$secretsArgs<ExtArgs>
    environments?: boolean | User$environmentsArgs<ExtArgs>
    releases?: boolean | User$releasesArgs<ExtArgs>
    triggers?: boolean | User$triggersArgs<ExtArgs>
    webhooks?: boolean | User$webhooksArgs<ExtArgs>
    services?: boolean | User$servicesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      pipelines: Prisma.$PipelinePayload<ExtArgs>[]
      builds: Prisma.$BuildPayload<ExtArgs>[]
      deployments: Prisma.$DeploymentPayload<ExtArgs>[]
      activities: Prisma.$ActivityLogPayload<ExtArgs>[]
      logs: Prisma.$SystemLogPayload<ExtArgs>[]
      secrets: Prisma.$ProjectSecretPayload<ExtArgs>[]
      environments: Prisma.$EnvironmentConfigPayload<ExtArgs>[]
      releases: Prisma.$ReleaseRecordPayload<ExtArgs>[]
      triggers: Prisma.$TriggerItemPayload<ExtArgs>[]
      webhooks: Prisma.$WebhookItemPayload<ExtArgs>[]
      services: Prisma.$ServiceItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      avatar: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    pipelines<T extends User$pipelinesArgs<ExtArgs> = {}>(args?: Subset<T, User$pipelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    builds<T extends User$buildsArgs<ExtArgs> = {}>(args?: Subset<T, User$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    deployments<T extends User$deploymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$deploymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    activities<T extends User$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, User$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    secrets<T extends User$secretsArgs<ExtArgs> = {}>(args?: Subset<T, User$secretsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    environments<T extends User$environmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$environmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    releases<T extends User$releasesArgs<ExtArgs> = {}>(args?: Subset<T, User$releasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    triggers<T extends User$triggersArgs<ExtArgs> = {}>(args?: Subset<T, User$triggersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    webhooks<T extends User$webhooksArgs<ExtArgs> = {}>(args?: Subset<T, User$webhooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.pipelines
   */
  export type User$pipelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    where?: PipelineWhereInput
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    cursor?: PipelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * User.builds
   */
  export type User$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    cursor?: BuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * User.deployments
   */
  export type User$deploymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    cursor?: DeploymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * User.activities
   */
  export type User$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    cursor?: SystemLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * User.secrets
   */
  export type User$secretsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    where?: ProjectSecretWhereInput
    orderBy?: ProjectSecretOrderByWithRelationInput | ProjectSecretOrderByWithRelationInput[]
    cursor?: ProjectSecretWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectSecretScalarFieldEnum | ProjectSecretScalarFieldEnum[]
  }

  /**
   * User.environments
   */
  export type User$environmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    where?: EnvironmentConfigWhereInput
    orderBy?: EnvironmentConfigOrderByWithRelationInput | EnvironmentConfigOrderByWithRelationInput[]
    cursor?: EnvironmentConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnvironmentConfigScalarFieldEnum | EnvironmentConfigScalarFieldEnum[]
  }

  /**
   * User.releases
   */
  export type User$releasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    where?: ReleaseRecordWhereInput
    orderBy?: ReleaseRecordOrderByWithRelationInput | ReleaseRecordOrderByWithRelationInput[]
    cursor?: ReleaseRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReleaseRecordScalarFieldEnum | ReleaseRecordScalarFieldEnum[]
  }

  /**
   * User.triggers
   */
  export type User$triggersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    where?: TriggerItemWhereInput
    orderBy?: TriggerItemOrderByWithRelationInput | TriggerItemOrderByWithRelationInput[]
    cursor?: TriggerItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerItemScalarFieldEnum | TriggerItemScalarFieldEnum[]
  }

  /**
   * User.webhooks
   */
  export type User$webhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    where?: WebhookItemWhereInput
    orderBy?: WebhookItemOrderByWithRelationInput | WebhookItemOrderByWithRelationInput[]
    cursor?: WebhookItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookItemScalarFieldEnum | WebhookItemScalarFieldEnum[]
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    where?: ServiceItemWhereInput
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    cursor?: ServiceItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Pipeline
   */

  export type AggregatePipeline = {
    _count: PipelineCountAggregateOutputType | null
    _min: PipelineMinAggregateOutputType | null
    _max: PipelineMaxAggregateOutputType | null
  }

  export type PipelineMinAggregateOutputType = {
    id: string | null
    name: string | null
    repository: string | null
    branch: string | null
    environment: string | null
    status: string | null
    triggerType: string | null
    lastRunAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PipelineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    repository: string | null
    branch: string | null
    environment: string | null
    status: string | null
    triggerType: string | null
    lastRunAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PipelineCountAggregateOutputType = {
    id: number
    name: number
    repository: number
    branch: number
    environment: number
    status: number
    triggerType: number
    lastRunAt: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PipelineMinAggregateInputType = {
    id?: true
    name?: true
    repository?: true
    branch?: true
    environment?: true
    status?: true
    triggerType?: true
    lastRunAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PipelineMaxAggregateInputType = {
    id?: true
    name?: true
    repository?: true
    branch?: true
    environment?: true
    status?: true
    triggerType?: true
    lastRunAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PipelineCountAggregateInputType = {
    id?: true
    name?: true
    repository?: true
    branch?: true
    environment?: true
    status?: true
    triggerType?: true
    lastRunAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PipelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pipeline to aggregate.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pipelines
    **/
    _count?: true | PipelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PipelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PipelineMaxAggregateInputType
  }

  export type GetPipelineAggregateType<T extends PipelineAggregateArgs> = {
        [P in keyof T & keyof AggregatePipeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePipeline[P]>
      : GetScalarType<T[P], AggregatePipeline[P]>
  }




  export type PipelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PipelineWhereInput
    orderBy?: PipelineOrderByWithAggregationInput | PipelineOrderByWithAggregationInput[]
    by: PipelineScalarFieldEnum[] | PipelineScalarFieldEnum
    having?: PipelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PipelineCountAggregateInputType | true
    _min?: PipelineMinAggregateInputType
    _max?: PipelineMaxAggregateInputType
  }

  export type PipelineGroupByOutputType = {
    id: string
    name: string
    repository: string
    branch: string
    environment: string
    status: string
    triggerType: string
    lastRunAt: Date | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PipelineCountAggregateOutputType | null
    _min: PipelineMinAggregateOutputType | null
    _max: PipelineMaxAggregateOutputType | null
  }

  type GetPipelineGroupByPayload<T extends PipelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PipelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PipelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PipelineGroupByOutputType[P]>
            : GetScalarType<T[P], PipelineGroupByOutputType[P]>
        }
      >
    >


  export type PipelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repository?: boolean
    branch?: boolean
    environment?: boolean
    status?: boolean
    triggerType?: boolean
    lastRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    builds?: boolean | Pipeline$buildsArgs<ExtArgs>
    _count?: boolean | PipelineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repository?: boolean
    branch?: boolean
    environment?: boolean
    status?: boolean
    triggerType?: boolean
    lastRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    repository?: boolean
    branch?: boolean
    environment?: boolean
    status?: boolean
    triggerType?: boolean
    lastRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectScalar = {
    id?: boolean
    name?: boolean
    repository?: boolean
    branch?: boolean
    environment?: boolean
    status?: boolean
    triggerType?: boolean
    lastRunAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PipelineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "repository" | "branch" | "environment" | "status" | "triggerType" | "lastRunAt" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["pipeline"]>
  export type PipelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    builds?: boolean | Pipeline$buildsArgs<ExtArgs>
    _count?: boolean | PipelineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PipelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PipelineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PipelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pipeline"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      builds: Prisma.$BuildPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      repository: string
      branch: string
      environment: string
      status: string
      triggerType: string
      lastRunAt: Date | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pipeline"]>
    composites: {}
  }

  type PipelineGetPayload<S extends boolean | null | undefined | PipelineDefaultArgs> = $Result.GetResult<Prisma.$PipelinePayload, S>

  type PipelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PipelineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PipelineCountAggregateInputType | true
    }

  export interface PipelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pipeline'], meta: { name: 'Pipeline' } }
    /**
     * Find zero or one Pipeline that matches the filter.
     * @param {PipelineFindUniqueArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PipelineFindUniqueArgs>(args: SelectSubset<T, PipelineFindUniqueArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Pipeline that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PipelineFindUniqueOrThrowArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PipelineFindUniqueOrThrowArgs>(args: SelectSubset<T, PipelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Pipeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindFirstArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PipelineFindFirstArgs>(args?: SelectSubset<T, PipelineFindFirstArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Pipeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindFirstOrThrowArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PipelineFindFirstOrThrowArgs>(args?: SelectSubset<T, PipelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Pipelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pipelines
     * const pipelines = await prisma.pipeline.findMany()
     * 
     * // Get first 10 Pipelines
     * const pipelines = await prisma.pipeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PipelineFindManyArgs>(args?: SelectSubset<T, PipelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Pipeline.
     * @param {PipelineCreateArgs} args - Arguments to create a Pipeline.
     * @example
     * // Create one Pipeline
     * const Pipeline = await prisma.pipeline.create({
     *   data: {
     *     // ... data to create a Pipeline
     *   }
     * })
     * 
     */
    create<T extends PipelineCreateArgs>(args: SelectSubset<T, PipelineCreateArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Pipelines.
     * @param {PipelineCreateManyArgs} args - Arguments to create many Pipelines.
     * @example
     * // Create many Pipelines
     * const pipeline = await prisma.pipeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PipelineCreateManyArgs>(args?: SelectSubset<T, PipelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pipelines and returns the data saved in the database.
     * @param {PipelineCreateManyAndReturnArgs} args - Arguments to create many Pipelines.
     * @example
     * // Create many Pipelines
     * const pipeline = await prisma.pipeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pipelines and only return the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PipelineCreateManyAndReturnArgs>(args?: SelectSubset<T, PipelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Pipeline.
     * @param {PipelineDeleteArgs} args - Arguments to delete one Pipeline.
     * @example
     * // Delete one Pipeline
     * const Pipeline = await prisma.pipeline.delete({
     *   where: {
     *     // ... filter to delete one Pipeline
     *   }
     * })
     * 
     */
    delete<T extends PipelineDeleteArgs>(args: SelectSubset<T, PipelineDeleteArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Pipeline.
     * @param {PipelineUpdateArgs} args - Arguments to update one Pipeline.
     * @example
     * // Update one Pipeline
     * const pipeline = await prisma.pipeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PipelineUpdateArgs>(args: SelectSubset<T, PipelineUpdateArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Pipelines.
     * @param {PipelineDeleteManyArgs} args - Arguments to filter Pipelines to delete.
     * @example
     * // Delete a few Pipelines
     * const { count } = await prisma.pipeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PipelineDeleteManyArgs>(args?: SelectSubset<T, PipelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pipelines
     * const pipeline = await prisma.pipeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PipelineUpdateManyArgs>(args: SelectSubset<T, PipelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pipelines and returns the data updated in the database.
     * @param {PipelineUpdateManyAndReturnArgs} args - Arguments to update many Pipelines.
     * @example
     * // Update many Pipelines
     * const pipeline = await prisma.pipeline.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pipelines and only return the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PipelineUpdateManyAndReturnArgs>(args: SelectSubset<T, PipelineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Pipeline.
     * @param {PipelineUpsertArgs} args - Arguments to update or create a Pipeline.
     * @example
     * // Update or create a Pipeline
     * const pipeline = await prisma.pipeline.upsert({
     *   create: {
     *     // ... data to create a Pipeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pipeline we want to update
     *   }
     * })
     */
    upsert<T extends PipelineUpsertArgs>(args: SelectSubset<T, PipelineUpsertArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Pipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineCountArgs} args - Arguments to filter Pipelines to count.
     * @example
     * // Count the number of Pipelines
     * const count = await prisma.pipeline.count({
     *   where: {
     *     // ... the filter for the Pipelines we want to count
     *   }
     * })
    **/
    count<T extends PipelineCountArgs>(
      args?: Subset<T, PipelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PipelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PipelineAggregateArgs>(args: Subset<T, PipelineAggregateArgs>): Prisma.PrismaPromise<GetPipelineAggregateType<T>>

    /**
     * Group by Pipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PipelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PipelineGroupByArgs['orderBy'] }
        : { orderBy?: PipelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PipelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPipelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pipeline model
   */
  readonly fields: PipelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pipeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PipelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    builds<T extends Pipeline$buildsArgs<ExtArgs> = {}>(args?: Subset<T, Pipeline$buildsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pipeline model
   */ 
  interface PipelineFieldRefs {
    readonly id: FieldRef<"Pipeline", 'String'>
    readonly name: FieldRef<"Pipeline", 'String'>
    readonly repository: FieldRef<"Pipeline", 'String'>
    readonly branch: FieldRef<"Pipeline", 'String'>
    readonly environment: FieldRef<"Pipeline", 'String'>
    readonly status: FieldRef<"Pipeline", 'String'>
    readonly triggerType: FieldRef<"Pipeline", 'String'>
    readonly lastRunAt: FieldRef<"Pipeline", 'DateTime'>
    readonly userId: FieldRef<"Pipeline", 'String'>
    readonly createdAt: FieldRef<"Pipeline", 'DateTime'>
    readonly updatedAt: FieldRef<"Pipeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pipeline findUnique
   */
  export type PipelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline findUniqueOrThrow
   */
  export type PipelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline findFirst
   */
  export type PipelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pipelines.
     */
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline findFirstOrThrow
   */
  export type PipelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pipelines.
     */
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline findMany
   */
  export type PipelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipelines to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline create
   */
  export type PipelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Pipeline.
     */
    data: XOR<PipelineCreateInput, PipelineUncheckedCreateInput>
  }

  /**
   * Pipeline createMany
   */
  export type PipelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pipelines.
     */
    data: PipelineCreateManyInput | PipelineCreateManyInput[]
  }

  /**
   * Pipeline createManyAndReturn
   */
  export type PipelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * The data used to create many Pipelines.
     */
    data: PipelineCreateManyInput | PipelineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pipeline update
   */
  export type PipelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Pipeline.
     */
    data: XOR<PipelineUpdateInput, PipelineUncheckedUpdateInput>
    /**
     * Choose, which Pipeline to update.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline updateMany
   */
  export type PipelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pipelines.
     */
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyInput>
    /**
     * Filter which Pipelines to update
     */
    where?: PipelineWhereInput
    /**
     * Limit how many Pipelines to update.
     */
    limit?: number
  }

  /**
   * Pipeline updateManyAndReturn
   */
  export type PipelineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * The data used to update Pipelines.
     */
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyInput>
    /**
     * Filter which Pipelines to update
     */
    where?: PipelineWhereInput
    /**
     * Limit how many Pipelines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pipeline upsert
   */
  export type PipelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Pipeline to update in case it exists.
     */
    where: PipelineWhereUniqueInput
    /**
     * In case the Pipeline found by the `where` argument doesn't exist, create a new Pipeline with this data.
     */
    create: XOR<PipelineCreateInput, PipelineUncheckedCreateInput>
    /**
     * In case the Pipeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PipelineUpdateInput, PipelineUncheckedUpdateInput>
  }

  /**
   * Pipeline delete
   */
  export type PipelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter which Pipeline to delete.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline deleteMany
   */
  export type PipelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pipelines to delete
     */
    where?: PipelineWhereInput
    /**
     * Limit how many Pipelines to delete.
     */
    limit?: number
  }

  /**
   * Pipeline.builds
   */
  export type Pipeline$buildsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    cursor?: BuildWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Pipeline without action
   */
  export type PipelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
  }


  /**
   * Model Build
   */

  export type AggregateBuild = {
    _count: BuildCountAggregateOutputType | null
    _avg: BuildAvgAggregateOutputType | null
    _sum: BuildSumAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  export type BuildAvgAggregateOutputType = {
    buildNumber: number | null
    durationSeconds: number | null
  }

  export type BuildSumAggregateOutputType = {
    buildNumber: number | null
    durationSeconds: number | null
  }

  export type BuildMinAggregateOutputType = {
    id: string | null
    buildNumber: number | null
    pipelineId: string | null
    pipelineName: string | null
    branch: string | null
    commitHash: string | null
    commitMessage: string | null
    status: string | null
    duration: string | null
    durationSeconds: number | null
    triggeredBy: string | null
    logs: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BuildMaxAggregateOutputType = {
    id: string | null
    buildNumber: number | null
    pipelineId: string | null
    pipelineName: string | null
    branch: string | null
    commitHash: string | null
    commitMessage: string | null
    status: string | null
    duration: string | null
    durationSeconds: number | null
    triggeredBy: string | null
    logs: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type BuildCountAggregateOutputType = {
    id: number
    buildNumber: number
    pipelineId: number
    pipelineName: number
    branch: number
    commitHash: number
    commitMessage: number
    status: number
    duration: number
    durationSeconds: number
    triggeredBy: number
    logs: number
    userId: number
    createdAt: number
    _all: number
  }


  export type BuildAvgAggregateInputType = {
    buildNumber?: true
    durationSeconds?: true
  }

  export type BuildSumAggregateInputType = {
    buildNumber?: true
    durationSeconds?: true
  }

  export type BuildMinAggregateInputType = {
    id?: true
    buildNumber?: true
    pipelineId?: true
    pipelineName?: true
    branch?: true
    commitHash?: true
    commitMessage?: true
    status?: true
    duration?: true
    durationSeconds?: true
    triggeredBy?: true
    logs?: true
    userId?: true
    createdAt?: true
  }

  export type BuildMaxAggregateInputType = {
    id?: true
    buildNumber?: true
    pipelineId?: true
    pipelineName?: true
    branch?: true
    commitHash?: true
    commitMessage?: true
    status?: true
    duration?: true
    durationSeconds?: true
    triggeredBy?: true
    logs?: true
    userId?: true
    createdAt?: true
  }

  export type BuildCountAggregateInputType = {
    id?: true
    buildNumber?: true
    pipelineId?: true
    pipelineName?: true
    branch?: true
    commitHash?: true
    commitMessage?: true
    status?: true
    duration?: true
    durationSeconds?: true
    triggeredBy?: true
    logs?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type BuildAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Build to aggregate.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Builds
    **/
    _count?: true | BuildCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BuildAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BuildSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BuildMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BuildMaxAggregateInputType
  }

  export type GetBuildAggregateType<T extends BuildAggregateArgs> = {
        [P in keyof T & keyof AggregateBuild]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBuild[P]>
      : GetScalarType<T[P], AggregateBuild[P]>
  }




  export type BuildGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BuildWhereInput
    orderBy?: BuildOrderByWithAggregationInput | BuildOrderByWithAggregationInput[]
    by: BuildScalarFieldEnum[] | BuildScalarFieldEnum
    having?: BuildScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BuildCountAggregateInputType | true
    _avg?: BuildAvgAggregateInputType
    _sum?: BuildSumAggregateInputType
    _min?: BuildMinAggregateInputType
    _max?: BuildMaxAggregateInputType
  }

  export type BuildGroupByOutputType = {
    id: string
    buildNumber: number
    pipelineId: string | null
    pipelineName: string
    branch: string
    commitHash: string | null
    commitMessage: string | null
    status: string
    duration: string
    durationSeconds: number
    triggeredBy: string
    logs: string | null
    userId: string
    createdAt: Date
    _count: BuildCountAggregateOutputType | null
    _avg: BuildAvgAggregateOutputType | null
    _sum: BuildSumAggregateOutputType | null
    _min: BuildMinAggregateOutputType | null
    _max: BuildMaxAggregateOutputType | null
  }

  type GetBuildGroupByPayload<T extends BuildGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BuildGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BuildGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BuildGroupByOutputType[P]>
            : GetScalarType<T[P], BuildGroupByOutputType[P]>
        }
      >
    >


  export type BuildSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buildNumber?: boolean
    pipelineId?: boolean
    pipelineName?: boolean
    branch?: boolean
    commitHash?: boolean
    commitMessage?: boolean
    status?: boolean
    duration?: boolean
    durationSeconds?: boolean
    triggeredBy?: boolean
    logs?: boolean
    userId?: boolean
    createdAt?: boolean
    pipeline?: boolean | Build$pipelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buildNumber?: boolean
    pipelineId?: boolean
    pipelineName?: boolean
    branch?: boolean
    commitHash?: boolean
    commitMessage?: boolean
    status?: boolean
    duration?: boolean
    durationSeconds?: boolean
    triggeredBy?: boolean
    logs?: boolean
    userId?: boolean
    createdAt?: boolean
    pipeline?: boolean | Build$pipelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    buildNumber?: boolean
    pipelineId?: boolean
    pipelineName?: boolean
    branch?: boolean
    commitHash?: boolean
    commitMessage?: boolean
    status?: boolean
    duration?: boolean
    durationSeconds?: boolean
    triggeredBy?: boolean
    logs?: boolean
    userId?: boolean
    createdAt?: boolean
    pipeline?: boolean | Build$pipelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["build"]>

  export type BuildSelectScalar = {
    id?: boolean
    buildNumber?: boolean
    pipelineId?: boolean
    pipelineName?: boolean
    branch?: boolean
    commitHash?: boolean
    commitMessage?: boolean
    status?: boolean
    duration?: boolean
    durationSeconds?: boolean
    triggeredBy?: boolean
    logs?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type BuildOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "buildNumber" | "pipelineId" | "pipelineName" | "branch" | "commitHash" | "commitMessage" | "status" | "duration" | "durationSeconds" | "triggeredBy" | "logs" | "userId" | "createdAt", ExtArgs["result"]["build"]>
  export type BuildInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipeline?: boolean | Build$pipelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuildIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipeline?: boolean | Build$pipelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BuildIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipeline?: boolean | Build$pipelineArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BuildPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Build"
    objects: {
      pipeline: Prisma.$PipelinePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      buildNumber: number
      pipelineId: string | null
      pipelineName: string
      branch: string
      commitHash: string | null
      commitMessage: string | null
      status: string
      duration: string
      durationSeconds: number
      triggeredBy: string
      logs: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["build"]>
    composites: {}
  }

  type BuildGetPayload<S extends boolean | null | undefined | BuildDefaultArgs> = $Result.GetResult<Prisma.$BuildPayload, S>

  type BuildCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BuildFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BuildCountAggregateInputType | true
    }

  export interface BuildDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Build'], meta: { name: 'Build' } }
    /**
     * Find zero or one Build that matches the filter.
     * @param {BuildFindUniqueArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BuildFindUniqueArgs>(args: SelectSubset<T, BuildFindUniqueArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Build that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BuildFindUniqueOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BuildFindUniqueOrThrowArgs>(args: SelectSubset<T, BuildFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Build that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BuildFindFirstArgs>(args?: SelectSubset<T, BuildFindFirstArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Build that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindFirstOrThrowArgs} args - Arguments to find a Build
     * @example
     * // Get one Build
     * const build = await prisma.build.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BuildFindFirstOrThrowArgs>(args?: SelectSubset<T, BuildFindFirstOrThrowArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Builds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Builds
     * const builds = await prisma.build.findMany()
     * 
     * // Get first 10 Builds
     * const builds = await prisma.build.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const buildWithIdOnly = await prisma.build.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BuildFindManyArgs>(args?: SelectSubset<T, BuildFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Build.
     * @param {BuildCreateArgs} args - Arguments to create a Build.
     * @example
     * // Create one Build
     * const Build = await prisma.build.create({
     *   data: {
     *     // ... data to create a Build
     *   }
     * })
     * 
     */
    create<T extends BuildCreateArgs>(args: SelectSubset<T, BuildCreateArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Builds.
     * @param {BuildCreateManyArgs} args - Arguments to create many Builds.
     * @example
     * // Create many Builds
     * const build = await prisma.build.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BuildCreateManyArgs>(args?: SelectSubset<T, BuildCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Builds and returns the data saved in the database.
     * @param {BuildCreateManyAndReturnArgs} args - Arguments to create many Builds.
     * @example
     * // Create many Builds
     * const build = await prisma.build.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Builds and only return the `id`
     * const buildWithIdOnly = await prisma.build.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BuildCreateManyAndReturnArgs>(args?: SelectSubset<T, BuildCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Build.
     * @param {BuildDeleteArgs} args - Arguments to delete one Build.
     * @example
     * // Delete one Build
     * const Build = await prisma.build.delete({
     *   where: {
     *     // ... filter to delete one Build
     *   }
     * })
     * 
     */
    delete<T extends BuildDeleteArgs>(args: SelectSubset<T, BuildDeleteArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Build.
     * @param {BuildUpdateArgs} args - Arguments to update one Build.
     * @example
     * // Update one Build
     * const build = await prisma.build.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BuildUpdateArgs>(args: SelectSubset<T, BuildUpdateArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Builds.
     * @param {BuildDeleteManyArgs} args - Arguments to filter Builds to delete.
     * @example
     * // Delete a few Builds
     * const { count } = await prisma.build.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BuildDeleteManyArgs>(args?: SelectSubset<T, BuildDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Builds
     * const build = await prisma.build.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BuildUpdateManyArgs>(args: SelectSubset<T, BuildUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Builds and returns the data updated in the database.
     * @param {BuildUpdateManyAndReturnArgs} args - Arguments to update many Builds.
     * @example
     * // Update many Builds
     * const build = await prisma.build.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Builds and only return the `id`
     * const buildWithIdOnly = await prisma.build.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BuildUpdateManyAndReturnArgs>(args: SelectSubset<T, BuildUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Build.
     * @param {BuildUpsertArgs} args - Arguments to update or create a Build.
     * @example
     * // Update or create a Build
     * const build = await prisma.build.upsert({
     *   create: {
     *     // ... data to create a Build
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Build we want to update
     *   }
     * })
     */
    upsert<T extends BuildUpsertArgs>(args: SelectSubset<T, BuildUpsertArgs<ExtArgs>>): Prisma__BuildClient<$Result.GetResult<Prisma.$BuildPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Builds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildCountArgs} args - Arguments to filter Builds to count.
     * @example
     * // Count the number of Builds
     * const count = await prisma.build.count({
     *   where: {
     *     // ... the filter for the Builds we want to count
     *   }
     * })
    **/
    count<T extends BuildCountArgs>(
      args?: Subset<T, BuildCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BuildCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BuildAggregateArgs>(args: Subset<T, BuildAggregateArgs>): Prisma.PrismaPromise<GetBuildAggregateType<T>>

    /**
     * Group by Build.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BuildGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BuildGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BuildGroupByArgs['orderBy'] }
        : { orderBy?: BuildGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BuildGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBuildGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Build model
   */
  readonly fields: BuildFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Build.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BuildClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pipeline<T extends Build$pipelineArgs<ExtArgs> = {}>(args?: Subset<T, Build$pipelineArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Build model
   */ 
  interface BuildFieldRefs {
    readonly id: FieldRef<"Build", 'String'>
    readonly buildNumber: FieldRef<"Build", 'Int'>
    readonly pipelineId: FieldRef<"Build", 'String'>
    readonly pipelineName: FieldRef<"Build", 'String'>
    readonly branch: FieldRef<"Build", 'String'>
    readonly commitHash: FieldRef<"Build", 'String'>
    readonly commitMessage: FieldRef<"Build", 'String'>
    readonly status: FieldRef<"Build", 'String'>
    readonly duration: FieldRef<"Build", 'String'>
    readonly durationSeconds: FieldRef<"Build", 'Int'>
    readonly triggeredBy: FieldRef<"Build", 'String'>
    readonly logs: FieldRef<"Build", 'String'>
    readonly userId: FieldRef<"Build", 'String'>
    readonly createdAt: FieldRef<"Build", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Build findUnique
   */
  export type BuildFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build findUniqueOrThrow
   */
  export type BuildFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build findFirst
   */
  export type BuildFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build findFirstOrThrow
   */
  export type BuildFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Build to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Builds.
     */
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build findMany
   */
  export type BuildFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter, which Builds to fetch.
     */
    where?: BuildWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Builds to fetch.
     */
    orderBy?: BuildOrderByWithRelationInput | BuildOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Builds.
     */
    cursor?: BuildWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Builds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Builds.
     */
    skip?: number
    distinct?: BuildScalarFieldEnum | BuildScalarFieldEnum[]
  }

  /**
   * Build create
   */
  export type BuildCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to create a Build.
     */
    data: XOR<BuildCreateInput, BuildUncheckedCreateInput>
  }

  /**
   * Build createMany
   */
  export type BuildCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Builds.
     */
    data: BuildCreateManyInput | BuildCreateManyInput[]
  }

  /**
   * Build createManyAndReturn
   */
  export type BuildCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * The data used to create many Builds.
     */
    data: BuildCreateManyInput | BuildCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Build update
   */
  export type BuildUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The data needed to update a Build.
     */
    data: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
    /**
     * Choose, which Build to update.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build updateMany
   */
  export type BuildUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Builds.
     */
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyInput>
    /**
     * Filter which Builds to update
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to update.
     */
    limit?: number
  }

  /**
   * Build updateManyAndReturn
   */
  export type BuildUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * The data used to update Builds.
     */
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyInput>
    /**
     * Filter which Builds to update
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Build upsert
   */
  export type BuildUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * The filter to search for the Build to update in case it exists.
     */
    where: BuildWhereUniqueInput
    /**
     * In case the Build found by the `where` argument doesn't exist, create a new Build with this data.
     */
    create: XOR<BuildCreateInput, BuildUncheckedCreateInput>
    /**
     * In case the Build was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BuildUpdateInput, BuildUncheckedUpdateInput>
  }

  /**
   * Build delete
   */
  export type BuildDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
    /**
     * Filter which Build to delete.
     */
    where: BuildWhereUniqueInput
  }

  /**
   * Build deleteMany
   */
  export type BuildDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Builds to delete
     */
    where?: BuildWhereInput
    /**
     * Limit how many Builds to delete.
     */
    limit?: number
  }

  /**
   * Build.pipeline
   */
  export type Build$pipelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pipeline
     */
    omit?: PipelineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    where?: PipelineWhereInput
  }

  /**
   * Build without action
   */
  export type BuildDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Build
     */
    select?: BuildSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Build
     */
    omit?: BuildOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BuildInclude<ExtArgs> | null
  }


  /**
   * Model Deployment
   */

  export type AggregateDeployment = {
    _count: DeploymentCountAggregateOutputType | null
    _avg: DeploymentAvgAggregateOutputType | null
    _sum: DeploymentSumAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  export type DeploymentAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type DeploymentSumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type DeploymentMinAggregateOutputType = {
    id: string | null
    name: string | null
    environment: string | null
    branch: string | null
    status: string | null
    deployedBy: string | null
    duration: string | null
    durationSeconds: number | null
    pipelineId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type DeploymentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    environment: string | null
    branch: string | null
    status: string | null
    deployedBy: string | null
    duration: string | null
    durationSeconds: number | null
    pipelineId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type DeploymentCountAggregateOutputType = {
    id: number
    name: number
    environment: number
    branch: number
    status: number
    deployedBy: number
    duration: number
    durationSeconds: number
    pipelineId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type DeploymentAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type DeploymentSumAggregateInputType = {
    durationSeconds?: true
  }

  export type DeploymentMinAggregateInputType = {
    id?: true
    name?: true
    environment?: true
    branch?: true
    status?: true
    deployedBy?: true
    duration?: true
    durationSeconds?: true
    pipelineId?: true
    userId?: true
    createdAt?: true
  }

  export type DeploymentMaxAggregateInputType = {
    id?: true
    name?: true
    environment?: true
    branch?: true
    status?: true
    deployedBy?: true
    duration?: true
    durationSeconds?: true
    pipelineId?: true
    userId?: true
    createdAt?: true
  }

  export type DeploymentCountAggregateInputType = {
    id?: true
    name?: true
    environment?: true
    branch?: true
    status?: true
    deployedBy?: true
    duration?: true
    durationSeconds?: true
    pipelineId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type DeploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployment to aggregate.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deployments
    **/
    _count?: true | DeploymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeploymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeploymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeploymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeploymentMaxAggregateInputType
  }

  export type GetDeploymentAggregateType<T extends DeploymentAggregateArgs> = {
        [P in keyof T & keyof AggregateDeployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeployment[P]>
      : GetScalarType<T[P], AggregateDeployment[P]>
  }




  export type DeploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeploymentWhereInput
    orderBy?: DeploymentOrderByWithAggregationInput | DeploymentOrderByWithAggregationInput[]
    by: DeploymentScalarFieldEnum[] | DeploymentScalarFieldEnum
    having?: DeploymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeploymentCountAggregateInputType | true
    _avg?: DeploymentAvgAggregateInputType
    _sum?: DeploymentSumAggregateInputType
    _min?: DeploymentMinAggregateInputType
    _max?: DeploymentMaxAggregateInputType
  }

  export type DeploymentGroupByOutputType = {
    id: string
    name: string
    environment: string
    branch: string
    status: string
    deployedBy: string
    duration: string
    durationSeconds: number
    pipelineId: string | null
    userId: string
    createdAt: Date
    _count: DeploymentCountAggregateOutputType | null
    _avg: DeploymentAvgAggregateOutputType | null
    _sum: DeploymentSumAggregateOutputType | null
    _min: DeploymentMinAggregateOutputType | null
    _max: DeploymentMaxAggregateOutputType | null
  }

  type GetDeploymentGroupByPayload<T extends DeploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeploymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeploymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
            : GetScalarType<T[P], DeploymentGroupByOutputType[P]>
        }
      >
    >


  export type DeploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    environment?: boolean
    branch?: boolean
    status?: boolean
    deployedBy?: boolean
    duration?: boolean
    durationSeconds?: boolean
    pipelineId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    environment?: boolean
    branch?: boolean
    status?: boolean
    deployedBy?: boolean
    duration?: boolean
    durationSeconds?: boolean
    pipelineId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    environment?: boolean
    branch?: boolean
    status?: boolean
    deployedBy?: boolean
    duration?: boolean
    durationSeconds?: boolean
    pipelineId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deployment"]>

  export type DeploymentSelectScalar = {
    id?: boolean
    name?: boolean
    environment?: boolean
    branch?: boolean
    status?: boolean
    deployedBy?: boolean
    duration?: boolean
    durationSeconds?: boolean
    pipelineId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type DeploymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "environment" | "branch" | "status" | "deployedBy" | "duration" | "durationSeconds" | "pipelineId" | "userId" | "createdAt", ExtArgs["result"]["deployment"]>
  export type DeploymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeploymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DeploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deployment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      environment: string
      branch: string
      status: string
      deployedBy: string
      duration: string
      durationSeconds: number
      pipelineId: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["deployment"]>
    composites: {}
  }

  type DeploymentGetPayload<S extends boolean | null | undefined | DeploymentDefaultArgs> = $Result.GetResult<Prisma.$DeploymentPayload, S>

  type DeploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeploymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeploymentCountAggregateInputType | true
    }

  export interface DeploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deployment'], meta: { name: 'Deployment' } }
    /**
     * Find zero or one Deployment that matches the filter.
     * @param {DeploymentFindUniqueArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeploymentFindUniqueArgs>(args: SelectSubset<T, DeploymentFindUniqueArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Deployment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeploymentFindUniqueOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeploymentFindUniqueOrThrowArgs>(args: SelectSubset<T, DeploymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeploymentFindFirstArgs>(args?: SelectSubset<T, DeploymentFindFirstArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindFirstOrThrowArgs} args - Arguments to find a Deployment
     * @example
     * // Get one Deployment
     * const deployment = await prisma.deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeploymentFindFirstOrThrowArgs>(args?: SelectSubset<T, DeploymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deployments
     * const deployments = await prisma.deployment.findMany()
     * 
     * // Get first 10 Deployments
     * const deployments = await prisma.deployment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deploymentWithIdOnly = await prisma.deployment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeploymentFindManyArgs>(args?: SelectSubset<T, DeploymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Deployment.
     * @param {DeploymentCreateArgs} args - Arguments to create a Deployment.
     * @example
     * // Create one Deployment
     * const Deployment = await prisma.deployment.create({
     *   data: {
     *     // ... data to create a Deployment
     *   }
     * })
     * 
     */
    create<T extends DeploymentCreateArgs>(args: SelectSubset<T, DeploymentCreateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Deployments.
     * @param {DeploymentCreateManyArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeploymentCreateManyArgs>(args?: SelectSubset<T, DeploymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deployments and returns the data saved in the database.
     * @param {DeploymentCreateManyAndReturnArgs} args - Arguments to create many Deployments.
     * @example
     * // Create many Deployments
     * const deployment = await prisma.deployment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeploymentCreateManyAndReturnArgs>(args?: SelectSubset<T, DeploymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Deployment.
     * @param {DeploymentDeleteArgs} args - Arguments to delete one Deployment.
     * @example
     * // Delete one Deployment
     * const Deployment = await prisma.deployment.delete({
     *   where: {
     *     // ... filter to delete one Deployment
     *   }
     * })
     * 
     */
    delete<T extends DeploymentDeleteArgs>(args: SelectSubset<T, DeploymentDeleteArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Deployment.
     * @param {DeploymentUpdateArgs} args - Arguments to update one Deployment.
     * @example
     * // Update one Deployment
     * const deployment = await prisma.deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeploymentUpdateArgs>(args: SelectSubset<T, DeploymentUpdateArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Deployments.
     * @param {DeploymentDeleteManyArgs} args - Arguments to filter Deployments to delete.
     * @example
     * // Delete a few Deployments
     * const { count } = await prisma.deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeploymentDeleteManyArgs>(args?: SelectSubset<T, DeploymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeploymentUpdateManyArgs>(args: SelectSubset<T, DeploymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deployments and returns the data updated in the database.
     * @param {DeploymentUpdateManyAndReturnArgs} args - Arguments to update many Deployments.
     * @example
     * // Update many Deployments
     * const deployment = await prisma.deployment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deployments and only return the `id`
     * const deploymentWithIdOnly = await prisma.deployment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeploymentUpdateManyAndReturnArgs>(args: SelectSubset<T, DeploymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Deployment.
     * @param {DeploymentUpsertArgs} args - Arguments to update or create a Deployment.
     * @example
     * // Update or create a Deployment
     * const deployment = await prisma.deployment.upsert({
     *   create: {
     *     // ... data to create a Deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deployment we want to update
     *   }
     * })
     */
    upsert<T extends DeploymentUpsertArgs>(args: SelectSubset<T, DeploymentUpsertArgs<ExtArgs>>): Prisma__DeploymentClient<$Result.GetResult<Prisma.$DeploymentPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentCountArgs} args - Arguments to filter Deployments to count.
     * @example
     * // Count the number of Deployments
     * const count = await prisma.deployment.count({
     *   where: {
     *     // ... the filter for the Deployments we want to count
     *   }
     * })
    **/
    count<T extends DeploymentCountArgs>(
      args?: Subset<T, DeploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeploymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeploymentAggregateArgs>(args: Subset<T, DeploymentAggregateArgs>): Prisma.PrismaPromise<GetDeploymentAggregateType<T>>

    /**
     * Group by Deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeploymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeploymentGroupByArgs['orderBy'] }
        : { orderBy?: DeploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeploymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deployment model
   */
  readonly fields: DeploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeploymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deployment model
   */ 
  interface DeploymentFieldRefs {
    readonly id: FieldRef<"Deployment", 'String'>
    readonly name: FieldRef<"Deployment", 'String'>
    readonly environment: FieldRef<"Deployment", 'String'>
    readonly branch: FieldRef<"Deployment", 'String'>
    readonly status: FieldRef<"Deployment", 'String'>
    readonly deployedBy: FieldRef<"Deployment", 'String'>
    readonly duration: FieldRef<"Deployment", 'String'>
    readonly durationSeconds: FieldRef<"Deployment", 'Int'>
    readonly pipelineId: FieldRef<"Deployment", 'String'>
    readonly userId: FieldRef<"Deployment", 'String'>
    readonly createdAt: FieldRef<"Deployment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deployment findUnique
   */
  export type DeploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findUniqueOrThrow
   */
  export type DeploymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment findFirst
   */
  export type DeploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findFirstOrThrow
   */
  export type DeploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployment to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deployments.
     */
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment findMany
   */
  export type DeploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter, which Deployments to fetch.
     */
    where?: DeploymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deployments to fetch.
     */
    orderBy?: DeploymentOrderByWithRelationInput | DeploymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deployments.
     */
    cursor?: DeploymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deployments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deployments.
     */
    skip?: number
    distinct?: DeploymentScalarFieldEnum | DeploymentScalarFieldEnum[]
  }

  /**
   * Deployment create
   */
  export type DeploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Deployment.
     */
    data: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
  }

  /**
   * Deployment createMany
   */
  export type DeploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
  }

  /**
   * Deployment createManyAndReturn
   */
  export type DeploymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to create many Deployments.
     */
    data: DeploymentCreateManyInput | DeploymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment update
   */
  export type DeploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Deployment.
     */
    data: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
    /**
     * Choose, which Deployment to update.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment updateMany
   */
  export type DeploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
  }

  /**
   * Deployment updateManyAndReturn
   */
  export type DeploymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * The data used to update Deployments.
     */
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyInput>
    /**
     * Filter which Deployments to update
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deployment upsert
   */
  export type DeploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Deployment to update in case it exists.
     */
    where: DeploymentWhereUniqueInput
    /**
     * In case the Deployment found by the `where` argument doesn't exist, create a new Deployment with this data.
     */
    create: XOR<DeploymentCreateInput, DeploymentUncheckedCreateInput>
    /**
     * In case the Deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeploymentUpdateInput, DeploymentUncheckedUpdateInput>
  }

  /**
   * Deployment delete
   */
  export type DeploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
    /**
     * Filter which Deployment to delete.
     */
    where: DeploymentWhereUniqueInput
  }

  /**
   * Deployment deleteMany
   */
  export type DeploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deployments to delete
     */
    where?: DeploymentWhereInput
    /**
     * Limit how many Deployments to delete.
     */
    limit?: number
  }

  /**
   * Deployment without action
   */
  export type DeploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deployment
     */
    select?: DeploymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deployment
     */
    omit?: DeploymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeploymentInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    userName: string | null
    details: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    type: string | null
    userName: string | null
    details: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    title: number
    type: number
    userName: number
    details: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    title?: true
    type?: true
    userName?: true
    details?: true
    userId?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    title?: true
    type?: true
    userName?: true
    details?: true
    userId?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    title?: true
    type?: true
    userName?: true
    details?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    title: string
    type: string
    userName: string
    details: string | null
    userId: string
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    userName?: boolean
    details?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    userName?: boolean
    details?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    type?: boolean
    userName?: boolean
    details?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    title?: boolean
    type?: boolean
    userName?: boolean
    details?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "type" | "userName" | "details" | "userId" | "createdAt", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      type: string
      userName: string
      details: string | null
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs and returns the data updated in the database.
     * @param {ActivityLogUpdateManyAndReturnArgs} args - Arguments to update many ActivityLogs.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivityLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivityLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */ 
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly title: FieldRef<"ActivityLog", 'String'>
    readonly type: FieldRef<"ActivityLog", 'String'>
    readonly userName: FieldRef<"ActivityLog", 'String'>
    readonly details: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog updateManyAndReturn
   */
  export type ActivityLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model SystemLog
   */

  export type AggregateSystemLog = {
    _count: SystemLogCountAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  export type SystemLogMinAggregateOutputType = {
    id: string | null
    level: string | null
    service: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SystemLogMaxAggregateOutputType = {
    id: string | null
    level: string | null
    service: string | null
    message: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type SystemLogCountAggregateOutputType = {
    id: number
    level: number
    service: number
    message: number
    userId: number
    createdAt: number
    _all: number
  }


  export type SystemLogMinAggregateInputType = {
    id?: true
    level?: true
    service?: true
    message?: true
    userId?: true
    createdAt?: true
  }

  export type SystemLogMaxAggregateInputType = {
    id?: true
    level?: true
    service?: true
    message?: true
    userId?: true
    createdAt?: true
  }

  export type SystemLogCountAggregateInputType = {
    id?: true
    level?: true
    service?: true
    message?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type SystemLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLog to aggregate.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemLogs
    **/
    _count?: true | SystemLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemLogMaxAggregateInputType
  }

  export type GetSystemLogAggregateType<T extends SystemLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemLog[P]>
      : GetScalarType<T[P], AggregateSystemLog[P]>
  }




  export type SystemLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemLogWhereInput
    orderBy?: SystemLogOrderByWithAggregationInput | SystemLogOrderByWithAggregationInput[]
    by: SystemLogScalarFieldEnum[] | SystemLogScalarFieldEnum
    having?: SystemLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemLogCountAggregateInputType | true
    _min?: SystemLogMinAggregateInputType
    _max?: SystemLogMaxAggregateInputType
  }

  export type SystemLogGroupByOutputType = {
    id: string
    level: string
    service: string
    message: string
    userId: string
    createdAt: Date
    _count: SystemLogCountAggregateOutputType | null
    _min: SystemLogMinAggregateOutputType | null
    _max: SystemLogMaxAggregateOutputType | null
  }

  type GetSystemLogGroupByPayload<T extends SystemLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
            : GetScalarType<T[P], SystemLogGroupByOutputType[P]>
        }
      >
    >


  export type SystemLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    service?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    service?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    level?: boolean
    service?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemLog"]>

  export type SystemLogSelectScalar = {
    id?: boolean
    level?: boolean
    service?: boolean
    message?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type SystemLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "level" | "service" | "message" | "userId" | "createdAt", ExtArgs["result"]["systemLog"]>
  export type SystemLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SystemLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SystemLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SystemLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      level: string
      service: string
      message: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["systemLog"]>
    composites: {}
  }

  type SystemLogGetPayload<S extends boolean | null | undefined | SystemLogDefaultArgs> = $Result.GetResult<Prisma.$SystemLogPayload, S>

  type SystemLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemLogCountAggregateInputType | true
    }

  export interface SystemLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemLog'], meta: { name: 'SystemLog' } }
    /**
     * Find zero or one SystemLog that matches the filter.
     * @param {SystemLogFindUniqueArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemLogFindUniqueArgs>(args: SelectSubset<T, SystemLogFindUniqueArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SystemLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemLogFindUniqueOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SystemLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemLogFindFirstArgs>(args?: SelectSubset<T, SystemLogFindFirstArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SystemLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindFirstOrThrowArgs} args - Arguments to find a SystemLog
     * @example
     * // Get one SystemLog
     * const systemLog = await prisma.systemLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SystemLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemLogs
     * const systemLogs = await prisma.systemLog.findMany()
     * 
     * // Get first 10 SystemLogs
     * const systemLogs = await prisma.systemLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemLogFindManyArgs>(args?: SelectSubset<T, SystemLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SystemLog.
     * @param {SystemLogCreateArgs} args - Arguments to create a SystemLog.
     * @example
     * // Create one SystemLog
     * const SystemLog = await prisma.systemLog.create({
     *   data: {
     *     // ... data to create a SystemLog
     *   }
     * })
     * 
     */
    create<T extends SystemLogCreateArgs>(args: SelectSubset<T, SystemLogCreateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SystemLogs.
     * @param {SystemLogCreateManyArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemLogCreateManyArgs>(args?: SelectSubset<T, SystemLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemLogs and returns the data saved in the database.
     * @param {SystemLogCreateManyAndReturnArgs} args - Arguments to create many SystemLogs.
     * @example
     * // Create many SystemLogs
     * const systemLog = await prisma.systemLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemLogs and only return the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SystemLog.
     * @param {SystemLogDeleteArgs} args - Arguments to delete one SystemLog.
     * @example
     * // Delete one SystemLog
     * const SystemLog = await prisma.systemLog.delete({
     *   where: {
     *     // ... filter to delete one SystemLog
     *   }
     * })
     * 
     */
    delete<T extends SystemLogDeleteArgs>(args: SelectSubset<T, SystemLogDeleteArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SystemLog.
     * @param {SystemLogUpdateArgs} args - Arguments to update one SystemLog.
     * @example
     * // Update one SystemLog
     * const systemLog = await prisma.systemLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemLogUpdateArgs>(args: SelectSubset<T, SystemLogUpdateArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SystemLogs.
     * @param {SystemLogDeleteManyArgs} args - Arguments to filter SystemLogs to delete.
     * @example
     * // Delete a few SystemLogs
     * const { count } = await prisma.systemLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemLogDeleteManyArgs>(args?: SelectSubset<T, SystemLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemLogUpdateManyArgs>(args: SelectSubset<T, SystemLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemLogs and returns the data updated in the database.
     * @param {SystemLogUpdateManyAndReturnArgs} args - Arguments to update many SystemLogs.
     * @example
     * // Update many SystemLogs
     * const systemLog = await prisma.systemLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemLogs and only return the `id`
     * const systemLogWithIdOnly = await prisma.systemLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SystemLog.
     * @param {SystemLogUpsertArgs} args - Arguments to update or create a SystemLog.
     * @example
     * // Update or create a SystemLog
     * const systemLog = await prisma.systemLog.upsert({
     *   create: {
     *     // ... data to create a SystemLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemLog we want to update
     *   }
     * })
     */
    upsert<T extends SystemLogUpsertArgs>(args: SelectSubset<T, SystemLogUpsertArgs<ExtArgs>>): Prisma__SystemLogClient<$Result.GetResult<Prisma.$SystemLogPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SystemLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogCountArgs} args - Arguments to filter SystemLogs to count.
     * @example
     * // Count the number of SystemLogs
     * const count = await prisma.systemLog.count({
     *   where: {
     *     // ... the filter for the SystemLogs we want to count
     *   }
     * })
    **/
    count<T extends SystemLogCountArgs>(
      args?: Subset<T, SystemLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemLogAggregateArgs>(args: Subset<T, SystemLogAggregateArgs>): Prisma.PrismaPromise<GetSystemLogAggregateType<T>>

    /**
     * Group by SystemLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemLogGroupByArgs['orderBy'] }
        : { orderBy?: SystemLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemLog model
   */
  readonly fields: SystemLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemLog model
   */ 
  interface SystemLogFieldRefs {
    readonly id: FieldRef<"SystemLog", 'String'>
    readonly level: FieldRef<"SystemLog", 'String'>
    readonly service: FieldRef<"SystemLog", 'String'>
    readonly message: FieldRef<"SystemLog", 'String'>
    readonly userId: FieldRef<"SystemLog", 'String'>
    readonly createdAt: FieldRef<"SystemLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemLog findUnique
   */
  export type SystemLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findUniqueOrThrow
   */
  export type SystemLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog findFirst
   */
  export type SystemLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findFirstOrThrow
   */
  export type SystemLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLog to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemLogs.
     */
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog findMany
   */
  export type SystemLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter, which SystemLogs to fetch.
     */
    where?: SystemLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemLogs to fetch.
     */
    orderBy?: SystemLogOrderByWithRelationInput | SystemLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemLogs.
     */
    cursor?: SystemLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemLogs.
     */
    skip?: number
    distinct?: SystemLogScalarFieldEnum | SystemLogScalarFieldEnum[]
  }

  /**
   * SystemLog create
   */
  export type SystemLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemLog.
     */
    data: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
  }

  /**
   * SystemLog createMany
   */
  export type SystemLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
  }

  /**
   * SystemLog createManyAndReturn
   */
  export type SystemLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * The data used to create many SystemLogs.
     */
    data: SystemLogCreateManyInput | SystemLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemLog update
   */
  export type SystemLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemLog.
     */
    data: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
    /**
     * Choose, which SystemLog to update.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog updateMany
   */
  export type SystemLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to update.
     */
    limit?: number
  }

  /**
   * SystemLog updateManyAndReturn
   */
  export type SystemLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * The data used to update SystemLogs.
     */
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyInput>
    /**
     * Filter which SystemLogs to update
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SystemLog upsert
   */
  export type SystemLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemLog to update in case it exists.
     */
    where: SystemLogWhereUniqueInput
    /**
     * In case the SystemLog found by the `where` argument doesn't exist, create a new SystemLog with this data.
     */
    create: XOR<SystemLogCreateInput, SystemLogUncheckedCreateInput>
    /**
     * In case the SystemLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemLogUpdateInput, SystemLogUncheckedUpdateInput>
  }

  /**
   * SystemLog delete
   */
  export type SystemLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
    /**
     * Filter which SystemLog to delete.
     */
    where: SystemLogWhereUniqueInput
  }

  /**
   * SystemLog deleteMany
   */
  export type SystemLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemLogs to delete
     */
    where?: SystemLogWhereInput
    /**
     * Limit how many SystemLogs to delete.
     */
    limit?: number
  }

  /**
   * SystemLog without action
   */
  export type SystemLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemLog
     */
    select?: SystemLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemLog
     */
    omit?: SystemLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemLogInclude<ExtArgs> | null
  }


  /**
   * Model ProjectSecret
   */

  export type AggregateProjectSecret = {
    _count: ProjectSecretCountAggregateOutputType | null
    _min: ProjectSecretMinAggregateOutputType | null
    _max: ProjectSecretMaxAggregateOutputType | null
  }

  export type ProjectSecretMinAggregateOutputType = {
    id: string | null
    key: string | null
    environment: string | null
    status: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectSecretMaxAggregateOutputType = {
    id: string | null
    key: string | null
    environment: string | null
    status: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectSecretCountAggregateOutputType = {
    id: number
    key: number
    environment: number
    status: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectSecretMinAggregateInputType = {
    id?: true
    key?: true
    environment?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectSecretMaxAggregateInputType = {
    id?: true
    key?: true
    environment?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectSecretCountAggregateInputType = {
    id?: true
    key?: true
    environment?: true
    status?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectSecretAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSecret to aggregate.
     */
    where?: ProjectSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSecrets to fetch.
     */
    orderBy?: ProjectSecretOrderByWithRelationInput | ProjectSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectSecrets
    **/
    _count?: true | ProjectSecretCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectSecretMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectSecretMaxAggregateInputType
  }

  export type GetProjectSecretAggregateType<T extends ProjectSecretAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectSecret]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectSecret[P]>
      : GetScalarType<T[P], AggregateProjectSecret[P]>
  }




  export type ProjectSecretGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectSecretWhereInput
    orderBy?: ProjectSecretOrderByWithAggregationInput | ProjectSecretOrderByWithAggregationInput[]
    by: ProjectSecretScalarFieldEnum[] | ProjectSecretScalarFieldEnum
    having?: ProjectSecretScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectSecretCountAggregateInputType | true
    _min?: ProjectSecretMinAggregateInputType
    _max?: ProjectSecretMaxAggregateInputType
  }

  export type ProjectSecretGroupByOutputType = {
    id: string
    key: string
    environment: string
    status: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ProjectSecretCountAggregateOutputType | null
    _min: ProjectSecretMinAggregateOutputType | null
    _max: ProjectSecretMaxAggregateOutputType | null
  }

  type GetProjectSecretGroupByPayload<T extends ProjectSecretGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectSecretGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectSecretGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectSecretGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectSecretGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSecretSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSecret"]>

  export type ProjectSecretSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSecret"]>

  export type ProjectSecretSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectSecret"]>

  export type ProjectSecretSelectScalar = {
    id?: boolean
    key?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectSecretOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "environment" | "status" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["projectSecret"]>
  export type ProjectSecretInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectSecretIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectSecretIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectSecretPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectSecret"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      environment: string
      status: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["projectSecret"]>
    composites: {}
  }

  type ProjectSecretGetPayload<S extends boolean | null | undefined | ProjectSecretDefaultArgs> = $Result.GetResult<Prisma.$ProjectSecretPayload, S>

  type ProjectSecretCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectSecretFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectSecretCountAggregateInputType | true
    }

  export interface ProjectSecretDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectSecret'], meta: { name: 'ProjectSecret' } }
    /**
     * Find zero or one ProjectSecret that matches the filter.
     * @param {ProjectSecretFindUniqueArgs} args - Arguments to find a ProjectSecret
     * @example
     * // Get one ProjectSecret
     * const projectSecret = await prisma.projectSecret.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectSecretFindUniqueArgs>(args: SelectSubset<T, ProjectSecretFindUniqueArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ProjectSecret that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectSecretFindUniqueOrThrowArgs} args - Arguments to find a ProjectSecret
     * @example
     * // Get one ProjectSecret
     * const projectSecret = await prisma.projectSecret.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectSecretFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectSecretFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ProjectSecret that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretFindFirstArgs} args - Arguments to find a ProjectSecret
     * @example
     * // Get one ProjectSecret
     * const projectSecret = await prisma.projectSecret.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectSecretFindFirstArgs>(args?: SelectSubset<T, ProjectSecretFindFirstArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ProjectSecret that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretFindFirstOrThrowArgs} args - Arguments to find a ProjectSecret
     * @example
     * // Get one ProjectSecret
     * const projectSecret = await prisma.projectSecret.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectSecretFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectSecretFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ProjectSecrets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectSecrets
     * const projectSecrets = await prisma.projectSecret.findMany()
     * 
     * // Get first 10 ProjectSecrets
     * const projectSecrets = await prisma.projectSecret.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectSecretWithIdOnly = await prisma.projectSecret.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectSecretFindManyArgs>(args?: SelectSubset<T, ProjectSecretFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ProjectSecret.
     * @param {ProjectSecretCreateArgs} args - Arguments to create a ProjectSecret.
     * @example
     * // Create one ProjectSecret
     * const ProjectSecret = await prisma.projectSecret.create({
     *   data: {
     *     // ... data to create a ProjectSecret
     *   }
     * })
     * 
     */
    create<T extends ProjectSecretCreateArgs>(args: SelectSubset<T, ProjectSecretCreateArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ProjectSecrets.
     * @param {ProjectSecretCreateManyArgs} args - Arguments to create many ProjectSecrets.
     * @example
     * // Create many ProjectSecrets
     * const projectSecret = await prisma.projectSecret.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectSecretCreateManyArgs>(args?: SelectSubset<T, ProjectSecretCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectSecrets and returns the data saved in the database.
     * @param {ProjectSecretCreateManyAndReturnArgs} args - Arguments to create many ProjectSecrets.
     * @example
     * // Create many ProjectSecrets
     * const projectSecret = await prisma.projectSecret.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectSecrets and only return the `id`
     * const projectSecretWithIdOnly = await prisma.projectSecret.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectSecretCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectSecretCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ProjectSecret.
     * @param {ProjectSecretDeleteArgs} args - Arguments to delete one ProjectSecret.
     * @example
     * // Delete one ProjectSecret
     * const ProjectSecret = await prisma.projectSecret.delete({
     *   where: {
     *     // ... filter to delete one ProjectSecret
     *   }
     * })
     * 
     */
    delete<T extends ProjectSecretDeleteArgs>(args: SelectSubset<T, ProjectSecretDeleteArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ProjectSecret.
     * @param {ProjectSecretUpdateArgs} args - Arguments to update one ProjectSecret.
     * @example
     * // Update one ProjectSecret
     * const projectSecret = await prisma.projectSecret.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectSecretUpdateArgs>(args: SelectSubset<T, ProjectSecretUpdateArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ProjectSecrets.
     * @param {ProjectSecretDeleteManyArgs} args - Arguments to filter ProjectSecrets to delete.
     * @example
     * // Delete a few ProjectSecrets
     * const { count } = await prisma.projectSecret.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectSecretDeleteManyArgs>(args?: SelectSubset<T, ProjectSecretDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSecrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectSecrets
     * const projectSecret = await prisma.projectSecret.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectSecretUpdateManyArgs>(args: SelectSubset<T, ProjectSecretUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectSecrets and returns the data updated in the database.
     * @param {ProjectSecretUpdateManyAndReturnArgs} args - Arguments to update many ProjectSecrets.
     * @example
     * // Update many ProjectSecrets
     * const projectSecret = await prisma.projectSecret.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProjectSecrets and only return the `id`
     * const projectSecretWithIdOnly = await prisma.projectSecret.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectSecretUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectSecretUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ProjectSecret.
     * @param {ProjectSecretUpsertArgs} args - Arguments to update or create a ProjectSecret.
     * @example
     * // Update or create a ProjectSecret
     * const projectSecret = await prisma.projectSecret.upsert({
     *   create: {
     *     // ... data to create a ProjectSecret
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectSecret we want to update
     *   }
     * })
     */
    upsert<T extends ProjectSecretUpsertArgs>(args: SelectSubset<T, ProjectSecretUpsertArgs<ExtArgs>>): Prisma__ProjectSecretClient<$Result.GetResult<Prisma.$ProjectSecretPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ProjectSecrets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretCountArgs} args - Arguments to filter ProjectSecrets to count.
     * @example
     * // Count the number of ProjectSecrets
     * const count = await prisma.projectSecret.count({
     *   where: {
     *     // ... the filter for the ProjectSecrets we want to count
     *   }
     * })
    **/
    count<T extends ProjectSecretCountArgs>(
      args?: Subset<T, ProjectSecretCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectSecretCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectSecret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectSecretAggregateArgs>(args: Subset<T, ProjectSecretAggregateArgs>): Prisma.PrismaPromise<GetProjectSecretAggregateType<T>>

    /**
     * Group by ProjectSecret.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectSecretGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectSecretGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectSecretGroupByArgs['orderBy'] }
        : { orderBy?: ProjectSecretGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectSecretGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectSecretGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectSecret model
   */
  readonly fields: ProjectSecretFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectSecret.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectSecretClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectSecret model
   */ 
  interface ProjectSecretFieldRefs {
    readonly id: FieldRef<"ProjectSecret", 'String'>
    readonly key: FieldRef<"ProjectSecret", 'String'>
    readonly environment: FieldRef<"ProjectSecret", 'String'>
    readonly status: FieldRef<"ProjectSecret", 'String'>
    readonly userId: FieldRef<"ProjectSecret", 'String'>
    readonly createdAt: FieldRef<"ProjectSecret", 'DateTime'>
    readonly updatedAt: FieldRef<"ProjectSecret", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectSecret findUnique
   */
  export type ProjectSecretFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSecret to fetch.
     */
    where: ProjectSecretWhereUniqueInput
  }

  /**
   * ProjectSecret findUniqueOrThrow
   */
  export type ProjectSecretFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSecret to fetch.
     */
    where: ProjectSecretWhereUniqueInput
  }

  /**
   * ProjectSecret findFirst
   */
  export type ProjectSecretFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSecret to fetch.
     */
    where?: ProjectSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSecrets to fetch.
     */
    orderBy?: ProjectSecretOrderByWithRelationInput | ProjectSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSecrets.
     */
    cursor?: ProjectSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSecrets.
     */
    distinct?: ProjectSecretScalarFieldEnum | ProjectSecretScalarFieldEnum[]
  }

  /**
   * ProjectSecret findFirstOrThrow
   */
  export type ProjectSecretFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSecret to fetch.
     */
    where?: ProjectSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSecrets to fetch.
     */
    orderBy?: ProjectSecretOrderByWithRelationInput | ProjectSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectSecrets.
     */
    cursor?: ProjectSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSecrets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectSecrets.
     */
    distinct?: ProjectSecretScalarFieldEnum | ProjectSecretScalarFieldEnum[]
  }

  /**
   * ProjectSecret findMany
   */
  export type ProjectSecretFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * Filter, which ProjectSecrets to fetch.
     */
    where?: ProjectSecretWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectSecrets to fetch.
     */
    orderBy?: ProjectSecretOrderByWithRelationInput | ProjectSecretOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectSecrets.
     */
    cursor?: ProjectSecretWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectSecrets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectSecrets.
     */
    skip?: number
    distinct?: ProjectSecretScalarFieldEnum | ProjectSecretScalarFieldEnum[]
  }

  /**
   * ProjectSecret create
   */
  export type ProjectSecretCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectSecret.
     */
    data: XOR<ProjectSecretCreateInput, ProjectSecretUncheckedCreateInput>
  }

  /**
   * ProjectSecret createMany
   */
  export type ProjectSecretCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectSecrets.
     */
    data: ProjectSecretCreateManyInput | ProjectSecretCreateManyInput[]
  }

  /**
   * ProjectSecret createManyAndReturn
   */
  export type ProjectSecretCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * The data used to create many ProjectSecrets.
     */
    data: ProjectSecretCreateManyInput | ProjectSecretCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSecret update
   */
  export type ProjectSecretUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectSecret.
     */
    data: XOR<ProjectSecretUpdateInput, ProjectSecretUncheckedUpdateInput>
    /**
     * Choose, which ProjectSecret to update.
     */
    where: ProjectSecretWhereUniqueInput
  }

  /**
   * ProjectSecret updateMany
   */
  export type ProjectSecretUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectSecrets.
     */
    data: XOR<ProjectSecretUpdateManyMutationInput, ProjectSecretUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSecrets to update
     */
    where?: ProjectSecretWhereInput
    /**
     * Limit how many ProjectSecrets to update.
     */
    limit?: number
  }

  /**
   * ProjectSecret updateManyAndReturn
   */
  export type ProjectSecretUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * The data used to update ProjectSecrets.
     */
    data: XOR<ProjectSecretUpdateManyMutationInput, ProjectSecretUncheckedUpdateManyInput>
    /**
     * Filter which ProjectSecrets to update
     */
    where?: ProjectSecretWhereInput
    /**
     * Limit how many ProjectSecrets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectSecret upsert
   */
  export type ProjectSecretUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectSecret to update in case it exists.
     */
    where: ProjectSecretWhereUniqueInput
    /**
     * In case the ProjectSecret found by the `where` argument doesn't exist, create a new ProjectSecret with this data.
     */
    create: XOR<ProjectSecretCreateInput, ProjectSecretUncheckedCreateInput>
    /**
     * In case the ProjectSecret was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectSecretUpdateInput, ProjectSecretUncheckedUpdateInput>
  }

  /**
   * ProjectSecret delete
   */
  export type ProjectSecretDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
    /**
     * Filter which ProjectSecret to delete.
     */
    where: ProjectSecretWhereUniqueInput
  }

  /**
   * ProjectSecret deleteMany
   */
  export type ProjectSecretDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectSecrets to delete
     */
    where?: ProjectSecretWhereInput
    /**
     * Limit how many ProjectSecrets to delete.
     */
    limit?: number
  }

  /**
   * ProjectSecret without action
   */
  export type ProjectSecretDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectSecret
     */
    select?: ProjectSecretSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProjectSecret
     */
    omit?: ProjectSecretOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectSecretInclude<ExtArgs> | null
  }


  /**
   * Model EnvironmentConfig
   */

  export type AggregateEnvironmentConfig = {
    _count: EnvironmentConfigCountAggregateOutputType | null
    _min: EnvironmentConfigMinAggregateOutputType | null
    _max: EnvironmentConfigMaxAggregateOutputType | null
  }

  export type EnvironmentConfigMinAggregateOutputType = {
    id: string | null
    name: string | null
    branch: string | null
    status: string | null
    uptime: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EnvironmentConfigMaxAggregateOutputType = {
    id: string | null
    name: string | null
    branch: string | null
    status: string | null
    uptime: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type EnvironmentConfigCountAggregateOutputType = {
    id: number
    name: number
    branch: number
    status: number
    uptime: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EnvironmentConfigMinAggregateInputType = {
    id?: true
    name?: true
    branch?: true
    status?: true
    uptime?: true
    userId?: true
    createdAt?: true
  }

  export type EnvironmentConfigMaxAggregateInputType = {
    id?: true
    name?: true
    branch?: true
    status?: true
    uptime?: true
    userId?: true
    createdAt?: true
  }

  export type EnvironmentConfigCountAggregateInputType = {
    id?: true
    name?: true
    branch?: true
    status?: true
    uptime?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EnvironmentConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentConfig to aggregate.
     */
    where?: EnvironmentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentConfigs to fetch.
     */
    orderBy?: EnvironmentConfigOrderByWithRelationInput | EnvironmentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnvironmentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EnvironmentConfigs
    **/
    _count?: true | EnvironmentConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnvironmentConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnvironmentConfigMaxAggregateInputType
  }

  export type GetEnvironmentConfigAggregateType<T extends EnvironmentConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateEnvironmentConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnvironmentConfig[P]>
      : GetScalarType<T[P], AggregateEnvironmentConfig[P]>
  }




  export type EnvironmentConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnvironmentConfigWhereInput
    orderBy?: EnvironmentConfigOrderByWithAggregationInput | EnvironmentConfigOrderByWithAggregationInput[]
    by: EnvironmentConfigScalarFieldEnum[] | EnvironmentConfigScalarFieldEnum
    having?: EnvironmentConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnvironmentConfigCountAggregateInputType | true
    _min?: EnvironmentConfigMinAggregateInputType
    _max?: EnvironmentConfigMaxAggregateInputType
  }

  export type EnvironmentConfigGroupByOutputType = {
    id: string
    name: string
    branch: string
    status: string
    uptime: string
    userId: string
    createdAt: Date
    _count: EnvironmentConfigCountAggregateOutputType | null
    _min: EnvironmentConfigMinAggregateOutputType | null
    _max: EnvironmentConfigMaxAggregateOutputType | null
  }

  type GetEnvironmentConfigGroupByPayload<T extends EnvironmentConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnvironmentConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnvironmentConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnvironmentConfigGroupByOutputType[P]>
            : GetScalarType<T[P], EnvironmentConfigGroupByOutputType[P]>
        }
      >
    >


  export type EnvironmentConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentConfig"]>

  export type EnvironmentConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentConfig"]>

  export type EnvironmentConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["environmentConfig"]>

  export type EnvironmentConfigSelectScalar = {
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EnvironmentConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "branch" | "status" | "uptime" | "userId" | "createdAt", ExtArgs["result"]["environmentConfig"]>
  export type EnvironmentConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnvironmentConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EnvironmentConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EnvironmentConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EnvironmentConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      branch: string
      status: string
      uptime: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["environmentConfig"]>
    composites: {}
  }

  type EnvironmentConfigGetPayload<S extends boolean | null | undefined | EnvironmentConfigDefaultArgs> = $Result.GetResult<Prisma.$EnvironmentConfigPayload, S>

  type EnvironmentConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnvironmentConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnvironmentConfigCountAggregateInputType | true
    }

  export interface EnvironmentConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EnvironmentConfig'], meta: { name: 'EnvironmentConfig' } }
    /**
     * Find zero or one EnvironmentConfig that matches the filter.
     * @param {EnvironmentConfigFindUniqueArgs} args - Arguments to find a EnvironmentConfig
     * @example
     * // Get one EnvironmentConfig
     * const environmentConfig = await prisma.environmentConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnvironmentConfigFindUniqueArgs>(args: SelectSubset<T, EnvironmentConfigFindUniqueArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EnvironmentConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnvironmentConfigFindUniqueOrThrowArgs} args - Arguments to find a EnvironmentConfig
     * @example
     * // Get one EnvironmentConfig
     * const environmentConfig = await prisma.environmentConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnvironmentConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, EnvironmentConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EnvironmentConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigFindFirstArgs} args - Arguments to find a EnvironmentConfig
     * @example
     * // Get one EnvironmentConfig
     * const environmentConfig = await prisma.environmentConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnvironmentConfigFindFirstArgs>(args?: SelectSubset<T, EnvironmentConfigFindFirstArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EnvironmentConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigFindFirstOrThrowArgs} args - Arguments to find a EnvironmentConfig
     * @example
     * // Get one EnvironmentConfig
     * const environmentConfig = await prisma.environmentConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnvironmentConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, EnvironmentConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EnvironmentConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EnvironmentConfigs
     * const environmentConfigs = await prisma.environmentConfig.findMany()
     * 
     * // Get first 10 EnvironmentConfigs
     * const environmentConfigs = await prisma.environmentConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const environmentConfigWithIdOnly = await prisma.environmentConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnvironmentConfigFindManyArgs>(args?: SelectSubset<T, EnvironmentConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EnvironmentConfig.
     * @param {EnvironmentConfigCreateArgs} args - Arguments to create a EnvironmentConfig.
     * @example
     * // Create one EnvironmentConfig
     * const EnvironmentConfig = await prisma.environmentConfig.create({
     *   data: {
     *     // ... data to create a EnvironmentConfig
     *   }
     * })
     * 
     */
    create<T extends EnvironmentConfigCreateArgs>(args: SelectSubset<T, EnvironmentConfigCreateArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EnvironmentConfigs.
     * @param {EnvironmentConfigCreateManyArgs} args - Arguments to create many EnvironmentConfigs.
     * @example
     * // Create many EnvironmentConfigs
     * const environmentConfig = await prisma.environmentConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnvironmentConfigCreateManyArgs>(args?: SelectSubset<T, EnvironmentConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EnvironmentConfigs and returns the data saved in the database.
     * @param {EnvironmentConfigCreateManyAndReturnArgs} args - Arguments to create many EnvironmentConfigs.
     * @example
     * // Create many EnvironmentConfigs
     * const environmentConfig = await prisma.environmentConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EnvironmentConfigs and only return the `id`
     * const environmentConfigWithIdOnly = await prisma.environmentConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnvironmentConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, EnvironmentConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a EnvironmentConfig.
     * @param {EnvironmentConfigDeleteArgs} args - Arguments to delete one EnvironmentConfig.
     * @example
     * // Delete one EnvironmentConfig
     * const EnvironmentConfig = await prisma.environmentConfig.delete({
     *   where: {
     *     // ... filter to delete one EnvironmentConfig
     *   }
     * })
     * 
     */
    delete<T extends EnvironmentConfigDeleteArgs>(args: SelectSubset<T, EnvironmentConfigDeleteArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EnvironmentConfig.
     * @param {EnvironmentConfigUpdateArgs} args - Arguments to update one EnvironmentConfig.
     * @example
     * // Update one EnvironmentConfig
     * const environmentConfig = await prisma.environmentConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnvironmentConfigUpdateArgs>(args: SelectSubset<T, EnvironmentConfigUpdateArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EnvironmentConfigs.
     * @param {EnvironmentConfigDeleteManyArgs} args - Arguments to filter EnvironmentConfigs to delete.
     * @example
     * // Delete a few EnvironmentConfigs
     * const { count } = await prisma.environmentConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnvironmentConfigDeleteManyArgs>(args?: SelectSubset<T, EnvironmentConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EnvironmentConfigs
     * const environmentConfig = await prisma.environmentConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnvironmentConfigUpdateManyArgs>(args: SelectSubset<T, EnvironmentConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EnvironmentConfigs and returns the data updated in the database.
     * @param {EnvironmentConfigUpdateManyAndReturnArgs} args - Arguments to update many EnvironmentConfigs.
     * @example
     * // Update many EnvironmentConfigs
     * const environmentConfig = await prisma.environmentConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EnvironmentConfigs and only return the `id`
     * const environmentConfigWithIdOnly = await prisma.environmentConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EnvironmentConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, EnvironmentConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one EnvironmentConfig.
     * @param {EnvironmentConfigUpsertArgs} args - Arguments to update or create a EnvironmentConfig.
     * @example
     * // Update or create a EnvironmentConfig
     * const environmentConfig = await prisma.environmentConfig.upsert({
     *   create: {
     *     // ... data to create a EnvironmentConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EnvironmentConfig we want to update
     *   }
     * })
     */
    upsert<T extends EnvironmentConfigUpsertArgs>(args: SelectSubset<T, EnvironmentConfigUpsertArgs<ExtArgs>>): Prisma__EnvironmentConfigClient<$Result.GetResult<Prisma.$EnvironmentConfigPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EnvironmentConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigCountArgs} args - Arguments to filter EnvironmentConfigs to count.
     * @example
     * // Count the number of EnvironmentConfigs
     * const count = await prisma.environmentConfig.count({
     *   where: {
     *     // ... the filter for the EnvironmentConfigs we want to count
     *   }
     * })
    **/
    count<T extends EnvironmentConfigCountArgs>(
      args?: Subset<T, EnvironmentConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnvironmentConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EnvironmentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnvironmentConfigAggregateArgs>(args: Subset<T, EnvironmentConfigAggregateArgs>): Prisma.PrismaPromise<GetEnvironmentConfigAggregateType<T>>

    /**
     * Group by EnvironmentConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnvironmentConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnvironmentConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnvironmentConfigGroupByArgs['orderBy'] }
        : { orderBy?: EnvironmentConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnvironmentConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnvironmentConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EnvironmentConfig model
   */
  readonly fields: EnvironmentConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EnvironmentConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnvironmentConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EnvironmentConfig model
   */ 
  interface EnvironmentConfigFieldRefs {
    readonly id: FieldRef<"EnvironmentConfig", 'String'>
    readonly name: FieldRef<"EnvironmentConfig", 'String'>
    readonly branch: FieldRef<"EnvironmentConfig", 'String'>
    readonly status: FieldRef<"EnvironmentConfig", 'String'>
    readonly uptime: FieldRef<"EnvironmentConfig", 'String'>
    readonly userId: FieldRef<"EnvironmentConfig", 'String'>
    readonly createdAt: FieldRef<"EnvironmentConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EnvironmentConfig findUnique
   */
  export type EnvironmentConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentConfig to fetch.
     */
    where: EnvironmentConfigWhereUniqueInput
  }

  /**
   * EnvironmentConfig findUniqueOrThrow
   */
  export type EnvironmentConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentConfig to fetch.
     */
    where: EnvironmentConfigWhereUniqueInput
  }

  /**
   * EnvironmentConfig findFirst
   */
  export type EnvironmentConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentConfig to fetch.
     */
    where?: EnvironmentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentConfigs to fetch.
     */
    orderBy?: EnvironmentConfigOrderByWithRelationInput | EnvironmentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentConfigs.
     */
    cursor?: EnvironmentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentConfigs.
     */
    distinct?: EnvironmentConfigScalarFieldEnum | EnvironmentConfigScalarFieldEnum[]
  }

  /**
   * EnvironmentConfig findFirstOrThrow
   */
  export type EnvironmentConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentConfig to fetch.
     */
    where?: EnvironmentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentConfigs to fetch.
     */
    orderBy?: EnvironmentConfigOrderByWithRelationInput | EnvironmentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EnvironmentConfigs.
     */
    cursor?: EnvironmentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EnvironmentConfigs.
     */
    distinct?: EnvironmentConfigScalarFieldEnum | EnvironmentConfigScalarFieldEnum[]
  }

  /**
   * EnvironmentConfig findMany
   */
  export type EnvironmentConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * Filter, which EnvironmentConfigs to fetch.
     */
    where?: EnvironmentConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EnvironmentConfigs to fetch.
     */
    orderBy?: EnvironmentConfigOrderByWithRelationInput | EnvironmentConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EnvironmentConfigs.
     */
    cursor?: EnvironmentConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EnvironmentConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EnvironmentConfigs.
     */
    skip?: number
    distinct?: EnvironmentConfigScalarFieldEnum | EnvironmentConfigScalarFieldEnum[]
  }

  /**
   * EnvironmentConfig create
   */
  export type EnvironmentConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a EnvironmentConfig.
     */
    data: XOR<EnvironmentConfigCreateInput, EnvironmentConfigUncheckedCreateInput>
  }

  /**
   * EnvironmentConfig createMany
   */
  export type EnvironmentConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EnvironmentConfigs.
     */
    data: EnvironmentConfigCreateManyInput | EnvironmentConfigCreateManyInput[]
  }

  /**
   * EnvironmentConfig createManyAndReturn
   */
  export type EnvironmentConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * The data used to create many EnvironmentConfigs.
     */
    data: EnvironmentConfigCreateManyInput | EnvironmentConfigCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentConfig update
   */
  export type EnvironmentConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a EnvironmentConfig.
     */
    data: XOR<EnvironmentConfigUpdateInput, EnvironmentConfigUncheckedUpdateInput>
    /**
     * Choose, which EnvironmentConfig to update.
     */
    where: EnvironmentConfigWhereUniqueInput
  }

  /**
   * EnvironmentConfig updateMany
   */
  export type EnvironmentConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EnvironmentConfigs.
     */
    data: XOR<EnvironmentConfigUpdateManyMutationInput, EnvironmentConfigUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentConfigs to update
     */
    where?: EnvironmentConfigWhereInput
    /**
     * Limit how many EnvironmentConfigs to update.
     */
    limit?: number
  }

  /**
   * EnvironmentConfig updateManyAndReturn
   */
  export type EnvironmentConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * The data used to update EnvironmentConfigs.
     */
    data: XOR<EnvironmentConfigUpdateManyMutationInput, EnvironmentConfigUncheckedUpdateManyInput>
    /**
     * Filter which EnvironmentConfigs to update
     */
    where?: EnvironmentConfigWhereInput
    /**
     * Limit how many EnvironmentConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EnvironmentConfig upsert
   */
  export type EnvironmentConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the EnvironmentConfig to update in case it exists.
     */
    where: EnvironmentConfigWhereUniqueInput
    /**
     * In case the EnvironmentConfig found by the `where` argument doesn't exist, create a new EnvironmentConfig with this data.
     */
    create: XOR<EnvironmentConfigCreateInput, EnvironmentConfigUncheckedCreateInput>
    /**
     * In case the EnvironmentConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnvironmentConfigUpdateInput, EnvironmentConfigUncheckedUpdateInput>
  }

  /**
   * EnvironmentConfig delete
   */
  export type EnvironmentConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
    /**
     * Filter which EnvironmentConfig to delete.
     */
    where: EnvironmentConfigWhereUniqueInput
  }

  /**
   * EnvironmentConfig deleteMany
   */
  export type EnvironmentConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EnvironmentConfigs to delete
     */
    where?: EnvironmentConfigWhereInput
    /**
     * Limit how many EnvironmentConfigs to delete.
     */
    limit?: number
  }

  /**
   * EnvironmentConfig without action
   */
  export type EnvironmentConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EnvironmentConfig
     */
    select?: EnvironmentConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EnvironmentConfig
     */
    omit?: EnvironmentConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnvironmentConfigInclude<ExtArgs> | null
  }


  /**
   * Model ReleaseRecord
   */

  export type AggregateReleaseRecord = {
    _count: ReleaseRecordCountAggregateOutputType | null
    _min: ReleaseRecordMinAggregateOutputType | null
    _max: ReleaseRecordMaxAggregateOutputType | null
  }

  export type ReleaseRecordMinAggregateOutputType = {
    id: string | null
    version: string | null
    environment: string | null
    status: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ReleaseRecordMaxAggregateOutputType = {
    id: string | null
    version: string | null
    environment: string | null
    status: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ReleaseRecordCountAggregateOutputType = {
    id: number
    version: number
    environment: number
    status: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ReleaseRecordMinAggregateInputType = {
    id?: true
    version?: true
    environment?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type ReleaseRecordMaxAggregateInputType = {
    id?: true
    version?: true
    environment?: true
    status?: true
    userId?: true
    createdAt?: true
  }

  export type ReleaseRecordCountAggregateInputType = {
    id?: true
    version?: true
    environment?: true
    status?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ReleaseRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReleaseRecord to aggregate.
     */
    where?: ReleaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseRecords to fetch.
     */
    orderBy?: ReleaseRecordOrderByWithRelationInput | ReleaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReleaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReleaseRecords
    **/
    _count?: true | ReleaseRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReleaseRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReleaseRecordMaxAggregateInputType
  }

  export type GetReleaseRecordAggregateType<T extends ReleaseRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateReleaseRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReleaseRecord[P]>
      : GetScalarType<T[P], AggregateReleaseRecord[P]>
  }




  export type ReleaseRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReleaseRecordWhereInput
    orderBy?: ReleaseRecordOrderByWithAggregationInput | ReleaseRecordOrderByWithAggregationInput[]
    by: ReleaseRecordScalarFieldEnum[] | ReleaseRecordScalarFieldEnum
    having?: ReleaseRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReleaseRecordCountAggregateInputType | true
    _min?: ReleaseRecordMinAggregateInputType
    _max?: ReleaseRecordMaxAggregateInputType
  }

  export type ReleaseRecordGroupByOutputType = {
    id: string
    version: string
    environment: string
    status: string
    userId: string
    createdAt: Date
    _count: ReleaseRecordCountAggregateOutputType | null
    _min: ReleaseRecordMinAggregateOutputType | null
    _max: ReleaseRecordMaxAggregateOutputType | null
  }

  type GetReleaseRecordGroupByPayload<T extends ReleaseRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReleaseRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReleaseRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReleaseRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ReleaseRecordGroupByOutputType[P]>
        }
      >
    >


  export type ReleaseRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["releaseRecord"]>

  export type ReleaseRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["releaseRecord"]>

  export type ReleaseRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["releaseRecord"]>

  export type ReleaseRecordSelectScalar = {
    id?: boolean
    version?: boolean
    environment?: boolean
    status?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ReleaseRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "environment" | "status" | "userId" | "createdAt", ExtArgs["result"]["releaseRecord"]>
  export type ReleaseRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReleaseRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReleaseRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReleaseRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReleaseRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      version: string
      environment: string
      status: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["releaseRecord"]>
    composites: {}
  }

  type ReleaseRecordGetPayload<S extends boolean | null | undefined | ReleaseRecordDefaultArgs> = $Result.GetResult<Prisma.$ReleaseRecordPayload, S>

  type ReleaseRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReleaseRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReleaseRecordCountAggregateInputType | true
    }

  export interface ReleaseRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReleaseRecord'], meta: { name: 'ReleaseRecord' } }
    /**
     * Find zero or one ReleaseRecord that matches the filter.
     * @param {ReleaseRecordFindUniqueArgs} args - Arguments to find a ReleaseRecord
     * @example
     * // Get one ReleaseRecord
     * const releaseRecord = await prisma.releaseRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReleaseRecordFindUniqueArgs>(args: SelectSubset<T, ReleaseRecordFindUniqueArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ReleaseRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReleaseRecordFindUniqueOrThrowArgs} args - Arguments to find a ReleaseRecord
     * @example
     * // Get one ReleaseRecord
     * const releaseRecord = await prisma.releaseRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReleaseRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ReleaseRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ReleaseRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordFindFirstArgs} args - Arguments to find a ReleaseRecord
     * @example
     * // Get one ReleaseRecord
     * const releaseRecord = await prisma.releaseRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReleaseRecordFindFirstArgs>(args?: SelectSubset<T, ReleaseRecordFindFirstArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ReleaseRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordFindFirstOrThrowArgs} args - Arguments to find a ReleaseRecord
     * @example
     * // Get one ReleaseRecord
     * const releaseRecord = await prisma.releaseRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReleaseRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ReleaseRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ReleaseRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReleaseRecords
     * const releaseRecords = await prisma.releaseRecord.findMany()
     * 
     * // Get first 10 ReleaseRecords
     * const releaseRecords = await prisma.releaseRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const releaseRecordWithIdOnly = await prisma.releaseRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReleaseRecordFindManyArgs>(args?: SelectSubset<T, ReleaseRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ReleaseRecord.
     * @param {ReleaseRecordCreateArgs} args - Arguments to create a ReleaseRecord.
     * @example
     * // Create one ReleaseRecord
     * const ReleaseRecord = await prisma.releaseRecord.create({
     *   data: {
     *     // ... data to create a ReleaseRecord
     *   }
     * })
     * 
     */
    create<T extends ReleaseRecordCreateArgs>(args: SelectSubset<T, ReleaseRecordCreateArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ReleaseRecords.
     * @param {ReleaseRecordCreateManyArgs} args - Arguments to create many ReleaseRecords.
     * @example
     * // Create many ReleaseRecords
     * const releaseRecord = await prisma.releaseRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReleaseRecordCreateManyArgs>(args?: SelectSubset<T, ReleaseRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReleaseRecords and returns the data saved in the database.
     * @param {ReleaseRecordCreateManyAndReturnArgs} args - Arguments to create many ReleaseRecords.
     * @example
     * // Create many ReleaseRecords
     * const releaseRecord = await prisma.releaseRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReleaseRecords and only return the `id`
     * const releaseRecordWithIdOnly = await prisma.releaseRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReleaseRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ReleaseRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ReleaseRecord.
     * @param {ReleaseRecordDeleteArgs} args - Arguments to delete one ReleaseRecord.
     * @example
     * // Delete one ReleaseRecord
     * const ReleaseRecord = await prisma.releaseRecord.delete({
     *   where: {
     *     // ... filter to delete one ReleaseRecord
     *   }
     * })
     * 
     */
    delete<T extends ReleaseRecordDeleteArgs>(args: SelectSubset<T, ReleaseRecordDeleteArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ReleaseRecord.
     * @param {ReleaseRecordUpdateArgs} args - Arguments to update one ReleaseRecord.
     * @example
     * // Update one ReleaseRecord
     * const releaseRecord = await prisma.releaseRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReleaseRecordUpdateArgs>(args: SelectSubset<T, ReleaseRecordUpdateArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ReleaseRecords.
     * @param {ReleaseRecordDeleteManyArgs} args - Arguments to filter ReleaseRecords to delete.
     * @example
     * // Delete a few ReleaseRecords
     * const { count } = await prisma.releaseRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReleaseRecordDeleteManyArgs>(args?: SelectSubset<T, ReleaseRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReleaseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReleaseRecords
     * const releaseRecord = await prisma.releaseRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReleaseRecordUpdateManyArgs>(args: SelectSubset<T, ReleaseRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReleaseRecords and returns the data updated in the database.
     * @param {ReleaseRecordUpdateManyAndReturnArgs} args - Arguments to update many ReleaseRecords.
     * @example
     * // Update many ReleaseRecords
     * const releaseRecord = await prisma.releaseRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReleaseRecords and only return the `id`
     * const releaseRecordWithIdOnly = await prisma.releaseRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReleaseRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ReleaseRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ReleaseRecord.
     * @param {ReleaseRecordUpsertArgs} args - Arguments to update or create a ReleaseRecord.
     * @example
     * // Update or create a ReleaseRecord
     * const releaseRecord = await prisma.releaseRecord.upsert({
     *   create: {
     *     // ... data to create a ReleaseRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReleaseRecord we want to update
     *   }
     * })
     */
    upsert<T extends ReleaseRecordUpsertArgs>(args: SelectSubset<T, ReleaseRecordUpsertArgs<ExtArgs>>): Prisma__ReleaseRecordClient<$Result.GetResult<Prisma.$ReleaseRecordPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ReleaseRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordCountArgs} args - Arguments to filter ReleaseRecords to count.
     * @example
     * // Count the number of ReleaseRecords
     * const count = await prisma.releaseRecord.count({
     *   where: {
     *     // ... the filter for the ReleaseRecords we want to count
     *   }
     * })
    **/
    count<T extends ReleaseRecordCountArgs>(
      args?: Subset<T, ReleaseRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReleaseRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReleaseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReleaseRecordAggregateArgs>(args: Subset<T, ReleaseRecordAggregateArgs>): Prisma.PrismaPromise<GetReleaseRecordAggregateType<T>>

    /**
     * Group by ReleaseRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReleaseRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReleaseRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReleaseRecordGroupByArgs['orderBy'] }
        : { orderBy?: ReleaseRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReleaseRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReleaseRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReleaseRecord model
   */
  readonly fields: ReleaseRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReleaseRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReleaseRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReleaseRecord model
   */ 
  interface ReleaseRecordFieldRefs {
    readonly id: FieldRef<"ReleaseRecord", 'String'>
    readonly version: FieldRef<"ReleaseRecord", 'String'>
    readonly environment: FieldRef<"ReleaseRecord", 'String'>
    readonly status: FieldRef<"ReleaseRecord", 'String'>
    readonly userId: FieldRef<"ReleaseRecord", 'String'>
    readonly createdAt: FieldRef<"ReleaseRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReleaseRecord findUnique
   */
  export type ReleaseRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseRecord to fetch.
     */
    where: ReleaseRecordWhereUniqueInput
  }

  /**
   * ReleaseRecord findUniqueOrThrow
   */
  export type ReleaseRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseRecord to fetch.
     */
    where: ReleaseRecordWhereUniqueInput
  }

  /**
   * ReleaseRecord findFirst
   */
  export type ReleaseRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseRecord to fetch.
     */
    where?: ReleaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseRecords to fetch.
     */
    orderBy?: ReleaseRecordOrderByWithRelationInput | ReleaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReleaseRecords.
     */
    cursor?: ReleaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReleaseRecords.
     */
    distinct?: ReleaseRecordScalarFieldEnum | ReleaseRecordScalarFieldEnum[]
  }

  /**
   * ReleaseRecord findFirstOrThrow
   */
  export type ReleaseRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseRecord to fetch.
     */
    where?: ReleaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseRecords to fetch.
     */
    orderBy?: ReleaseRecordOrderByWithRelationInput | ReleaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReleaseRecords.
     */
    cursor?: ReleaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReleaseRecords.
     */
    distinct?: ReleaseRecordScalarFieldEnum | ReleaseRecordScalarFieldEnum[]
  }

  /**
   * ReleaseRecord findMany
   */
  export type ReleaseRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * Filter, which ReleaseRecords to fetch.
     */
    where?: ReleaseRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReleaseRecords to fetch.
     */
    orderBy?: ReleaseRecordOrderByWithRelationInput | ReleaseRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReleaseRecords.
     */
    cursor?: ReleaseRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReleaseRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReleaseRecords.
     */
    skip?: number
    distinct?: ReleaseRecordScalarFieldEnum | ReleaseRecordScalarFieldEnum[]
  }

  /**
   * ReleaseRecord create
   */
  export type ReleaseRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ReleaseRecord.
     */
    data: XOR<ReleaseRecordCreateInput, ReleaseRecordUncheckedCreateInput>
  }

  /**
   * ReleaseRecord createMany
   */
  export type ReleaseRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReleaseRecords.
     */
    data: ReleaseRecordCreateManyInput | ReleaseRecordCreateManyInput[]
  }

  /**
   * ReleaseRecord createManyAndReturn
   */
  export type ReleaseRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ReleaseRecords.
     */
    data: ReleaseRecordCreateManyInput | ReleaseRecordCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReleaseRecord update
   */
  export type ReleaseRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ReleaseRecord.
     */
    data: XOR<ReleaseRecordUpdateInput, ReleaseRecordUncheckedUpdateInput>
    /**
     * Choose, which ReleaseRecord to update.
     */
    where: ReleaseRecordWhereUniqueInput
  }

  /**
   * ReleaseRecord updateMany
   */
  export type ReleaseRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReleaseRecords.
     */
    data: XOR<ReleaseRecordUpdateManyMutationInput, ReleaseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReleaseRecords to update
     */
    where?: ReleaseRecordWhereInput
    /**
     * Limit how many ReleaseRecords to update.
     */
    limit?: number
  }

  /**
   * ReleaseRecord updateManyAndReturn
   */
  export type ReleaseRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * The data used to update ReleaseRecords.
     */
    data: XOR<ReleaseRecordUpdateManyMutationInput, ReleaseRecordUncheckedUpdateManyInput>
    /**
     * Filter which ReleaseRecords to update
     */
    where?: ReleaseRecordWhereInput
    /**
     * Limit how many ReleaseRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReleaseRecord upsert
   */
  export type ReleaseRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ReleaseRecord to update in case it exists.
     */
    where: ReleaseRecordWhereUniqueInput
    /**
     * In case the ReleaseRecord found by the `where` argument doesn't exist, create a new ReleaseRecord with this data.
     */
    create: XOR<ReleaseRecordCreateInput, ReleaseRecordUncheckedCreateInput>
    /**
     * In case the ReleaseRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReleaseRecordUpdateInput, ReleaseRecordUncheckedUpdateInput>
  }

  /**
   * ReleaseRecord delete
   */
  export type ReleaseRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
    /**
     * Filter which ReleaseRecord to delete.
     */
    where: ReleaseRecordWhereUniqueInput
  }

  /**
   * ReleaseRecord deleteMany
   */
  export type ReleaseRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReleaseRecords to delete
     */
    where?: ReleaseRecordWhereInput
    /**
     * Limit how many ReleaseRecords to delete.
     */
    limit?: number
  }

  /**
   * ReleaseRecord without action
   */
  export type ReleaseRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReleaseRecord
     */
    select?: ReleaseRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReleaseRecord
     */
    omit?: ReleaseRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReleaseRecordInclude<ExtArgs> | null
  }


  /**
   * Model TriggerItem
   */

  export type AggregateTriggerItem = {
    _count: TriggerItemCountAggregateOutputType | null
    _min: TriggerItemMinAggregateOutputType | null
    _max: TriggerItemMaxAggregateOutputType | null
  }

  export type TriggerItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    branch: string | null
    status: string | null
    source: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type TriggerItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    branch: string | null
    status: string | null
    source: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type TriggerItemCountAggregateOutputType = {
    id: number
    name: number
    branch: number
    status: number
    source: number
    userId: number
    createdAt: number
    _all: number
  }


  export type TriggerItemMinAggregateInputType = {
    id?: true
    name?: true
    branch?: true
    status?: true
    source?: true
    userId?: true
    createdAt?: true
  }

  export type TriggerItemMaxAggregateInputType = {
    id?: true
    name?: true
    branch?: true
    status?: true
    source?: true
    userId?: true
    createdAt?: true
  }

  export type TriggerItemCountAggregateInputType = {
    id?: true
    name?: true
    branch?: true
    status?: true
    source?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type TriggerItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerItem to aggregate.
     */
    where?: TriggerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerItems to fetch.
     */
    orderBy?: TriggerItemOrderByWithRelationInput | TriggerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TriggerItems
    **/
    _count?: true | TriggerItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerItemMaxAggregateInputType
  }

  export type GetTriggerItemAggregateType<T extends TriggerItemAggregateArgs> = {
        [P in keyof T & keyof AggregateTriggerItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTriggerItem[P]>
      : GetScalarType<T[P], AggregateTriggerItem[P]>
  }




  export type TriggerItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerItemWhereInput
    orderBy?: TriggerItemOrderByWithAggregationInput | TriggerItemOrderByWithAggregationInput[]
    by: TriggerItemScalarFieldEnum[] | TriggerItemScalarFieldEnum
    having?: TriggerItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerItemCountAggregateInputType | true
    _min?: TriggerItemMinAggregateInputType
    _max?: TriggerItemMaxAggregateInputType
  }

  export type TriggerItemGroupByOutputType = {
    id: string
    name: string
    branch: string
    status: string
    source: string
    userId: string
    createdAt: Date
    _count: TriggerItemCountAggregateOutputType | null
    _min: TriggerItemMinAggregateOutputType | null
    _max: TriggerItemMaxAggregateOutputType | null
  }

  type GetTriggerItemGroupByPayload<T extends TriggerItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerItemGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerItemGroupByOutputType[P]>
        }
      >
    >


  export type TriggerItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    source?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerItem"]>

  export type TriggerItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    source?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerItem"]>

  export type TriggerItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    source?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["triggerItem"]>

  export type TriggerItemSelectScalar = {
    id?: boolean
    name?: boolean
    branch?: boolean
    status?: boolean
    source?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type TriggerItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "branch" | "status" | "source" | "userId" | "createdAt", ExtArgs["result"]["triggerItem"]>
  export type TriggerItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TriggerItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TriggerItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TriggerItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TriggerItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      branch: string
      status: string
      source: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["triggerItem"]>
    composites: {}
  }

  type TriggerItemGetPayload<S extends boolean | null | undefined | TriggerItemDefaultArgs> = $Result.GetResult<Prisma.$TriggerItemPayload, S>

  type TriggerItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerItemCountAggregateInputType | true
    }

  export interface TriggerItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TriggerItem'], meta: { name: 'TriggerItem' } }
    /**
     * Find zero or one TriggerItem that matches the filter.
     * @param {TriggerItemFindUniqueArgs} args - Arguments to find a TriggerItem
     * @example
     * // Get one TriggerItem
     * const triggerItem = await prisma.triggerItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerItemFindUniqueArgs>(args: SelectSubset<T, TriggerItemFindUniqueArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one TriggerItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerItemFindUniqueOrThrowArgs} args - Arguments to find a TriggerItem
     * @example
     * // Get one TriggerItem
     * const triggerItem = await prisma.triggerItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerItemFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first TriggerItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemFindFirstArgs} args - Arguments to find a TriggerItem
     * @example
     * // Get one TriggerItem
     * const triggerItem = await prisma.triggerItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerItemFindFirstArgs>(args?: SelectSubset<T, TriggerItemFindFirstArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first TriggerItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemFindFirstOrThrowArgs} args - Arguments to find a TriggerItem
     * @example
     * // Get one TriggerItem
     * const triggerItem = await prisma.triggerItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerItemFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more TriggerItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TriggerItems
     * const triggerItems = await prisma.triggerItem.findMany()
     * 
     * // Get first 10 TriggerItems
     * const triggerItems = await prisma.triggerItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerItemWithIdOnly = await prisma.triggerItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerItemFindManyArgs>(args?: SelectSubset<T, TriggerItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a TriggerItem.
     * @param {TriggerItemCreateArgs} args - Arguments to create a TriggerItem.
     * @example
     * // Create one TriggerItem
     * const TriggerItem = await prisma.triggerItem.create({
     *   data: {
     *     // ... data to create a TriggerItem
     *   }
     * })
     * 
     */
    create<T extends TriggerItemCreateArgs>(args: SelectSubset<T, TriggerItemCreateArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many TriggerItems.
     * @param {TriggerItemCreateManyArgs} args - Arguments to create many TriggerItems.
     * @example
     * // Create many TriggerItems
     * const triggerItem = await prisma.triggerItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerItemCreateManyArgs>(args?: SelectSubset<T, TriggerItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TriggerItems and returns the data saved in the database.
     * @param {TriggerItemCreateManyAndReturnArgs} args - Arguments to create many TriggerItems.
     * @example
     * // Create many TriggerItems
     * const triggerItem = await prisma.triggerItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TriggerItems and only return the `id`
     * const triggerItemWithIdOnly = await prisma.triggerItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerItemCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a TriggerItem.
     * @param {TriggerItemDeleteArgs} args - Arguments to delete one TriggerItem.
     * @example
     * // Delete one TriggerItem
     * const TriggerItem = await prisma.triggerItem.delete({
     *   where: {
     *     // ... filter to delete one TriggerItem
     *   }
     * })
     * 
     */
    delete<T extends TriggerItemDeleteArgs>(args: SelectSubset<T, TriggerItemDeleteArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one TriggerItem.
     * @param {TriggerItemUpdateArgs} args - Arguments to update one TriggerItem.
     * @example
     * // Update one TriggerItem
     * const triggerItem = await prisma.triggerItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerItemUpdateArgs>(args: SelectSubset<T, TriggerItemUpdateArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more TriggerItems.
     * @param {TriggerItemDeleteManyArgs} args - Arguments to filter TriggerItems to delete.
     * @example
     * // Delete a few TriggerItems
     * const { count } = await prisma.triggerItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerItemDeleteManyArgs>(args?: SelectSubset<T, TriggerItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TriggerItems
     * const triggerItem = await prisma.triggerItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerItemUpdateManyArgs>(args: SelectSubset<T, TriggerItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TriggerItems and returns the data updated in the database.
     * @param {TriggerItemUpdateManyAndReturnArgs} args - Arguments to update many TriggerItems.
     * @example
     * // Update many TriggerItems
     * const triggerItem = await prisma.triggerItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TriggerItems and only return the `id`
     * const triggerItemWithIdOnly = await prisma.triggerItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerItemUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one TriggerItem.
     * @param {TriggerItemUpsertArgs} args - Arguments to update or create a TriggerItem.
     * @example
     * // Update or create a TriggerItem
     * const triggerItem = await prisma.triggerItem.upsert({
     *   create: {
     *     // ... data to create a TriggerItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TriggerItem we want to update
     *   }
     * })
     */
    upsert<T extends TriggerItemUpsertArgs>(args: SelectSubset<T, TriggerItemUpsertArgs<ExtArgs>>): Prisma__TriggerItemClient<$Result.GetResult<Prisma.$TriggerItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of TriggerItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemCountArgs} args - Arguments to filter TriggerItems to count.
     * @example
     * // Count the number of TriggerItems
     * const count = await prisma.triggerItem.count({
     *   where: {
     *     // ... the filter for the TriggerItems we want to count
     *   }
     * })
    **/
    count<T extends TriggerItemCountArgs>(
      args?: Subset<T, TriggerItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TriggerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerItemAggregateArgs>(args: Subset<T, TriggerItemAggregateArgs>): Prisma.PrismaPromise<GetTriggerItemAggregateType<T>>

    /**
     * Group by TriggerItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerItemGroupByArgs['orderBy'] }
        : { orderBy?: TriggerItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TriggerItem model
   */
  readonly fields: TriggerItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TriggerItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TriggerItem model
   */ 
  interface TriggerItemFieldRefs {
    readonly id: FieldRef<"TriggerItem", 'String'>
    readonly name: FieldRef<"TriggerItem", 'String'>
    readonly branch: FieldRef<"TriggerItem", 'String'>
    readonly status: FieldRef<"TriggerItem", 'String'>
    readonly source: FieldRef<"TriggerItem", 'String'>
    readonly userId: FieldRef<"TriggerItem", 'String'>
    readonly createdAt: FieldRef<"TriggerItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TriggerItem findUnique
   */
  export type TriggerItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * Filter, which TriggerItem to fetch.
     */
    where: TriggerItemWhereUniqueInput
  }

  /**
   * TriggerItem findUniqueOrThrow
   */
  export type TriggerItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * Filter, which TriggerItem to fetch.
     */
    where: TriggerItemWhereUniqueInput
  }

  /**
   * TriggerItem findFirst
   */
  export type TriggerItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * Filter, which TriggerItem to fetch.
     */
    where?: TriggerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerItems to fetch.
     */
    orderBy?: TriggerItemOrderByWithRelationInput | TriggerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerItems.
     */
    cursor?: TriggerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerItems.
     */
    distinct?: TriggerItemScalarFieldEnum | TriggerItemScalarFieldEnum[]
  }

  /**
   * TriggerItem findFirstOrThrow
   */
  export type TriggerItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * Filter, which TriggerItem to fetch.
     */
    where?: TriggerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerItems to fetch.
     */
    orderBy?: TriggerItemOrderByWithRelationInput | TriggerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TriggerItems.
     */
    cursor?: TriggerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TriggerItems.
     */
    distinct?: TriggerItemScalarFieldEnum | TriggerItemScalarFieldEnum[]
  }

  /**
   * TriggerItem findMany
   */
  export type TriggerItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * Filter, which TriggerItems to fetch.
     */
    where?: TriggerItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TriggerItems to fetch.
     */
    orderBy?: TriggerItemOrderByWithRelationInput | TriggerItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TriggerItems.
     */
    cursor?: TriggerItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TriggerItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TriggerItems.
     */
    skip?: number
    distinct?: TriggerItemScalarFieldEnum | TriggerItemScalarFieldEnum[]
  }

  /**
   * TriggerItem create
   */
  export type TriggerItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * The data needed to create a TriggerItem.
     */
    data: XOR<TriggerItemCreateInput, TriggerItemUncheckedCreateInput>
  }

  /**
   * TriggerItem createMany
   */
  export type TriggerItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TriggerItems.
     */
    data: TriggerItemCreateManyInput | TriggerItemCreateManyInput[]
  }

  /**
   * TriggerItem createManyAndReturn
   */
  export type TriggerItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * The data used to create many TriggerItems.
     */
    data: TriggerItemCreateManyInput | TriggerItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerItem update
   */
  export type TriggerItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * The data needed to update a TriggerItem.
     */
    data: XOR<TriggerItemUpdateInput, TriggerItemUncheckedUpdateInput>
    /**
     * Choose, which TriggerItem to update.
     */
    where: TriggerItemWhereUniqueInput
  }

  /**
   * TriggerItem updateMany
   */
  export type TriggerItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TriggerItems.
     */
    data: XOR<TriggerItemUpdateManyMutationInput, TriggerItemUncheckedUpdateManyInput>
    /**
     * Filter which TriggerItems to update
     */
    where?: TriggerItemWhereInput
    /**
     * Limit how many TriggerItems to update.
     */
    limit?: number
  }

  /**
   * TriggerItem updateManyAndReturn
   */
  export type TriggerItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * The data used to update TriggerItems.
     */
    data: XOR<TriggerItemUpdateManyMutationInput, TriggerItemUncheckedUpdateManyInput>
    /**
     * Filter which TriggerItems to update
     */
    where?: TriggerItemWhereInput
    /**
     * Limit how many TriggerItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TriggerItem upsert
   */
  export type TriggerItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * The filter to search for the TriggerItem to update in case it exists.
     */
    where: TriggerItemWhereUniqueInput
    /**
     * In case the TriggerItem found by the `where` argument doesn't exist, create a new TriggerItem with this data.
     */
    create: XOR<TriggerItemCreateInput, TriggerItemUncheckedCreateInput>
    /**
     * In case the TriggerItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerItemUpdateInput, TriggerItemUncheckedUpdateInput>
  }

  /**
   * TriggerItem delete
   */
  export type TriggerItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
    /**
     * Filter which TriggerItem to delete.
     */
    where: TriggerItemWhereUniqueInput
  }

  /**
   * TriggerItem deleteMany
   */
  export type TriggerItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TriggerItems to delete
     */
    where?: TriggerItemWhereInput
    /**
     * Limit how many TriggerItems to delete.
     */
    limit?: number
  }

  /**
   * TriggerItem without action
   */
  export type TriggerItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TriggerItem
     */
    select?: TriggerItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TriggerItem
     */
    omit?: TriggerItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerItemInclude<ExtArgs> | null
  }


  /**
   * Model WebhookItem
   */

  export type AggregateWebhookItem = {
    _count: WebhookItemCountAggregateOutputType | null
    _min: WebhookItemMinAggregateOutputType | null
    _max: WebhookItemMaxAggregateOutputType | null
  }

  export type WebhookItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    connectionStatus: string | null
    state: string | null
    provider: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type WebhookItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    connectionStatus: string | null
    state: string | null
    provider: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type WebhookItemCountAggregateOutputType = {
    id: number
    name: number
    connectionStatus: number
    state: number
    provider: number
    userId: number
    createdAt: number
    _all: number
  }


  export type WebhookItemMinAggregateInputType = {
    id?: true
    name?: true
    connectionStatus?: true
    state?: true
    provider?: true
    userId?: true
    createdAt?: true
  }

  export type WebhookItemMaxAggregateInputType = {
    id?: true
    name?: true
    connectionStatus?: true
    state?: true
    provider?: true
    userId?: true
    createdAt?: true
  }

  export type WebhookItemCountAggregateInputType = {
    id?: true
    name?: true
    connectionStatus?: true
    state?: true
    provider?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type WebhookItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookItem to aggregate.
     */
    where?: WebhookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookItems to fetch.
     */
    orderBy?: WebhookItemOrderByWithRelationInput | WebhookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookItems
    **/
    _count?: true | WebhookItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookItemMaxAggregateInputType
  }

  export type GetWebhookItemAggregateType<T extends WebhookItemAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookItem[P]>
      : GetScalarType<T[P], AggregateWebhookItem[P]>
  }




  export type WebhookItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookItemWhereInput
    orderBy?: WebhookItemOrderByWithAggregationInput | WebhookItemOrderByWithAggregationInput[]
    by: WebhookItemScalarFieldEnum[] | WebhookItemScalarFieldEnum
    having?: WebhookItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookItemCountAggregateInputType | true
    _min?: WebhookItemMinAggregateInputType
    _max?: WebhookItemMaxAggregateInputType
  }

  export type WebhookItemGroupByOutputType = {
    id: string
    name: string
    connectionStatus: string
    state: string
    provider: string
    userId: string
    createdAt: Date
    _count: WebhookItemCountAggregateOutputType | null
    _min: WebhookItemMinAggregateOutputType | null
    _max: WebhookItemMaxAggregateOutputType | null
  }

  type GetWebhookItemGroupByPayload<T extends WebhookItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookItemGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookItemGroupByOutputType[P]>
        }
      >
    >


  export type WebhookItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    connectionStatus?: boolean
    state?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookItem"]>

  export type WebhookItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    connectionStatus?: boolean
    state?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookItem"]>

  export type WebhookItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    connectionStatus?: boolean
    state?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookItem"]>

  export type WebhookItemSelectScalar = {
    id?: boolean
    name?: boolean
    connectionStatus?: boolean
    state?: boolean
    provider?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type WebhookItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "connectionStatus" | "state" | "provider" | "userId" | "createdAt", ExtArgs["result"]["webhookItem"]>
  export type WebhookItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WebhookItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WebhookItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WebhookItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      connectionStatus: string
      state: string
      provider: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["webhookItem"]>
    composites: {}
  }

  type WebhookItemGetPayload<S extends boolean | null | undefined | WebhookItemDefaultArgs> = $Result.GetResult<Prisma.$WebhookItemPayload, S>

  type WebhookItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebhookItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebhookItemCountAggregateInputType | true
    }

  export interface WebhookItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookItem'], meta: { name: 'WebhookItem' } }
    /**
     * Find zero or one WebhookItem that matches the filter.
     * @param {WebhookItemFindUniqueArgs} args - Arguments to find a WebhookItem
     * @example
     * // Get one WebhookItem
     * const webhookItem = await prisma.webhookItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookItemFindUniqueArgs>(args: SelectSubset<T, WebhookItemFindUniqueArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one WebhookItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebhookItemFindUniqueOrThrowArgs} args - Arguments to find a WebhookItem
     * @example
     * // Get one WebhookItem
     * const webhookItem = await prisma.webhookItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookItemFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first WebhookItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemFindFirstArgs} args - Arguments to find a WebhookItem
     * @example
     * // Get one WebhookItem
     * const webhookItem = await prisma.webhookItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookItemFindFirstArgs>(args?: SelectSubset<T, WebhookItemFindFirstArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first WebhookItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemFindFirstOrThrowArgs} args - Arguments to find a WebhookItem
     * @example
     * // Get one WebhookItem
     * const webhookItem = await prisma.webhookItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookItemFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more WebhookItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookItems
     * const webhookItems = await prisma.webhookItem.findMany()
     * 
     * // Get first 10 WebhookItems
     * const webhookItems = await prisma.webhookItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookItemWithIdOnly = await prisma.webhookItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookItemFindManyArgs>(args?: SelectSubset<T, WebhookItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a WebhookItem.
     * @param {WebhookItemCreateArgs} args - Arguments to create a WebhookItem.
     * @example
     * // Create one WebhookItem
     * const WebhookItem = await prisma.webhookItem.create({
     *   data: {
     *     // ... data to create a WebhookItem
     *   }
     * })
     * 
     */
    create<T extends WebhookItemCreateArgs>(args: SelectSubset<T, WebhookItemCreateArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many WebhookItems.
     * @param {WebhookItemCreateManyArgs} args - Arguments to create many WebhookItems.
     * @example
     * // Create many WebhookItems
     * const webhookItem = await prisma.webhookItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookItemCreateManyArgs>(args?: SelectSubset<T, WebhookItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookItems and returns the data saved in the database.
     * @param {WebhookItemCreateManyAndReturnArgs} args - Arguments to create many WebhookItems.
     * @example
     * // Create many WebhookItems
     * const webhookItem = await prisma.webhookItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookItems and only return the `id`
     * const webhookItemWithIdOnly = await prisma.webhookItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookItemCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a WebhookItem.
     * @param {WebhookItemDeleteArgs} args - Arguments to delete one WebhookItem.
     * @example
     * // Delete one WebhookItem
     * const WebhookItem = await prisma.webhookItem.delete({
     *   where: {
     *     // ... filter to delete one WebhookItem
     *   }
     * })
     * 
     */
    delete<T extends WebhookItemDeleteArgs>(args: SelectSubset<T, WebhookItemDeleteArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one WebhookItem.
     * @param {WebhookItemUpdateArgs} args - Arguments to update one WebhookItem.
     * @example
     * // Update one WebhookItem
     * const webhookItem = await prisma.webhookItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookItemUpdateArgs>(args: SelectSubset<T, WebhookItemUpdateArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more WebhookItems.
     * @param {WebhookItemDeleteManyArgs} args - Arguments to filter WebhookItems to delete.
     * @example
     * // Delete a few WebhookItems
     * const { count } = await prisma.webhookItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookItemDeleteManyArgs>(args?: SelectSubset<T, WebhookItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookItems
     * const webhookItem = await prisma.webhookItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookItemUpdateManyArgs>(args: SelectSubset<T, WebhookItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookItems and returns the data updated in the database.
     * @param {WebhookItemUpdateManyAndReturnArgs} args - Arguments to update many WebhookItems.
     * @example
     * // Update many WebhookItems
     * const webhookItem = await prisma.webhookItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebhookItems and only return the `id`
     * const webhookItemWithIdOnly = await prisma.webhookItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebhookItemUpdateManyAndReturnArgs>(args: SelectSubset<T, WebhookItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one WebhookItem.
     * @param {WebhookItemUpsertArgs} args - Arguments to update or create a WebhookItem.
     * @example
     * // Update or create a WebhookItem
     * const webhookItem = await prisma.webhookItem.upsert({
     *   create: {
     *     // ... data to create a WebhookItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookItem we want to update
     *   }
     * })
     */
    upsert<T extends WebhookItemUpsertArgs>(args: SelectSubset<T, WebhookItemUpsertArgs<ExtArgs>>): Prisma__WebhookItemClient<$Result.GetResult<Prisma.$WebhookItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of WebhookItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemCountArgs} args - Arguments to filter WebhookItems to count.
     * @example
     * // Count the number of WebhookItems
     * const count = await prisma.webhookItem.count({
     *   where: {
     *     // ... the filter for the WebhookItems we want to count
     *   }
     * })
    **/
    count<T extends WebhookItemCountArgs>(
      args?: Subset<T, WebhookItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookItemAggregateArgs>(args: Subset<T, WebhookItemAggregateArgs>): Prisma.PrismaPromise<GetWebhookItemAggregateType<T>>

    /**
     * Group by WebhookItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookItemGroupByArgs['orderBy'] }
        : { orderBy?: WebhookItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookItem model
   */
  readonly fields: WebhookItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookItem model
   */ 
  interface WebhookItemFieldRefs {
    readonly id: FieldRef<"WebhookItem", 'String'>
    readonly name: FieldRef<"WebhookItem", 'String'>
    readonly connectionStatus: FieldRef<"WebhookItem", 'String'>
    readonly state: FieldRef<"WebhookItem", 'String'>
    readonly provider: FieldRef<"WebhookItem", 'String'>
    readonly userId: FieldRef<"WebhookItem", 'String'>
    readonly createdAt: FieldRef<"WebhookItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookItem findUnique
   */
  export type WebhookItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * Filter, which WebhookItem to fetch.
     */
    where: WebhookItemWhereUniqueInput
  }

  /**
   * WebhookItem findUniqueOrThrow
   */
  export type WebhookItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * Filter, which WebhookItem to fetch.
     */
    where: WebhookItemWhereUniqueInput
  }

  /**
   * WebhookItem findFirst
   */
  export type WebhookItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * Filter, which WebhookItem to fetch.
     */
    where?: WebhookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookItems to fetch.
     */
    orderBy?: WebhookItemOrderByWithRelationInput | WebhookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookItems.
     */
    cursor?: WebhookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookItems.
     */
    distinct?: WebhookItemScalarFieldEnum | WebhookItemScalarFieldEnum[]
  }

  /**
   * WebhookItem findFirstOrThrow
   */
  export type WebhookItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * Filter, which WebhookItem to fetch.
     */
    where?: WebhookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookItems to fetch.
     */
    orderBy?: WebhookItemOrderByWithRelationInput | WebhookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookItems.
     */
    cursor?: WebhookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookItems.
     */
    distinct?: WebhookItemScalarFieldEnum | WebhookItemScalarFieldEnum[]
  }

  /**
   * WebhookItem findMany
   */
  export type WebhookItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * Filter, which WebhookItems to fetch.
     */
    where?: WebhookItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookItems to fetch.
     */
    orderBy?: WebhookItemOrderByWithRelationInput | WebhookItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookItems.
     */
    cursor?: WebhookItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookItems.
     */
    skip?: number
    distinct?: WebhookItemScalarFieldEnum | WebhookItemScalarFieldEnum[]
  }

  /**
   * WebhookItem create
   */
  export type WebhookItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookItem.
     */
    data: XOR<WebhookItemCreateInput, WebhookItemUncheckedCreateInput>
  }

  /**
   * WebhookItem createMany
   */
  export type WebhookItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookItems.
     */
    data: WebhookItemCreateManyInput | WebhookItemCreateManyInput[]
  }

  /**
   * WebhookItem createManyAndReturn
   */
  export type WebhookItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * The data used to create many WebhookItems.
     */
    data: WebhookItemCreateManyInput | WebhookItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookItem update
   */
  export type WebhookItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookItem.
     */
    data: XOR<WebhookItemUpdateInput, WebhookItemUncheckedUpdateInput>
    /**
     * Choose, which WebhookItem to update.
     */
    where: WebhookItemWhereUniqueInput
  }

  /**
   * WebhookItem updateMany
   */
  export type WebhookItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookItems.
     */
    data: XOR<WebhookItemUpdateManyMutationInput, WebhookItemUncheckedUpdateManyInput>
    /**
     * Filter which WebhookItems to update
     */
    where?: WebhookItemWhereInput
    /**
     * Limit how many WebhookItems to update.
     */
    limit?: number
  }

  /**
   * WebhookItem updateManyAndReturn
   */
  export type WebhookItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * The data used to update WebhookItems.
     */
    data: XOR<WebhookItemUpdateManyMutationInput, WebhookItemUncheckedUpdateManyInput>
    /**
     * Filter which WebhookItems to update
     */
    where?: WebhookItemWhereInput
    /**
     * Limit how many WebhookItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookItem upsert
   */
  export type WebhookItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookItem to update in case it exists.
     */
    where: WebhookItemWhereUniqueInput
    /**
     * In case the WebhookItem found by the `where` argument doesn't exist, create a new WebhookItem with this data.
     */
    create: XOR<WebhookItemCreateInput, WebhookItemUncheckedCreateInput>
    /**
     * In case the WebhookItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookItemUpdateInput, WebhookItemUncheckedUpdateInput>
  }

  /**
   * WebhookItem delete
   */
  export type WebhookItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
    /**
     * Filter which WebhookItem to delete.
     */
    where: WebhookItemWhereUniqueInput
  }

  /**
   * WebhookItem deleteMany
   */
  export type WebhookItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookItems to delete
     */
    where?: WebhookItemWhereInput
    /**
     * Limit how many WebhookItems to delete.
     */
    limit?: number
  }

  /**
   * WebhookItem without action
   */
  export type WebhookItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookItem
     */
    select?: WebhookItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebhookItem
     */
    omit?: WebhookItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookItemInclude<ExtArgs> | null
  }


  /**
   * Model ServiceItem
   */

  export type AggregateServiceItem = {
    _count: ServiceItemCountAggregateOutputType | null
    _min: ServiceItemMinAggregateOutputType | null
    _max: ServiceItemMaxAggregateOutputType | null
  }

  export type ServiceItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    status: string | null
    health: string | null
    uptime: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ServiceItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    status: string | null
    health: string | null
    uptime: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type ServiceItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    status: number
    health: number
    uptime: number
    userId: number
    createdAt: number
    _all: number
  }


  export type ServiceItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    health?: true
    uptime?: true
    userId?: true
    createdAt?: true
  }

  export type ServiceItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    health?: true
    uptime?: true
    userId?: true
    createdAt?: true
  }

  export type ServiceItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    health?: true
    uptime?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceItem to aggregate.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceItems
    **/
    _count?: true | ServiceItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceItemMaxAggregateInputType
  }

  export type GetServiceItemAggregateType<T extends ServiceItemAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceItem[P]>
      : GetScalarType<T[P], AggregateServiceItem[P]>
  }




  export type ServiceItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceItemWhereInput
    orderBy?: ServiceItemOrderByWithAggregationInput | ServiceItemOrderByWithAggregationInput[]
    by: ServiceItemScalarFieldEnum[] | ServiceItemScalarFieldEnum
    having?: ServiceItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceItemCountAggregateInputType | true
    _min?: ServiceItemMinAggregateInputType
    _max?: ServiceItemMaxAggregateInputType
  }

  export type ServiceItemGroupByOutputType = {
    id: string
    name: string
    category: string
    status: string
    health: string
    uptime: string
    userId: string
    createdAt: Date
    _count: ServiceItemCountAggregateOutputType | null
    _min: ServiceItemMinAggregateOutputType | null
    _max: ServiceItemMaxAggregateOutputType | null
  }

  type GetServiceItemGroupByPayload<T extends ServiceItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceItemGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceItemGroupByOutputType[P]>
        }
      >
    >


  export type ServiceItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    health?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    health?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    health?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceItem"]>

  export type ServiceItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    health?: boolean
    uptime?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type ServiceItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "status" | "health" | "uptime" | "userId" | "createdAt", ExtArgs["result"]["serviceItem"]>
  export type ServiceItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServiceItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceItem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      status: string
      health: string
      uptime: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["serviceItem"]>
    composites: {}
  }

  type ServiceItemGetPayload<S extends boolean | null | undefined | ServiceItemDefaultArgs> = $Result.GetResult<Prisma.$ServiceItemPayload, S>

  type ServiceItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceItemCountAggregateInputType | true
    }

  export interface ServiceItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceItem'], meta: { name: 'ServiceItem' } }
    /**
     * Find zero or one ServiceItem that matches the filter.
     * @param {ServiceItemFindUniqueArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceItemFindUniqueArgs>(args: SelectSubset<T, ServiceItemFindUniqueArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one ServiceItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceItemFindUniqueOrThrowArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first ServiceItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindFirstArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceItemFindFirstArgs>(args?: SelectSubset<T, ServiceItemFindFirstArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first ServiceItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindFirstOrThrowArgs} args - Arguments to find a ServiceItem
     * @example
     * // Get one ServiceItem
     * const serviceItem = await prisma.serviceItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more ServiceItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceItems
     * const serviceItems = await prisma.serviceItem.findMany()
     * 
     * // Get first 10 ServiceItems
     * const serviceItems = await prisma.serviceItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceItemFindManyArgs>(args?: SelectSubset<T, ServiceItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a ServiceItem.
     * @param {ServiceItemCreateArgs} args - Arguments to create a ServiceItem.
     * @example
     * // Create one ServiceItem
     * const ServiceItem = await prisma.serviceItem.create({
     *   data: {
     *     // ... data to create a ServiceItem
     *   }
     * })
     * 
     */
    create<T extends ServiceItemCreateArgs>(args: SelectSubset<T, ServiceItemCreateArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many ServiceItems.
     * @param {ServiceItemCreateManyArgs} args - Arguments to create many ServiceItems.
     * @example
     * // Create many ServiceItems
     * const serviceItem = await prisma.serviceItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceItemCreateManyArgs>(args?: SelectSubset<T, ServiceItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceItems and returns the data saved in the database.
     * @param {ServiceItemCreateManyAndReturnArgs} args - Arguments to create many ServiceItems.
     * @example
     * // Create many ServiceItems
     * const serviceItem = await prisma.serviceItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceItems and only return the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a ServiceItem.
     * @param {ServiceItemDeleteArgs} args - Arguments to delete one ServiceItem.
     * @example
     * // Delete one ServiceItem
     * const ServiceItem = await prisma.serviceItem.delete({
     *   where: {
     *     // ... filter to delete one ServiceItem
     *   }
     * })
     * 
     */
    delete<T extends ServiceItemDeleteArgs>(args: SelectSubset<T, ServiceItemDeleteArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one ServiceItem.
     * @param {ServiceItemUpdateArgs} args - Arguments to update one ServiceItem.
     * @example
     * // Update one ServiceItem
     * const serviceItem = await prisma.serviceItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceItemUpdateArgs>(args: SelectSubset<T, ServiceItemUpdateArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more ServiceItems.
     * @param {ServiceItemDeleteManyArgs} args - Arguments to filter ServiceItems to delete.
     * @example
     * // Delete a few ServiceItems
     * const { count } = await prisma.serviceItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceItemDeleteManyArgs>(args?: SelectSubset<T, ServiceItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceItems
     * const serviceItem = await prisma.serviceItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceItemUpdateManyArgs>(args: SelectSubset<T, ServiceItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceItems and returns the data updated in the database.
     * @param {ServiceItemUpdateManyAndReturnArgs} args - Arguments to update many ServiceItems.
     * @example
     * // Update many ServiceItems
     * const serviceItem = await prisma.serviceItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceItems and only return the `id`
     * const serviceItemWithIdOnly = await prisma.serviceItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one ServiceItem.
     * @param {ServiceItemUpsertArgs} args - Arguments to update or create a ServiceItem.
     * @example
     * // Update or create a ServiceItem
     * const serviceItem = await prisma.serviceItem.upsert({
     *   create: {
     *     // ... data to create a ServiceItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceItem we want to update
     *   }
     * })
     */
    upsert<T extends ServiceItemUpsertArgs>(args: SelectSubset<T, ServiceItemUpsertArgs<ExtArgs>>): Prisma__ServiceItemClient<$Result.GetResult<Prisma.$ServiceItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of ServiceItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemCountArgs} args - Arguments to filter ServiceItems to count.
     * @example
     * // Count the number of ServiceItems
     * const count = await prisma.serviceItem.count({
     *   where: {
     *     // ... the filter for the ServiceItems we want to count
     *   }
     * })
    **/
    count<T extends ServiceItemCountArgs>(
      args?: Subset<T, ServiceItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceItemAggregateArgs>(args: Subset<T, ServiceItemAggregateArgs>): Prisma.PrismaPromise<GetServiceItemAggregateType<T>>

    /**
     * Group by ServiceItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceItemGroupByArgs['orderBy'] }
        : { orderBy?: ServiceItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceItem model
   */
  readonly fields: ServiceItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceItem model
   */ 
  interface ServiceItemFieldRefs {
    readonly id: FieldRef<"ServiceItem", 'String'>
    readonly name: FieldRef<"ServiceItem", 'String'>
    readonly category: FieldRef<"ServiceItem", 'String'>
    readonly status: FieldRef<"ServiceItem", 'String'>
    readonly health: FieldRef<"ServiceItem", 'String'>
    readonly uptime: FieldRef<"ServiceItem", 'String'>
    readonly userId: FieldRef<"ServiceItem", 'String'>
    readonly createdAt: FieldRef<"ServiceItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceItem findUnique
   */
  export type ServiceItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem findUniqueOrThrow
   */
  export type ServiceItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem findFirst
   */
  export type ServiceItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem findFirstOrThrow
   */
  export type ServiceItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItem to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceItems.
     */
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem findMany
   */
  export type ServiceItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter, which ServiceItems to fetch.
     */
    where?: ServiceItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceItems to fetch.
     */
    orderBy?: ServiceItemOrderByWithRelationInput | ServiceItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceItems.
     */
    cursor?: ServiceItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceItems.
     */
    skip?: number
    distinct?: ServiceItemScalarFieldEnum | ServiceItemScalarFieldEnum[]
  }

  /**
   * ServiceItem create
   */
  export type ServiceItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceItem.
     */
    data: XOR<ServiceItemCreateInput, ServiceItemUncheckedCreateInput>
  }

  /**
   * ServiceItem createMany
   */
  export type ServiceItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceItems.
     */
    data: ServiceItemCreateManyInput | ServiceItemCreateManyInput[]
  }

  /**
   * ServiceItem createManyAndReturn
   */
  export type ServiceItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceItems.
     */
    data: ServiceItemCreateManyInput | ServiceItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceItem update
   */
  export type ServiceItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceItem.
     */
    data: XOR<ServiceItemUpdateInput, ServiceItemUncheckedUpdateInput>
    /**
     * Choose, which ServiceItem to update.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem updateMany
   */
  export type ServiceItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceItems.
     */
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceItems to update
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to update.
     */
    limit?: number
  }

  /**
   * ServiceItem updateManyAndReturn
   */
  export type ServiceItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * The data used to update ServiceItems.
     */
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyInput>
    /**
     * Filter which ServiceItems to update
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceItem upsert
   */
  export type ServiceItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceItem to update in case it exists.
     */
    where: ServiceItemWhereUniqueInput
    /**
     * In case the ServiceItem found by the `where` argument doesn't exist, create a new ServiceItem with this data.
     */
    create: XOR<ServiceItemCreateInput, ServiceItemUncheckedCreateInput>
    /**
     * In case the ServiceItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceItemUpdateInput, ServiceItemUncheckedUpdateInput>
  }

  /**
   * ServiceItem delete
   */
  export type ServiceItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
    /**
     * Filter which ServiceItem to delete.
     */
    where: ServiceItemWhereUniqueInput
  }

  /**
   * ServiceItem deleteMany
   */
  export type ServiceItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceItems to delete
     */
    where?: ServiceItemWhereInput
    /**
     * Limit how many ServiceItems to delete.
     */
    limit?: number
  }

  /**
   * ServiceItem without action
   */
  export type ServiceItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceItem
     */
    select?: ServiceItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceItem
     */
    omit?: ServiceItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    avatar: 'avatar',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const PipelineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    repository: 'repository',
    branch: 'branch',
    environment: 'environment',
    status: 'status',
    triggerType: 'triggerType',
    lastRunAt: 'lastRunAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PipelineScalarFieldEnum = (typeof PipelineScalarFieldEnum)[keyof typeof PipelineScalarFieldEnum]


  export const BuildScalarFieldEnum: {
    id: 'id',
    buildNumber: 'buildNumber',
    pipelineId: 'pipelineId',
    pipelineName: 'pipelineName',
    branch: 'branch',
    commitHash: 'commitHash',
    commitMessage: 'commitMessage',
    status: 'status',
    duration: 'duration',
    durationSeconds: 'durationSeconds',
    triggeredBy: 'triggeredBy',
    logs: 'logs',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type BuildScalarFieldEnum = (typeof BuildScalarFieldEnum)[keyof typeof BuildScalarFieldEnum]


  export const DeploymentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    environment: 'environment',
    branch: 'branch',
    status: 'status',
    deployedBy: 'deployedBy',
    duration: 'duration',
    durationSeconds: 'durationSeconds',
    pipelineId: 'pipelineId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type DeploymentScalarFieldEnum = (typeof DeploymentScalarFieldEnum)[keyof typeof DeploymentScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    type: 'type',
    userName: 'userName',
    details: 'details',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const SystemLogScalarFieldEnum: {
    id: 'id',
    level: 'level',
    service: 'service',
    message: 'message',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type SystemLogScalarFieldEnum = (typeof SystemLogScalarFieldEnum)[keyof typeof SystemLogScalarFieldEnum]


  export const ProjectSecretScalarFieldEnum: {
    id: 'id',
    key: 'key',
    environment: 'environment',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectSecretScalarFieldEnum = (typeof ProjectSecretScalarFieldEnum)[keyof typeof ProjectSecretScalarFieldEnum]


  export const EnvironmentConfigScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branch: 'branch',
    status: 'status',
    uptime: 'uptime',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EnvironmentConfigScalarFieldEnum = (typeof EnvironmentConfigScalarFieldEnum)[keyof typeof EnvironmentConfigScalarFieldEnum]


  export const ReleaseRecordScalarFieldEnum: {
    id: 'id',
    version: 'version',
    environment: 'environment',
    status: 'status',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ReleaseRecordScalarFieldEnum = (typeof ReleaseRecordScalarFieldEnum)[keyof typeof ReleaseRecordScalarFieldEnum]


  export const TriggerItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    branch: 'branch',
    status: 'status',
    source: 'source',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type TriggerItemScalarFieldEnum = (typeof TriggerItemScalarFieldEnum)[keyof typeof TriggerItemScalarFieldEnum]


  export const WebhookItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    connectionStatus: 'connectionStatus',
    state: 'state',
    provider: 'provider',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type WebhookItemScalarFieldEnum = (typeof WebhookItemScalarFieldEnum)[keyof typeof WebhookItemScalarFieldEnum]


  export const ServiceItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    status: 'status',
    health: 'health',
    uptime: 'uptime',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type ServiceItemScalarFieldEnum = (typeof ServiceItemScalarFieldEnum)[keyof typeof ServiceItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    pipelines?: PipelineListRelationFilter
    builds?: BuildListRelationFilter
    deployments?: DeploymentListRelationFilter
    activities?: ActivityLogListRelationFilter
    logs?: SystemLogListRelationFilter
    secrets?: ProjectSecretListRelationFilter
    environments?: EnvironmentConfigListRelationFilter
    releases?: ReleaseRecordListRelationFilter
    triggers?: TriggerItemListRelationFilter
    webhooks?: WebhookItemListRelationFilter
    services?: ServiceItemListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    pipelines?: PipelineOrderByRelationAggregateInput
    builds?: BuildOrderByRelationAggregateInput
    deployments?: DeploymentOrderByRelationAggregateInput
    activities?: ActivityLogOrderByRelationAggregateInput
    logs?: SystemLogOrderByRelationAggregateInput
    secrets?: ProjectSecretOrderByRelationAggregateInput
    environments?: EnvironmentConfigOrderByRelationAggregateInput
    releases?: ReleaseRecordOrderByRelationAggregateInput
    triggers?: TriggerItemOrderByRelationAggregateInput
    webhooks?: WebhookItemOrderByRelationAggregateInput
    services?: ServiceItemOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshTokens?: RefreshTokenListRelationFilter
    pipelines?: PipelineListRelationFilter
    builds?: BuildListRelationFilter
    deployments?: DeploymentListRelationFilter
    activities?: ActivityLogListRelationFilter
    logs?: SystemLogListRelationFilter
    secrets?: ProjectSecretListRelationFilter
    environments?: EnvironmentConfigListRelationFilter
    releases?: ReleaseRecordListRelationFilter
    triggers?: TriggerItemListRelationFilter
    webhooks?: WebhookItemListRelationFilter
    services?: ServiceItemListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type PipelineWhereInput = {
    AND?: PipelineWhereInput | PipelineWhereInput[]
    OR?: PipelineWhereInput[]
    NOT?: PipelineWhereInput | PipelineWhereInput[]
    id?: StringFilter<"Pipeline"> | string
    name?: StringFilter<"Pipeline"> | string
    repository?: StringFilter<"Pipeline"> | string
    branch?: StringFilter<"Pipeline"> | string
    environment?: StringFilter<"Pipeline"> | string
    status?: StringFilter<"Pipeline"> | string
    triggerType?: StringFilter<"Pipeline"> | string
    lastRunAt?: DateTimeNullableFilter<"Pipeline"> | Date | string | null
    userId?: StringFilter<"Pipeline"> | string
    createdAt?: DateTimeFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeFilter<"Pipeline"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    builds?: BuildListRelationFilter
  }

  export type PipelineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    branch?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    triggerType?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    builds?: BuildOrderByRelationAggregateInput
  }

  export type PipelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PipelineWhereInput | PipelineWhereInput[]
    OR?: PipelineWhereInput[]
    NOT?: PipelineWhereInput | PipelineWhereInput[]
    name?: StringFilter<"Pipeline"> | string
    repository?: StringFilter<"Pipeline"> | string
    branch?: StringFilter<"Pipeline"> | string
    environment?: StringFilter<"Pipeline"> | string
    status?: StringFilter<"Pipeline"> | string
    triggerType?: StringFilter<"Pipeline"> | string
    lastRunAt?: DateTimeNullableFilter<"Pipeline"> | Date | string | null
    userId?: StringFilter<"Pipeline"> | string
    createdAt?: DateTimeFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeFilter<"Pipeline"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    builds?: BuildListRelationFilter
  }, "id">

  export type PipelineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    branch?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    triggerType?: SortOrder
    lastRunAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PipelineCountOrderByAggregateInput
    _max?: PipelineMaxOrderByAggregateInput
    _min?: PipelineMinOrderByAggregateInput
  }

  export type PipelineScalarWhereWithAggregatesInput = {
    AND?: PipelineScalarWhereWithAggregatesInput | PipelineScalarWhereWithAggregatesInput[]
    OR?: PipelineScalarWhereWithAggregatesInput[]
    NOT?: PipelineScalarWhereWithAggregatesInput | PipelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pipeline"> | string
    name?: StringWithAggregatesFilter<"Pipeline"> | string
    repository?: StringWithAggregatesFilter<"Pipeline"> | string
    branch?: StringWithAggregatesFilter<"Pipeline"> | string
    environment?: StringWithAggregatesFilter<"Pipeline"> | string
    status?: StringWithAggregatesFilter<"Pipeline"> | string
    triggerType?: StringWithAggregatesFilter<"Pipeline"> | string
    lastRunAt?: DateTimeNullableWithAggregatesFilter<"Pipeline"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Pipeline"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pipeline"> | Date | string
  }

  export type BuildWhereInput = {
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    id?: StringFilter<"Build"> | string
    buildNumber?: IntFilter<"Build"> | number
    pipelineId?: StringNullableFilter<"Build"> | string | null
    pipelineName?: StringFilter<"Build"> | string
    branch?: StringFilter<"Build"> | string
    commitHash?: StringNullableFilter<"Build"> | string | null
    commitMessage?: StringNullableFilter<"Build"> | string | null
    status?: StringFilter<"Build"> | string
    duration?: StringFilter<"Build"> | string
    durationSeconds?: IntFilter<"Build"> | number
    triggeredBy?: StringFilter<"Build"> | string
    logs?: StringNullableFilter<"Build"> | string | null
    userId?: StringFilter<"Build"> | string
    createdAt?: DateTimeFilter<"Build"> | Date | string
    pipeline?: XOR<PipelineNullableScalarRelationFilter, PipelineWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BuildOrderByWithRelationInput = {
    id?: SortOrder
    buildNumber?: SortOrder
    pipelineId?: SortOrderInput | SortOrder
    pipelineName?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrderInput | SortOrder
    commitMessage?: SortOrderInput | SortOrder
    status?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    triggeredBy?: SortOrder
    logs?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    pipeline?: PipelineOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BuildWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BuildWhereInput | BuildWhereInput[]
    OR?: BuildWhereInput[]
    NOT?: BuildWhereInput | BuildWhereInput[]
    buildNumber?: IntFilter<"Build"> | number
    pipelineId?: StringNullableFilter<"Build"> | string | null
    pipelineName?: StringFilter<"Build"> | string
    branch?: StringFilter<"Build"> | string
    commitHash?: StringNullableFilter<"Build"> | string | null
    commitMessage?: StringNullableFilter<"Build"> | string | null
    status?: StringFilter<"Build"> | string
    duration?: StringFilter<"Build"> | string
    durationSeconds?: IntFilter<"Build"> | number
    triggeredBy?: StringFilter<"Build"> | string
    logs?: StringNullableFilter<"Build"> | string | null
    userId?: StringFilter<"Build"> | string
    createdAt?: DateTimeFilter<"Build"> | Date | string
    pipeline?: XOR<PipelineNullableScalarRelationFilter, PipelineWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BuildOrderByWithAggregationInput = {
    id?: SortOrder
    buildNumber?: SortOrder
    pipelineId?: SortOrderInput | SortOrder
    pipelineName?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrderInput | SortOrder
    commitMessage?: SortOrderInput | SortOrder
    status?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    triggeredBy?: SortOrder
    logs?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: BuildCountOrderByAggregateInput
    _avg?: BuildAvgOrderByAggregateInput
    _max?: BuildMaxOrderByAggregateInput
    _min?: BuildMinOrderByAggregateInput
    _sum?: BuildSumOrderByAggregateInput
  }

  export type BuildScalarWhereWithAggregatesInput = {
    AND?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    OR?: BuildScalarWhereWithAggregatesInput[]
    NOT?: BuildScalarWhereWithAggregatesInput | BuildScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Build"> | string
    buildNumber?: IntWithAggregatesFilter<"Build"> | number
    pipelineId?: StringNullableWithAggregatesFilter<"Build"> | string | null
    pipelineName?: StringWithAggregatesFilter<"Build"> | string
    branch?: StringWithAggregatesFilter<"Build"> | string
    commitHash?: StringNullableWithAggregatesFilter<"Build"> | string | null
    commitMessage?: StringNullableWithAggregatesFilter<"Build"> | string | null
    status?: StringWithAggregatesFilter<"Build"> | string
    duration?: StringWithAggregatesFilter<"Build"> | string
    durationSeconds?: IntWithAggregatesFilter<"Build"> | number
    triggeredBy?: StringWithAggregatesFilter<"Build"> | string
    logs?: StringNullableWithAggregatesFilter<"Build"> | string | null
    userId?: StringWithAggregatesFilter<"Build"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Build"> | Date | string
  }

  export type DeploymentWhereInput = {
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    id?: StringFilter<"Deployment"> | string
    name?: StringFilter<"Deployment"> | string
    environment?: StringFilter<"Deployment"> | string
    branch?: StringFilter<"Deployment"> | string
    status?: StringFilter<"Deployment"> | string
    deployedBy?: StringFilter<"Deployment"> | string
    duration?: StringFilter<"Deployment"> | string
    durationSeconds?: IntFilter<"Deployment"> | number
    pipelineId?: StringNullableFilter<"Deployment"> | string | null
    userId?: StringFilter<"Deployment"> | string
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeploymentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    environment?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    deployedBy?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    pipelineId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeploymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeploymentWhereInput | DeploymentWhereInput[]
    OR?: DeploymentWhereInput[]
    NOT?: DeploymentWhereInput | DeploymentWhereInput[]
    name?: StringFilter<"Deployment"> | string
    environment?: StringFilter<"Deployment"> | string
    branch?: StringFilter<"Deployment"> | string
    status?: StringFilter<"Deployment"> | string
    deployedBy?: StringFilter<"Deployment"> | string
    duration?: StringFilter<"Deployment"> | string
    durationSeconds?: IntFilter<"Deployment"> | number
    pipelineId?: StringNullableFilter<"Deployment"> | string | null
    userId?: StringFilter<"Deployment"> | string
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DeploymentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    environment?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    deployedBy?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    pipelineId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: DeploymentCountOrderByAggregateInput
    _avg?: DeploymentAvgOrderByAggregateInput
    _max?: DeploymentMaxOrderByAggregateInput
    _min?: DeploymentMinOrderByAggregateInput
    _sum?: DeploymentSumOrderByAggregateInput
  }

  export type DeploymentScalarWhereWithAggregatesInput = {
    AND?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    OR?: DeploymentScalarWhereWithAggregatesInput[]
    NOT?: DeploymentScalarWhereWithAggregatesInput | DeploymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deployment"> | string
    name?: StringWithAggregatesFilter<"Deployment"> | string
    environment?: StringWithAggregatesFilter<"Deployment"> | string
    branch?: StringWithAggregatesFilter<"Deployment"> | string
    status?: StringWithAggregatesFilter<"Deployment"> | string
    deployedBy?: StringWithAggregatesFilter<"Deployment"> | string
    duration?: StringWithAggregatesFilter<"Deployment"> | string
    durationSeconds?: IntWithAggregatesFilter<"Deployment"> | number
    pipelineId?: StringNullableWithAggregatesFilter<"Deployment"> | string | null
    userId?: StringWithAggregatesFilter<"Deployment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Deployment"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    title?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    userName?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    userName?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    title?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    userName?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    userName?: SortOrder
    details?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    title?: StringWithAggregatesFilter<"ActivityLog"> | string
    type?: StringWithAggregatesFilter<"ActivityLog"> | string
    userName?: StringWithAggregatesFilter<"ActivityLog"> | string
    details?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type SystemLogWhereInput = {
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    id?: StringFilter<"SystemLog"> | string
    level?: StringFilter<"SystemLog"> | string
    service?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    userId?: StringFilter<"SystemLog"> | string
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SystemLogOrderByWithRelationInput = {
    id?: SortOrder
    level?: SortOrder
    service?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SystemLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SystemLogWhereInput | SystemLogWhereInput[]
    OR?: SystemLogWhereInput[]
    NOT?: SystemLogWhereInput | SystemLogWhereInput[]
    level?: StringFilter<"SystemLog"> | string
    service?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    userId?: StringFilter<"SystemLog"> | string
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SystemLogOrderByWithAggregationInput = {
    id?: SortOrder
    level?: SortOrder
    service?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: SystemLogCountOrderByAggregateInput
    _max?: SystemLogMaxOrderByAggregateInput
    _min?: SystemLogMinOrderByAggregateInput
  }

  export type SystemLogScalarWhereWithAggregatesInput = {
    AND?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    OR?: SystemLogScalarWhereWithAggregatesInput[]
    NOT?: SystemLogScalarWhereWithAggregatesInput | SystemLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemLog"> | string
    level?: StringWithAggregatesFilter<"SystemLog"> | string
    service?: StringWithAggregatesFilter<"SystemLog"> | string
    message?: StringWithAggregatesFilter<"SystemLog"> | string
    userId?: StringWithAggregatesFilter<"SystemLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SystemLog"> | Date | string
  }

  export type ProjectSecretWhereInput = {
    AND?: ProjectSecretWhereInput | ProjectSecretWhereInput[]
    OR?: ProjectSecretWhereInput[]
    NOT?: ProjectSecretWhereInput | ProjectSecretWhereInput[]
    id?: StringFilter<"ProjectSecret"> | string
    key?: StringFilter<"ProjectSecret"> | string
    environment?: StringFilter<"ProjectSecret"> | string
    status?: StringFilter<"ProjectSecret"> | string
    userId?: StringFilter<"ProjectSecret"> | string
    createdAt?: DateTimeFilter<"ProjectSecret"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectSecret"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProjectSecretOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectSecretWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectSecretWhereInput | ProjectSecretWhereInput[]
    OR?: ProjectSecretWhereInput[]
    NOT?: ProjectSecretWhereInput | ProjectSecretWhereInput[]
    key?: StringFilter<"ProjectSecret"> | string
    environment?: StringFilter<"ProjectSecret"> | string
    status?: StringFilter<"ProjectSecret"> | string
    userId?: StringFilter<"ProjectSecret"> | string
    createdAt?: DateTimeFilter<"ProjectSecret"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectSecret"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProjectSecretOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectSecretCountOrderByAggregateInput
    _max?: ProjectSecretMaxOrderByAggregateInput
    _min?: ProjectSecretMinOrderByAggregateInput
  }

  export type ProjectSecretScalarWhereWithAggregatesInput = {
    AND?: ProjectSecretScalarWhereWithAggregatesInput | ProjectSecretScalarWhereWithAggregatesInput[]
    OR?: ProjectSecretScalarWhereWithAggregatesInput[]
    NOT?: ProjectSecretScalarWhereWithAggregatesInput | ProjectSecretScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectSecret"> | string
    key?: StringWithAggregatesFilter<"ProjectSecret"> | string
    environment?: StringWithAggregatesFilter<"ProjectSecret"> | string
    status?: StringWithAggregatesFilter<"ProjectSecret"> | string
    userId?: StringWithAggregatesFilter<"ProjectSecret"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProjectSecret"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ProjectSecret"> | Date | string
  }

  export type EnvironmentConfigWhereInput = {
    AND?: EnvironmentConfigWhereInput | EnvironmentConfigWhereInput[]
    OR?: EnvironmentConfigWhereInput[]
    NOT?: EnvironmentConfigWhereInput | EnvironmentConfigWhereInput[]
    id?: StringFilter<"EnvironmentConfig"> | string
    name?: StringFilter<"EnvironmentConfig"> | string
    branch?: StringFilter<"EnvironmentConfig"> | string
    status?: StringFilter<"EnvironmentConfig"> | string
    uptime?: StringFilter<"EnvironmentConfig"> | string
    userId?: StringFilter<"EnvironmentConfig"> | string
    createdAt?: DateTimeFilter<"EnvironmentConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EnvironmentConfigOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EnvironmentConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnvironmentConfigWhereInput | EnvironmentConfigWhereInput[]
    OR?: EnvironmentConfigWhereInput[]
    NOT?: EnvironmentConfigWhereInput | EnvironmentConfigWhereInput[]
    name?: StringFilter<"EnvironmentConfig"> | string
    branch?: StringFilter<"EnvironmentConfig"> | string
    status?: StringFilter<"EnvironmentConfig"> | string
    uptime?: StringFilter<"EnvironmentConfig"> | string
    userId?: StringFilter<"EnvironmentConfig"> | string
    createdAt?: DateTimeFilter<"EnvironmentConfig"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EnvironmentConfigOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: EnvironmentConfigCountOrderByAggregateInput
    _max?: EnvironmentConfigMaxOrderByAggregateInput
    _min?: EnvironmentConfigMinOrderByAggregateInput
  }

  export type EnvironmentConfigScalarWhereWithAggregatesInput = {
    AND?: EnvironmentConfigScalarWhereWithAggregatesInput | EnvironmentConfigScalarWhereWithAggregatesInput[]
    OR?: EnvironmentConfigScalarWhereWithAggregatesInput[]
    NOT?: EnvironmentConfigScalarWhereWithAggregatesInput | EnvironmentConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EnvironmentConfig"> | string
    name?: StringWithAggregatesFilter<"EnvironmentConfig"> | string
    branch?: StringWithAggregatesFilter<"EnvironmentConfig"> | string
    status?: StringWithAggregatesFilter<"EnvironmentConfig"> | string
    uptime?: StringWithAggregatesFilter<"EnvironmentConfig"> | string
    userId?: StringWithAggregatesFilter<"EnvironmentConfig"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EnvironmentConfig"> | Date | string
  }

  export type ReleaseRecordWhereInput = {
    AND?: ReleaseRecordWhereInput | ReleaseRecordWhereInput[]
    OR?: ReleaseRecordWhereInput[]
    NOT?: ReleaseRecordWhereInput | ReleaseRecordWhereInput[]
    id?: StringFilter<"ReleaseRecord"> | string
    version?: StringFilter<"ReleaseRecord"> | string
    environment?: StringFilter<"ReleaseRecord"> | string
    status?: StringFilter<"ReleaseRecord"> | string
    userId?: StringFilter<"ReleaseRecord"> | string
    createdAt?: DateTimeFilter<"ReleaseRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReleaseRecordOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReleaseRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReleaseRecordWhereInput | ReleaseRecordWhereInput[]
    OR?: ReleaseRecordWhereInput[]
    NOT?: ReleaseRecordWhereInput | ReleaseRecordWhereInput[]
    version?: StringFilter<"ReleaseRecord"> | string
    environment?: StringFilter<"ReleaseRecord"> | string
    status?: StringFilter<"ReleaseRecord"> | string
    userId?: StringFilter<"ReleaseRecord"> | string
    createdAt?: DateTimeFilter<"ReleaseRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReleaseRecordOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ReleaseRecordCountOrderByAggregateInput
    _max?: ReleaseRecordMaxOrderByAggregateInput
    _min?: ReleaseRecordMinOrderByAggregateInput
  }

  export type ReleaseRecordScalarWhereWithAggregatesInput = {
    AND?: ReleaseRecordScalarWhereWithAggregatesInput | ReleaseRecordScalarWhereWithAggregatesInput[]
    OR?: ReleaseRecordScalarWhereWithAggregatesInput[]
    NOT?: ReleaseRecordScalarWhereWithAggregatesInput | ReleaseRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReleaseRecord"> | string
    version?: StringWithAggregatesFilter<"ReleaseRecord"> | string
    environment?: StringWithAggregatesFilter<"ReleaseRecord"> | string
    status?: StringWithAggregatesFilter<"ReleaseRecord"> | string
    userId?: StringWithAggregatesFilter<"ReleaseRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReleaseRecord"> | Date | string
  }

  export type TriggerItemWhereInput = {
    AND?: TriggerItemWhereInput | TriggerItemWhereInput[]
    OR?: TriggerItemWhereInput[]
    NOT?: TriggerItemWhereInput | TriggerItemWhereInput[]
    id?: StringFilter<"TriggerItem"> | string
    name?: StringFilter<"TriggerItem"> | string
    branch?: StringFilter<"TriggerItem"> | string
    status?: StringFilter<"TriggerItem"> | string
    source?: StringFilter<"TriggerItem"> | string
    userId?: StringFilter<"TriggerItem"> | string
    createdAt?: DateTimeFilter<"TriggerItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TriggerItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TriggerItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerItemWhereInput | TriggerItemWhereInput[]
    OR?: TriggerItemWhereInput[]
    NOT?: TriggerItemWhereInput | TriggerItemWhereInput[]
    name?: StringFilter<"TriggerItem"> | string
    branch?: StringFilter<"TriggerItem"> | string
    status?: StringFilter<"TriggerItem"> | string
    source?: StringFilter<"TriggerItem"> | string
    userId?: StringFilter<"TriggerItem"> | string
    createdAt?: DateTimeFilter<"TriggerItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TriggerItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: TriggerItemCountOrderByAggregateInput
    _max?: TriggerItemMaxOrderByAggregateInput
    _min?: TriggerItemMinOrderByAggregateInput
  }

  export type TriggerItemScalarWhereWithAggregatesInput = {
    AND?: TriggerItemScalarWhereWithAggregatesInput | TriggerItemScalarWhereWithAggregatesInput[]
    OR?: TriggerItemScalarWhereWithAggregatesInput[]
    NOT?: TriggerItemScalarWhereWithAggregatesInput | TriggerItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TriggerItem"> | string
    name?: StringWithAggregatesFilter<"TriggerItem"> | string
    branch?: StringWithAggregatesFilter<"TriggerItem"> | string
    status?: StringWithAggregatesFilter<"TriggerItem"> | string
    source?: StringWithAggregatesFilter<"TriggerItem"> | string
    userId?: StringWithAggregatesFilter<"TriggerItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TriggerItem"> | Date | string
  }

  export type WebhookItemWhereInput = {
    AND?: WebhookItemWhereInput | WebhookItemWhereInput[]
    OR?: WebhookItemWhereInput[]
    NOT?: WebhookItemWhereInput | WebhookItemWhereInput[]
    id?: StringFilter<"WebhookItem"> | string
    name?: StringFilter<"WebhookItem"> | string
    connectionStatus?: StringFilter<"WebhookItem"> | string
    state?: StringFilter<"WebhookItem"> | string
    provider?: StringFilter<"WebhookItem"> | string
    userId?: StringFilter<"WebhookItem"> | string
    createdAt?: DateTimeFilter<"WebhookItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WebhookItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    connectionStatus?: SortOrder
    state?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WebhookItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookItemWhereInput | WebhookItemWhereInput[]
    OR?: WebhookItemWhereInput[]
    NOT?: WebhookItemWhereInput | WebhookItemWhereInput[]
    name?: StringFilter<"WebhookItem"> | string
    connectionStatus?: StringFilter<"WebhookItem"> | string
    state?: StringFilter<"WebhookItem"> | string
    provider?: StringFilter<"WebhookItem"> | string
    userId?: StringFilter<"WebhookItem"> | string
    createdAt?: DateTimeFilter<"WebhookItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type WebhookItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    connectionStatus?: SortOrder
    state?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: WebhookItemCountOrderByAggregateInput
    _max?: WebhookItemMaxOrderByAggregateInput
    _min?: WebhookItemMinOrderByAggregateInput
  }

  export type WebhookItemScalarWhereWithAggregatesInput = {
    AND?: WebhookItemScalarWhereWithAggregatesInput | WebhookItemScalarWhereWithAggregatesInput[]
    OR?: WebhookItemScalarWhereWithAggregatesInput[]
    NOT?: WebhookItemScalarWhereWithAggregatesInput | WebhookItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookItem"> | string
    name?: StringWithAggregatesFilter<"WebhookItem"> | string
    connectionStatus?: StringWithAggregatesFilter<"WebhookItem"> | string
    state?: StringWithAggregatesFilter<"WebhookItem"> | string
    provider?: StringWithAggregatesFilter<"WebhookItem"> | string
    userId?: StringWithAggregatesFilter<"WebhookItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WebhookItem"> | Date | string
  }

  export type ServiceItemWhereInput = {
    AND?: ServiceItemWhereInput | ServiceItemWhereInput[]
    OR?: ServiceItemWhereInput[]
    NOT?: ServiceItemWhereInput | ServiceItemWhereInput[]
    id?: StringFilter<"ServiceItem"> | string
    name?: StringFilter<"ServiceItem"> | string
    category?: StringFilter<"ServiceItem"> | string
    status?: StringFilter<"ServiceItem"> | string
    health?: StringFilter<"ServiceItem"> | string
    uptime?: StringFilter<"ServiceItem"> | string
    userId?: StringFilter<"ServiceItem"> | string
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ServiceItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    health?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ServiceItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceItemWhereInput | ServiceItemWhereInput[]
    OR?: ServiceItemWhereInput[]
    NOT?: ServiceItemWhereInput | ServiceItemWhereInput[]
    name?: StringFilter<"ServiceItem"> | string
    category?: StringFilter<"ServiceItem"> | string
    status?: StringFilter<"ServiceItem"> | string
    health?: StringFilter<"ServiceItem"> | string
    uptime?: StringFilter<"ServiceItem"> | string
    userId?: StringFilter<"ServiceItem"> | string
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ServiceItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    health?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceItemCountOrderByAggregateInput
    _max?: ServiceItemMaxOrderByAggregateInput
    _min?: ServiceItemMinOrderByAggregateInput
  }

  export type ServiceItemScalarWhereWithAggregatesInput = {
    AND?: ServiceItemScalarWhereWithAggregatesInput | ServiceItemScalarWhereWithAggregatesInput[]
    OR?: ServiceItemScalarWhereWithAggregatesInput[]
    NOT?: ServiceItemScalarWhereWithAggregatesInput | ServiceItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceItem"> | string
    name?: StringWithAggregatesFilter<"ServiceItem"> | string
    category?: StringWithAggregatesFilter<"ServiceItem"> | string
    status?: StringWithAggregatesFilter<"ServiceItem"> | string
    health?: StringWithAggregatesFilter<"ServiceItem"> | string
    uptime?: StringWithAggregatesFilter<"ServiceItem"> | string
    userId?: StringWithAggregatesFilter<"ServiceItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ServiceItem"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PipelineCreateInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPipelinesInput
    builds?: BuildCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: BuildUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPipelinesNestedInput
    builds?: BuildUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineCreateManyInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PipelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PipelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateInput = {
    id?: string
    buildNumber: number
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    createdAt?: Date | string
    pipeline?: PipelineCreateNestedOneWithoutBuildsInput
    user: UserCreateNestedOneWithoutBuildsInput
  }

  export type BuildUncheckedCreateInput = {
    id?: string
    buildNumber: number
    pipelineId?: string | null
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type BuildUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pipeline?: PipelineUpdateOneWithoutBuildsNestedInput
    user?: UserUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type BuildUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateManyInput = {
    id?: string
    buildNumber: number
    pipelineId?: string | null
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type BuildUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateInput = {
    id?: string
    name: string
    environment?: string
    branch?: string
    status?: string
    deployedBy?: string
    duration?: string
    durationSeconds?: number
    pipelineId?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDeploymentsInput
  }

  export type DeploymentUncheckedCreateInput = {
    id?: string
    name: string
    environment?: string
    branch?: string
    status?: string
    deployedBy?: string
    duration?: string
    durationSeconds?: number
    pipelineId?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type DeploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDeploymentsNestedInput
  }

  export type DeploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentCreateManyInput = {
    id?: string
    name: string
    environment?: string
    branch?: string
    status?: string
    deployedBy?: string
    duration?: string
    durationSeconds?: number
    pipelineId?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type DeploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    title: string
    type?: string
    userName: string
    details?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    title: string
    type?: string
    userName: string
    details?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutActivitiesNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    title: string
    type?: string
    userName: string
    details?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateInput = {
    id?: string
    level?: string
    service?: string
    message: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type SystemLogUncheckedCreateInput = {
    id?: string
    level?: string
    service?: string
    message: string
    userId: string
    createdAt?: Date | string
  }

  export type SystemLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type SystemLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogCreateManyInput = {
    id?: string
    level?: string
    service?: string
    message: string
    userId: string
    createdAt?: Date | string
  }

  export type SystemLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSecretCreateInput = {
    id?: string
    key: string
    environment?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSecretsInput
  }

  export type ProjectSecretUncheckedCreateInput = {
    id?: string
    key: string
    environment?: string
    status?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSecretUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSecretsNestedInput
  }

  export type ProjectSecretUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSecretCreateManyInput = {
    id?: string
    key: string
    environment?: string
    status?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSecretUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSecretUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentConfigCreateInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    uptime?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEnvironmentsInput
  }

  export type EnvironmentConfigUncheckedCreateInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    uptime?: string
    userId: string
    createdAt?: Date | string
  }

  export type EnvironmentConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnvironmentsNestedInput
  }

  export type EnvironmentConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentConfigCreateManyInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    uptime?: string
    userId: string
    createdAt?: Date | string
  }

  export type EnvironmentConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseRecordCreateInput = {
    id?: string
    version: string
    environment?: string
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReleasesInput
  }

  export type ReleaseRecordUncheckedCreateInput = {
    id?: string
    version: string
    environment?: string
    status?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReleaseRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReleasesNestedInput
  }

  export type ReleaseRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseRecordCreateManyInput = {
    id?: string
    version: string
    environment?: string
    status?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReleaseRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerItemCreateInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    source?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTriggersInput
  }

  export type TriggerItemUncheckedCreateInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    source?: string
    userId: string
    createdAt?: Date | string
  }

  export type TriggerItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTriggersNestedInput
  }

  export type TriggerItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerItemCreateManyInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    source?: string
    userId: string
    createdAt?: Date | string
  }

  export type TriggerItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookItemCreateInput = {
    id?: string
    name: string
    connectionStatus?: string
    state?: string
    provider?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWebhooksInput
  }

  export type WebhookItemUncheckedCreateInput = {
    id?: string
    name: string
    connectionStatus?: string
    state?: string
    provider?: string
    userId: string
    createdAt?: Date | string
  }

  export type WebhookItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWebhooksNestedInput
  }

  export type WebhookItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookItemCreateManyInput = {
    id?: string
    name: string
    connectionStatus?: string
    state?: string
    provider?: string
    userId: string
    createdAt?: Date | string
  }

  export type WebhookItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemCreateInput = {
    id?: string
    name: string
    category?: string
    status?: string
    health?: string
    uptime?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutServicesInput
  }

  export type ServiceItemUncheckedCreateInput = {
    id?: string
    name: string
    category?: string
    status?: string
    health?: string
    uptime?: string
    userId: string
    createdAt?: Date | string
  }

  export type ServiceItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemCreateManyInput = {
    id?: string
    name: string
    category?: string
    status?: string
    health?: string
    uptime?: string
    userId: string
    createdAt?: Date | string
  }

  export type ServiceItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type PipelineListRelationFilter = {
    every?: PipelineWhereInput
    some?: PipelineWhereInput
    none?: PipelineWhereInput
  }

  export type BuildListRelationFilter = {
    every?: BuildWhereInput
    some?: BuildWhereInput
    none?: BuildWhereInput
  }

  export type DeploymentListRelationFilter = {
    every?: DeploymentWhereInput
    some?: DeploymentWhereInput
    none?: DeploymentWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SystemLogListRelationFilter = {
    every?: SystemLogWhereInput
    some?: SystemLogWhereInput
    none?: SystemLogWhereInput
  }

  export type ProjectSecretListRelationFilter = {
    every?: ProjectSecretWhereInput
    some?: ProjectSecretWhereInput
    none?: ProjectSecretWhereInput
  }

  export type EnvironmentConfigListRelationFilter = {
    every?: EnvironmentConfigWhereInput
    some?: EnvironmentConfigWhereInput
    none?: EnvironmentConfigWhereInput
  }

  export type ReleaseRecordListRelationFilter = {
    every?: ReleaseRecordWhereInput
    some?: ReleaseRecordWhereInput
    none?: ReleaseRecordWhereInput
  }

  export type TriggerItemListRelationFilter = {
    every?: TriggerItemWhereInput
    some?: TriggerItemWhereInput
    none?: TriggerItemWhereInput
  }

  export type WebhookItemListRelationFilter = {
    every?: WebhookItemWhereInput
    some?: WebhookItemWhereInput
    none?: WebhookItemWhereInput
  }

  export type ServiceItemListRelationFilter = {
    every?: ServiceItemWhereInput
    some?: ServiceItemWhereInput
    none?: ServiceItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PipelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BuildOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeploymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectSecretOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnvironmentConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReleaseRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TriggerItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PipelineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    branch?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    triggerType?: SortOrder
    lastRunAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PipelineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    branch?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    triggerType?: SortOrder
    lastRunAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PipelineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    repository?: SortOrder
    branch?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    triggerType?: SortOrder
    lastRunAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PipelineNullableScalarRelationFilter = {
    is?: PipelineWhereInput | null
    isNot?: PipelineWhereInput | null
  }

  export type BuildCountOrderByAggregateInput = {
    id?: SortOrder
    buildNumber?: SortOrder
    pipelineId?: SortOrder
    pipelineName?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrder
    commitMessage?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    triggeredBy?: SortOrder
    logs?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BuildAvgOrderByAggregateInput = {
    buildNumber?: SortOrder
    durationSeconds?: SortOrder
  }

  export type BuildMaxOrderByAggregateInput = {
    id?: SortOrder
    buildNumber?: SortOrder
    pipelineId?: SortOrder
    pipelineName?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrder
    commitMessage?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    triggeredBy?: SortOrder
    logs?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BuildMinOrderByAggregateInput = {
    id?: SortOrder
    buildNumber?: SortOrder
    pipelineId?: SortOrder
    pipelineName?: SortOrder
    branch?: SortOrder
    commitHash?: SortOrder
    commitMessage?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    triggeredBy?: SortOrder
    logs?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type BuildSumOrderByAggregateInput = {
    buildNumber?: SortOrder
    durationSeconds?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DeploymentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    environment?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    deployedBy?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    pipelineId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeploymentAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type DeploymentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    environment?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    deployedBy?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    pipelineId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeploymentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    environment?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    deployedBy?: SortOrder
    duration?: SortOrder
    durationSeconds?: SortOrder
    pipelineId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type DeploymentSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    userName?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    userName?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    type?: SortOrder
    userName?: SortOrder
    details?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogCountOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    service?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogMaxOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    service?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type SystemLogMinOrderByAggregateInput = {
    id?: SortOrder
    level?: SortOrder
    service?: SortOrder
    message?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectSecretCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSecretMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSecretMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnvironmentConfigCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnvironmentConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnvironmentConfigMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReleaseRecordCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReleaseRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReleaseRecordMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    environment?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TriggerItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TriggerItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type TriggerItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    branch?: SortOrder
    status?: SortOrder
    source?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    connectionStatus?: SortOrder
    state?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    connectionStatus?: SortOrder
    state?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type WebhookItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    connectionStatus?: SortOrder
    state?: SortOrder
    provider?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    health?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    health?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    health?: SortOrder
    uptime?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PipelineCreateNestedManyWithoutUserInput = {
    create?: XOR<PipelineCreateWithoutUserInput, PipelineUncheckedCreateWithoutUserInput> | PipelineCreateWithoutUserInput[] | PipelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutUserInput | PipelineCreateOrConnectWithoutUserInput[]
    createMany?: PipelineCreateManyUserInputEnvelope
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
  }

  export type BuildCreateNestedManyWithoutUserInput = {
    create?: XOR<BuildCreateWithoutUserInput, BuildUncheckedCreateWithoutUserInput> | BuildCreateWithoutUserInput[] | BuildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutUserInput | BuildCreateOrConnectWithoutUserInput[]
    createMany?: BuildCreateManyUserInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type DeploymentCreateNestedManyWithoutUserInput = {
    create?: XOR<DeploymentCreateWithoutUserInput, DeploymentUncheckedCreateWithoutUserInput> | DeploymentCreateWithoutUserInput[] | DeploymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutUserInput | DeploymentCreateOrConnectWithoutUserInput[]
    createMany?: DeploymentCreateManyUserInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type SystemLogCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
  }

  export type ProjectSecretCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectSecretCreateWithoutUserInput, ProjectSecretUncheckedCreateWithoutUserInput> | ProjectSecretCreateWithoutUserInput[] | ProjectSecretUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSecretCreateOrConnectWithoutUserInput | ProjectSecretCreateOrConnectWithoutUserInput[]
    createMany?: ProjectSecretCreateManyUserInputEnvelope
    connect?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
  }

  export type EnvironmentConfigCreateNestedManyWithoutUserInput = {
    create?: XOR<EnvironmentConfigCreateWithoutUserInput, EnvironmentConfigUncheckedCreateWithoutUserInput> | EnvironmentConfigCreateWithoutUserInput[] | EnvironmentConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentConfigCreateOrConnectWithoutUserInput | EnvironmentConfigCreateOrConnectWithoutUserInput[]
    createMany?: EnvironmentConfigCreateManyUserInputEnvelope
    connect?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
  }

  export type ReleaseRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<ReleaseRecordCreateWithoutUserInput, ReleaseRecordUncheckedCreateWithoutUserInput> | ReleaseRecordCreateWithoutUserInput[] | ReleaseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReleaseRecordCreateOrConnectWithoutUserInput | ReleaseRecordCreateOrConnectWithoutUserInput[]
    createMany?: ReleaseRecordCreateManyUserInputEnvelope
    connect?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
  }

  export type TriggerItemCreateNestedManyWithoutUserInput = {
    create?: XOR<TriggerItemCreateWithoutUserInput, TriggerItemUncheckedCreateWithoutUserInput> | TriggerItemCreateWithoutUserInput[] | TriggerItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriggerItemCreateOrConnectWithoutUserInput | TriggerItemCreateOrConnectWithoutUserInput[]
    createMany?: TriggerItemCreateManyUserInputEnvelope
    connect?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
  }

  export type WebhookItemCreateNestedManyWithoutUserInput = {
    create?: XOR<WebhookItemCreateWithoutUserInput, WebhookItemUncheckedCreateWithoutUserInput> | WebhookItemCreateWithoutUserInput[] | WebhookItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebhookItemCreateOrConnectWithoutUserInput | WebhookItemCreateOrConnectWithoutUserInput[]
    createMany?: WebhookItemCreateManyUserInputEnvelope
    connect?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
  }

  export type ServiceItemCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceItemCreateWithoutUserInput, ServiceItemUncheckedCreateWithoutUserInput> | ServiceItemCreateWithoutUserInput[] | ServiceItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceItemCreateOrConnectWithoutUserInput | ServiceItemCreateOrConnectWithoutUserInput[]
    createMany?: ServiceItemCreateManyUserInputEnvelope
    connect?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PipelineUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PipelineCreateWithoutUserInput, PipelineUncheckedCreateWithoutUserInput> | PipelineCreateWithoutUserInput[] | PipelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutUserInput | PipelineCreateOrConnectWithoutUserInput[]
    createMany?: PipelineCreateManyUserInputEnvelope
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
  }

  export type BuildUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BuildCreateWithoutUserInput, BuildUncheckedCreateWithoutUserInput> | BuildCreateWithoutUserInput[] | BuildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutUserInput | BuildCreateOrConnectWithoutUserInput[]
    createMany?: BuildCreateManyUserInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type DeploymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeploymentCreateWithoutUserInput, DeploymentUncheckedCreateWithoutUserInput> | DeploymentCreateWithoutUserInput[] | DeploymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutUserInput | DeploymentCreateOrConnectWithoutUserInput[]
    createMany?: DeploymentCreateManyUserInputEnvelope
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type SystemLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
  }

  export type ProjectSecretUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectSecretCreateWithoutUserInput, ProjectSecretUncheckedCreateWithoutUserInput> | ProjectSecretCreateWithoutUserInput[] | ProjectSecretUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSecretCreateOrConnectWithoutUserInput | ProjectSecretCreateOrConnectWithoutUserInput[]
    createMany?: ProjectSecretCreateManyUserInputEnvelope
    connect?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
  }

  export type EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnvironmentConfigCreateWithoutUserInput, EnvironmentConfigUncheckedCreateWithoutUserInput> | EnvironmentConfigCreateWithoutUserInput[] | EnvironmentConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentConfigCreateOrConnectWithoutUserInput | EnvironmentConfigCreateOrConnectWithoutUserInput[]
    createMany?: EnvironmentConfigCreateManyUserInputEnvelope
    connect?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
  }

  export type ReleaseRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReleaseRecordCreateWithoutUserInput, ReleaseRecordUncheckedCreateWithoutUserInput> | ReleaseRecordCreateWithoutUserInput[] | ReleaseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReleaseRecordCreateOrConnectWithoutUserInput | ReleaseRecordCreateOrConnectWithoutUserInput[]
    createMany?: ReleaseRecordCreateManyUserInputEnvelope
    connect?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
  }

  export type TriggerItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TriggerItemCreateWithoutUserInput, TriggerItemUncheckedCreateWithoutUserInput> | TriggerItemCreateWithoutUserInput[] | TriggerItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriggerItemCreateOrConnectWithoutUserInput | TriggerItemCreateOrConnectWithoutUserInput[]
    createMany?: TriggerItemCreateManyUserInputEnvelope
    connect?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
  }

  export type WebhookItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WebhookItemCreateWithoutUserInput, WebhookItemUncheckedCreateWithoutUserInput> | WebhookItemCreateWithoutUserInput[] | WebhookItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebhookItemCreateOrConnectWithoutUserInput | WebhookItemCreateOrConnectWithoutUserInput[]
    createMany?: WebhookItemCreateManyUserInputEnvelope
    connect?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
  }

  export type ServiceItemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceItemCreateWithoutUserInput, ServiceItemUncheckedCreateWithoutUserInput> | ServiceItemCreateWithoutUserInput[] | ServiceItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceItemCreateOrConnectWithoutUserInput | ServiceItemCreateOrConnectWithoutUserInput[]
    createMany?: ServiceItemCreateManyUserInputEnvelope
    connect?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PipelineUpdateManyWithoutUserNestedInput = {
    create?: XOR<PipelineCreateWithoutUserInput, PipelineUncheckedCreateWithoutUserInput> | PipelineCreateWithoutUserInput[] | PipelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutUserInput | PipelineCreateOrConnectWithoutUserInput[]
    upsert?: PipelineUpsertWithWhereUniqueWithoutUserInput | PipelineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PipelineCreateManyUserInputEnvelope
    set?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    disconnect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    delete?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    update?: PipelineUpdateWithWhereUniqueWithoutUserInput | PipelineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PipelineUpdateManyWithWhereWithoutUserInput | PipelineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
  }

  export type BuildUpdateManyWithoutUserNestedInput = {
    create?: XOR<BuildCreateWithoutUserInput, BuildUncheckedCreateWithoutUserInput> | BuildCreateWithoutUserInput[] | BuildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutUserInput | BuildCreateOrConnectWithoutUserInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutUserInput | BuildUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BuildCreateManyUserInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutUserInput | BuildUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutUserInput | BuildUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type DeploymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeploymentCreateWithoutUserInput, DeploymentUncheckedCreateWithoutUserInput> | DeploymentCreateWithoutUserInput[] | DeploymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutUserInput | DeploymentCreateOrConnectWithoutUserInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutUserInput | DeploymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeploymentCreateManyUserInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutUserInput | DeploymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutUserInput | DeploymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type SystemLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    upsert?: SystemLogUpsertWithWhereUniqueWithoutUserInput | SystemLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    set?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    disconnect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    delete?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    update?: SystemLogUpdateWithWhereUniqueWithoutUserInput | SystemLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemLogUpdateManyWithWhereWithoutUserInput | SystemLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
  }

  export type ProjectSecretUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectSecretCreateWithoutUserInput, ProjectSecretUncheckedCreateWithoutUserInput> | ProjectSecretCreateWithoutUserInput[] | ProjectSecretUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSecretCreateOrConnectWithoutUserInput | ProjectSecretCreateOrConnectWithoutUserInput[]
    upsert?: ProjectSecretUpsertWithWhereUniqueWithoutUserInput | ProjectSecretUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectSecretCreateManyUserInputEnvelope
    set?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    disconnect?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    delete?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    connect?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    update?: ProjectSecretUpdateWithWhereUniqueWithoutUserInput | ProjectSecretUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectSecretUpdateManyWithWhereWithoutUserInput | ProjectSecretUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectSecretScalarWhereInput | ProjectSecretScalarWhereInput[]
  }

  export type EnvironmentConfigUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnvironmentConfigCreateWithoutUserInput, EnvironmentConfigUncheckedCreateWithoutUserInput> | EnvironmentConfigCreateWithoutUserInput[] | EnvironmentConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentConfigCreateOrConnectWithoutUserInput | EnvironmentConfigCreateOrConnectWithoutUserInput[]
    upsert?: EnvironmentConfigUpsertWithWhereUniqueWithoutUserInput | EnvironmentConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnvironmentConfigCreateManyUserInputEnvelope
    set?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    disconnect?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    delete?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    connect?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    update?: EnvironmentConfigUpdateWithWhereUniqueWithoutUserInput | EnvironmentConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnvironmentConfigUpdateManyWithWhereWithoutUserInput | EnvironmentConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnvironmentConfigScalarWhereInput | EnvironmentConfigScalarWhereInput[]
  }

  export type ReleaseRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReleaseRecordCreateWithoutUserInput, ReleaseRecordUncheckedCreateWithoutUserInput> | ReleaseRecordCreateWithoutUserInput[] | ReleaseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReleaseRecordCreateOrConnectWithoutUserInput | ReleaseRecordCreateOrConnectWithoutUserInput[]
    upsert?: ReleaseRecordUpsertWithWhereUniqueWithoutUserInput | ReleaseRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReleaseRecordCreateManyUserInputEnvelope
    set?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    disconnect?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    delete?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    connect?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    update?: ReleaseRecordUpdateWithWhereUniqueWithoutUserInput | ReleaseRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReleaseRecordUpdateManyWithWhereWithoutUserInput | ReleaseRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReleaseRecordScalarWhereInput | ReleaseRecordScalarWhereInput[]
  }

  export type TriggerItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<TriggerItemCreateWithoutUserInput, TriggerItemUncheckedCreateWithoutUserInput> | TriggerItemCreateWithoutUserInput[] | TriggerItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriggerItemCreateOrConnectWithoutUserInput | TriggerItemCreateOrConnectWithoutUserInput[]
    upsert?: TriggerItemUpsertWithWhereUniqueWithoutUserInput | TriggerItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TriggerItemCreateManyUserInputEnvelope
    set?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    disconnect?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    delete?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    connect?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    update?: TriggerItemUpdateWithWhereUniqueWithoutUserInput | TriggerItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TriggerItemUpdateManyWithWhereWithoutUserInput | TriggerItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TriggerItemScalarWhereInput | TriggerItemScalarWhereInput[]
  }

  export type WebhookItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebhookItemCreateWithoutUserInput, WebhookItemUncheckedCreateWithoutUserInput> | WebhookItemCreateWithoutUserInput[] | WebhookItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebhookItemCreateOrConnectWithoutUserInput | WebhookItemCreateOrConnectWithoutUserInput[]
    upsert?: WebhookItemUpsertWithWhereUniqueWithoutUserInput | WebhookItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebhookItemCreateManyUserInputEnvelope
    set?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    disconnect?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    delete?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    connect?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    update?: WebhookItemUpdateWithWhereUniqueWithoutUserInput | WebhookItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebhookItemUpdateManyWithWhereWithoutUserInput | WebhookItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebhookItemScalarWhereInput | WebhookItemScalarWhereInput[]
  }

  export type ServiceItemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceItemCreateWithoutUserInput, ServiceItemUncheckedCreateWithoutUserInput> | ServiceItemCreateWithoutUserInput[] | ServiceItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceItemCreateOrConnectWithoutUserInput | ServiceItemCreateOrConnectWithoutUserInput[]
    upsert?: ServiceItemUpsertWithWhereUniqueWithoutUserInput | ServiceItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceItemCreateManyUserInputEnvelope
    set?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    disconnect?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    delete?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    connect?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    update?: ServiceItemUpdateWithWhereUniqueWithoutUserInput | ServiceItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceItemUpdateManyWithWhereWithoutUserInput | ServiceItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceItemScalarWhereInput | ServiceItemScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PipelineUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PipelineCreateWithoutUserInput, PipelineUncheckedCreateWithoutUserInput> | PipelineCreateWithoutUserInput[] | PipelineUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutUserInput | PipelineCreateOrConnectWithoutUserInput[]
    upsert?: PipelineUpsertWithWhereUniqueWithoutUserInput | PipelineUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PipelineCreateManyUserInputEnvelope
    set?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    disconnect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    delete?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    update?: PipelineUpdateWithWhereUniqueWithoutUserInput | PipelineUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PipelineUpdateManyWithWhereWithoutUserInput | PipelineUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
  }

  export type BuildUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BuildCreateWithoutUserInput, BuildUncheckedCreateWithoutUserInput> | BuildCreateWithoutUserInput[] | BuildUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutUserInput | BuildCreateOrConnectWithoutUserInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutUserInput | BuildUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BuildCreateManyUserInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutUserInput | BuildUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutUserInput | BuildUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type DeploymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeploymentCreateWithoutUserInput, DeploymentUncheckedCreateWithoutUserInput> | DeploymentCreateWithoutUserInput[] | DeploymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeploymentCreateOrConnectWithoutUserInput | DeploymentCreateOrConnectWithoutUserInput[]
    upsert?: DeploymentUpsertWithWhereUniqueWithoutUserInput | DeploymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeploymentCreateManyUserInputEnvelope
    set?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    disconnect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    delete?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    connect?: DeploymentWhereUniqueInput | DeploymentWhereUniqueInput[]
    update?: DeploymentUpdateWithWhereUniqueWithoutUserInput | DeploymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeploymentUpdateManyWithWhereWithoutUserInput | DeploymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput> | ActivityLogCreateWithoutUserInput[] | ActivityLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput | ActivityLogCreateOrConnectWithoutUserInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput | ActivityLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ActivityLogCreateManyUserInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput | ActivityLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput | ActivityLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type SystemLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput> | SystemLogCreateWithoutUserInput[] | SystemLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SystemLogCreateOrConnectWithoutUserInput | SystemLogCreateOrConnectWithoutUserInput[]
    upsert?: SystemLogUpsertWithWhereUniqueWithoutUserInput | SystemLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SystemLogCreateManyUserInputEnvelope
    set?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    disconnect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    delete?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    connect?: SystemLogWhereUniqueInput | SystemLogWhereUniqueInput[]
    update?: SystemLogUpdateWithWhereUniqueWithoutUserInput | SystemLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SystemLogUpdateManyWithWhereWithoutUserInput | SystemLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
  }

  export type ProjectSecretUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectSecretCreateWithoutUserInput, ProjectSecretUncheckedCreateWithoutUserInput> | ProjectSecretCreateWithoutUserInput[] | ProjectSecretUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectSecretCreateOrConnectWithoutUserInput | ProjectSecretCreateOrConnectWithoutUserInput[]
    upsert?: ProjectSecretUpsertWithWhereUniqueWithoutUserInput | ProjectSecretUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectSecretCreateManyUserInputEnvelope
    set?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    disconnect?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    delete?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    connect?: ProjectSecretWhereUniqueInput | ProjectSecretWhereUniqueInput[]
    update?: ProjectSecretUpdateWithWhereUniqueWithoutUserInput | ProjectSecretUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectSecretUpdateManyWithWhereWithoutUserInput | ProjectSecretUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectSecretScalarWhereInput | ProjectSecretScalarWhereInput[]
  }

  export type EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnvironmentConfigCreateWithoutUserInput, EnvironmentConfigUncheckedCreateWithoutUserInput> | EnvironmentConfigCreateWithoutUserInput[] | EnvironmentConfigUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnvironmentConfigCreateOrConnectWithoutUserInput | EnvironmentConfigCreateOrConnectWithoutUserInput[]
    upsert?: EnvironmentConfigUpsertWithWhereUniqueWithoutUserInput | EnvironmentConfigUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnvironmentConfigCreateManyUserInputEnvelope
    set?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    disconnect?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    delete?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    connect?: EnvironmentConfigWhereUniqueInput | EnvironmentConfigWhereUniqueInput[]
    update?: EnvironmentConfigUpdateWithWhereUniqueWithoutUserInput | EnvironmentConfigUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnvironmentConfigUpdateManyWithWhereWithoutUserInput | EnvironmentConfigUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnvironmentConfigScalarWhereInput | EnvironmentConfigScalarWhereInput[]
  }

  export type ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReleaseRecordCreateWithoutUserInput, ReleaseRecordUncheckedCreateWithoutUserInput> | ReleaseRecordCreateWithoutUserInput[] | ReleaseRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReleaseRecordCreateOrConnectWithoutUserInput | ReleaseRecordCreateOrConnectWithoutUserInput[]
    upsert?: ReleaseRecordUpsertWithWhereUniqueWithoutUserInput | ReleaseRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReleaseRecordCreateManyUserInputEnvelope
    set?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    disconnect?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    delete?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    connect?: ReleaseRecordWhereUniqueInput | ReleaseRecordWhereUniqueInput[]
    update?: ReleaseRecordUpdateWithWhereUniqueWithoutUserInput | ReleaseRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReleaseRecordUpdateManyWithWhereWithoutUserInput | ReleaseRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReleaseRecordScalarWhereInput | ReleaseRecordScalarWhereInput[]
  }

  export type TriggerItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TriggerItemCreateWithoutUserInput, TriggerItemUncheckedCreateWithoutUserInput> | TriggerItemCreateWithoutUserInput[] | TriggerItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TriggerItemCreateOrConnectWithoutUserInput | TriggerItemCreateOrConnectWithoutUserInput[]
    upsert?: TriggerItemUpsertWithWhereUniqueWithoutUserInput | TriggerItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TriggerItemCreateManyUserInputEnvelope
    set?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    disconnect?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    delete?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    connect?: TriggerItemWhereUniqueInput | TriggerItemWhereUniqueInput[]
    update?: TriggerItemUpdateWithWhereUniqueWithoutUserInput | TriggerItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TriggerItemUpdateManyWithWhereWithoutUserInput | TriggerItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TriggerItemScalarWhereInput | TriggerItemScalarWhereInput[]
  }

  export type WebhookItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebhookItemCreateWithoutUserInput, WebhookItemUncheckedCreateWithoutUserInput> | WebhookItemCreateWithoutUserInput[] | WebhookItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebhookItemCreateOrConnectWithoutUserInput | WebhookItemCreateOrConnectWithoutUserInput[]
    upsert?: WebhookItemUpsertWithWhereUniqueWithoutUserInput | WebhookItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebhookItemCreateManyUserInputEnvelope
    set?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    disconnect?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    delete?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    connect?: WebhookItemWhereUniqueInput | WebhookItemWhereUniqueInput[]
    update?: WebhookItemUpdateWithWhereUniqueWithoutUserInput | WebhookItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebhookItemUpdateManyWithWhereWithoutUserInput | WebhookItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebhookItemScalarWhereInput | WebhookItemScalarWhereInput[]
  }

  export type ServiceItemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceItemCreateWithoutUserInput, ServiceItemUncheckedCreateWithoutUserInput> | ServiceItemCreateWithoutUserInput[] | ServiceItemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceItemCreateOrConnectWithoutUserInput | ServiceItemCreateOrConnectWithoutUserInput[]
    upsert?: ServiceItemUpsertWithWhereUniqueWithoutUserInput | ServiceItemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceItemCreateManyUserInputEnvelope
    set?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    disconnect?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    delete?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    connect?: ServiceItemWhereUniqueInput | ServiceItemWhereUniqueInput[]
    update?: ServiceItemUpdateWithWhereUniqueWithoutUserInput | ServiceItemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceItemUpdateManyWithWhereWithoutUserInput | ServiceItemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceItemScalarWhereInput | ServiceItemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutPipelinesInput = {
    create?: XOR<UserCreateWithoutPipelinesInput, UserUncheckedCreateWithoutPipelinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPipelinesInput
    connect?: UserWhereUniqueInput
  }

  export type BuildCreateNestedManyWithoutPipelineInput = {
    create?: XOR<BuildCreateWithoutPipelineInput, BuildUncheckedCreateWithoutPipelineInput> | BuildCreateWithoutPipelineInput[] | BuildUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutPipelineInput | BuildCreateOrConnectWithoutPipelineInput[]
    createMany?: BuildCreateManyPipelineInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type BuildUncheckedCreateNestedManyWithoutPipelineInput = {
    create?: XOR<BuildCreateWithoutPipelineInput, BuildUncheckedCreateWithoutPipelineInput> | BuildCreateWithoutPipelineInput[] | BuildUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutPipelineInput | BuildCreateOrConnectWithoutPipelineInput[]
    createMany?: BuildCreateManyPipelineInputEnvelope
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutPipelinesNestedInput = {
    create?: XOR<UserCreateWithoutPipelinesInput, UserUncheckedCreateWithoutPipelinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPipelinesInput
    upsert?: UserUpsertWithoutPipelinesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPipelinesInput, UserUpdateWithoutPipelinesInput>, UserUncheckedUpdateWithoutPipelinesInput>
  }

  export type BuildUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<BuildCreateWithoutPipelineInput, BuildUncheckedCreateWithoutPipelineInput> | BuildCreateWithoutPipelineInput[] | BuildUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutPipelineInput | BuildCreateOrConnectWithoutPipelineInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutPipelineInput | BuildUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: BuildCreateManyPipelineInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutPipelineInput | BuildUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutPipelineInput | BuildUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type BuildUncheckedUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<BuildCreateWithoutPipelineInput, BuildUncheckedCreateWithoutPipelineInput> | BuildCreateWithoutPipelineInput[] | BuildUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: BuildCreateOrConnectWithoutPipelineInput | BuildCreateOrConnectWithoutPipelineInput[]
    upsert?: BuildUpsertWithWhereUniqueWithoutPipelineInput | BuildUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: BuildCreateManyPipelineInputEnvelope
    set?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    disconnect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    delete?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    connect?: BuildWhereUniqueInput | BuildWhereUniqueInput[]
    update?: BuildUpdateWithWhereUniqueWithoutPipelineInput | BuildUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: BuildUpdateManyWithWhereWithoutPipelineInput | BuildUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: BuildScalarWhereInput | BuildScalarWhereInput[]
  }

  export type PipelineCreateNestedOneWithoutBuildsInput = {
    create?: XOR<PipelineCreateWithoutBuildsInput, PipelineUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutBuildsInput
    connect?: PipelineWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBuildsInput = {
    create?: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuildsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PipelineUpdateOneWithoutBuildsNestedInput = {
    create?: XOR<PipelineCreateWithoutBuildsInput, PipelineUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutBuildsInput
    upsert?: PipelineUpsertWithoutBuildsInput
    disconnect?: PipelineWhereInput | boolean
    delete?: PipelineWhereInput | boolean
    connect?: PipelineWhereUniqueInput
    update?: XOR<XOR<PipelineUpdateToOneWithWhereWithoutBuildsInput, PipelineUpdateWithoutBuildsInput>, PipelineUncheckedUpdateWithoutBuildsInput>
  }

  export type UserUpdateOneRequiredWithoutBuildsNestedInput = {
    create?: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBuildsInput
    upsert?: UserUpsertWithoutBuildsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBuildsInput, UserUpdateWithoutBuildsInput>, UserUncheckedUpdateWithoutBuildsInput>
  }

  export type UserCreateNestedOneWithoutDeploymentsInput = {
    create?: XOR<UserCreateWithoutDeploymentsInput, UserUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeploymentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDeploymentsNestedInput = {
    create?: XOR<UserCreateWithoutDeploymentsInput, UserUncheckedCreateWithoutDeploymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeploymentsInput
    upsert?: UserUpsertWithoutDeploymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeploymentsInput, UserUpdateWithoutDeploymentsInput>, UserUncheckedUpdateWithoutDeploymentsInput>
  }

  export type UserCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivitiesInput
    upsert?: UserUpsertWithoutActivitiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivitiesInput, UserUpdateWithoutActivitiesInput>, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserCreateNestedOneWithoutSecretsInput = {
    create?: XOR<UserCreateWithoutSecretsInput, UserUncheckedCreateWithoutSecretsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecretsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSecretsNestedInput = {
    create?: XOR<UserCreateWithoutSecretsInput, UserUncheckedCreateWithoutSecretsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecretsInput
    upsert?: UserUpsertWithoutSecretsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecretsInput, UserUpdateWithoutSecretsInput>, UserUncheckedUpdateWithoutSecretsInput>
  }

  export type UserCreateNestedOneWithoutEnvironmentsInput = {
    create?: XOR<UserCreateWithoutEnvironmentsInput, UserUncheckedCreateWithoutEnvironmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnvironmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnvironmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnvironmentsInput, UserUncheckedCreateWithoutEnvironmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnvironmentsInput
    upsert?: UserUpsertWithoutEnvironmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnvironmentsInput, UserUpdateWithoutEnvironmentsInput>, UserUncheckedUpdateWithoutEnvironmentsInput>
  }

  export type UserCreateNestedOneWithoutReleasesInput = {
    create?: XOR<UserCreateWithoutReleasesInput, UserUncheckedCreateWithoutReleasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReleasesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReleasesNestedInput = {
    create?: XOR<UserCreateWithoutReleasesInput, UserUncheckedCreateWithoutReleasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReleasesInput
    upsert?: UserUpsertWithoutReleasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReleasesInput, UserUpdateWithoutReleasesInput>, UserUncheckedUpdateWithoutReleasesInput>
  }

  export type UserCreateNestedOneWithoutTriggersInput = {
    create?: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTriggersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTriggersNestedInput = {
    create?: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTriggersInput
    upsert?: UserUpsertWithoutTriggersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTriggersInput, UserUpdateWithoutTriggersInput>, UserUncheckedUpdateWithoutTriggersInput>
  }

  export type UserCreateNestedOneWithoutWebhooksInput = {
    create?: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebhooksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWebhooksNestedInput = {
    create?: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebhooksInput
    upsert?: UserUpsertWithoutWebhooksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebhooksInput, UserUpdateWithoutWebhooksInput>, UserUncheckedUpdateWithoutWebhooksInput>
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type PipelineCreateWithoutUserInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: BuildCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    builds?: BuildUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineCreateOrConnectWithoutUserInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutUserInput, PipelineUncheckedCreateWithoutUserInput>
  }

  export type PipelineCreateManyUserInputEnvelope = {
    data: PipelineCreateManyUserInput | PipelineCreateManyUserInput[]
  }

  export type BuildCreateWithoutUserInput = {
    id?: string
    buildNumber: number
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    createdAt?: Date | string
    pipeline?: PipelineCreateNestedOneWithoutBuildsInput
  }

  export type BuildUncheckedCreateWithoutUserInput = {
    id?: string
    buildNumber: number
    pipelineId?: string | null
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    createdAt?: Date | string
  }

  export type BuildCreateOrConnectWithoutUserInput = {
    where: BuildWhereUniqueInput
    create: XOR<BuildCreateWithoutUserInput, BuildUncheckedCreateWithoutUserInput>
  }

  export type BuildCreateManyUserInputEnvelope = {
    data: BuildCreateManyUserInput | BuildCreateManyUserInput[]
  }

  export type DeploymentCreateWithoutUserInput = {
    id?: string
    name: string
    environment?: string
    branch?: string
    status?: string
    deployedBy?: string
    duration?: string
    durationSeconds?: number
    pipelineId?: string | null
    createdAt?: Date | string
  }

  export type DeploymentUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    environment?: string
    branch?: string
    status?: string
    deployedBy?: string
    duration?: string
    durationSeconds?: number
    pipelineId?: string | null
    createdAt?: Date | string
  }

  export type DeploymentCreateOrConnectWithoutUserInput = {
    where: DeploymentWhereUniqueInput
    create: XOR<DeploymentCreateWithoutUserInput, DeploymentUncheckedCreateWithoutUserInput>
  }

  export type DeploymentCreateManyUserInputEnvelope = {
    data: DeploymentCreateManyUserInput | DeploymentCreateManyUserInput[]
  }

  export type ActivityLogCreateWithoutUserInput = {
    id?: string
    title: string
    type?: string
    userName: string
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    type?: string
    userName: string
    details?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogCreateManyUserInputEnvelope = {
    data: ActivityLogCreateManyUserInput | ActivityLogCreateManyUserInput[]
  }

  export type SystemLogCreateWithoutUserInput = {
    id?: string
    level?: string
    service?: string
    message: string
    createdAt?: Date | string
  }

  export type SystemLogUncheckedCreateWithoutUserInput = {
    id?: string
    level?: string
    service?: string
    message: string
    createdAt?: Date | string
  }

  export type SystemLogCreateOrConnectWithoutUserInput = {
    where: SystemLogWhereUniqueInput
    create: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput>
  }

  export type SystemLogCreateManyUserInputEnvelope = {
    data: SystemLogCreateManyUserInput | SystemLogCreateManyUserInput[]
  }

  export type ProjectSecretCreateWithoutUserInput = {
    id?: string
    key: string
    environment?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSecretUncheckedCreateWithoutUserInput = {
    id?: string
    key: string
    environment?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectSecretCreateOrConnectWithoutUserInput = {
    where: ProjectSecretWhereUniqueInput
    create: XOR<ProjectSecretCreateWithoutUserInput, ProjectSecretUncheckedCreateWithoutUserInput>
  }

  export type ProjectSecretCreateManyUserInputEnvelope = {
    data: ProjectSecretCreateManyUserInput | ProjectSecretCreateManyUserInput[]
  }

  export type EnvironmentConfigCreateWithoutUserInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    uptime?: string
    createdAt?: Date | string
  }

  export type EnvironmentConfigUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    uptime?: string
    createdAt?: Date | string
  }

  export type EnvironmentConfigCreateOrConnectWithoutUserInput = {
    where: EnvironmentConfigWhereUniqueInput
    create: XOR<EnvironmentConfigCreateWithoutUserInput, EnvironmentConfigUncheckedCreateWithoutUserInput>
  }

  export type EnvironmentConfigCreateManyUserInputEnvelope = {
    data: EnvironmentConfigCreateManyUserInput | EnvironmentConfigCreateManyUserInput[]
  }

  export type ReleaseRecordCreateWithoutUserInput = {
    id?: string
    version: string
    environment?: string
    status?: string
    createdAt?: Date | string
  }

  export type ReleaseRecordUncheckedCreateWithoutUserInput = {
    id?: string
    version: string
    environment?: string
    status?: string
    createdAt?: Date | string
  }

  export type ReleaseRecordCreateOrConnectWithoutUserInput = {
    where: ReleaseRecordWhereUniqueInput
    create: XOR<ReleaseRecordCreateWithoutUserInput, ReleaseRecordUncheckedCreateWithoutUserInput>
  }

  export type ReleaseRecordCreateManyUserInputEnvelope = {
    data: ReleaseRecordCreateManyUserInput | ReleaseRecordCreateManyUserInput[]
  }

  export type TriggerItemCreateWithoutUserInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    source?: string
    createdAt?: Date | string
  }

  export type TriggerItemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    source?: string
    createdAt?: Date | string
  }

  export type TriggerItemCreateOrConnectWithoutUserInput = {
    where: TriggerItemWhereUniqueInput
    create: XOR<TriggerItemCreateWithoutUserInput, TriggerItemUncheckedCreateWithoutUserInput>
  }

  export type TriggerItemCreateManyUserInputEnvelope = {
    data: TriggerItemCreateManyUserInput | TriggerItemCreateManyUserInput[]
  }

  export type WebhookItemCreateWithoutUserInput = {
    id?: string
    name: string
    connectionStatus?: string
    state?: string
    provider?: string
    createdAt?: Date | string
  }

  export type WebhookItemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    connectionStatus?: string
    state?: string
    provider?: string
    createdAt?: Date | string
  }

  export type WebhookItemCreateOrConnectWithoutUserInput = {
    where: WebhookItemWhereUniqueInput
    create: XOR<WebhookItemCreateWithoutUserInput, WebhookItemUncheckedCreateWithoutUserInput>
  }

  export type WebhookItemCreateManyUserInputEnvelope = {
    data: WebhookItemCreateManyUserInput | WebhookItemCreateManyUserInput[]
  }

  export type ServiceItemCreateWithoutUserInput = {
    id?: string
    name: string
    category?: string
    status?: string
    health?: string
    uptime?: string
    createdAt?: Date | string
  }

  export type ServiceItemUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    category?: string
    status?: string
    health?: string
    uptime?: string
    createdAt?: Date | string
  }

  export type ServiceItemCreateOrConnectWithoutUserInput = {
    where: ServiceItemWhereUniqueInput
    create: XOR<ServiceItemCreateWithoutUserInput, ServiceItemUncheckedCreateWithoutUserInput>
  }

  export type ServiceItemCreateManyUserInputEnvelope = {
    data: ServiceItemCreateManyUserInput | ServiceItemCreateManyUserInput[]
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type PipelineUpsertWithWhereUniqueWithoutUserInput = {
    where: PipelineWhereUniqueInput
    update: XOR<PipelineUpdateWithoutUserInput, PipelineUncheckedUpdateWithoutUserInput>
    create: XOR<PipelineCreateWithoutUserInput, PipelineUncheckedCreateWithoutUserInput>
  }

  export type PipelineUpdateWithWhereUniqueWithoutUserInput = {
    where: PipelineWhereUniqueInput
    data: XOR<PipelineUpdateWithoutUserInput, PipelineUncheckedUpdateWithoutUserInput>
  }

  export type PipelineUpdateManyWithWhereWithoutUserInput = {
    where: PipelineScalarWhereInput
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyWithoutUserInput>
  }

  export type PipelineScalarWhereInput = {
    AND?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
    OR?: PipelineScalarWhereInput[]
    NOT?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
    id?: StringFilter<"Pipeline"> | string
    name?: StringFilter<"Pipeline"> | string
    repository?: StringFilter<"Pipeline"> | string
    branch?: StringFilter<"Pipeline"> | string
    environment?: StringFilter<"Pipeline"> | string
    status?: StringFilter<"Pipeline"> | string
    triggerType?: StringFilter<"Pipeline"> | string
    lastRunAt?: DateTimeNullableFilter<"Pipeline"> | Date | string | null
    userId?: StringFilter<"Pipeline"> | string
    createdAt?: DateTimeFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeFilter<"Pipeline"> | Date | string
  }

  export type BuildUpsertWithWhereUniqueWithoutUserInput = {
    where: BuildWhereUniqueInput
    update: XOR<BuildUpdateWithoutUserInput, BuildUncheckedUpdateWithoutUserInput>
    create: XOR<BuildCreateWithoutUserInput, BuildUncheckedCreateWithoutUserInput>
  }

  export type BuildUpdateWithWhereUniqueWithoutUserInput = {
    where: BuildWhereUniqueInput
    data: XOR<BuildUpdateWithoutUserInput, BuildUncheckedUpdateWithoutUserInput>
  }

  export type BuildUpdateManyWithWhereWithoutUserInput = {
    where: BuildScalarWhereInput
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyWithoutUserInput>
  }

  export type BuildScalarWhereInput = {
    AND?: BuildScalarWhereInput | BuildScalarWhereInput[]
    OR?: BuildScalarWhereInput[]
    NOT?: BuildScalarWhereInput | BuildScalarWhereInput[]
    id?: StringFilter<"Build"> | string
    buildNumber?: IntFilter<"Build"> | number
    pipelineId?: StringNullableFilter<"Build"> | string | null
    pipelineName?: StringFilter<"Build"> | string
    branch?: StringFilter<"Build"> | string
    commitHash?: StringNullableFilter<"Build"> | string | null
    commitMessage?: StringNullableFilter<"Build"> | string | null
    status?: StringFilter<"Build"> | string
    duration?: StringFilter<"Build"> | string
    durationSeconds?: IntFilter<"Build"> | number
    triggeredBy?: StringFilter<"Build"> | string
    logs?: StringNullableFilter<"Build"> | string | null
    userId?: StringFilter<"Build"> | string
    createdAt?: DateTimeFilter<"Build"> | Date | string
  }

  export type DeploymentUpsertWithWhereUniqueWithoutUserInput = {
    where: DeploymentWhereUniqueInput
    update: XOR<DeploymentUpdateWithoutUserInput, DeploymentUncheckedUpdateWithoutUserInput>
    create: XOR<DeploymentCreateWithoutUserInput, DeploymentUncheckedCreateWithoutUserInput>
  }

  export type DeploymentUpdateWithWhereUniqueWithoutUserInput = {
    where: DeploymentWhereUniqueInput
    data: XOR<DeploymentUpdateWithoutUserInput, DeploymentUncheckedUpdateWithoutUserInput>
  }

  export type DeploymentUpdateManyWithWhereWithoutUserInput = {
    where: DeploymentScalarWhereInput
    data: XOR<DeploymentUpdateManyMutationInput, DeploymentUncheckedUpdateManyWithoutUserInput>
  }

  export type DeploymentScalarWhereInput = {
    AND?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    OR?: DeploymentScalarWhereInput[]
    NOT?: DeploymentScalarWhereInput | DeploymentScalarWhereInput[]
    id?: StringFilter<"Deployment"> | string
    name?: StringFilter<"Deployment"> | string
    environment?: StringFilter<"Deployment"> | string
    branch?: StringFilter<"Deployment"> | string
    status?: StringFilter<"Deployment"> | string
    deployedBy?: StringFilter<"Deployment"> | string
    duration?: StringFilter<"Deployment"> | string
    durationSeconds?: IntFilter<"Deployment"> | number
    pipelineId?: StringNullableFilter<"Deployment"> | string | null
    userId?: StringFilter<"Deployment"> | string
    createdAt?: DateTimeFilter<"Deployment"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
    create: XOR<ActivityLogCreateWithoutUserInput, ActivityLogUncheckedCreateWithoutUserInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutUserInput, ActivityLogUncheckedUpdateWithoutUserInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutUserInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    title?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    userName?: StringFilter<"ActivityLog"> | string
    details?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type SystemLogUpsertWithWhereUniqueWithoutUserInput = {
    where: SystemLogWhereUniqueInput
    update: XOR<SystemLogUpdateWithoutUserInput, SystemLogUncheckedUpdateWithoutUserInput>
    create: XOR<SystemLogCreateWithoutUserInput, SystemLogUncheckedCreateWithoutUserInput>
  }

  export type SystemLogUpdateWithWhereUniqueWithoutUserInput = {
    where: SystemLogWhereUniqueInput
    data: XOR<SystemLogUpdateWithoutUserInput, SystemLogUncheckedUpdateWithoutUserInput>
  }

  export type SystemLogUpdateManyWithWhereWithoutUserInput = {
    where: SystemLogScalarWhereInput
    data: XOR<SystemLogUpdateManyMutationInput, SystemLogUncheckedUpdateManyWithoutUserInput>
  }

  export type SystemLogScalarWhereInput = {
    AND?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
    OR?: SystemLogScalarWhereInput[]
    NOT?: SystemLogScalarWhereInput | SystemLogScalarWhereInput[]
    id?: StringFilter<"SystemLog"> | string
    level?: StringFilter<"SystemLog"> | string
    service?: StringFilter<"SystemLog"> | string
    message?: StringFilter<"SystemLog"> | string
    userId?: StringFilter<"SystemLog"> | string
    createdAt?: DateTimeFilter<"SystemLog"> | Date | string
  }

  export type ProjectSecretUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectSecretWhereUniqueInput
    update: XOR<ProjectSecretUpdateWithoutUserInput, ProjectSecretUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectSecretCreateWithoutUserInput, ProjectSecretUncheckedCreateWithoutUserInput>
  }

  export type ProjectSecretUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectSecretWhereUniqueInput
    data: XOR<ProjectSecretUpdateWithoutUserInput, ProjectSecretUncheckedUpdateWithoutUserInput>
  }

  export type ProjectSecretUpdateManyWithWhereWithoutUserInput = {
    where: ProjectSecretScalarWhereInput
    data: XOR<ProjectSecretUpdateManyMutationInput, ProjectSecretUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectSecretScalarWhereInput = {
    AND?: ProjectSecretScalarWhereInput | ProjectSecretScalarWhereInput[]
    OR?: ProjectSecretScalarWhereInput[]
    NOT?: ProjectSecretScalarWhereInput | ProjectSecretScalarWhereInput[]
    id?: StringFilter<"ProjectSecret"> | string
    key?: StringFilter<"ProjectSecret"> | string
    environment?: StringFilter<"ProjectSecret"> | string
    status?: StringFilter<"ProjectSecret"> | string
    userId?: StringFilter<"ProjectSecret"> | string
    createdAt?: DateTimeFilter<"ProjectSecret"> | Date | string
    updatedAt?: DateTimeFilter<"ProjectSecret"> | Date | string
  }

  export type EnvironmentConfigUpsertWithWhereUniqueWithoutUserInput = {
    where: EnvironmentConfigWhereUniqueInput
    update: XOR<EnvironmentConfigUpdateWithoutUserInput, EnvironmentConfigUncheckedUpdateWithoutUserInput>
    create: XOR<EnvironmentConfigCreateWithoutUserInput, EnvironmentConfigUncheckedCreateWithoutUserInput>
  }

  export type EnvironmentConfigUpdateWithWhereUniqueWithoutUserInput = {
    where: EnvironmentConfigWhereUniqueInput
    data: XOR<EnvironmentConfigUpdateWithoutUserInput, EnvironmentConfigUncheckedUpdateWithoutUserInput>
  }

  export type EnvironmentConfigUpdateManyWithWhereWithoutUserInput = {
    where: EnvironmentConfigScalarWhereInput
    data: XOR<EnvironmentConfigUpdateManyMutationInput, EnvironmentConfigUncheckedUpdateManyWithoutUserInput>
  }

  export type EnvironmentConfigScalarWhereInput = {
    AND?: EnvironmentConfigScalarWhereInput | EnvironmentConfigScalarWhereInput[]
    OR?: EnvironmentConfigScalarWhereInput[]
    NOT?: EnvironmentConfigScalarWhereInput | EnvironmentConfigScalarWhereInput[]
    id?: StringFilter<"EnvironmentConfig"> | string
    name?: StringFilter<"EnvironmentConfig"> | string
    branch?: StringFilter<"EnvironmentConfig"> | string
    status?: StringFilter<"EnvironmentConfig"> | string
    uptime?: StringFilter<"EnvironmentConfig"> | string
    userId?: StringFilter<"EnvironmentConfig"> | string
    createdAt?: DateTimeFilter<"EnvironmentConfig"> | Date | string
  }

  export type ReleaseRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: ReleaseRecordWhereUniqueInput
    update: XOR<ReleaseRecordUpdateWithoutUserInput, ReleaseRecordUncheckedUpdateWithoutUserInput>
    create: XOR<ReleaseRecordCreateWithoutUserInput, ReleaseRecordUncheckedCreateWithoutUserInput>
  }

  export type ReleaseRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: ReleaseRecordWhereUniqueInput
    data: XOR<ReleaseRecordUpdateWithoutUserInput, ReleaseRecordUncheckedUpdateWithoutUserInput>
  }

  export type ReleaseRecordUpdateManyWithWhereWithoutUserInput = {
    where: ReleaseRecordScalarWhereInput
    data: XOR<ReleaseRecordUpdateManyMutationInput, ReleaseRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type ReleaseRecordScalarWhereInput = {
    AND?: ReleaseRecordScalarWhereInput | ReleaseRecordScalarWhereInput[]
    OR?: ReleaseRecordScalarWhereInput[]
    NOT?: ReleaseRecordScalarWhereInput | ReleaseRecordScalarWhereInput[]
    id?: StringFilter<"ReleaseRecord"> | string
    version?: StringFilter<"ReleaseRecord"> | string
    environment?: StringFilter<"ReleaseRecord"> | string
    status?: StringFilter<"ReleaseRecord"> | string
    userId?: StringFilter<"ReleaseRecord"> | string
    createdAt?: DateTimeFilter<"ReleaseRecord"> | Date | string
  }

  export type TriggerItemUpsertWithWhereUniqueWithoutUserInput = {
    where: TriggerItemWhereUniqueInput
    update: XOR<TriggerItemUpdateWithoutUserInput, TriggerItemUncheckedUpdateWithoutUserInput>
    create: XOR<TriggerItemCreateWithoutUserInput, TriggerItemUncheckedCreateWithoutUserInput>
  }

  export type TriggerItemUpdateWithWhereUniqueWithoutUserInput = {
    where: TriggerItemWhereUniqueInput
    data: XOR<TriggerItemUpdateWithoutUserInput, TriggerItemUncheckedUpdateWithoutUserInput>
  }

  export type TriggerItemUpdateManyWithWhereWithoutUserInput = {
    where: TriggerItemScalarWhereInput
    data: XOR<TriggerItemUpdateManyMutationInput, TriggerItemUncheckedUpdateManyWithoutUserInput>
  }

  export type TriggerItemScalarWhereInput = {
    AND?: TriggerItemScalarWhereInput | TriggerItemScalarWhereInput[]
    OR?: TriggerItemScalarWhereInput[]
    NOT?: TriggerItemScalarWhereInput | TriggerItemScalarWhereInput[]
    id?: StringFilter<"TriggerItem"> | string
    name?: StringFilter<"TriggerItem"> | string
    branch?: StringFilter<"TriggerItem"> | string
    status?: StringFilter<"TriggerItem"> | string
    source?: StringFilter<"TriggerItem"> | string
    userId?: StringFilter<"TriggerItem"> | string
    createdAt?: DateTimeFilter<"TriggerItem"> | Date | string
  }

  export type WebhookItemUpsertWithWhereUniqueWithoutUserInput = {
    where: WebhookItemWhereUniqueInput
    update: XOR<WebhookItemUpdateWithoutUserInput, WebhookItemUncheckedUpdateWithoutUserInput>
    create: XOR<WebhookItemCreateWithoutUserInput, WebhookItemUncheckedCreateWithoutUserInput>
  }

  export type WebhookItemUpdateWithWhereUniqueWithoutUserInput = {
    where: WebhookItemWhereUniqueInput
    data: XOR<WebhookItemUpdateWithoutUserInput, WebhookItemUncheckedUpdateWithoutUserInput>
  }

  export type WebhookItemUpdateManyWithWhereWithoutUserInput = {
    where: WebhookItemScalarWhereInput
    data: XOR<WebhookItemUpdateManyMutationInput, WebhookItemUncheckedUpdateManyWithoutUserInput>
  }

  export type WebhookItemScalarWhereInput = {
    AND?: WebhookItemScalarWhereInput | WebhookItemScalarWhereInput[]
    OR?: WebhookItemScalarWhereInput[]
    NOT?: WebhookItemScalarWhereInput | WebhookItemScalarWhereInput[]
    id?: StringFilter<"WebhookItem"> | string
    name?: StringFilter<"WebhookItem"> | string
    connectionStatus?: StringFilter<"WebhookItem"> | string
    state?: StringFilter<"WebhookItem"> | string
    provider?: StringFilter<"WebhookItem"> | string
    userId?: StringFilter<"WebhookItem"> | string
    createdAt?: DateTimeFilter<"WebhookItem"> | Date | string
  }

  export type ServiceItemUpsertWithWhereUniqueWithoutUserInput = {
    where: ServiceItemWhereUniqueInput
    update: XOR<ServiceItemUpdateWithoutUserInput, ServiceItemUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceItemCreateWithoutUserInput, ServiceItemUncheckedCreateWithoutUserInput>
  }

  export type ServiceItemUpdateWithWhereUniqueWithoutUserInput = {
    where: ServiceItemWhereUniqueInput
    data: XOR<ServiceItemUpdateWithoutUserInput, ServiceItemUncheckedUpdateWithoutUserInput>
  }

  export type ServiceItemUpdateManyWithWhereWithoutUserInput = {
    where: ServiceItemScalarWhereInput
    data: XOR<ServiceItemUpdateManyMutationInput, ServiceItemUncheckedUpdateManyWithoutUserInput>
  }

  export type ServiceItemScalarWhereInput = {
    AND?: ServiceItemScalarWhereInput | ServiceItemScalarWhereInput[]
    OR?: ServiceItemScalarWhereInput[]
    NOT?: ServiceItemScalarWhereInput | ServiceItemScalarWhereInput[]
    id?: StringFilter<"ServiceItem"> | string
    name?: StringFilter<"ServiceItem"> | string
    category?: StringFilter<"ServiceItem"> | string
    status?: StringFilter<"ServiceItem"> | string
    health?: StringFilter<"ServiceItem"> | string
    uptime?: StringFilter<"ServiceItem"> | string
    userId?: StringFilter<"ServiceItem"> | string
    createdAt?: DateTimeFilter<"ServiceItem"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPipelinesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPipelinesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPipelinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPipelinesInput, UserUncheckedCreateWithoutPipelinesInput>
  }

  export type BuildCreateWithoutPipelineInput = {
    id?: string
    buildNumber: number
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutBuildsInput
  }

  export type BuildUncheckedCreateWithoutPipelineInput = {
    id?: string
    buildNumber: number
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type BuildCreateOrConnectWithoutPipelineInput = {
    where: BuildWhereUniqueInput
    create: XOR<BuildCreateWithoutPipelineInput, BuildUncheckedCreateWithoutPipelineInput>
  }

  export type BuildCreateManyPipelineInputEnvelope = {
    data: BuildCreateManyPipelineInput | BuildCreateManyPipelineInput[]
  }

  export type UserUpsertWithoutPipelinesInput = {
    update: XOR<UserUpdateWithoutPipelinesInput, UserUncheckedUpdateWithoutPipelinesInput>
    create: XOR<UserCreateWithoutPipelinesInput, UserUncheckedCreateWithoutPipelinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPipelinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPipelinesInput, UserUncheckedUpdateWithoutPipelinesInput>
  }

  export type UserUpdateWithoutPipelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPipelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BuildUpsertWithWhereUniqueWithoutPipelineInput = {
    where: BuildWhereUniqueInput
    update: XOR<BuildUpdateWithoutPipelineInput, BuildUncheckedUpdateWithoutPipelineInput>
    create: XOR<BuildCreateWithoutPipelineInput, BuildUncheckedCreateWithoutPipelineInput>
  }

  export type BuildUpdateWithWhereUniqueWithoutPipelineInput = {
    where: BuildWhereUniqueInput
    data: XOR<BuildUpdateWithoutPipelineInput, BuildUncheckedUpdateWithoutPipelineInput>
  }

  export type BuildUpdateManyWithWhereWithoutPipelineInput = {
    where: BuildScalarWhereInput
    data: XOR<BuildUpdateManyMutationInput, BuildUncheckedUpdateManyWithoutPipelineInput>
  }

  export type PipelineCreateWithoutBuildsInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPipelinesInput
  }

  export type PipelineUncheckedCreateWithoutBuildsInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PipelineCreateOrConnectWithoutBuildsInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutBuildsInput, PipelineUncheckedCreateWithoutBuildsInput>
  }

  export type UserCreateWithoutBuildsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBuildsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBuildsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
  }

  export type PipelineUpsertWithoutBuildsInput = {
    update: XOR<PipelineUpdateWithoutBuildsInput, PipelineUncheckedUpdateWithoutBuildsInput>
    create: XOR<PipelineCreateWithoutBuildsInput, PipelineUncheckedCreateWithoutBuildsInput>
    where?: PipelineWhereInput
  }

  export type PipelineUpdateToOneWithWhereWithoutBuildsInput = {
    where?: PipelineWhereInput
    data: XOR<PipelineUpdateWithoutBuildsInput, PipelineUncheckedUpdateWithoutBuildsInput>
  }

  export type PipelineUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPipelinesNestedInput
  }

  export type PipelineUncheckedUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutBuildsInput = {
    update: XOR<UserUpdateWithoutBuildsInput, UserUncheckedUpdateWithoutBuildsInput>
    create: XOR<UserCreateWithoutBuildsInput, UserUncheckedCreateWithoutBuildsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBuildsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBuildsInput, UserUncheckedUpdateWithoutBuildsInput>
  }

  export type UserUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBuildsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDeploymentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDeploymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeploymentsInput, UserUncheckedCreateWithoutDeploymentsInput>
  }

  export type UserUpsertWithoutDeploymentsInput = {
    update: XOR<UserUpdateWithoutDeploymentsInput, UserUncheckedUpdateWithoutDeploymentsInput>
    create: XOR<UserCreateWithoutDeploymentsInput, UserUncheckedCreateWithoutDeploymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeploymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeploymentsInput, UserUncheckedUpdateWithoutDeploymentsInput>
  }

  export type UserUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeploymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutActivitiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
  }

  export type UserUpsertWithoutActivitiesInput = {
    update: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
    create: XOR<UserCreateWithoutActivitiesInput, UserUncheckedCreateWithoutActivitiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivitiesInput, UserUncheckedUpdateWithoutActivitiesInput>
  }

  export type UserUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSecretsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSecretsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSecretsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecretsInput, UserUncheckedCreateWithoutSecretsInput>
  }

  export type UserUpsertWithoutSecretsInput = {
    update: XOR<UserUpdateWithoutSecretsInput, UserUncheckedUpdateWithoutSecretsInput>
    create: XOR<UserCreateWithoutSecretsInput, UserUncheckedCreateWithoutSecretsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecretsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecretsInput, UserUncheckedUpdateWithoutSecretsInput>
  }

  export type UserUpdateWithoutSecretsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSecretsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEnvironmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnvironmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnvironmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnvironmentsInput, UserUncheckedCreateWithoutEnvironmentsInput>
  }

  export type UserUpsertWithoutEnvironmentsInput = {
    update: XOR<UserUpdateWithoutEnvironmentsInput, UserUncheckedUpdateWithoutEnvironmentsInput>
    create: XOR<UserCreateWithoutEnvironmentsInput, UserUncheckedCreateWithoutEnvironmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnvironmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnvironmentsInput, UserUncheckedUpdateWithoutEnvironmentsInput>
  }

  export type UserUpdateWithoutEnvironmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnvironmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReleasesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReleasesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReleasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReleasesInput, UserUncheckedCreateWithoutReleasesInput>
  }

  export type UserUpsertWithoutReleasesInput = {
    update: XOR<UserUpdateWithoutReleasesInput, UserUncheckedUpdateWithoutReleasesInput>
    create: XOR<UserCreateWithoutReleasesInput, UserUncheckedCreateWithoutReleasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReleasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReleasesInput, UserUncheckedUpdateWithoutReleasesInput>
  }

  export type UserUpdateWithoutReleasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReleasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTriggersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTriggersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTriggersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
  }

  export type UserUpsertWithoutTriggersInput = {
    update: XOR<UserUpdateWithoutTriggersInput, UserUncheckedUpdateWithoutTriggersInput>
    create: XOR<UserCreateWithoutTriggersInput, UserUncheckedCreateWithoutTriggersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTriggersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTriggersInput, UserUncheckedUpdateWithoutTriggersInput>
  }

  export type UserUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTriggersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWebhooksInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    services?: ServiceItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebhooksInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    services?: ServiceItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebhooksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
  }

  export type UserUpsertWithoutWebhooksInput = {
    update: XOR<UserUpdateWithoutWebhooksInput, UserUncheckedUpdateWithoutWebhooksInput>
    create: XOR<UserCreateWithoutWebhooksInput, UserUncheckedCreateWithoutWebhooksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebhooksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebhooksInput, UserUncheckedUpdateWithoutWebhooksInput>
  }

  export type UserUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    services?: ServiceItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    services?: ServiceItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutServicesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    pipelines?: PipelineCreateNestedManyWithoutUserInput
    builds?: BuildCreateNestedManyWithoutUserInput
    deployments?: DeploymentCreateNestedManyWithoutUserInput
    activities?: ActivityLogCreateNestedManyWithoutUserInput
    logs?: SystemLogCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordCreateNestedManyWithoutUserInput
    triggers?: TriggerItemCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatar?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutUserInput
    builds?: BuildUncheckedCreateNestedManyWithoutUserInput
    deployments?: DeploymentUncheckedCreateNestedManyWithoutUserInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutUserInput
    logs?: SystemLogUncheckedCreateNestedManyWithoutUserInput
    secrets?: ProjectSecretUncheckedCreateNestedManyWithoutUserInput
    environments?: EnvironmentConfigUncheckedCreateNestedManyWithoutUserInput
    releases?: ReleaseRecordUncheckedCreateNestedManyWithoutUserInput
    triggers?: TriggerItemUncheckedCreateNestedManyWithoutUserInput
    webhooks?: WebhookItemUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUpdateManyWithoutUserNestedInput
    builds?: BuildUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUpdateManyWithoutUserNestedInput
    logs?: SystemLogUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutUserNestedInput
    builds?: BuildUncheckedUpdateManyWithoutUserNestedInput
    deployments?: DeploymentUncheckedUpdateManyWithoutUserNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutUserNestedInput
    logs?: SystemLogUncheckedUpdateManyWithoutUserNestedInput
    secrets?: ProjectSecretUncheckedUpdateManyWithoutUserNestedInput
    environments?: EnvironmentConfigUncheckedUpdateManyWithoutUserNestedInput
    releases?: ReleaseRecordUncheckedUpdateManyWithoutUserNestedInput
    triggers?: TriggerItemUncheckedUpdateManyWithoutUserNestedInput
    webhooks?: WebhookItemUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PipelineCreateManyUserInput = {
    id?: string
    name: string
    repository: string
    branch?: string
    environment?: string
    status?: string
    triggerType?: string
    lastRunAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BuildCreateManyUserInput = {
    id?: string
    buildNumber: number
    pipelineId?: string | null
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    createdAt?: Date | string
  }

  export type DeploymentCreateManyUserInput = {
    id?: string
    name: string
    environment?: string
    branch?: string
    status?: string
    deployedBy?: string
    duration?: string
    durationSeconds?: number
    pipelineId?: string | null
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyUserInput = {
    id?: string
    title: string
    type?: string
    userName: string
    details?: string | null
    createdAt?: Date | string
  }

  export type SystemLogCreateManyUserInput = {
    id?: string
    level?: string
    service?: string
    message: string
    createdAt?: Date | string
  }

  export type ProjectSecretCreateManyUserInput = {
    id?: string
    key: string
    environment?: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnvironmentConfigCreateManyUserInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    uptime?: string
    createdAt?: Date | string
  }

  export type ReleaseRecordCreateManyUserInput = {
    id?: string
    version: string
    environment?: string
    status?: string
    createdAt?: Date | string
  }

  export type TriggerItemCreateManyUserInput = {
    id?: string
    name: string
    branch?: string
    status?: string
    source?: string
    createdAt?: Date | string
  }

  export type WebhookItemCreateManyUserInput = {
    id?: string
    name: string
    connectionStatus?: string
    state?: string
    provider?: string
    createdAt?: Date | string
  }

  export type ServiceItemCreateManyUserInput = {
    id?: string
    name: string
    category?: string
    status?: string
    health?: string
    uptime?: string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PipelineUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    builds?: BuildUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    repository?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    triggerType?: StringFieldUpdateOperationsInput | string
    lastRunAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pipeline?: PipelineUpdateOneWithoutBuildsNestedInput
  }

  export type BuildUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeploymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    deployedBy?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    pipelineId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    service?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSecretUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSecretUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectSecretUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentConfigUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentConfigUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnvironmentConfigUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReleaseRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    version?: StringFieldUpdateOperationsInput | string
    environment?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TriggerItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    connectionStatus?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceItemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    health?: StringFieldUpdateOperationsInput | string
    uptime?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildCreateManyPipelineInput = {
    id?: string
    buildNumber: number
    pipelineName: string
    branch?: string
    commitHash?: string | null
    commitMessage?: string | null
    status?: string
    duration?: string
    durationSeconds?: number
    triggeredBy?: string
    logs?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type BuildUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBuildsNestedInput
  }

  export type BuildUncheckedUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BuildUncheckedUpdateManyWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    buildNumber?: IntFieldUpdateOperationsInput | number
    pipelineName?: StringFieldUpdateOperationsInput | string
    branch?: StringFieldUpdateOperationsInput | string
    commitHash?: NullableStringFieldUpdateOperationsInput | string | null
    commitMessage?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    durationSeconds?: IntFieldUpdateOperationsInput | number
    triggeredBy?: StringFieldUpdateOperationsInput | string
    logs?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}