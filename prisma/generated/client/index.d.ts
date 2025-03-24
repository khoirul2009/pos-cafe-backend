/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Banner
 *
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model Gallery
 *
 */
export type Gallery = $Result.DefaultSelection<Prisma.$GalleryPayload>;
/**
 * Model Category
 *
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>;
/**
 * Model Service
 *
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>;
/**
 * Model Booking
 *
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>;
/**
 * Model BookingDates
 *
 */
export type BookingDates =
  $Result.DefaultSelection<Prisma.$BookingDatesPayload>;
/**
 * Model Payment
 *
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Banners
 * const banners = await prisma.banner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): void;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb,
      {
        extArgs: ExtArgs;
      }
    >,
    ClientOptions
  >;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Banners
   * const banners = await prisma.banner.findMany()
   * ```
   */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.gallery`: Exposes CRUD operations for the **Gallery** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Galleries
   * const galleries = await prisma.gallery.findMany()
   * ```
   */
  get gallery(): Prisma.GalleryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Services
   * const services = await prisma.service.findMany()
   * ```
   */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Bookings
   * const bookings = await prisma.booking.findMany()
   * ```
   */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingDates`: Exposes CRUD operations for the **BookingDates** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BookingDates
   * const bookingDates = await prisma.bookingDates.findMany()
   * ```
   */
  get bookingDates(): Prisma.BookingDatesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Payments
   * const payments = await prisma.payment.findMany()
   * ```
   */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.3.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
    ? 'Please either choose `select` or `omit`.'
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Banner: 'Banner';
    User: 'User';
    Gallery: 'Gallery';
    Category: 'Category';
    Service: 'Service';
    Booking: 'Booking';
    BookingDates: 'BookingDates';
    Payment: 'Payment';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      this['params']['clientOptions']
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > = {
    meta: {
      modelProps:
        | 'banner'
        | 'user'
        | 'gallery'
        | 'category'
        | 'service'
        | 'booking'
        | 'bookingDates'
        | 'payment';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>;
        fields: Prisma.BannerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>;
          };
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>;
          };
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[];
          };
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>;
          };
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[];
          };
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>;
          };
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>;
          };
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[];
          };
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>;
          };
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBanner>;
          };
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BannerGroupByOutputType>[];
          };
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>;
            result: $Utils.Optional<BannerCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
      Gallery: {
        payload: Prisma.$GalleryPayload<ExtArgs>;
        fields: Prisma.GalleryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.GalleryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.GalleryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>;
          };
          findFirst: {
            args: Prisma.GalleryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.GalleryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>;
          };
          findMany: {
            args: Prisma.GalleryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[];
          };
          create: {
            args: Prisma.GalleryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>;
          };
          createMany: {
            args: Prisma.GalleryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.GalleryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[];
          };
          delete: {
            args: Prisma.GalleryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>;
          };
          update: {
            args: Prisma.GalleryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>;
          };
          deleteMany: {
            args: Prisma.GalleryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.GalleryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.GalleryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>[];
          };
          upsert: {
            args: Prisma.GalleryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$GalleryPayload>;
          };
          aggregate: {
            args: Prisma.GalleryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGallery>;
          };
          groupBy: {
            args: Prisma.GalleryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GalleryGroupByOutputType>[];
          };
          count: {
            args: Prisma.GalleryCountArgs<ExtArgs>;
            result: $Utils.Optional<GalleryCountAggregateOutputType> | number;
          };
        };
      };
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>;
        fields: Prisma.CategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[];
          };
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>;
          };
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCategory>;
          };
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>;
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number;
          };
        };
      };
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>;
        fields: Prisma.ServiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[];
          };
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>;
          };
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateService>;
          };
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ServiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>;
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number;
          };
        };
      };
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>;
        fields: Prisma.BookingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[];
          };
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>;
          };
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBooking>;
          };
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>;
            result: $Utils.Optional<BookingCountAggregateOutputType> | number;
          };
        };
      };
      BookingDates: {
        payload: Prisma.$BookingDatesPayload<ExtArgs>;
        fields: Prisma.BookingDatesFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BookingDatesFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BookingDatesFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>;
          };
          findFirst: {
            args: Prisma.BookingDatesFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BookingDatesFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>;
          };
          findMany: {
            args: Prisma.BookingDatesFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>[];
          };
          create: {
            args: Prisma.BookingDatesCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>;
          };
          createMany: {
            args: Prisma.BookingDatesCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BookingDatesCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>[];
          };
          delete: {
            args: Prisma.BookingDatesDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>;
          };
          update: {
            args: Prisma.BookingDatesUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>;
          };
          deleteMany: {
            args: Prisma.BookingDatesDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BookingDatesUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BookingDatesUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>[];
          };
          upsert: {
            args: Prisma.BookingDatesUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BookingDatesPayload>;
          };
          aggregate: {
            args: Prisma.BookingDatesAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBookingDates>;
          };
          groupBy: {
            args: Prisma.BookingDatesGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BookingDatesGroupByOutputType>[];
          };
          count: {
            args: Prisma.BookingDatesCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<BookingDatesCountAggregateOutputType>
              | number;
          };
        };
      };
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>;
        fields: Prisma.PaymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[];
          };
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>;
          };
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregatePayment>;
          };
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<PaymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>;
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    banner?: BannerOmit;
    user?: UserOmit;
    gallery?: GalleryOmit;
    category?: CategoryOmit;
    service?: ServiceOmit;
    booking?: BookingOmit;
    bookingDates?: BookingDatesOmit;
    payment?: PaymentOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T['emit'] extends 'event'
        ? T['level']
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Booking: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Booking?: boolean | UserCountOutputTypeCountBookingArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
  };

  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Service: number;
  };

  export type CategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Service?: boolean | CategoryCountOutputTypeCountServiceArgs;
  };

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ServiceWhereInput;
  };

  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    Booking: number;
  };

  export type ServiceCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Booking?: boolean | ServiceCountOutputTypeCountBookingArgs;
  };

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
  };

  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    payments: number;
    booking_dates: number;
  };

  export type BookingCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    payments?: boolean | BookingCountOutputTypeCountPaymentsArgs;
    booking_dates?: boolean | BookingCountOutputTypeCountBooking_datesArgs;
  };

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountPaymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: PaymentWhereInput;
  };

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountBooking_datesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingDatesWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null;
    _avg: BannerAvgAggregateOutputType | null;
    _sum: BannerSumAggregateOutputType | null;
    _min: BannerMinAggregateOutputType | null;
    _max: BannerMaxAggregateOutputType | null;
  };

  export type BannerAvgAggregateOutputType = {
    id: number | null;
  };

  export type BannerSumAggregateOutputType = {
    id: number | null;
  };

  export type BannerMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    image: string | null;
    link: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BannerMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    image: string | null;
    link: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BannerCountAggregateOutputType = {
    id: number;
    title: number;
    image: number;
    link: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BannerAvgAggregateInputType = {
    id?: true;
  };

  export type BannerSumAggregateInputType = {
    id?: true;
  };

  export type BannerMinAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    link?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BannerMaxAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    link?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BannerCountAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    link?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BannerAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Banners
     **/
    _count?: true | BannerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BannerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BannerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BannerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BannerMaxAggregateInputType;
  };

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
    [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>;
  };

  export type BannerGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BannerWhereInput;
    orderBy?:
      | BannerOrderByWithAggregationInput
      | BannerOrderByWithAggregationInput[];
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum;
    having?: BannerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BannerCountAggregateInputType | true;
    _avg?: BannerAvgAggregateInputType;
    _sum?: BannerSumAggregateInputType;
    _min?: BannerMinAggregateInputType;
    _max?: BannerMaxAggregateInputType;
  };

  export type BannerGroupByOutputType = {
    id: number;
    title: string;
    image: string;
    link: string;
    created_at: Date;
    updated_at: Date;
    _count: BannerCountAggregateOutputType | null;
    _avg: BannerAvgAggregateOutputType | null;
    _sum: BannerSumAggregateOutputType | null;
    _min: BannerMinAggregateOutputType | null;
    _max: BannerMaxAggregateOutputType | null;
  };

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BannerGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BannerGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>;
        }
      >
    >;

  export type BannerSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      link?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['banner']
  >;

  export type BannerSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      link?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['banner']
  >;

  export type BannerSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      link?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['banner']
  >;

  export type BannerSelectScalar = {
    id?: boolean;
    title?: boolean;
    image?: boolean;
    link?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type BannerOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'title' | 'image' | 'link' | 'created_at' | 'updated_at',
    ExtArgs['result']['banner']
  >;

  export type $BannerPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Banner';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        image: string;
        link: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['banner']
    >;
    composites: {};
  };

  type BannerGetPayload<
    S extends boolean | null | undefined | BannerDefaultArgs
  > = $Result.GetResult<Prisma.$BannerPayload, S>;

  type BannerCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BannerCountAggregateInputType | true;
  };

  export interface BannerDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Banner'];
      meta: { name: 'Banner' };
    };
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(
      args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(
      args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     *
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BannerFindManyArgs>(
      args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     *
     */
    create<T extends BannerCreateArgs>(
      args: SelectSubset<T, BannerCreateArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BannerCreateManyArgs>(
      args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     *
     */
    delete<T extends BannerDeleteArgs>(
      args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BannerUpdateArgs>(
      args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BannerDeleteManyArgs>(
      args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BannerUpdateManyArgs>(
      args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(
      args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>
    ): Prisma__BannerClient<
      $Result.GetResult<
        Prisma.$BannerPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
     **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(
      args: Subset<T, BannerAggregateArgs>
    ): Prisma.PrismaPromise<GetBannerAggregateType<T>>;

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBannerGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Banner model
     */
    readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<'Banner', 'Int'>;
    readonly title: FieldRef<'Banner', 'String'>;
    readonly image: FieldRef<'Banner', 'String'>;
    readonly link: FieldRef<'Banner', 'String'>;
    readonly created_at: FieldRef<'Banner', 'DateTime'>;
    readonly updated_at: FieldRef<'Banner', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput;
  };

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput;
  };

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[];
  };

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[];
  };

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Banners.
     */
    skip?: number;
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[];
  };

  /**
   * Banner create
   */
  export type BannerCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>;
  };

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Banner update
   */
  export type BannerUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>;
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput;
  };

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>;
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput;
    /**
     * Limit how many Banners to update.
     */
    limit?: number;
  };

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>;
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput;
    /**
     * Limit how many Banners to update.
     */
    limit?: number;
  };

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput;
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>;
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>;
  };

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput;
  };

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput;
    /**
     * Limit how many Banners to delete.
     */
    limit?: number;
  };

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    phone: number;
    role: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phone?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phone?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    phone?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    name: string;
    email: string;
    password: string;
    phone: string | null;
    role: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      phone?: boolean;
      role?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      Booking?: boolean | User$BookingArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      phone?: boolean;
      role?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      phone?: boolean;
      role?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    phone?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'phone'
    | 'role'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Booking?: boolean | User$BookingArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'User';
    objects: {
      Booking: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        email: string;
        password: string;
        phone: string | null;
        role: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

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
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    Booking<T extends User$BookingArgs<ExtArgs> = {}>(
      args?: Subset<T, User$BookingArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookingPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'Int'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly phone: FieldRef<'User', 'String'>;
    readonly role: FieldRef<'User', 'String'>;
    readonly created_at: FieldRef<'User', 'DateTime'>;
    readonly updated_at: FieldRef<'User', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.Booking
   */
  export type User$BookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    cursor?: BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model Gallery
   */

  export type AggregateGallery = {
    _count: GalleryCountAggregateOutputType | null;
    _avg: GalleryAvgAggregateOutputType | null;
    _sum: GallerySumAggregateOutputType | null;
    _min: GalleryMinAggregateOutputType | null;
    _max: GalleryMaxAggregateOutputType | null;
  };

  export type GalleryAvgAggregateOutputType = {
    id: number | null;
  };

  export type GallerySumAggregateOutputType = {
    id: number | null;
  };

  export type GalleryMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    image: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GalleryMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    image: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GalleryCountAggregateOutputType = {
    id: number;
    title: number;
    image: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GalleryAvgAggregateInputType = {
    id?: true;
  };

  export type GallerySumAggregateInputType = {
    id?: true;
  };

  export type GalleryMinAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GalleryMaxAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GalleryCountAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GalleryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Gallery to aggregate.
     */
    where?: GalleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Galleries to fetch.
     */
    orderBy?:
      | GalleryOrderByWithRelationInput
      | GalleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: GalleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Galleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Galleries
     **/
    _count?: true | GalleryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: GalleryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: GallerySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GalleryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GalleryMaxAggregateInputType;
  };

  export type GetGalleryAggregateType<T extends GalleryAggregateArgs> = {
    [P in keyof T & keyof AggregateGallery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGallery[P]>
      : GetScalarType<T[P], AggregateGallery[P]>;
  };

  export type GalleryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: GalleryWhereInput;
    orderBy?:
      | GalleryOrderByWithAggregationInput
      | GalleryOrderByWithAggregationInput[];
    by: GalleryScalarFieldEnum[] | GalleryScalarFieldEnum;
    having?: GalleryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GalleryCountAggregateInputType | true;
    _avg?: GalleryAvgAggregateInputType;
    _sum?: GallerySumAggregateInputType;
    _min?: GalleryMinAggregateInputType;
    _max?: GalleryMaxAggregateInputType;
  };

  export type GalleryGroupByOutputType = {
    id: number;
    title: string;
    image: string;
    created_at: Date;
    updated_at: Date;
    _count: GalleryCountAggregateOutputType | null;
    _avg: GalleryAvgAggregateOutputType | null;
    _sum: GallerySumAggregateOutputType | null;
    _min: GalleryMinAggregateOutputType | null;
    _max: GalleryMaxAggregateOutputType | null;
  };

  type GetGalleryGroupByPayload<T extends GalleryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<GalleryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof GalleryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryGroupByOutputType[P]>;
        }
      >
    >;

  export type GallerySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['gallery']
  >;

  export type GallerySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['gallery']
  >;

  export type GallerySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['gallery']
  >;

  export type GallerySelectScalar = {
    id?: boolean;
    title?: boolean;
    image?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type GalleryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'title' | 'image' | 'created_at' | 'updated_at',
    ExtArgs['result']['gallery']
  >;

  export type $GalleryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Gallery';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        image: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['gallery']
    >;
    composites: {};
  };

  type GalleryGetPayload<
    S extends boolean | null | undefined | GalleryDefaultArgs
  > = $Result.GetResult<Prisma.$GalleryPayload, S>;

  type GalleryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<GalleryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GalleryCountAggregateInputType | true;
  };

  export interface GalleryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Gallery'];
      meta: { name: 'Gallery' };
    };
    /**
     * Find zero or one Gallery that matches the filter.
     * @param {GalleryFindUniqueArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryFindUniqueArgs>(
      args: SelectSubset<T, GalleryFindUniqueArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Gallery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryFindUniqueOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, GalleryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Gallery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryFindFirstArgs>(
      args?: SelectSubset<T, GalleryFindFirstArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Gallery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindFirstOrThrowArgs} args - Arguments to find a Gallery
     * @example
     * // Get one Gallery
     * const gallery = await prisma.gallery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, GalleryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Galleries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Galleries
     * const galleries = await prisma.gallery.findMany()
     *
     * // Get first 10 Galleries
     * const galleries = await prisma.gallery.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const galleryWithIdOnly = await prisma.gallery.findMany({ select: { id: true } })
     *
     */
    findMany<T extends GalleryFindManyArgs>(
      args?: SelectSubset<T, GalleryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Gallery.
     * @param {GalleryCreateArgs} args - Arguments to create a Gallery.
     * @example
     * // Create one Gallery
     * const Gallery = await prisma.gallery.create({
     *   data: {
     *     // ... data to create a Gallery
     *   }
     * })
     *
     */
    create<T extends GalleryCreateArgs>(
      args: SelectSubset<T, GalleryCreateArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Galleries.
     * @param {GalleryCreateManyArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends GalleryCreateManyArgs>(
      args?: SelectSubset<T, GalleryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Galleries and returns the data saved in the database.
     * @param {GalleryCreateManyAndReturnArgs} args - Arguments to create many Galleries.
     * @example
     * // Create many Galleries
     * const gallery = await prisma.gallery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends GalleryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, GalleryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Gallery.
     * @param {GalleryDeleteArgs} args - Arguments to delete one Gallery.
     * @example
     * // Delete one Gallery
     * const Gallery = await prisma.gallery.delete({
     *   where: {
     *     // ... filter to delete one Gallery
     *   }
     * })
     *
     */
    delete<T extends GalleryDeleteArgs>(
      args: SelectSubset<T, GalleryDeleteArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Gallery.
     * @param {GalleryUpdateArgs} args - Arguments to update one Gallery.
     * @example
     * // Update one Gallery
     * const gallery = await prisma.gallery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends GalleryUpdateArgs>(
      args: SelectSubset<T, GalleryUpdateArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Galleries.
     * @param {GalleryDeleteManyArgs} args - Arguments to filter Galleries to delete.
     * @example
     * // Delete a few Galleries
     * const { count } = await prisma.gallery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends GalleryDeleteManyArgs>(
      args?: SelectSubset<T, GalleryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends GalleryUpdateManyArgs>(
      args: SelectSubset<T, GalleryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Galleries and returns the data updated in the database.
     * @param {GalleryUpdateManyAndReturnArgs} args - Arguments to update many Galleries.
     * @example
     * // Update many Galleries
     * const gallery = await prisma.gallery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Galleries and only return the `id`
     * const galleryWithIdOnly = await prisma.gallery.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, GalleryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Gallery.
     * @param {GalleryUpsertArgs} args - Arguments to update or create a Gallery.
     * @example
     * // Update or create a Gallery
     * const gallery = await prisma.gallery.upsert({
     *   create: {
     *     // ... data to create a Gallery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gallery we want to update
     *   }
     * })
     */
    upsert<T extends GalleryUpsertArgs>(
      args: SelectSubset<T, GalleryUpsertArgs<ExtArgs>>
    ): Prisma__GalleryClient<
      $Result.GetResult<
        Prisma.$GalleryPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Galleries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryCountArgs} args - Arguments to filter Galleries to count.
     * @example
     * // Count the number of Galleries
     * const count = await prisma.gallery.count({
     *   where: {
     *     // ... the filter for the Galleries we want to count
     *   }
     * })
     **/
    count<T extends GalleryCountArgs>(
      args?: Subset<T, GalleryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryAggregateArgs>(
      args: Subset<T, GalleryAggregateArgs>
    ): Prisma.PrismaPromise<GetGalleryAggregateType<T>>;

    /**
     * Group by Gallery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryGroupByArgs} args - Group by arguments.
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
      T extends GalleryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryGroupByArgs['orderBy'] }
        : { orderBy?: GalleryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, GalleryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetGalleryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Gallery model
     */
    readonly fields: GalleryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gallery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Gallery model
   */
  interface GalleryFieldRefs {
    readonly id: FieldRef<'Gallery', 'Int'>;
    readonly title: FieldRef<'Gallery', 'String'>;
    readonly image: FieldRef<'Gallery', 'String'>;
    readonly created_at: FieldRef<'Gallery', 'DateTime'>;
    readonly updated_at: FieldRef<'Gallery', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Gallery findUnique
   */
  export type GalleryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput;
  };

  /**
   * Gallery findUniqueOrThrow
   */
  export type GalleryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * Filter, which Gallery to fetch.
     */
    where: GalleryWhereUniqueInput;
  };

  /**
   * Gallery findFirst
   */
  export type GalleryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Galleries to fetch.
     */
    orderBy?:
      | GalleryOrderByWithRelationInput
      | GalleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Galleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[];
  };

  /**
   * Gallery findFirstOrThrow
   */
  export type GalleryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * Filter, which Gallery to fetch.
     */
    where?: GalleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Galleries to fetch.
     */
    orderBy?:
      | GalleryOrderByWithRelationInput
      | GalleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Galleries.
     */
    cursor?: GalleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Galleries.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Galleries.
     */
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[];
  };

  /**
   * Gallery findMany
   */
  export type GalleryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * Filter, which Galleries to fetch.
     */
    where?: GalleryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Galleries to fetch.
     */
    orderBy?:
      | GalleryOrderByWithRelationInput
      | GalleryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Galleries.
     */
    cursor?: GalleryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Galleries from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Galleries.
     */
    skip?: number;
    distinct?: GalleryScalarFieldEnum | GalleryScalarFieldEnum[];
  };

  /**
   * Gallery create
   */
  export type GalleryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * The data needed to create a Gallery.
     */
    data: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>;
  };

  /**
   * Gallery createMany
   */
  export type GalleryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Gallery createManyAndReturn
   */
  export type GalleryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * The data used to create many Galleries.
     */
    data: GalleryCreateManyInput | GalleryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Gallery update
   */
  export type GalleryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * The data needed to update a Gallery.
     */
    data: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>;
    /**
     * Choose, which Gallery to update.
     */
    where: GalleryWhereUniqueInput;
  };

  /**
   * Gallery updateMany
   */
  export type GalleryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>;
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput;
    /**
     * Limit how many Galleries to update.
     */
    limit?: number;
  };

  /**
   * Gallery updateManyAndReturn
   */
  export type GalleryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * The data used to update Galleries.
     */
    data: XOR<GalleryUpdateManyMutationInput, GalleryUncheckedUpdateManyInput>;
    /**
     * Filter which Galleries to update
     */
    where?: GalleryWhereInput;
    /**
     * Limit how many Galleries to update.
     */
    limit?: number;
  };

  /**
   * Gallery upsert
   */
  export type GalleryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * The filter to search for the Gallery to update in case it exists.
     */
    where: GalleryWhereUniqueInput;
    /**
     * In case the Gallery found by the `where` argument doesn't exist, create a new Gallery with this data.
     */
    create: XOR<GalleryCreateInput, GalleryUncheckedCreateInput>;
    /**
     * In case the Gallery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryUpdateInput, GalleryUncheckedUpdateInput>;
  };

  /**
   * Gallery delete
   */
  export type GalleryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
    /**
     * Filter which Gallery to delete.
     */
    where: GalleryWhereUniqueInput;
  };

  /**
   * Gallery deleteMany
   */
  export type GalleryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Galleries to delete
     */
    where?: GalleryWhereInput;
    /**
     * Limit how many Galleries to delete.
     */
    limit?: number;
  };

  /**
   * Gallery without action
   */
  export type GalleryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Gallery
     */
    select?: GallerySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Gallery
     */
    omit?: GalleryOmit<ExtArgs> | null;
  };

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  export type CategoryAvgAggregateOutputType = {
    id: number | null;
  };

  export type CategorySumAggregateOutputType = {
    id: number | null;
  };

  export type CategoryMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoryMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CategoryCountAggregateOutputType = {
    id: number;
    title: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CategoryAvgAggregateInputType = {
    id?: true;
  };

  export type CategorySumAggregateInputType = {
    id?: true;
  };

  export type CategoryMinAggregateInputType = {
    id?: true;
    title?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoryMaxAggregateInputType = {
    id?: true;
    title?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CategoryCountAggregateInputType = {
    id?: true;
    title?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Categories
     **/
    _count?: true | CategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CategoryMaxAggregateInputType;
  };

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>;
  };

  export type CategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: CategoryWhereInput;
    orderBy?:
      | CategoryOrderByWithAggregationInput
      | CategoryOrderByWithAggregationInput[];
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum;
    having?: CategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CategoryCountAggregateInputType | true;
    _avg?: CategoryAvgAggregateInputType;
    _sum?: CategorySumAggregateInputType;
    _min?: CategoryMinAggregateInputType;
    _max?: CategoryMaxAggregateInputType;
  };

  export type CategoryGroupByOutputType = {
    id: number;
    title: string;
    created_at: Date;
    updated_at: Date;
    _count: CategoryCountAggregateOutputType | null;
    _avg: CategoryAvgAggregateOutputType | null;
    _sum: CategorySumAggregateOutputType | null;
    _min: CategoryMinAggregateOutputType | null;
    _max: CategoryMaxAggregateOutputType | null;
  };

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CategoryGroupByOutputType, T['by']> & {
          [P in keyof T & keyof CategoryGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type CategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      Service?: boolean | Category$ServiceArgs<ExtArgs>;
      _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
    },
    ExtArgs['result']['category']
  >;

  export type CategorySelectScalar = {
    id?: boolean;
    title?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type CategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'title' | 'created_at' | 'updated_at',
    ExtArgs['result']['category']
  >;
  export type CategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    Service?: boolean | Category$ServiceArgs<ExtArgs>;
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type CategoryIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};
  export type CategoryIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {};

  export type $CategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Category';
    objects: {
      Service: Prisma.$ServicePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['category']
    >;
    composites: {};
  };

  type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryDefaultArgs
  > = $Result.GetResult<Prisma.$CategoryPayload, S>;

  type CategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CategoryCountAggregateInputType | true;
  };

  export interface CategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Category'];
      meta: { name: 'Category' };
    };
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     *
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     *
     */
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(
      args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     *
     */
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(
      args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      $Result.GetResult<
        Prisma.$CategoryPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
     **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(
      args: Subset<T, CategoryAggregateArgs>
    ): Prisma.PrismaPromise<GetCategoryAggregateType<T>>;

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Category model
     */
    readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    Service<T extends Category$ServiceArgs<ExtArgs> = {}>(
      args?: Subset<T, Category$ServiceArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ServicePayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<'Category', 'Int'>;
    readonly title: FieldRef<'Category', 'String'>;
    readonly created_at: FieldRef<'Category', 'DateTime'>;
    readonly updated_at: FieldRef<'Category', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Categories to fetch.
     */
    orderBy?:
      | CategoryOrderByWithRelationInput
      | CategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Categories.
     */
    skip?: number;
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[];
  };

  /**
   * Category create
   */
  export type CategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
  };

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Category update
   */
  export type CategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * The data used to update Categories.
     */
    data: XOR<
      CategoryUpdateManyMutationInput,
      CategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to update.
     */
    limit?: number;
  };

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput;
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>;
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>;
  };

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput;
  };

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput;
    /**
     * Limit how many Categories to delete.
     */
    limit?: number;
  };

  /**
   * Category.Service
   */
  export type Category$ServiceArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    where?: ServiceWhereInput;
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    cursor?: ServiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  export type ServiceAvgAggregateOutputType = {
    id: number | null;
    price: number | null;
    discount: number | null;
    category_id: number | null;
  };

  export type ServiceSumAggregateOutputType = {
    id: number | null;
    price: number | null;
    discount: number | null;
    category_id: number | null;
  };

  export type ServiceMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    image: string | null;
    price: number | null;
    discount: number | null;
    description: string | null;
    category_id: number | null;
    available: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServiceMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    image: string | null;
    price: number | null;
    discount: number | null;
    description: string | null;
    category_id: number | null;
    available: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ServiceCountAggregateOutputType = {
    id: number;
    title: number;
    image: number;
    price: number;
    discount: number;
    description: number;
    category_id: number;
    available: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ServiceAvgAggregateInputType = {
    id?: true;
    price?: true;
    discount?: true;
    category_id?: true;
  };

  export type ServiceSumAggregateInputType = {
    id?: true;
    price?: true;
    discount?: true;
    category_id?: true;
  };

  export type ServiceMinAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    price?: true;
    discount?: true;
    description?: true;
    category_id?: true;
    available?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServiceMaxAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    price?: true;
    discount?: true;
    description?: true;
    category_id?: true;
    available?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ServiceCountAggregateInputType = {
    id?: true;
    title?: true;
    image?: true;
    price?: true;
    discount?: true;
    description?: true;
    category_id?: true;
    available?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ServiceAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Services
     **/
    _count?: true | ServiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ServiceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ServiceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ServiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ServiceMaxAggregateInputType;
  };

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
    [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>;
  };

  export type ServiceGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: ServiceWhereInput;
    orderBy?:
      | ServiceOrderByWithAggregationInput
      | ServiceOrderByWithAggregationInput[];
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum;
    having?: ServiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServiceCountAggregateInputType | true;
    _avg?: ServiceAvgAggregateInputType;
    _sum?: ServiceSumAggregateInputType;
    _min?: ServiceMinAggregateInputType;
    _max?: ServiceMaxAggregateInputType;
  };

  export type ServiceGroupByOutputType = {
    id: number;
    title: string;
    image: string;
    price: number;
    discount: number | null;
    description: string;
    category_id: number;
    available: boolean;
    created_at: Date;
    updated_at: Date;
    _count: ServiceCountAggregateOutputType | null;
    _avg: ServiceAvgAggregateOutputType | null;
    _sum: ServiceSumAggregateOutputType | null;
    _min: ServiceMinAggregateOutputType | null;
    _max: ServiceMaxAggregateOutputType | null;
  };

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ServiceGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ServiceGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>;
        }
      >
    >;

  export type ServiceSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      price?: boolean;
      discount?: boolean;
      description?: boolean;
      category_id?: boolean;
      available?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
      Booking?: boolean | Service$BookingArgs<ExtArgs>;
      _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      price?: boolean;
      discount?: boolean;
      description?: boolean;
      category_id?: boolean;
      available?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      image?: boolean;
      price?: boolean;
      discount?: boolean;
      description?: boolean;
      category_id?: boolean;
      available?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      category?: boolean | CategoryDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['service']
  >;

  export type ServiceSelectScalar = {
    id?: boolean;
    title?: boolean;
    image?: boolean;
    price?: boolean;
    discount?: boolean;
    description?: boolean;
    category_id?: boolean;
    available?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type ServiceOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'title'
    | 'image'
    | 'price'
    | 'discount'
    | 'description'
    | 'category_id'
    | 'available'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['service']
  >;
  export type ServiceInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
    Booking?: boolean | Service$BookingArgs<ExtArgs>;
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ServiceIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };
  export type ServiceIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>;
  };

  export type $ServicePayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Service';
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>;
      Booking: Prisma.$BookingPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        image: string;
        price: number;
        discount: number | null;
        description: string;
        category_id: number;
        available: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['service']
    >;
    composites: {};
  };

  type ServiceGetPayload<
    S extends boolean | null | undefined | ServiceDefaultArgs
  > = $Result.GetResult<Prisma.$ServicePayload, S>;

  type ServiceCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServiceCountAggregateInputType | true;
  };

  export interface ServiceDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Service'];
      meta: { name: 'Service' };
    };
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(
      args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(
      args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     *
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ServiceFindManyArgs>(
      args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     *
     */
    create<T extends ServiceCreateArgs>(
      args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ServiceCreateManyArgs>(
      args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     *
     */
    delete<T extends ServiceDeleteArgs>(
      args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ServiceUpdateArgs>(
      args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ServiceDeleteManyArgs>(
      args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ServiceUpdateManyArgs>(
      args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(
      args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      $Result.GetResult<
        Prisma.$ServicePayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
     **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(
      args: Subset<T, ServiceAggregateArgs>
    ): Prisma.PrismaPromise<GetServiceAggregateType<T>>;

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetServiceGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Service model
     */
    readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CategoryDefaultArgs<ExtArgs>>
    ): Prisma__CategoryClient<
      | $Result.GetResult<
          Prisma.$CategoryPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    Booking<T extends Service$BookingArgs<ExtArgs> = {}>(
      args?: Subset<T, Service$BookingArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookingPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<'Service', 'Int'>;
    readonly title: FieldRef<'Service', 'String'>;
    readonly image: FieldRef<'Service', 'String'>;
    readonly price: FieldRef<'Service', 'Int'>;
    readonly discount: FieldRef<'Service', 'Int'>;
    readonly description: FieldRef<'Service', 'String'>;
    readonly category_id: FieldRef<'Service', 'Int'>;
    readonly available: FieldRef<'Service', 'Boolean'>;
    readonly created_at: FieldRef<'Service', 'DateTime'>;
    readonly updated_at: FieldRef<'Service', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Services to fetch.
     */
    orderBy?:
      | ServiceOrderByWithRelationInput
      | ServiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Services from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Services.
     */
    skip?: number;
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[];
  };

  /**
   * Service create
   */
  export type ServiceCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>;
  };

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Service update
   */
  export type ServiceUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>;
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>;
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to update.
     */
    limit?: number;
  };

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>;
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput;
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>;
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>;
  };

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput;
  };

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput;
    /**
     * Limit how many Services to delete.
     */
    limit?: number;
  };

  /**
   * Service.Booking
   */
  export type Service$BookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    cursor?: BookingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null;
  };

  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  export type BookingAvgAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    service_id: number | null;
  };

  export type BookingSumAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    service_id: number | null;
  };

  export type BookingMinAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    service_id: number | null;
    time: string | null;
    location: string | null;
    is_accepted: boolean | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingMaxAggregateOutputType = {
    id: number | null;
    user_id: number | null;
    service_id: number | null;
    time: string | null;
    location: string | null;
    is_accepted: boolean | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BookingCountAggregateOutputType = {
    id: number;
    user_id: number;
    service_id: number;
    time: number;
    location: number;
    is_accepted: number;
    status: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BookingAvgAggregateInputType = {
    id?: true;
    user_id?: true;
    service_id?: true;
  };

  export type BookingSumAggregateInputType = {
    id?: true;
    user_id?: true;
    service_id?: true;
  };

  export type BookingMinAggregateInputType = {
    id?: true;
    user_id?: true;
    service_id?: true;
    time?: true;
    location?: true;
    is_accepted?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    service_id?: true;
    time?: true;
    location?: true;
    is_accepted?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BookingCountAggregateInputType = {
    id?: true;
    user_id?: true;
    service_id?: true;
    time?: true;
    location?: true;
    is_accepted?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BookingAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Bookings
     **/
    _count?: true | BookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BookingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BookingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingMaxAggregateInputType;
  };

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>;
  };

  export type BookingGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingWhereInput;
    orderBy?:
      | BookingOrderByWithAggregationInput
      | BookingOrderByWithAggregationInput[];
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum;
    having?: BookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingCountAggregateInputType | true;
    _avg?: BookingAvgAggregateInputType;
    _sum?: BookingSumAggregateInputType;
    _min?: BookingMinAggregateInputType;
    _max?: BookingMaxAggregateInputType;
  };

  export type BookingGroupByOutputType = {
    id: number;
    user_id: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted: boolean;
    status: string;
    created_at: Date;
    updated_at: Date;
    _count: BookingCountAggregateOutputType | null;
    _avg: BookingAvgAggregateOutputType | null;
    _sum: BookingSumAggregateOutputType | null;
    _min: BookingMinAggregateOutputType | null;
    _max: BookingMaxAggregateOutputType | null;
  };

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookingGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BookingGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>;
        }
      >
    >;

  export type BookingSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      service_id?: boolean;
      time?: boolean;
      location?: boolean;
      is_accepted?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
      payments?: boolean | Booking$paymentsArgs<ExtArgs>;
      booking_dates?: boolean | Booking$booking_datesArgs<ExtArgs>;
      _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type BookingSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      service_id?: boolean;
      time?: boolean;
      location?: boolean;
      is_accepted?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type BookingSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      service_id?: boolean;
      time?: boolean;
      location?: boolean;
      is_accepted?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      service?: boolean | ServiceDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['booking']
  >;

  export type BookingSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    service_id?: boolean;
    time?: boolean;
    location?: boolean;
    is_accepted?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type BookingOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'user_id'
    | 'service_id'
    | 'time'
    | 'location'
    | 'is_accepted'
    | 'status'
    | 'created_at'
    | 'updated_at',
    ExtArgs['result']['booking']
  >;
  export type BookingInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
    payments?: boolean | Booking$paymentsArgs<ExtArgs>;
    booking_dates?: boolean | Booking$booking_datesArgs<ExtArgs>;
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BookingIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
  };
  export type BookingIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    service?: boolean | ServiceDefaultArgs<ExtArgs>;
  };

  export type $BookingPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Booking';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      service: Prisma.$ServicePayload<ExtArgs>;
      payments: Prisma.$PaymentPayload<ExtArgs>[];
      booking_dates: Prisma.$BookingDatesPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        user_id: number;
        service_id: number;
        time: string;
        location: string;
        is_accepted: boolean;
        status: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['booking']
    >;
    composites: {};
  };

  type BookingGetPayload<
    S extends boolean | null | undefined | BookingDefaultArgs
  > = $Result.GetResult<Prisma.$BookingPayload, S>;

  type BookingCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingCountAggregateInputType | true;
  };

  export interface BookingDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Booking'];
      meta: { name: 'Booking' };
    };
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(
      args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(
      args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     *
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookingFindManyArgs>(
      args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     *
     */
    create<T extends BookingCreateArgs>(
      args: SelectSubset<T, BookingCreateArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookingCreateManyArgs>(
      args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     *
     */
    delete<T extends BookingDeleteArgs>(
      args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookingUpdateArgs>(
      args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookingDeleteManyArgs>(
      args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookingUpdateManyArgs>(
      args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(
      args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
     **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(
      args: Subset<T, BookingAggregateArgs>
    ): Prisma.PrismaPromise<GetBookingAggregateType<T>>;

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetBookingGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Booking model
     */
    readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ServiceDefaultArgs<ExtArgs>>
    ): Prisma__ServiceClient<
      | $Result.GetResult<
          Prisma.$ServicePayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    payments<T extends Booking$paymentsArgs<ExtArgs> = {}>(
      args?: Subset<T, Booking$paymentsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$PaymentPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    booking_dates<T extends Booking$booking_datesArgs<ExtArgs> = {}>(
      args?: Subset<T, Booking$booking_datesArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BookingDatesPayload<ExtArgs>,
          T,
          'findMany',
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<'Booking', 'Int'>;
    readonly user_id: FieldRef<'Booking', 'Int'>;
    readonly service_id: FieldRef<'Booking', 'Int'>;
    readonly time: FieldRef<'Booking', 'String'>;
    readonly location: FieldRef<'Booking', 'String'>;
    readonly is_accepted: FieldRef<'Booking', 'Boolean'>;
    readonly status: FieldRef<'Booking', 'String'>;
    readonly created_at: FieldRef<'Booking', 'DateTime'>;
    readonly updated_at: FieldRef<'Booking', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Bookings to fetch.
     */
    orderBy?:
      | BookingOrderByWithRelationInput
      | BookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Bookings.
     */
    skip?: number;
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[];
  };

  /**
   * Booking create
   */
  export type BookingCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
  };

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Booking update
   */
  export type BookingUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to update.
     */
    limit?: number;
  };

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>;
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput;
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>;
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>;
  };

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput;
  };

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput;
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number;
  };

  /**
   * Booking.payments
   */
  export type Booking$paymentsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    cursor?: PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Booking.booking_dates
   */
  export type Booking$booking_datesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    where?: BookingDatesWhereInput;
    orderBy?:
      | BookingDatesOrderByWithRelationInput
      | BookingDatesOrderByWithRelationInput[];
    cursor?: BookingDatesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BookingDatesScalarFieldEnum | BookingDatesScalarFieldEnum[];
  };

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
  };

  /**
   * Model BookingDates
   */

  export type AggregateBookingDates = {
    _count: BookingDatesCountAggregateOutputType | null;
    _avg: BookingDatesAvgAggregateOutputType | null;
    _sum: BookingDatesSumAggregateOutputType | null;
    _min: BookingDatesMinAggregateOutputType | null;
    _max: BookingDatesMaxAggregateOutputType | null;
  };

  export type BookingDatesAvgAggregateOutputType = {
    id: number | null;
    booking_id: number | null;
  };

  export type BookingDatesSumAggregateOutputType = {
    id: number | null;
    booking_id: number | null;
  };

  export type BookingDatesMinAggregateOutputType = {
    id: number | null;
    date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    booking_id: number | null;
  };

  export type BookingDatesMaxAggregateOutputType = {
    id: number | null;
    date: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
    booking_id: number | null;
  };

  export type BookingDatesCountAggregateOutputType = {
    id: number;
    date: number;
    created_at: number;
    updated_at: number;
    booking_id: number;
    _all: number;
  };

  export type BookingDatesAvgAggregateInputType = {
    id?: true;
    booking_id?: true;
  };

  export type BookingDatesSumAggregateInputType = {
    id?: true;
    booking_id?: true;
  };

  export type BookingDatesMinAggregateInputType = {
    id?: true;
    date?: true;
    created_at?: true;
    updated_at?: true;
    booking_id?: true;
  };

  export type BookingDatesMaxAggregateInputType = {
    id?: true;
    date?: true;
    created_at?: true;
    updated_at?: true;
    booking_id?: true;
  };

  export type BookingDatesCountAggregateInputType = {
    id?: true;
    date?: true;
    created_at?: true;
    updated_at?: true;
    booking_id?: true;
    _all?: true;
  };

  export type BookingDatesAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which BookingDates to aggregate.
     */
    where?: BookingDatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingDates to fetch.
     */
    orderBy?:
      | BookingDatesOrderByWithRelationInput
      | BookingDatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BookingDatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingDates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingDates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BookingDates
     **/
    _count?: true | BookingDatesCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BookingDatesAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BookingDatesSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BookingDatesMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BookingDatesMaxAggregateInputType;
  };

  export type GetBookingDatesAggregateType<
    T extends BookingDatesAggregateArgs
  > = {
    [P in keyof T & keyof AggregateBookingDates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingDates[P]>
      : GetScalarType<T[P], AggregateBookingDates[P]>;
  };

  export type BookingDatesGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: BookingDatesWhereInput;
    orderBy?:
      | BookingDatesOrderByWithAggregationInput
      | BookingDatesOrderByWithAggregationInput[];
    by: BookingDatesScalarFieldEnum[] | BookingDatesScalarFieldEnum;
    having?: BookingDatesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingDatesCountAggregateInputType | true;
    _avg?: BookingDatesAvgAggregateInputType;
    _sum?: BookingDatesSumAggregateInputType;
    _min?: BookingDatesMinAggregateInputType;
    _max?: BookingDatesMaxAggregateInputType;
  };

  export type BookingDatesGroupByOutputType = {
    id: number;
    date: Date;
    created_at: Date;
    updated_at: Date;
    booking_id: number;
    _count: BookingDatesCountAggregateOutputType | null;
    _avg: BookingDatesAvgAggregateOutputType | null;
    _sum: BookingDatesSumAggregateOutputType | null;
    _min: BookingDatesMinAggregateOutputType | null;
    _max: BookingDatesMaxAggregateOutputType | null;
  };

  type GetBookingDatesGroupByPayload<T extends BookingDatesGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BookingDatesGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof BookingDatesGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingDatesGroupByOutputType[P]>
            : GetScalarType<T[P], BookingDatesGroupByOutputType[P]>;
        }
      >
    >;

  export type BookingDatesSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking_id?: boolean;
      booking?: boolean | BookingDates$bookingArgs<ExtArgs>;
    },
    ExtArgs['result']['bookingDates']
  >;

  export type BookingDatesSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking_id?: boolean;
      booking?: boolean | BookingDates$bookingArgs<ExtArgs>;
    },
    ExtArgs['result']['bookingDates']
  >;

  export type BookingDatesSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      date?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      booking_id?: boolean;
      booking?: boolean | BookingDates$bookingArgs<ExtArgs>;
    },
    ExtArgs['result']['bookingDates']
  >;

  export type BookingDatesSelectScalar = {
    id?: boolean;
    date?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    booking_id?: boolean;
  };

  export type BookingDatesOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    'id' | 'date' | 'created_at' | 'updated_at' | 'booking_id',
    ExtArgs['result']['bookingDates']
  >;
  export type BookingDatesInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    booking?: boolean | BookingDates$bookingArgs<ExtArgs>;
  };
  export type BookingDatesIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    booking?: boolean | BookingDates$bookingArgs<ExtArgs>;
  };
  export type BookingDatesIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    booking?: boolean | BookingDates$bookingArgs<ExtArgs>;
  };

  export type $BookingDatesPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'BookingDates';
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        date: Date;
        created_at: Date;
        updated_at: Date;
        booking_id: number;
      },
      ExtArgs['result']['bookingDates']
    >;
    composites: {};
  };

  type BookingDatesGetPayload<
    S extends boolean | null | undefined | BookingDatesDefaultArgs
  > = $Result.GetResult<Prisma.$BookingDatesPayload, S>;

  type BookingDatesCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<
    BookingDatesFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BookingDatesCountAggregateInputType | true;
  };

  export interface BookingDatesDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BookingDates'];
      meta: { name: 'BookingDates' };
    };
    /**
     * Find zero or one BookingDates that matches the filter.
     * @param {BookingDatesFindUniqueArgs} args - Arguments to find a BookingDates
     * @example
     * // Get one BookingDates
     * const bookingDates = await prisma.bookingDates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingDatesFindUniqueArgs>(
      args: SelectSubset<T, BookingDatesFindUniqueArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one BookingDates that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingDatesFindUniqueOrThrowArgs} args - Arguments to find a BookingDates
     * @example
     * // Get one BookingDates
     * const bookingDates = await prisma.bookingDates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingDatesFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BookingDatesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first BookingDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesFindFirstArgs} args - Arguments to find a BookingDates
     * @example
     * // Get one BookingDates
     * const bookingDates = await prisma.bookingDates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingDatesFindFirstArgs>(
      args?: SelectSubset<T, BookingDatesFindFirstArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first BookingDates that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesFindFirstOrThrowArgs} args - Arguments to find a BookingDates
     * @example
     * // Get one BookingDates
     * const bookingDates = await prisma.bookingDates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingDatesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BookingDatesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more BookingDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingDates
     * const bookingDates = await prisma.bookingDates.findMany()
     *
     * // Get first 10 BookingDates
     * const bookingDates = await prisma.bookingDates.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const bookingDatesWithIdOnly = await prisma.bookingDates.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BookingDatesFindManyArgs>(
      args?: SelectSubset<T, BookingDatesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a BookingDates.
     * @param {BookingDatesCreateArgs} args - Arguments to create a BookingDates.
     * @example
     * // Create one BookingDates
     * const BookingDates = await prisma.bookingDates.create({
     *   data: {
     *     // ... data to create a BookingDates
     *   }
     * })
     *
     */
    create<T extends BookingDatesCreateArgs>(
      args: SelectSubset<T, BookingDatesCreateArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many BookingDates.
     * @param {BookingDatesCreateManyArgs} args - Arguments to create many BookingDates.
     * @example
     * // Create many BookingDates
     * const bookingDates = await prisma.bookingDates.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BookingDatesCreateManyArgs>(
      args?: SelectSubset<T, BookingDatesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BookingDates and returns the data saved in the database.
     * @param {BookingDatesCreateManyAndReturnArgs} args - Arguments to create many BookingDates.
     * @example
     * // Create many BookingDates
     * const bookingDates = await prisma.bookingDates.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BookingDates and only return the `id`
     * const bookingDatesWithIdOnly = await prisma.bookingDates.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BookingDatesCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BookingDatesCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a BookingDates.
     * @param {BookingDatesDeleteArgs} args - Arguments to delete one BookingDates.
     * @example
     * // Delete one BookingDates
     * const BookingDates = await prisma.bookingDates.delete({
     *   where: {
     *     // ... filter to delete one BookingDates
     *   }
     * })
     *
     */
    delete<T extends BookingDatesDeleteArgs>(
      args: SelectSubset<T, BookingDatesDeleteArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one BookingDates.
     * @param {BookingDatesUpdateArgs} args - Arguments to update one BookingDates.
     * @example
     * // Update one BookingDates
     * const bookingDates = await prisma.bookingDates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BookingDatesUpdateArgs>(
      args: SelectSubset<T, BookingDatesUpdateArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more BookingDates.
     * @param {BookingDatesDeleteManyArgs} args - Arguments to filter BookingDates to delete.
     * @example
     * // Delete a few BookingDates
     * const { count } = await prisma.bookingDates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BookingDatesDeleteManyArgs>(
      args?: SelectSubset<T, BookingDatesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookingDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingDates
     * const bookingDates = await prisma.bookingDates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BookingDatesUpdateManyArgs>(
      args: SelectSubset<T, BookingDatesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BookingDates and returns the data updated in the database.
     * @param {BookingDatesUpdateManyAndReturnArgs} args - Arguments to update many BookingDates.
     * @example
     * // Update many BookingDates
     * const bookingDates = await prisma.bookingDates.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BookingDates and only return the `id`
     * const bookingDatesWithIdOnly = await prisma.bookingDates.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingDatesUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BookingDatesUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one BookingDates.
     * @param {BookingDatesUpsertArgs} args - Arguments to update or create a BookingDates.
     * @example
     * // Update or create a BookingDates
     * const bookingDates = await prisma.bookingDates.upsert({
     *   create: {
     *     // ... data to create a BookingDates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingDates we want to update
     *   }
     * })
     */
    upsert<T extends BookingDatesUpsertArgs>(
      args: SelectSubset<T, BookingDatesUpsertArgs<ExtArgs>>
    ): Prisma__BookingDatesClient<
      $Result.GetResult<
        Prisma.$BookingDatesPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of BookingDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesCountArgs} args - Arguments to filter BookingDates to count.
     * @example
     * // Count the number of BookingDates
     * const count = await prisma.bookingDates.count({
     *   where: {
     *     // ... the filter for the BookingDates we want to count
     *   }
     * })
     **/
    count<T extends BookingDatesCountArgs>(
      args?: Subset<T, BookingDatesCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingDatesCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BookingDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingDatesAggregateArgs>(
      args: Subset<T, BookingDatesAggregateArgs>
    ): Prisma.PrismaPromise<GetBookingDatesAggregateType<T>>;

    /**
     * Group by BookingDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingDatesGroupByArgs} args - Group by arguments.
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
      T extends BookingDatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingDatesGroupByArgs['orderBy'] }
        : { orderBy?: BookingDatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, BookingDatesGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetBookingDatesGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BookingDates model
     */
    readonly fields: BookingDatesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingDates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingDatesClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    booking<T extends BookingDates$bookingArgs<ExtArgs> = {}>(
      args?: Subset<T, BookingDates$bookingArgs<ExtArgs>>
    ): Prisma__BookingClient<
      $Result.GetResult<
        Prisma.$BookingPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BookingDates model
   */
  interface BookingDatesFieldRefs {
    readonly id: FieldRef<'BookingDates', 'Int'>;
    readonly date: FieldRef<'BookingDates', 'DateTime'>;
    readonly created_at: FieldRef<'BookingDates', 'DateTime'>;
    readonly updated_at: FieldRef<'BookingDates', 'DateTime'>;
    readonly booking_id: FieldRef<'BookingDates', 'Int'>;
  }

  // Custom InputTypes
  /**
   * BookingDates findUnique
   */
  export type BookingDatesFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * Filter, which BookingDates to fetch.
     */
    where: BookingDatesWhereUniqueInput;
  };

  /**
   * BookingDates findUniqueOrThrow
   */
  export type BookingDatesFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * Filter, which BookingDates to fetch.
     */
    where: BookingDatesWhereUniqueInput;
  };

  /**
   * BookingDates findFirst
   */
  export type BookingDatesFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * Filter, which BookingDates to fetch.
     */
    where?: BookingDatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingDates to fetch.
     */
    orderBy?:
      | BookingDatesOrderByWithRelationInput
      | BookingDatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookingDates.
     */
    cursor?: BookingDatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingDates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingDates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookingDates.
     */
    distinct?: BookingDatesScalarFieldEnum | BookingDatesScalarFieldEnum[];
  };

  /**
   * BookingDates findFirstOrThrow
   */
  export type BookingDatesFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * Filter, which BookingDates to fetch.
     */
    where?: BookingDatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingDates to fetch.
     */
    orderBy?:
      | BookingDatesOrderByWithRelationInput
      | BookingDatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BookingDates.
     */
    cursor?: BookingDatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingDates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingDates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BookingDates.
     */
    distinct?: BookingDatesScalarFieldEnum | BookingDatesScalarFieldEnum[];
  };

  /**
   * BookingDates findMany
   */
  export type BookingDatesFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * Filter, which BookingDates to fetch.
     */
    where?: BookingDatesWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BookingDates to fetch.
     */
    orderBy?:
      | BookingDatesOrderByWithRelationInput
      | BookingDatesOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BookingDates.
     */
    cursor?: BookingDatesWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BookingDates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BookingDates.
     */
    skip?: number;
    distinct?: BookingDatesScalarFieldEnum | BookingDatesScalarFieldEnum[];
  };

  /**
   * BookingDates create
   */
  export type BookingDatesCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * The data needed to create a BookingDates.
     */
    data: XOR<BookingDatesCreateInput, BookingDatesUncheckedCreateInput>;
  };

  /**
   * BookingDates createMany
   */
  export type BookingDatesCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many BookingDates.
     */
    data: BookingDatesCreateManyInput | BookingDatesCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BookingDates createManyAndReturn
   */
  export type BookingDatesCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * The data used to create many BookingDates.
     */
    data: BookingDatesCreateManyInput | BookingDatesCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookingDates update
   */
  export type BookingDatesUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * The data needed to update a BookingDates.
     */
    data: XOR<BookingDatesUpdateInput, BookingDatesUncheckedUpdateInput>;
    /**
     * Choose, which BookingDates to update.
     */
    where: BookingDatesWhereUniqueInput;
  };

  /**
   * BookingDates updateMany
   */
  export type BookingDatesUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update BookingDates.
     */
    data: XOR<
      BookingDatesUpdateManyMutationInput,
      BookingDatesUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookingDates to update
     */
    where?: BookingDatesWhereInput;
    /**
     * Limit how many BookingDates to update.
     */
    limit?: number;
  };

  /**
   * BookingDates updateManyAndReturn
   */
  export type BookingDatesUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * The data used to update BookingDates.
     */
    data: XOR<
      BookingDatesUpdateManyMutationInput,
      BookingDatesUncheckedUpdateManyInput
    >;
    /**
     * Filter which BookingDates to update
     */
    where?: BookingDatesWhereInput;
    /**
     * Limit how many BookingDates to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BookingDates upsert
   */
  export type BookingDatesUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * The filter to search for the BookingDates to update in case it exists.
     */
    where: BookingDatesWhereUniqueInput;
    /**
     * In case the BookingDates found by the `where` argument doesn't exist, create a new BookingDates with this data.
     */
    create: XOR<BookingDatesCreateInput, BookingDatesUncheckedCreateInput>;
    /**
     * In case the BookingDates was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingDatesUpdateInput, BookingDatesUncheckedUpdateInput>;
  };

  /**
   * BookingDates delete
   */
  export type BookingDatesDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
    /**
     * Filter which BookingDates to delete.
     */
    where: BookingDatesWhereUniqueInput;
  };

  /**
   * BookingDates deleteMany
   */
  export type BookingDatesDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which BookingDates to delete
     */
    where?: BookingDatesWhereInput;
    /**
     * Limit how many BookingDates to delete.
     */
    limit?: number;
  };

  /**
   * BookingDates.booking
   */
  export type BookingDates$bookingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null;
    where?: BookingWhereInput;
  };

  /**
   * BookingDates without action
   */
  export type BookingDatesDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the BookingDates
     */
    select?: BookingDatesSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BookingDates
     */
    omit?: BookingDatesOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingDatesInclude<ExtArgs> | null;
  };

  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  export type PaymentAvgAggregateOutputType = {
    id: number | null;
    booking_id: number | null;
    amount: number | null;
  };

  export type PaymentSumAggregateOutputType = {
    id: number | null;
    booking_id: number | null;
    amount: number | null;
  };

  export type PaymentMinAggregateOutputType = {
    id: number | null;
    payment_uuid: string | null;
    booking_id: number | null;
    amount: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    payment_method: string | null;
    acquirer: string | null;
    qr_url: string | null;
    redirect_url: string | null;
    billing_num: string | null;
    type: string | null;
  };

  export type PaymentMaxAggregateOutputType = {
    id: number | null;
    payment_uuid: string | null;
    booking_id: number | null;
    amount: number | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    payment_method: string | null;
    acquirer: string | null;
    qr_url: string | null;
    redirect_url: string | null;
    billing_num: string | null;
    type: string | null;
  };

  export type PaymentCountAggregateOutputType = {
    id: number;
    payment_uuid: number;
    booking_id: number;
    amount: number;
    status: number;
    created_at: number;
    updated_at: number;
    payment_method: number;
    acquirer: number;
    qr_url: number;
    redirect_url: number;
    billing_num: number;
    type: number;
    _all: number;
  };

  export type PaymentAvgAggregateInputType = {
    id?: true;
    booking_id?: true;
    amount?: true;
  };

  export type PaymentSumAggregateInputType = {
    id?: true;
    booking_id?: true;
    amount?: true;
  };

  export type PaymentMinAggregateInputType = {
    id?: true;
    payment_uuid?: true;
    booking_id?: true;
    amount?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    payment_method?: true;
    acquirer?: true;
    qr_url?: true;
    redirect_url?: true;
    billing_num?: true;
    type?: true;
  };

  export type PaymentMaxAggregateInputType = {
    id?: true;
    payment_uuid?: true;
    booking_id?: true;
    amount?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    payment_method?: true;
    acquirer?: true;
    qr_url?: true;
    redirect_url?: true;
    billing_num?: true;
    type?: true;
  };

  export type PaymentCountAggregateInputType = {
    id?: true;
    payment_uuid?: true;
    booking_id?: true;
    amount?: true;
    status?: true;
    created_at?: true;
    updated_at?: true;
    payment_method?: true;
    acquirer?: true;
    qr_url?: true;
    redirect_url?: true;
    billing_num?: true;
    type?: true;
    _all?: true;
  };

  export type PaymentAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Payments
     **/
    _count?: true | PaymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PaymentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PaymentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PaymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PaymentMaxAggregateInputType;
  };

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
    [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>;
  };

  export type PaymentGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    where?: PaymentWhereInput;
    orderBy?:
      | PaymentOrderByWithAggregationInput
      | PaymentOrderByWithAggregationInput[];
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum;
    having?: PaymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentCountAggregateInputType | true;
    _avg?: PaymentAvgAggregateInputType;
    _sum?: PaymentSumAggregateInputType;
    _min?: PaymentMinAggregateInputType;
    _max?: PaymentMaxAggregateInputType;
  };

  export type PaymentGroupByOutputType = {
    id: number;
    payment_uuid: string;
    booking_id: number;
    amount: number;
    status: string;
    created_at: Date;
    updated_at: Date;
    payment_method: string;
    acquirer: string;
    qr_url: string | null;
    redirect_url: string | null;
    billing_num: string | null;
    type: string;
    _count: PaymentCountAggregateOutputType | null;
    _avg: PaymentAvgAggregateOutputType | null;
    _sum: PaymentSumAggregateOutputType | null;
    _min: PaymentMinAggregateOutputType | null;
    _max: PaymentMaxAggregateOutputType | null;
  };

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<PaymentGroupByOutputType, T['by']> & {
          [P in keyof T & keyof PaymentGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>;
        }
      >
    >;

  export type PaymentSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      payment_uuid?: boolean;
      booking_id?: boolean;
      amount?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      payment_method?: boolean;
      acquirer?: boolean;
      qr_url?: boolean;
      redirect_url?: boolean;
      billing_num?: boolean;
      type?: boolean;
      booking?: boolean | BookingDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      payment_uuid?: boolean;
      booking_id?: boolean;
      amount?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      payment_method?: boolean;
      acquirer?: boolean;
      qr_url?: boolean;
      redirect_url?: boolean;
      billing_num?: boolean;
      type?: boolean;
      booking?: boolean | BookingDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      payment_uuid?: boolean;
      booking_id?: boolean;
      amount?: boolean;
      status?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      payment_method?: boolean;
      acquirer?: boolean;
      qr_url?: boolean;
      redirect_url?: boolean;
      billing_num?: boolean;
      type?: boolean;
      booking?: boolean | BookingDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['payment']
  >;

  export type PaymentSelectScalar = {
    id?: boolean;
    payment_uuid?: boolean;
    booking_id?: boolean;
    amount?: boolean;
    status?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    payment_method?: boolean;
    acquirer?: boolean;
    qr_url?: boolean;
    redirect_url?: boolean;
    billing_num?: boolean;
    type?: boolean;
  };

  export type PaymentOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = $Extensions.GetOmit<
    | 'id'
    | 'payment_uuid'
    | 'booking_id'
    | 'amount'
    | 'status'
    | 'created_at'
    | 'updated_at'
    | 'payment_method'
    | 'acquirer'
    | 'qr_url'
    | 'redirect_url'
    | 'billing_num'
    | 'type',
    ExtArgs['result']['payment']
  >;
  export type PaymentInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>;
  };
  export type PaymentIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>;
  };

  export type $PaymentPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    name: 'Payment';
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        payment_uuid: string;
        booking_id: number;
        amount: number;
        status: string;
        created_at: Date;
        updated_at: Date;
        payment_method: string;
        acquirer: string;
        qr_url: string | null;
        redirect_url: string | null;
        billing_num: string | null;
        type: string;
      },
      ExtArgs['result']['payment']
    >;
    composites: {};
  };

  type PaymentGetPayload<
    S extends boolean | null | undefined | PaymentDefaultArgs
  > = $Result.GetResult<Prisma.$PaymentPayload, S>;

  type PaymentCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentCountAggregateInputType | true;
  };

  export interface PaymentDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Payment'];
      meta: { name: 'Payment' };
    };
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(
      args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUnique',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(
      args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findFirst',
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     *
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PaymentFindManyArgs>(
      args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'findMany',
        ClientOptions
      >
    >;

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     *
     */
    create<T extends PaymentCreateArgs>(
      args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'create',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PaymentCreateManyArgs>(
      args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     *
     */
    delete<T extends PaymentDeleteArgs>(
      args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'delete',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PaymentUpdateArgs>(
      args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'update',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PaymentDeleteManyArgs>(
      args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PaymentUpdateManyArgs>(
      args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        ClientOptions
      >
    >;

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(
      args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>
    ): Prisma__PaymentClient<
      $Result.GetResult<
        Prisma.$PaymentPayload<ExtArgs>,
        T,
        'upsert',
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
     **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(
      args: Subset<T, PaymentAggregateArgs>
    ): Prisma.PrismaPromise<GetPaymentAggregateType<T>>;

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPaymentGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Payment model
     */
    readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BookingDefaultArgs<ExtArgs>>
    ): Prisma__BookingClient<
      | $Result.GetResult<
          Prisma.$BookingPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<'Payment', 'Int'>;
    readonly payment_uuid: FieldRef<'Payment', 'String'>;
    readonly booking_id: FieldRef<'Payment', 'Int'>;
    readonly amount: FieldRef<'Payment', 'Int'>;
    readonly status: FieldRef<'Payment', 'String'>;
    readonly created_at: FieldRef<'Payment', 'DateTime'>;
    readonly updated_at: FieldRef<'Payment', 'DateTime'>;
    readonly payment_method: FieldRef<'Payment', 'String'>;
    readonly acquirer: FieldRef<'Payment', 'String'>;
    readonly qr_url: FieldRef<'Payment', 'String'>;
    readonly redirect_url: FieldRef<'Payment', 'String'>;
    readonly billing_num: FieldRef<'Payment', 'String'>;
    readonly type: FieldRef<'Payment', 'String'>;
  }

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Payments to fetch.
     */
    orderBy?:
      | PaymentOrderByWithRelationInput
      | PaymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Payments.
     */
    skip?: number;
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[];
  };

  /**
   * Payment create
   */
  export type PaymentCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
  };

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
  };

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>;
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput;
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>;
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>;
  };

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput;
  };

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput;
    /**
     * Limit how many Payments to delete.
     */
    limit?: number;
  };

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BannerScalarFieldEnum: {
    id: 'id';
    title: 'title';
    image: 'image';
    link: 'link';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BannerScalarFieldEnum =
    (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    phone: 'phone';
    role: 'role';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const GalleryScalarFieldEnum: {
    id: 'id';
    title: 'title';
    image: 'image';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GalleryScalarFieldEnum =
    (typeof GalleryScalarFieldEnum)[keyof typeof GalleryScalarFieldEnum];

  export const CategoryScalarFieldEnum: {
    id: 'id';
    title: 'title';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CategoryScalarFieldEnum =
    (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];

  export const ServiceScalarFieldEnum: {
    id: 'id';
    title: 'title';
    image: 'image';
    price: 'price';
    discount: 'discount';
    description: 'description';
    category_id: 'category_id';
    available: 'available';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ServiceScalarFieldEnum =
    (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum];

  export const BookingScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    service_id: 'service_id';
    time: 'time';
    location: 'location';
    is_accepted: 'is_accepted';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BookingScalarFieldEnum =
    (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum];

  export const BookingDatesScalarFieldEnum: {
    id: 'id';
    date: 'date';
    created_at: 'created_at';
    updated_at: 'updated_at';
    booking_id: 'booking_id';
  };

  export type BookingDatesScalarFieldEnum =
    (typeof BookingDatesScalarFieldEnum)[keyof typeof BookingDatesScalarFieldEnum];

  export const PaymentScalarFieldEnum: {
    id: 'id';
    payment_uuid: 'payment_uuid';
    booking_id: 'booking_id';
    amount: 'amount';
    status: 'status';
    created_at: 'created_at';
    updated_at: 'updated_at';
    payment_method: 'payment_method';
    acquirer: 'acquirer';
    qr_url: 'qr_url';
    redirect_url: 'redirect_url';
    billing_num: 'billing_num';
    type: 'type';
  };

  export type PaymentScalarFieldEnum =
    (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[];
    OR?: BannerWhereInput[];
    NOT?: BannerWhereInput | BannerWhereInput[];
    id?: IntFilter<'Banner'> | number;
    title?: StringFilter<'Banner'> | string;
    image?: StringFilter<'Banner'> | string;
    link?: StringFilter<'Banner'> | string;
    created_at?: DateTimeFilter<'Banner'> | Date | string;
    updated_at?: DateTimeFilter<'Banner'> | Date | string;
  };

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    link?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BannerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: BannerWhereInput | BannerWhereInput[];
      OR?: BannerWhereInput[];
      NOT?: BannerWhereInput | BannerWhereInput[];
      title?: StringFilter<'Banner'> | string;
      image?: StringFilter<'Banner'> | string;
      link?: StringFilter<'Banner'> | string;
      created_at?: DateTimeFilter<'Banner'> | Date | string;
      updated_at?: DateTimeFilter<'Banner'> | Date | string;
    },
    'id'
  >;

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    link?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: BannerCountOrderByAggregateInput;
    _avg?: BannerAvgOrderByAggregateInput;
    _max?: BannerMaxOrderByAggregateInput;
    _min?: BannerMinOrderByAggregateInput;
    _sum?: BannerSumOrderByAggregateInput;
  };

  export type BannerScalarWhereWithAggregatesInput = {
    AND?:
      | BannerScalarWhereWithAggregatesInput
      | BannerScalarWhereWithAggregatesInput[];
    OR?: BannerScalarWhereWithAggregatesInput[];
    NOT?:
      | BannerScalarWhereWithAggregatesInput
      | BannerScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Banner'> | number;
    title?: StringWithAggregatesFilter<'Banner'> | string;
    image?: StringWithAggregatesFilter<'Banner'> | string;
    link?: StringWithAggregatesFilter<'Banner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Banner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Banner'> | Date | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<'User'> | number;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    phone?: StringNullableFilter<'User'> | string | null;
    role?: StringFilter<'User'> | string;
    created_at?: DateTimeFilter<'User'> | Date | string;
    updated_at?: DateTimeFilter<'User'> | Date | string;
    Booking?: BookingListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    Booking?: BookingOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      phone?: StringNullableFilter<'User'> | string | null;
      role?: StringFilter<'User'> | string;
      created_at?: DateTimeFilter<'User'> | Date | string;
      updated_at?: DateTimeFilter<'User'> | Date | string;
      Booking?: BookingListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phone?: SortOrderInput | SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'User'> | number;
    name?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    phone?: StringNullableWithAggregatesFilter<'User'> | string | null;
    role?: StringWithAggregatesFilter<'User'> | string;
    created_at?: DateTimeWithAggregatesFilter<'User'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'User'> | Date | string;
  };

  export type GalleryWhereInput = {
    AND?: GalleryWhereInput | GalleryWhereInput[];
    OR?: GalleryWhereInput[];
    NOT?: GalleryWhereInput | GalleryWhereInput[];
    id?: IntFilter<'Gallery'> | number;
    title?: StringFilter<'Gallery'> | string;
    image?: StringFilter<'Gallery'> | string;
    created_at?: DateTimeFilter<'Gallery'> | Date | string;
    updated_at?: DateTimeFilter<'Gallery'> | Date | string;
  };

  export type GalleryOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type GalleryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: GalleryWhereInput | GalleryWhereInput[];
      OR?: GalleryWhereInput[];
      NOT?: GalleryWhereInput | GalleryWhereInput[];
      title?: StringFilter<'Gallery'> | string;
      image?: StringFilter<'Gallery'> | string;
      created_at?: DateTimeFilter<'Gallery'> | Date | string;
      updated_at?: DateTimeFilter<'Gallery'> | Date | string;
    },
    'id'
  >;

  export type GalleryOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: GalleryCountOrderByAggregateInput;
    _avg?: GalleryAvgOrderByAggregateInput;
    _max?: GalleryMaxOrderByAggregateInput;
    _min?: GalleryMinOrderByAggregateInput;
    _sum?: GallerySumOrderByAggregateInput;
  };

  export type GalleryScalarWhereWithAggregatesInput = {
    AND?:
      | GalleryScalarWhereWithAggregatesInput
      | GalleryScalarWhereWithAggregatesInput[];
    OR?: GalleryScalarWhereWithAggregatesInput[];
    NOT?:
      | GalleryScalarWhereWithAggregatesInput
      | GalleryScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Gallery'> | number;
    title?: StringWithAggregatesFilter<'Gallery'> | string;
    image?: StringWithAggregatesFilter<'Gallery'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Gallery'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Gallery'> | Date | string;
  };

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[];
    OR?: CategoryWhereInput[];
    NOT?: CategoryWhereInput | CategoryWhereInput[];
    id?: IntFilter<'Category'> | number;
    title?: StringFilter<'Category'> | string;
    created_at?: DateTimeFilter<'Category'> | Date | string;
    updated_at?: DateTimeFilter<'Category'> | Date | string;
    Service?: ServiceListRelationFilter;
  };

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    Service?: ServiceOrderByRelationAggregateInput;
  };

  export type CategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: CategoryWhereInput | CategoryWhereInput[];
      OR?: CategoryWhereInput[];
      NOT?: CategoryWhereInput | CategoryWhereInput[];
      title?: StringFilter<'Category'> | string;
      created_at?: DateTimeFilter<'Category'> | Date | string;
      updated_at?: DateTimeFilter<'Category'> | Date | string;
      Service?: ServiceListRelationFilter;
    },
    'id'
  >;

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: CategoryCountOrderByAggregateInput;
    _avg?: CategoryAvgOrderByAggregateInput;
    _max?: CategoryMaxOrderByAggregateInput;
    _min?: CategoryMinOrderByAggregateInput;
    _sum?: CategorySumOrderByAggregateInput;
  };

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    OR?: CategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | CategoryScalarWhereWithAggregatesInput
      | CategoryScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Category'> | number;
    title?: StringWithAggregatesFilter<'Category'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Category'> | Date | string;
  };

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[];
    OR?: ServiceWhereInput[];
    NOT?: ServiceWhereInput | ServiceWhereInput[];
    id?: IntFilter<'Service'> | number;
    title?: StringFilter<'Service'> | string;
    image?: StringFilter<'Service'> | string;
    price?: IntFilter<'Service'> | number;
    discount?: IntNullableFilter<'Service'> | number | null;
    description?: StringFilter<'Service'> | string;
    category_id?: IntFilter<'Service'> | number;
    available?: BoolFilter<'Service'> | boolean;
    created_at?: DateTimeFilter<'Service'> | Date | string;
    updated_at?: DateTimeFilter<'Service'> | Date | string;
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
    Booking?: BookingListRelationFilter;
  };

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    price?: SortOrder;
    discount?: SortOrderInput | SortOrder;
    description?: SortOrder;
    category_id?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    category?: CategoryOrderByWithRelationInput;
    Booking?: BookingOrderByRelationAggregateInput;
  };

  export type ServiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: ServiceWhereInput | ServiceWhereInput[];
      OR?: ServiceWhereInput[];
      NOT?: ServiceWhereInput | ServiceWhereInput[];
      title?: StringFilter<'Service'> | string;
      image?: StringFilter<'Service'> | string;
      price?: IntFilter<'Service'> | number;
      discount?: IntNullableFilter<'Service'> | number | null;
      description?: StringFilter<'Service'> | string;
      category_id?: IntFilter<'Service'> | number;
      available?: BoolFilter<'Service'> | boolean;
      created_at?: DateTimeFilter<'Service'> | Date | string;
      updated_at?: DateTimeFilter<'Service'> | Date | string;
      category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>;
      Booking?: BookingListRelationFilter;
    },
    'id'
  >;

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    price?: SortOrder;
    discount?: SortOrderInput | SortOrder;
    description?: SortOrder;
    category_id?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: ServiceCountOrderByAggregateInput;
    _avg?: ServiceAvgOrderByAggregateInput;
    _max?: ServiceMaxOrderByAggregateInput;
    _min?: ServiceMinOrderByAggregateInput;
    _sum?: ServiceSumOrderByAggregateInput;
  };

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?:
      | ServiceScalarWhereWithAggregatesInput
      | ServiceScalarWhereWithAggregatesInput[];
    OR?: ServiceScalarWhereWithAggregatesInput[];
    NOT?:
      | ServiceScalarWhereWithAggregatesInput
      | ServiceScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Service'> | number;
    title?: StringWithAggregatesFilter<'Service'> | string;
    image?: StringWithAggregatesFilter<'Service'> | string;
    price?: IntWithAggregatesFilter<'Service'> | number;
    discount?: IntNullableWithAggregatesFilter<'Service'> | number | null;
    description?: StringWithAggregatesFilter<'Service'> | string;
    category_id?: IntWithAggregatesFilter<'Service'> | number;
    available?: BoolWithAggregatesFilter<'Service'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'Service'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Service'> | Date | string;
  };

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[];
    OR?: BookingWhereInput[];
    NOT?: BookingWhereInput | BookingWhereInput[];
    id?: IntFilter<'Booking'> | number;
    user_id?: IntFilter<'Booking'> | number;
    service_id?: IntFilter<'Booking'> | number;
    time?: StringFilter<'Booking'> | string;
    location?: StringFilter<'Booking'> | string;
    is_accepted?: BoolFilter<'Booking'> | boolean;
    status?: StringFilter<'Booking'> | string;
    created_at?: DateTimeFilter<'Booking'> | Date | string;
    updated_at?: DateTimeFilter<'Booking'> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>;
    payments?: PaymentListRelationFilter;
    booking_dates?: BookingDatesListRelationFilter;
  };

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
    time?: SortOrder;
    location?: SortOrder;
    is_accepted?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: UserOrderByWithRelationInput;
    service?: ServiceOrderByWithRelationInput;
    payments?: PaymentOrderByRelationAggregateInput;
    booking_dates?: BookingDatesOrderByRelationAggregateInput;
  };

  export type BookingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: BookingWhereInput | BookingWhereInput[];
      OR?: BookingWhereInput[];
      NOT?: BookingWhereInput | BookingWhereInput[];
      user_id?: IntFilter<'Booking'> | number;
      service_id?: IntFilter<'Booking'> | number;
      time?: StringFilter<'Booking'> | string;
      location?: StringFilter<'Booking'> | string;
      is_accepted?: BoolFilter<'Booking'> | boolean;
      status?: StringFilter<'Booking'> | string;
      created_at?: DateTimeFilter<'Booking'> | Date | string;
      updated_at?: DateTimeFilter<'Booking'> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>;
      payments?: PaymentListRelationFilter;
      booking_dates?: BookingDatesListRelationFilter;
    },
    'id'
  >;

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
    time?: SortOrder;
    location?: SortOrder;
    is_accepted?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: BookingCountOrderByAggregateInput;
    _avg?: BookingAvgOrderByAggregateInput;
    _max?: BookingMaxOrderByAggregateInput;
    _min?: BookingMinOrderByAggregateInput;
    _sum?: BookingSumOrderByAggregateInput;
  };

  export type BookingScalarWhereWithAggregatesInput = {
    AND?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    OR?: BookingScalarWhereWithAggregatesInput[];
    NOT?:
      | BookingScalarWhereWithAggregatesInput
      | BookingScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Booking'> | number;
    user_id?: IntWithAggregatesFilter<'Booking'> | number;
    service_id?: IntWithAggregatesFilter<'Booking'> | number;
    time?: StringWithAggregatesFilter<'Booking'> | string;
    location?: StringWithAggregatesFilter<'Booking'> | string;
    is_accepted?: BoolWithAggregatesFilter<'Booking'> | boolean;
    status?: StringWithAggregatesFilter<'Booking'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Booking'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Booking'> | Date | string;
  };

  export type BookingDatesWhereInput = {
    AND?: BookingDatesWhereInput | BookingDatesWhereInput[];
    OR?: BookingDatesWhereInput[];
    NOT?: BookingDatesWhereInput | BookingDatesWhereInput[];
    id?: IntFilter<'BookingDates'> | number;
    date?: DateTimeFilter<'BookingDates'> | Date | string;
    created_at?: DateTimeFilter<'BookingDates'> | Date | string;
    updated_at?: DateTimeFilter<'BookingDates'> | Date | string;
    booking_id?: IntFilter<'BookingDates'> | number;
    booking?: XOR<
      BookingNullableScalarRelationFilter,
      BookingWhereInput
    > | null;
  };

  export type BookingDatesOrderByWithRelationInput = {
    id?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_id?: SortOrder;
    booking?: BookingOrderByWithRelationInput;
  };

  export type BookingDatesWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: BookingDatesWhereInput | BookingDatesWhereInput[];
      OR?: BookingDatesWhereInput[];
      NOT?: BookingDatesWhereInput | BookingDatesWhereInput[];
      date?: DateTimeFilter<'BookingDates'> | Date | string;
      created_at?: DateTimeFilter<'BookingDates'> | Date | string;
      updated_at?: DateTimeFilter<'BookingDates'> | Date | string;
      booking_id?: IntFilter<'BookingDates'> | number;
      booking?: XOR<
        BookingNullableScalarRelationFilter,
        BookingWhereInput
      > | null;
    },
    'id'
  >;

  export type BookingDatesOrderByWithAggregationInput = {
    id?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_id?: SortOrder;
    _count?: BookingDatesCountOrderByAggregateInput;
    _avg?: BookingDatesAvgOrderByAggregateInput;
    _max?: BookingDatesMaxOrderByAggregateInput;
    _min?: BookingDatesMinOrderByAggregateInput;
    _sum?: BookingDatesSumOrderByAggregateInput;
  };

  export type BookingDatesScalarWhereWithAggregatesInput = {
    AND?:
      | BookingDatesScalarWhereWithAggregatesInput
      | BookingDatesScalarWhereWithAggregatesInput[];
    OR?: BookingDatesScalarWhereWithAggregatesInput[];
    NOT?:
      | BookingDatesScalarWhereWithAggregatesInput
      | BookingDatesScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'BookingDates'> | number;
    date?: DateTimeWithAggregatesFilter<'BookingDates'> | Date | string;
    created_at?: DateTimeWithAggregatesFilter<'BookingDates'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'BookingDates'> | Date | string;
    booking_id?: IntWithAggregatesFilter<'BookingDates'> | number;
  };

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[];
    OR?: PaymentWhereInput[];
    NOT?: PaymentWhereInput | PaymentWhereInput[];
    id?: IntFilter<'Payment'> | number;
    payment_uuid?: StringFilter<'Payment'> | string;
    booking_id?: IntFilter<'Payment'> | number;
    amount?: IntFilter<'Payment'> | number;
    status?: StringFilter<'Payment'> | string;
    created_at?: DateTimeFilter<'Payment'> | Date | string;
    updated_at?: DateTimeFilter<'Payment'> | Date | string;
    payment_method?: StringFilter<'Payment'> | string;
    acquirer?: StringFilter<'Payment'> | string;
    qr_url?: StringNullableFilter<'Payment'> | string | null;
    redirect_url?: StringNullableFilter<'Payment'> | string | null;
    billing_num?: StringNullableFilter<'Payment'> | string | null;
    type?: StringFilter<'Payment'> | string;
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>;
  };

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder;
    payment_uuid?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    acquirer?: SortOrder;
    qr_url?: SortOrderInput | SortOrder;
    redirect_url?: SortOrderInput | SortOrder;
    billing_num?: SortOrderInput | SortOrder;
    type?: SortOrder;
    booking?: BookingOrderByWithRelationInput;
  };

  export type PaymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PaymentWhereInput | PaymentWhereInput[];
      OR?: PaymentWhereInput[];
      NOT?: PaymentWhereInput | PaymentWhereInput[];
      payment_uuid?: StringFilter<'Payment'> | string;
      booking_id?: IntFilter<'Payment'> | number;
      amount?: IntFilter<'Payment'> | number;
      status?: StringFilter<'Payment'> | string;
      created_at?: DateTimeFilter<'Payment'> | Date | string;
      updated_at?: DateTimeFilter<'Payment'> | Date | string;
      payment_method?: StringFilter<'Payment'> | string;
      acquirer?: StringFilter<'Payment'> | string;
      qr_url?: StringNullableFilter<'Payment'> | string | null;
      redirect_url?: StringNullableFilter<'Payment'> | string | null;
      billing_num?: StringNullableFilter<'Payment'> | string | null;
      type?: StringFilter<'Payment'> | string;
      booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>;
    },
    'id'
  >;

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder;
    payment_uuid?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    acquirer?: SortOrder;
    qr_url?: SortOrderInput | SortOrder;
    redirect_url?: SortOrderInput | SortOrder;
    billing_num?: SortOrderInput | SortOrder;
    type?: SortOrder;
    _count?: PaymentCountOrderByAggregateInput;
    _avg?: PaymentAvgOrderByAggregateInput;
    _max?: PaymentMaxOrderByAggregateInput;
    _min?: PaymentMinOrderByAggregateInput;
    _sum?: PaymentSumOrderByAggregateInput;
  };

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    OR?: PaymentScalarWhereWithAggregatesInput[];
    NOT?:
      | PaymentScalarWhereWithAggregatesInput
      | PaymentScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<'Payment'> | number;
    payment_uuid?: StringWithAggregatesFilter<'Payment'> | string;
    booking_id?: IntWithAggregatesFilter<'Payment'> | number;
    amount?: IntWithAggregatesFilter<'Payment'> | number;
    status?: StringWithAggregatesFilter<'Payment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'Payment'> | Date | string;
    payment_method?: StringWithAggregatesFilter<'Payment'> | string;
    acquirer?: StringWithAggregatesFilter<'Payment'> | string;
    qr_url?: StringNullableWithAggregatesFilter<'Payment'> | string | null;
    redirect_url?:
      | StringNullableWithAggregatesFilter<'Payment'>
      | string
      | null;
    billing_num?: StringNullableWithAggregatesFilter<'Payment'> | string | null;
    type?: StringWithAggregatesFilter<'Payment'> | string;
  };

  export type BannerCreateInput = {
    title: string;
    image: string;
    link: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BannerUncheckedCreateInput = {
    id?: number;
    title: string;
    image: string;
    link: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BannerUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    link?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    link?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BannerCreateManyInput = {
    id?: number;
    title: string;
    image: string;
    link: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BannerUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    link?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    link?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserCreateInput = {
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    role?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Booking?: BookingCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    role?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Booking?: BookingUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: BookingUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: BookingUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    role?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GalleryCreateInput = {
    title: string;
    image: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type GalleryUncheckedCreateInput = {
    id?: number;
    title: string;
    image: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type GalleryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GalleryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GalleryCreateManyInput = {
    id?: number;
    title: string;
    image: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type GalleryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GalleryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryCreateInput = {
    title: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Service?: ServiceCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUncheckedCreateInput = {
    id?: number;
    title: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    Service?: ServiceUncheckedCreateNestedManyWithoutCategoryInput;
  };

  export type CategoryUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Service?: ServiceUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Service?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput;
  };

  export type CategoryCreateManyInput = {
    id?: number;
    title: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CategoryUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceCreateInput = {
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    category: CategoryCreateNestedOneWithoutServiceInput;
    Booking?: BookingCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUncheckedCreateInput = {
    id?: number;
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    category_id: number;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Booking?: BookingUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutServiceNestedInput;
    Booking?: BookingUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    category_id?: IntFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: BookingUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceCreateManyInput = {
    id?: number;
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    category_id: number;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ServiceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    category_id?: IntFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingCreateInput = {
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutBookingInput;
    service: ServiceCreateNestedOneWithoutBookingInput;
    payments?: PaymentCreateNestedManyWithoutBookingInput;
    booking_dates?: BookingDatesCreateNestedManyWithoutBookingInput;
  };

  export type BookingUncheckedCreateInput = {
    id?: number;
    user_id: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput;
    booking_dates?: BookingDatesUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type BookingUpdateInput = {
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutBookingNestedInput;
    service?: ServiceUpdateOneRequiredWithoutBookingNestedInput;
    payments?: PaymentUpdateManyWithoutBookingNestedInput;
    booking_dates?: BookingDatesUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    service_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput;
    booking_dates?: BookingDatesUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type BookingCreateManyInput = {
    id?: number;
    user_id: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BookingUpdateManyMutationInput = {
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    service_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingDatesCreateInput = {
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking?: BookingCreateNestedOneWithoutBooking_datesInput;
  };

  export type BookingDatesUncheckedCreateInput = {
    id?: number;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_id: number;
  };

  export type BookingDatesUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking?: BookingUpdateOneWithoutBooking_datesNestedInput;
  };

  export type BookingDatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_id?: IntFieldUpdateOperationsInput | number;
  };

  export type BookingDatesCreateManyInput = {
    id?: number;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_id: number;
  };

  export type BookingDatesUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingDatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_id?: IntFieldUpdateOperationsInput | number;
  };

  export type PaymentCreateInput = {
    payment_uuid: string;
    amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_method: string;
    acquirer: string;
    qr_url?: string | null;
    redirect_url?: string | null;
    billing_num?: string | null;
    type?: string;
    booking: BookingCreateNestedOneWithoutPaymentsInput;
  };

  export type PaymentUncheckedCreateInput = {
    id?: number;
    payment_uuid: string;
    booking_id: number;
    amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_method: string;
    acquirer: string;
    qr_url?: string | null;
    redirect_url?: string | null;
    billing_num?: string | null;
    type?: string;
  };

  export type PaymentUpdateInput = {
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
    booking?: BookingUpdateOneRequiredWithoutPaymentsNestedInput;
  };

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    booking_id?: IntFieldUpdateOperationsInput | number;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type PaymentCreateManyInput = {
    id?: number;
    payment_uuid: string;
    booking_id: number;
    amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_method: string;
    acquirer: string;
    qr_url?: string | null;
    redirect_url?: string | null;
    billing_num?: string | null;
    type?: string;
  };

  export type PaymentUpdateManyMutationInput = {
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    booking_id?: IntFieldUpdateOperationsInput | number;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    link?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BannerAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    link?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    link?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BannerSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BookingListRelationFilter = {
    every?: BookingWhereInput;
    some?: BookingWhereInput;
    none?: BookingWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phone?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phone?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    phone?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type GalleryCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type GalleryAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type GalleryMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type GalleryMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type GallerySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput;
    some?: ServiceWhereInput;
    none?: ServiceWhereInput;
  };

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput;
    isNot?: CategoryWhereInput;
  };

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    description?: SortOrder;
    category_id?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ServiceAvgOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    category_id?: SortOrder;
  };

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    description?: SortOrder;
    category_id?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    image?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    description?: SortOrder;
    category_id?: SortOrder;
    available?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ServiceSumOrderByAggregateInput = {
    id?: SortOrder;
    price?: SortOrder;
    discount?: SortOrder;
    category_id?: SortOrder;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput;
    isNot?: ServiceWhereInput;
  };

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput;
    some?: PaymentWhereInput;
    none?: PaymentWhereInput;
  };

  export type BookingDatesListRelationFilter = {
    every?: BookingDatesWhereInput;
    some?: BookingDatesWhereInput;
    none?: BookingDatesWhereInput;
  };

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BookingDatesOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
    time?: SortOrder;
    location?: SortOrder;
    is_accepted?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
  };

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
    time?: SortOrder;
    location?: SortOrder;
    is_accepted?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
    time?: SortOrder;
    location?: SortOrder;
    is_accepted?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    service_id?: SortOrder;
  };

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null;
    isNot?: BookingWhereInput | null;
  };

  export type BookingDatesCountOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_id?: SortOrder;
  };

  export type BookingDatesAvgOrderByAggregateInput = {
    id?: SortOrder;
    booking_id?: SortOrder;
  };

  export type BookingDatesMaxOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_id?: SortOrder;
  };

  export type BookingDatesMinOrderByAggregateInput = {
    id?: SortOrder;
    date?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    booking_id?: SortOrder;
  };

  export type BookingDatesSumOrderByAggregateInput = {
    id?: SortOrder;
    booking_id?: SortOrder;
  };

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput;
    isNot?: BookingWhereInput;
  };

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder;
    payment_uuid?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    acquirer?: SortOrder;
    qr_url?: SortOrder;
    redirect_url?: SortOrder;
    billing_num?: SortOrder;
    type?: SortOrder;
  };

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
  };

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    payment_uuid?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    acquirer?: SortOrder;
    qr_url?: SortOrder;
    redirect_url?: SortOrder;
    billing_num?: SortOrder;
    type?: SortOrder;
  };

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder;
    payment_uuid?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
    status?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    payment_method?: SortOrder;
    acquirer?: SortOrder;
    qr_url?: SortOrder;
    redirect_url?: SortOrder;
    billing_num?: SortOrder;
    type?: SortOrder;
  };

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder;
    booking_id?: SortOrder;
    amount?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BookingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutUserInput
      | BookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutUserInput
      | BookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutUserInput
      | BookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutUserInput,
          BookingUncheckedCreateWithoutUserInput
        >
      | BookingCreateWithoutUserInput[]
      | BookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutUserInput
      | BookingCreateOrConnectWithoutUserInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutUserInput
      | BookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BookingCreateManyUserInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutUserInput
      | BookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutUserInput
      | BookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
  };

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
  };

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    update?:
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ServiceUpdateManyWithWhereWithoutCategoryInput
      | ServiceUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
  };

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?:
      | XOR<
          ServiceCreateWithoutCategoryInput,
          ServiceUncheckedCreateWithoutCategoryInput
        >
      | ServiceCreateWithoutCategoryInput[]
      | ServiceUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?:
      | ServiceCreateOrConnectWithoutCategoryInput
      | ServiceCreateOrConnectWithoutCategoryInput[];
    upsert?:
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput
      | ServiceUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: ServiceCreateManyCategoryInputEnvelope;
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[];
    update?:
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput
      | ServiceUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?:
      | ServiceUpdateManyWithWhereWithoutCategoryInput
      | ServiceUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
  };

  export type CategoryCreateNestedOneWithoutServiceInput = {
    create?: XOR<
      CategoryCreateWithoutServiceInput,
      CategoryUncheckedCreateWithoutServiceInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutServiceInput;
    connect?: CategoryWhereUniqueInput;
  };

  export type BookingCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<
          BookingCreateWithoutServiceInput,
          BookingUncheckedCreateWithoutServiceInput
        >
      | BookingCreateWithoutServiceInput[]
      | BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutServiceInput
      | BookingCreateOrConnectWithoutServiceInput[];
    createMany?: BookingCreateManyServiceInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type BookingUncheckedCreateNestedManyWithoutServiceInput = {
    create?:
      | XOR<
          BookingCreateWithoutServiceInput,
          BookingUncheckedCreateWithoutServiceInput
        >
      | BookingCreateWithoutServiceInput[]
      | BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutServiceInput
      | BookingCreateOrConnectWithoutServiceInput[];
    createMany?: BookingCreateManyServiceInputEnvelope;
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type CategoryUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<
      CategoryCreateWithoutServiceInput,
      CategoryUncheckedCreateWithoutServiceInput
    >;
    connectOrCreate?: CategoryCreateOrConnectWithoutServiceInput;
    upsert?: CategoryUpsertWithoutServiceInput;
    connect?: CategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        CategoryUpdateToOneWithWhereWithoutServiceInput,
        CategoryUpdateWithoutServiceInput
      >,
      CategoryUncheckedUpdateWithoutServiceInput
    >;
  };

  export type BookingUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutServiceInput,
          BookingUncheckedCreateWithoutServiceInput
        >
      | BookingCreateWithoutServiceInput[]
      | BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutServiceInput
      | BookingCreateOrConnectWithoutServiceInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutServiceInput
      | BookingUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: BookingCreateManyServiceInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutServiceInput
      | BookingUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutServiceInput
      | BookingUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type BookingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?:
      | XOR<
          BookingCreateWithoutServiceInput,
          BookingUncheckedCreateWithoutServiceInput
        >
      | BookingCreateWithoutServiceInput[]
      | BookingUncheckedCreateWithoutServiceInput[];
    connectOrCreate?:
      | BookingCreateOrConnectWithoutServiceInput
      | BookingCreateOrConnectWithoutServiceInput[];
    upsert?:
      | BookingUpsertWithWhereUniqueWithoutServiceInput
      | BookingUpsertWithWhereUniqueWithoutServiceInput[];
    createMany?: BookingCreateManyServiceInputEnvelope;
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[];
    update?:
      | BookingUpdateWithWhereUniqueWithoutServiceInput
      | BookingUpdateWithWhereUniqueWithoutServiceInput[];
    updateMany?:
      | BookingUpdateManyWithWhereWithoutServiceInput
      | BookingUpdateManyWithWhereWithoutServiceInput[];
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutBookingInput = {
    create?: XOR<
      UserCreateWithoutBookingInput,
      UserUncheckedCreateWithoutBookingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput;
    connect?: UserWhereUniqueInput;
  };

  export type ServiceCreateNestedOneWithoutBookingInput = {
    create?: XOR<
      ServiceCreateWithoutBookingInput,
      ServiceUncheckedCreateWithoutBookingInput
    >;
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingInput;
    connect?: ServiceWhereUniqueInput;
  };

  export type PaymentCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<
          PaymentCreateWithoutBookingInput,
          PaymentUncheckedCreateWithoutBookingInput
        >
      | PaymentCreateWithoutBookingInput[]
      | PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBookingInput
      | PaymentCreateOrConnectWithoutBookingInput[];
    createMany?: PaymentCreateManyBookingInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type BookingDatesCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<
          BookingDatesCreateWithoutBookingInput,
          BookingDatesUncheckedCreateWithoutBookingInput
        >
      | BookingDatesCreateWithoutBookingInput[]
      | BookingDatesUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | BookingDatesCreateOrConnectWithoutBookingInput
      | BookingDatesCreateOrConnectWithoutBookingInput[];
    createMany?: BookingDatesCreateManyBookingInputEnvelope;
    connect?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
  };

  export type PaymentUncheckedCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<
          PaymentCreateWithoutBookingInput,
          PaymentUncheckedCreateWithoutBookingInput
        >
      | PaymentCreateWithoutBookingInput[]
      | PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBookingInput
      | PaymentCreateOrConnectWithoutBookingInput[];
    createMany?: PaymentCreateManyBookingInputEnvelope;
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
  };

  export type BookingDatesUncheckedCreateNestedManyWithoutBookingInput = {
    create?:
      | XOR<
          BookingDatesCreateWithoutBookingInput,
          BookingDatesUncheckedCreateWithoutBookingInput
        >
      | BookingDatesCreateWithoutBookingInput[]
      | BookingDatesUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | BookingDatesCreateOrConnectWithoutBookingInput
      | BookingDatesCreateOrConnectWithoutBookingInput[];
    createMany?: BookingDatesCreateManyBookingInputEnvelope;
    connect?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
  };

  export type UserUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<
      UserCreateWithoutBookingInput,
      UserUncheckedCreateWithoutBookingInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBookingInput;
    upsert?: UserUpsertWithoutBookingInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBookingInput,
        UserUpdateWithoutBookingInput
      >,
      UserUncheckedUpdateWithoutBookingInput
    >;
  };

  export type ServiceUpdateOneRequiredWithoutBookingNestedInput = {
    create?: XOR<
      ServiceCreateWithoutBookingInput,
      ServiceUncheckedCreateWithoutBookingInput
    >;
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingInput;
    upsert?: ServiceUpsertWithoutBookingInput;
    connect?: ServiceWhereUniqueInput;
    update?: XOR<
      XOR<
        ServiceUpdateToOneWithWhereWithoutBookingInput,
        ServiceUpdateWithoutBookingInput
      >,
      ServiceUncheckedUpdateWithoutBookingInput
    >;
  };

  export type PaymentUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutBookingInput,
          PaymentUncheckedCreateWithoutBookingInput
        >
      | PaymentCreateWithoutBookingInput[]
      | PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBookingInput
      | PaymentCreateOrConnectWithoutBookingInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutBookingInput
      | PaymentUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: PaymentCreateManyBookingInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutBookingInput
      | PaymentUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutBookingInput
      | PaymentUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type BookingDatesUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<
          BookingDatesCreateWithoutBookingInput,
          BookingDatesUncheckedCreateWithoutBookingInput
        >
      | BookingDatesCreateWithoutBookingInput[]
      | BookingDatesUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | BookingDatesCreateOrConnectWithoutBookingInput
      | BookingDatesCreateOrConnectWithoutBookingInput[];
    upsert?:
      | BookingDatesUpsertWithWhereUniqueWithoutBookingInput
      | BookingDatesUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: BookingDatesCreateManyBookingInputEnvelope;
    set?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    disconnect?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    delete?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    connect?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    update?:
      | BookingDatesUpdateWithWhereUniqueWithoutBookingInput
      | BookingDatesUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?:
      | BookingDatesUpdateManyWithWhereWithoutBookingInput
      | BookingDatesUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: BookingDatesScalarWhereInput | BookingDatesScalarWhereInput[];
  };

  export type PaymentUncheckedUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<
          PaymentCreateWithoutBookingInput,
          PaymentUncheckedCreateWithoutBookingInput
        >
      | PaymentCreateWithoutBookingInput[]
      | PaymentUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | PaymentCreateOrConnectWithoutBookingInput
      | PaymentCreateOrConnectWithoutBookingInput[];
    upsert?:
      | PaymentUpsertWithWhereUniqueWithoutBookingInput
      | PaymentUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: PaymentCreateManyBookingInputEnvelope;
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[];
    update?:
      | PaymentUpdateWithWhereUniqueWithoutBookingInput
      | PaymentUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?:
      | PaymentUpdateManyWithWhereWithoutBookingInput
      | PaymentUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
  };

  export type BookingDatesUncheckedUpdateManyWithoutBookingNestedInput = {
    create?:
      | XOR<
          BookingDatesCreateWithoutBookingInput,
          BookingDatesUncheckedCreateWithoutBookingInput
        >
      | BookingDatesCreateWithoutBookingInput[]
      | BookingDatesUncheckedCreateWithoutBookingInput[];
    connectOrCreate?:
      | BookingDatesCreateOrConnectWithoutBookingInput
      | BookingDatesCreateOrConnectWithoutBookingInput[];
    upsert?:
      | BookingDatesUpsertWithWhereUniqueWithoutBookingInput
      | BookingDatesUpsertWithWhereUniqueWithoutBookingInput[];
    createMany?: BookingDatesCreateManyBookingInputEnvelope;
    set?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    disconnect?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    delete?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    connect?: BookingDatesWhereUniqueInput | BookingDatesWhereUniqueInput[];
    update?:
      | BookingDatesUpdateWithWhereUniqueWithoutBookingInput
      | BookingDatesUpdateWithWhereUniqueWithoutBookingInput[];
    updateMany?:
      | BookingDatesUpdateManyWithWhereWithoutBookingInput
      | BookingDatesUpdateManyWithWhereWithoutBookingInput[];
    deleteMany?: BookingDatesScalarWhereInput | BookingDatesScalarWhereInput[];
  };

  export type BookingCreateNestedOneWithoutBooking_datesInput = {
    create?: XOR<
      BookingCreateWithoutBooking_datesInput,
      BookingUncheckedCreateWithoutBooking_datesInput
    >;
    connectOrCreate?: BookingCreateOrConnectWithoutBooking_datesInput;
    connect?: BookingWhereUniqueInput;
  };

  export type BookingUpdateOneWithoutBooking_datesNestedInput = {
    create?: XOR<
      BookingCreateWithoutBooking_datesInput,
      BookingUncheckedCreateWithoutBooking_datesInput
    >;
    connectOrCreate?: BookingCreateOrConnectWithoutBooking_datesInput;
    upsert?: BookingUpsertWithoutBooking_datesInput;
    disconnect?: BookingWhereInput | boolean;
    delete?: BookingWhereInput | boolean;
    connect?: BookingWhereUniqueInput;
    update?: XOR<
      XOR<
        BookingUpdateToOneWithWhereWithoutBooking_datesInput,
        BookingUpdateWithoutBooking_datesInput
      >,
      BookingUncheckedUpdateWithoutBooking_datesInput
    >;
  };

  export type BookingCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<
      BookingCreateWithoutPaymentsInput,
      BookingUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput;
    connect?: BookingWhereUniqueInput;
  };

  export type BookingUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<
      BookingCreateWithoutPaymentsInput,
      BookingUncheckedCreateWithoutPaymentsInput
    >;
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentsInput;
    upsert?: BookingUpsertWithoutPaymentsInput;
    connect?: BookingWhereUniqueInput;
    update?: XOR<
      XOR<
        BookingUpdateToOneWithWhereWithoutPaymentsInput,
        BookingUpdateWithoutPaymentsInput
      >,
      BookingUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type BookingCreateWithoutUserInput = {
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    service: ServiceCreateNestedOneWithoutBookingInput;
    payments?: PaymentCreateNestedManyWithoutBookingInput;
    booking_dates?: BookingDatesCreateNestedManyWithoutBookingInput;
  };

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput;
    booking_dates?: BookingDatesUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutUserInput,
      BookingUncheckedCreateWithoutUserInput
    >;
  };

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput;
    update: XOR<
      BookingUpdateWithoutUserInput,
      BookingUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      BookingCreateWithoutUserInput,
      BookingUncheckedCreateWithoutUserInput
    >;
  };

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput;
    data: XOR<
      BookingUpdateWithoutUserInput,
      BookingUncheckedUpdateWithoutUserInput
    >;
  };

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput;
    data: XOR<
      BookingUpdateManyMutationInput,
      BookingUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[];
    OR?: BookingScalarWhereInput[];
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[];
    id?: IntFilter<'Booking'> | number;
    user_id?: IntFilter<'Booking'> | number;
    service_id?: IntFilter<'Booking'> | number;
    time?: StringFilter<'Booking'> | string;
    location?: StringFilter<'Booking'> | string;
    is_accepted?: BoolFilter<'Booking'> | boolean;
    status?: StringFilter<'Booking'> | string;
    created_at?: DateTimeFilter<'Booking'> | Date | string;
    updated_at?: DateTimeFilter<'Booking'> | Date | string;
  };

  export type ServiceCreateWithoutCategoryInput = {
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Booking?: BookingCreateNestedManyWithoutServiceInput;
  };

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: number;
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    Booking?: BookingUncheckedCreateNestedManyWithoutServiceInput;
  };

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput;
    create: XOR<
      ServiceCreateWithoutCategoryInput,
      ServiceUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput;
    update: XOR<
      ServiceUpdateWithoutCategoryInput,
      ServiceUncheckedUpdateWithoutCategoryInput
    >;
    create: XOR<
      ServiceCreateWithoutCategoryInput,
      ServiceUncheckedCreateWithoutCategoryInput
    >;
  };

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput;
    data: XOR<
      ServiceUpdateWithoutCategoryInput,
      ServiceUncheckedUpdateWithoutCategoryInput
    >;
  };

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput;
    data: XOR<
      ServiceUpdateManyMutationInput,
      ServiceUncheckedUpdateManyWithoutCategoryInput
    >;
  };

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
    OR?: ServiceScalarWhereInput[];
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[];
    id?: IntFilter<'Service'> | number;
    title?: StringFilter<'Service'> | string;
    image?: StringFilter<'Service'> | string;
    price?: IntFilter<'Service'> | number;
    discount?: IntNullableFilter<'Service'> | number | null;
    description?: StringFilter<'Service'> | string;
    category_id?: IntFilter<'Service'> | number;
    available?: BoolFilter<'Service'> | boolean;
    created_at?: DateTimeFilter<'Service'> | Date | string;
    updated_at?: DateTimeFilter<'Service'> | Date | string;
  };

  export type CategoryCreateWithoutServiceInput = {
    title: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CategoryUncheckedCreateWithoutServiceInput = {
    id?: number;
    title: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type CategoryCreateOrConnectWithoutServiceInput = {
    where: CategoryWhereUniqueInput;
    create: XOR<
      CategoryCreateWithoutServiceInput,
      CategoryUncheckedCreateWithoutServiceInput
    >;
  };

  export type BookingCreateWithoutServiceInput = {
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutBookingInput;
    payments?: PaymentCreateNestedManyWithoutBookingInput;
    booking_dates?: BookingDatesCreateNestedManyWithoutBookingInput;
  };

  export type BookingUncheckedCreateWithoutServiceInput = {
    id?: number;
    user_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput;
    booking_dates?: BookingDatesUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type BookingCreateOrConnectWithoutServiceInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutServiceInput,
      BookingUncheckedCreateWithoutServiceInput
    >;
  };

  export type BookingCreateManyServiceInputEnvelope = {
    data: BookingCreateManyServiceInput | BookingCreateManyServiceInput[];
    skipDuplicates?: boolean;
  };

  export type CategoryUpsertWithoutServiceInput = {
    update: XOR<
      CategoryUpdateWithoutServiceInput,
      CategoryUncheckedUpdateWithoutServiceInput
    >;
    create: XOR<
      CategoryCreateWithoutServiceInput,
      CategoryUncheckedCreateWithoutServiceInput
    >;
    where?: CategoryWhereInput;
  };

  export type CategoryUpdateToOneWithWhereWithoutServiceInput = {
    where?: CategoryWhereInput;
    data: XOR<
      CategoryUpdateWithoutServiceInput,
      CategoryUncheckedUpdateWithoutServiceInput
    >;
  };

  export type CategoryUpdateWithoutServiceInput = {
    title?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type CategoryUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingUpsertWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput;
    update: XOR<
      BookingUpdateWithoutServiceInput,
      BookingUncheckedUpdateWithoutServiceInput
    >;
    create: XOR<
      BookingCreateWithoutServiceInput,
      BookingUncheckedCreateWithoutServiceInput
    >;
  };

  export type BookingUpdateWithWhereUniqueWithoutServiceInput = {
    where: BookingWhereUniqueInput;
    data: XOR<
      BookingUpdateWithoutServiceInput,
      BookingUncheckedUpdateWithoutServiceInput
    >;
  };

  export type BookingUpdateManyWithWhereWithoutServiceInput = {
    where: BookingScalarWhereInput;
    data: XOR<
      BookingUpdateManyMutationInput,
      BookingUncheckedUpdateManyWithoutServiceInput
    >;
  };

  export type UserCreateWithoutBookingInput = {
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    role?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type UserUncheckedCreateWithoutBookingInput = {
    id?: number;
    name: string;
    email: string;
    password: string;
    phone?: string | null;
    role?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type UserCreateOrConnectWithoutBookingInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBookingInput,
      UserUncheckedCreateWithoutBookingInput
    >;
  };

  export type ServiceCreateWithoutBookingInput = {
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    category: CategoryCreateNestedOneWithoutServiceInput;
  };

  export type ServiceUncheckedCreateWithoutBookingInput = {
    id?: number;
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    category_id: number;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ServiceCreateOrConnectWithoutBookingInput = {
    where: ServiceWhereUniqueInput;
    create: XOR<
      ServiceCreateWithoutBookingInput,
      ServiceUncheckedCreateWithoutBookingInput
    >;
  };

  export type PaymentCreateWithoutBookingInput = {
    payment_uuid: string;
    amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_method: string;
    acquirer: string;
    qr_url?: string | null;
    redirect_url?: string | null;
    billing_num?: string | null;
    type?: string;
  };

  export type PaymentUncheckedCreateWithoutBookingInput = {
    id?: number;
    payment_uuid: string;
    amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_method: string;
    acquirer: string;
    qr_url?: string | null;
    redirect_url?: string | null;
    billing_num?: string | null;
    type?: string;
  };

  export type PaymentCreateOrConnectWithoutBookingInput = {
    where: PaymentWhereUniqueInput;
    create: XOR<
      PaymentCreateWithoutBookingInput,
      PaymentUncheckedCreateWithoutBookingInput
    >;
  };

  export type PaymentCreateManyBookingInputEnvelope = {
    data: PaymentCreateManyBookingInput | PaymentCreateManyBookingInput[];
    skipDuplicates?: boolean;
  };

  export type BookingDatesCreateWithoutBookingInput = {
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BookingDatesUncheckedCreateWithoutBookingInput = {
    id?: number;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BookingDatesCreateOrConnectWithoutBookingInput = {
    where: BookingDatesWhereUniqueInput;
    create: XOR<
      BookingDatesCreateWithoutBookingInput,
      BookingDatesUncheckedCreateWithoutBookingInput
    >;
  };

  export type BookingDatesCreateManyBookingInputEnvelope = {
    data:
      | BookingDatesCreateManyBookingInput
      | BookingDatesCreateManyBookingInput[];
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithoutBookingInput = {
    update: XOR<
      UserUpdateWithoutBookingInput,
      UserUncheckedUpdateWithoutBookingInput
    >;
    create: XOR<
      UserCreateWithoutBookingInput,
      UserUncheckedCreateWithoutBookingInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBookingInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutBookingInput,
      UserUncheckedUpdateWithoutBookingInput
    >;
  };

  export type UserUpdateWithoutBookingInput = {
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    role?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceUpsertWithoutBookingInput = {
    update: XOR<
      ServiceUpdateWithoutBookingInput,
      ServiceUncheckedUpdateWithoutBookingInput
    >;
    create: XOR<
      ServiceCreateWithoutBookingInput,
      ServiceUncheckedCreateWithoutBookingInput
    >;
    where?: ServiceWhereInput;
  };

  export type ServiceUpdateToOneWithWhereWithoutBookingInput = {
    where?: ServiceWhereInput;
    data: XOR<
      ServiceUpdateWithoutBookingInput,
      ServiceUncheckedUpdateWithoutBookingInput
    >;
  };

  export type ServiceUpdateWithoutBookingInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    category?: CategoryUpdateOneRequiredWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    category_id?: IntFieldUpdateOperationsInput | number;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentUpsertWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput;
    update: XOR<
      PaymentUpdateWithoutBookingInput,
      PaymentUncheckedUpdateWithoutBookingInput
    >;
    create: XOR<
      PaymentCreateWithoutBookingInput,
      PaymentUncheckedCreateWithoutBookingInput
    >;
  };

  export type PaymentUpdateWithWhereUniqueWithoutBookingInput = {
    where: PaymentWhereUniqueInput;
    data: XOR<
      PaymentUpdateWithoutBookingInput,
      PaymentUncheckedUpdateWithoutBookingInput
    >;
  };

  export type PaymentUpdateManyWithWhereWithoutBookingInput = {
    where: PaymentScalarWhereInput;
    data: XOR<
      PaymentUpdateManyMutationInput,
      PaymentUncheckedUpdateManyWithoutBookingInput
    >;
  };

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    OR?: PaymentScalarWhereInput[];
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[];
    id?: IntFilter<'Payment'> | number;
    payment_uuid?: StringFilter<'Payment'> | string;
    booking_id?: IntFilter<'Payment'> | number;
    amount?: IntFilter<'Payment'> | number;
    status?: StringFilter<'Payment'> | string;
    created_at?: DateTimeFilter<'Payment'> | Date | string;
    updated_at?: DateTimeFilter<'Payment'> | Date | string;
    payment_method?: StringFilter<'Payment'> | string;
    acquirer?: StringFilter<'Payment'> | string;
    qr_url?: StringNullableFilter<'Payment'> | string | null;
    redirect_url?: StringNullableFilter<'Payment'> | string | null;
    billing_num?: StringNullableFilter<'Payment'> | string | null;
    type?: StringFilter<'Payment'> | string;
  };

  export type BookingDatesUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingDatesWhereUniqueInput;
    update: XOR<
      BookingDatesUpdateWithoutBookingInput,
      BookingDatesUncheckedUpdateWithoutBookingInput
    >;
    create: XOR<
      BookingDatesCreateWithoutBookingInput,
      BookingDatesUncheckedCreateWithoutBookingInput
    >;
  };

  export type BookingDatesUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingDatesWhereUniqueInput;
    data: XOR<
      BookingDatesUpdateWithoutBookingInput,
      BookingDatesUncheckedUpdateWithoutBookingInput
    >;
  };

  export type BookingDatesUpdateManyWithWhereWithoutBookingInput = {
    where: BookingDatesScalarWhereInput;
    data: XOR<
      BookingDatesUpdateManyMutationInput,
      BookingDatesUncheckedUpdateManyWithoutBookingInput
    >;
  };

  export type BookingDatesScalarWhereInput = {
    AND?: BookingDatesScalarWhereInput | BookingDatesScalarWhereInput[];
    OR?: BookingDatesScalarWhereInput[];
    NOT?: BookingDatesScalarWhereInput | BookingDatesScalarWhereInput[];
    id?: IntFilter<'BookingDates'> | number;
    date?: DateTimeFilter<'BookingDates'> | Date | string;
    created_at?: DateTimeFilter<'BookingDates'> | Date | string;
    updated_at?: DateTimeFilter<'BookingDates'> | Date | string;
    booking_id?: IntFilter<'BookingDates'> | number;
  };

  export type BookingCreateWithoutBooking_datesInput = {
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutBookingInput;
    service: ServiceCreateNestedOneWithoutBookingInput;
    payments?: PaymentCreateNestedManyWithoutBookingInput;
  };

  export type BookingUncheckedCreateWithoutBooking_datesInput = {
    id?: number;
    user_id: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payments?: PaymentUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type BookingCreateOrConnectWithoutBooking_datesInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutBooking_datesInput,
      BookingUncheckedCreateWithoutBooking_datesInput
    >;
  };

  export type BookingUpsertWithoutBooking_datesInput = {
    update: XOR<
      BookingUpdateWithoutBooking_datesInput,
      BookingUncheckedUpdateWithoutBooking_datesInput
    >;
    create: XOR<
      BookingCreateWithoutBooking_datesInput,
      BookingUncheckedCreateWithoutBooking_datesInput
    >;
    where?: BookingWhereInput;
  };

  export type BookingUpdateToOneWithWhereWithoutBooking_datesInput = {
    where?: BookingWhereInput;
    data: XOR<
      BookingUpdateWithoutBooking_datesInput,
      BookingUncheckedUpdateWithoutBooking_datesInput
    >;
  };

  export type BookingUpdateWithoutBooking_datesInput = {
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutBookingNestedInput;
    service?: ServiceUpdateOneRequiredWithoutBookingNestedInput;
    payments?: PaymentUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateWithoutBooking_datesInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    service_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type BookingCreateWithoutPaymentsInput = {
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: UserCreateNestedOneWithoutBookingInput;
    service: ServiceCreateNestedOneWithoutBookingInput;
    booking_dates?: BookingDatesCreateNestedManyWithoutBookingInput;
  };

  export type BookingUncheckedCreateWithoutPaymentsInput = {
    id?: number;
    user_id: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_dates?: BookingDatesUncheckedCreateNestedManyWithoutBookingInput;
  };

  export type BookingCreateOrConnectWithoutPaymentsInput = {
    where: BookingWhereUniqueInput;
    create: XOR<
      BookingCreateWithoutPaymentsInput,
      BookingUncheckedCreateWithoutPaymentsInput
    >;
  };

  export type BookingUpsertWithoutPaymentsInput = {
    update: XOR<
      BookingUpdateWithoutPaymentsInput,
      BookingUncheckedUpdateWithoutPaymentsInput
    >;
    create: XOR<
      BookingCreateWithoutPaymentsInput,
      BookingUncheckedCreateWithoutPaymentsInput
    >;
    where?: BookingWhereInput;
  };

  export type BookingUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: BookingWhereInput;
    data: XOR<
      BookingUpdateWithoutPaymentsInput,
      BookingUncheckedUpdateWithoutPaymentsInput
    >;
  };

  export type BookingUpdateWithoutPaymentsInput = {
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutBookingNestedInput;
    service?: ServiceUpdateOneRequiredWithoutBookingNestedInput;
    booking_dates?: BookingDatesUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    service_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    booking_dates?: BookingDatesUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type BookingCreateManyUserInput = {
    id?: number;
    service_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BookingUpdateWithoutUserInput = {
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    service?: ServiceUpdateOneRequiredWithoutBookingNestedInput;
    payments?: PaymentUpdateManyWithoutBookingNestedInput;
    booking_dates?: BookingDatesUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    service_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput;
    booking_dates?: BookingDatesUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    service_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ServiceCreateManyCategoryInput = {
    id?: number;
    title: string;
    image: string;
    price: number;
    discount?: number | null;
    description: string;
    available?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type ServiceUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: BookingUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    Booking?: BookingUncheckedUpdateManyWithoutServiceNestedInput;
  };

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    image?: StringFieldUpdateOperationsInput | string;
    price?: IntFieldUpdateOperationsInput | number;
    discount?: NullableIntFieldUpdateOperationsInput | number | null;
    description?: StringFieldUpdateOperationsInput | string;
    available?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingCreateManyServiceInput = {
    id?: number;
    user_id: number;
    time: string;
    location: string;
    is_accepted?: boolean;
    status?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type BookingUpdateWithoutServiceInput = {
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutBookingNestedInput;
    payments?: PaymentUpdateManyWithoutBookingNestedInput;
    booking_dates?: BookingDatesUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: PaymentUncheckedUpdateManyWithoutBookingNestedInput;
    booking_dates?: BookingDatesUncheckedUpdateManyWithoutBookingNestedInput;
  };

  export type BookingUncheckedUpdateManyWithoutServiceInput = {
    id?: IntFieldUpdateOperationsInput | number;
    user_id?: IntFieldUpdateOperationsInput | number;
    time?: StringFieldUpdateOperationsInput | string;
    location?: StringFieldUpdateOperationsInput | string;
    is_accepted?: BoolFieldUpdateOperationsInput | boolean;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PaymentCreateManyBookingInput = {
    id?: number;
    payment_uuid: string;
    amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payment_method: string;
    acquirer: string;
    qr_url?: string | null;
    redirect_url?: string | null;
    billing_num?: string | null;
    type?: string;
  };

  export type BookingDatesCreateManyBookingInput = {
    id?: number;
    date: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type PaymentUpdateWithoutBookingInput = {
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type PaymentUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type PaymentUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    payment_uuid?: StringFieldUpdateOperationsInput | string;
    amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    payment_method?: StringFieldUpdateOperationsInput | string;
    acquirer?: StringFieldUpdateOperationsInput | string;
    qr_url?: NullableStringFieldUpdateOperationsInput | string | null;
    redirect_url?: NullableStringFieldUpdateOperationsInput | string | null;
    billing_num?: NullableStringFieldUpdateOperationsInput | string | null;
    type?: StringFieldUpdateOperationsInput | string;
  };

  export type BookingDatesUpdateWithoutBookingInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingDatesUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BookingDatesUncheckedUpdateManyWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number;
    date?: DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
