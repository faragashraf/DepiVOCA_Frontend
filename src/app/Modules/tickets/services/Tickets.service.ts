//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.20.0.0 (NJsonSchema v10.9.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class VOCAController {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : environment.VOCAApiURL;
    }

    /**
     * @return Success
     */
    getMandatoryMetaDate(): Observable<CdmendDtoIEnumerableCommonResponse> {
        let url_ = this.baseUrl + "/api/VOCA/GetMandatoryMetaDate";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetMandatoryMetaDate(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetMandatoryMetaDate(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<CdmendDtoIEnumerableCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<CdmendDtoIEnumerableCommonResponse>;
        }));
    }

    protected processGetMandatoryMetaDate(response: HttpResponseBase): Observable<CdmendDtoIEnumerableCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CdmendDtoIEnumerableCommonResponse;
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    getMandatoryAll(): Observable<CdCategoryMandDtoIEnumerableCommonResponse> {
        let url_ = this.baseUrl + "/api/VOCA/GetMandatoryAll";
        url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processGetMandatoryAll(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetMandatoryAll(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<CdCategoryMandDtoIEnumerableCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<CdCategoryMandDtoIEnumerableCommonResponse>;
        }));
    }

    protected processGetMandatoryAll(response: HttpResponseBase): Observable<CdCategoryMandDtoIEnumerableCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CdCategoryMandDtoIEnumerableCommonResponse;
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    getAllCategories(): Observable<CdcategoryDtoIEnumerableCommonResponse> {
        let url_ = this.baseUrl + "/api/VOCA/GetAllCategories";
        url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processGetAllCategories(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllCategories(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<CdcategoryDtoIEnumerableCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<CdcategoryDtoIEnumerableCommonResponse>;
        }));
    }

    protected processGetAllCategories(response: HttpResponseBase): Observable<CdcategoryDtoIEnumerableCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CdcategoryDtoIEnumerableCommonResponse;
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @return Success
     */
    getAllSources(): Observable<CdsrcIEnumerableCommonResponse> {
        let url_ = this.baseUrl + "/api/VOCA/GetAllSources";
        url_ = url_.replace(/[?&]$/, "");

        let options_: any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "text/plain"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processGetAllSources(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllSources(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<CdsrcIEnumerableCommonResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<CdsrcIEnumerableCommonResponse>;
        }));
    }

    protected processGetAllSources(response: HttpResponseBase): Observable<CdsrcIEnumerableCommonResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as CdsrcIEnumerableCommonResponse;
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    addNewTicket(body: TicketRequestDto | undefined): Observable<StringCommonResponseTask> {
        let url_ = this.baseUrl + "/api/VOCA/AddNewTicket";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processAddNewTicket(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddNewTicket(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StringCommonResponseTask>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StringCommonResponseTask>;
        }));
    }

    protected processAddNewTicket(response: HttpResponseBase): Observable<StringCommonResponseTask> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StringCommonResponseTask;
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    addNewEvent(body: TkEventRequestDto | undefined): Observable<StringCommonResponseTask> {
        let url_ = this.baseUrl + "/api/VOCA/AddNewEvent";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_: any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "text/plain"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_: any) => {
            return this.processAddNewEvent(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processAddNewEvent(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<StringCommonResponseTask>;
                }
            } else
                return _observableThrow(response_) as any as Observable<StringCommonResponseTask>;
        }));
    }

    protected processAddNewEvent(response: HttpResponseBase): Observable<StringCommonResponseTask> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
                (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); } }
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                let result200: any = null;
                result200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver) as StringCommonResponseTask;
                return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export interface AggregateException {
    targetSite: MethodBase;
    readonly data: { [key: string]: any; } | undefined;
    innerException: Exception;
    helpLink: string | undefined;
    source: string | undefined;
    hResult: number;
    readonly stackTrace: string | undefined;
    readonly innerExceptions: Exception[] | undefined;
    readonly message: string | undefined;
}

export interface Assembly {
    readonly definedTypes: TypeInfo[] | undefined;
    readonly exportedTypes: Type[] | undefined;
    readonly codeBase: string | undefined;
    entryPoint: MethodInfo;
    readonly fullName: string | undefined;
    readonly imageRuntimeVersion: string | undefined;
    readonly isDynamic: boolean;
    readonly location: string | undefined;
    readonly reflectionOnly: boolean;
    readonly isCollectible: boolean;
    readonly isFullyTrusted: boolean;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly escapedCodeBase: string | undefined;
    manifestModule: Module;
    readonly modules: Module[] | undefined;
    readonly globalAssemblyCache: boolean;
    readonly hostContext: number;
    securityRuleSet: SecurityRuleSet;
}

export enum CallingConventions {
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _32 = 32,
    _64 = 64,
}

export interface CdmendDtoIEnumerableCommonResponse {
    readonly isSuccess: boolean;
    errors: ErrorDto[] ;
    data: CdmendDto[] | undefined;
}
export interface CdmendDto {
    cdmendSql: number;
    cdmendType: string | undefined;
    cdmendTxt: string | undefined;
    cdmendTbl: string | undefined;
    cdmendDatatype: string | undefined;
    required: boolean ;
    requiredTrue: boolean | undefined;
    email: boolean | undefined;
    pattern: boolean | undefined;
    min: number | undefined;
    max: number | undefined;
    minxLenght: number | undefined;
    maxLenght: number | undefined;
    cdmendmask: string | undefined;
    cdmendStat: boolean;
}
export interface CdCategoryMandDto {
    mendSql: number;
    mendCategory: number;
    mendField: string ;
    mendStat: boolean;
}

export interface CdCategoryMandDtoIEnumerableCommonResponse {
    readonly isSuccess: boolean;
    errors: ErrorDto[];
    data: CdCategoryMandDto[] | undefined;
}

export interface CdcategoryDto {
    catId: number;
    catParent: number;
    catName: string | undefined;
    catMend: string | undefined;
    catWorkFlow: number;
    catSms: boolean;
    catMailNotification: boolean;
    to: string | undefined;
    cc: string | undefined;
}

export interface CdcategoryDtoIEnumerableCommonResponse {
    readonly isSuccess: boolean;
    errors: ErrorDto[];
    data: CdcategoryDto[] | undefined;
}

export interface Cdsrc {
    srcCd: number;
    srcNm: string | undefined;
    srcSusp: boolean;
}

export interface CdsrcIEnumerableCommonResponse {
    readonly isSuccess: boolean;
    errors: ErrorDto[] | undefined;
    data: Cdsrc[] | undefined;
}

export interface ConstructorInfo {
    readonly name: string | undefined;
    declaringType: Type;
    reflectedType: Type;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    attributes: MethodAttributes;
    methodImplementationFlags: MethodImplAttributes;
    callingConvention: CallingConventions;
    readonly isAbstract: boolean;
    readonly isConstructor: boolean;
    readonly isFinal: boolean;
    readonly isHideBySig: boolean;
    readonly isSpecialName: boolean;
    readonly isStatic: boolean;
    readonly isVirtual: boolean;
    readonly isAssembly: boolean;
    readonly isFamily: boolean;
    readonly isFamilyAndAssembly: boolean;
    readonly isFamilyOrAssembly: boolean;
    readonly isPrivate: boolean;
    readonly isPublic: boolean;
    readonly isConstructedGenericMethod: boolean;
    readonly isGenericMethod: boolean;
    readonly isGenericMethodDefinition: boolean;
    readonly containsGenericParameters: boolean;
    methodHandle: RuntimeMethodHandle;
    readonly isSecurityCritical: boolean;
    readonly isSecuritySafeCritical: boolean;
    readonly isSecurityTransparent: boolean;
    memberType: MemberTypes;
}

export interface CustomAttributeData {
    attributeType: Type;
    constructor: ConstructorInfo;
    readonly constructorArguments: CustomAttributeTypedArgument[] | undefined;
    readonly namedArguments: CustomAttributeNamedArgument[] | undefined;
}

export interface CustomAttributeNamedArgument {
    memberInfo: MemberInfo;
    typedValue: CustomAttributeTypedArgument;
    readonly memberName: string | undefined;
    readonly isField: boolean;
}

export interface CustomAttributeTypedArgument {
    argumentType: Type;
    value: any | undefined;
}

export interface ErrorDto {
    code: string | undefined;
    message: string | undefined;
}

export enum EventAttributes {
    _0 = 0,
    _512 = 512,
    _1024 = 1024,
}

export interface EventInfo {
    readonly name: string | undefined;
    declaringType: Type;
    reflectedType: Type;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    memberType: MemberTypes;
    attributes: EventAttributes;
    readonly isSpecialName: boolean;
    addMethod: MethodInfo;
    removeMethod: MethodInfo;
    raiseMethod: MethodInfo;
    readonly isMulticast: boolean;
    eventHandlerType: Type;
}

export interface Exception {
    readonly message: string | undefined;
    targetSite: MethodBase;
    readonly data: { [key: string]: any; } | undefined;
    innerException: Exception;
    helpLink: string | undefined;
    source: string | undefined;
    hResult: number;
    readonly stackTrace: string | undefined;
}

export enum FieldAttributes {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _5 = 5,
    _6 = 6,
    _7 = 7,
    _16 = 16,
    _32 = 32,
    _64 = 64,
    _128 = 128,
    _256 = 256,
    _512 = 512,
    _1024 = 1024,
    _4096 = 4096,
    _8192 = 8192,
    _32768 = 32768,
    _38144 = 38144,
}

export interface FieldInfo {
    readonly name: string | undefined;
    declaringType: Type;
    reflectedType: Type;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    memberType: MemberTypes;
    attributes: FieldAttributes;
    fieldType: Type;
    readonly isInitOnly: boolean;
    readonly isLiteral: boolean;
    readonly isNotSerialized: boolean;
    readonly isPinvokeImpl: boolean;
    readonly isSpecialName: boolean;
    readonly isStatic: boolean;
    readonly isAssembly: boolean;
    readonly isFamily: boolean;
    readonly isFamilyAndAssembly: boolean;
    readonly isFamilyOrAssembly: boolean;
    readonly isPrivate: boolean;
    readonly isPublic: boolean;
    readonly isSecurityCritical: boolean;
    readonly isSecuritySafeCritical: boolean;
    readonly isSecurityTransparent: boolean;
    fieldHandle: RuntimeFieldHandle;
}

export enum GenericParameterAttributes {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _8 = 8,
    _16 = 16,
    _28 = 28,
}

export interface ICustomAttributeProvider {
}

export interface IntPtr {
}

export enum LayoutKind {
    _0 = 0,
    _2 = 2,
    _3 = 3,
}

export interface MemberInfo {
    memberType: MemberTypes;
    declaringType: Type;
    reflectedType: Type;
    readonly name: string | undefined;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
}

export enum MemberTypes {
    _1 = 1,
    _2 = 2,
    _4 = 4,
    _8 = 8,
    _16 = 16,
    _32 = 32,
    _64 = 64,
    _128 = 128,
    _191 = 191,
}

export enum MethodAttributes {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _5 = 5,
    _6 = 6,
    _7 = 7,
    _8 = 8,
    _16 = 16,
    _32 = 32,
    _64 = 64,
    _128 = 128,
    _256 = 256,
    _512 = 512,
    _1024 = 1024,
    _2048 = 2048,
    _4096 = 4096,
    _8192 = 8192,
    _16384 = 16384,
    _32768 = 32768,
    _53248 = 53248,
}

export interface MethodBase {
    memberType: MemberTypes;
    readonly name: string | undefined;
    declaringType: Type;
    reflectedType: Type;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    attributes: MethodAttributes;
    methodImplementationFlags: MethodImplAttributes;
    callingConvention: CallingConventions;
    readonly isAbstract: boolean;
    readonly isConstructor: boolean;
    readonly isFinal: boolean;
    readonly isHideBySig: boolean;
    readonly isSpecialName: boolean;
    readonly isStatic: boolean;
    readonly isVirtual: boolean;
    readonly isAssembly: boolean;
    readonly isFamily: boolean;
    readonly isFamilyAndAssembly: boolean;
    readonly isFamilyOrAssembly: boolean;
    readonly isPrivate: boolean;
    readonly isPublic: boolean;
    readonly isConstructedGenericMethod: boolean;
    readonly isGenericMethod: boolean;
    readonly isGenericMethodDefinition: boolean;
    readonly containsGenericParameters: boolean;
    methodHandle: RuntimeMethodHandle;
    readonly isSecurityCritical: boolean;
    readonly isSecuritySafeCritical: boolean;
    readonly isSecurityTransparent: boolean;
}

export enum MethodImplAttributes {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _8 = 8,
    _16 = 16,
    _32 = 32,
    _64 = 64,
    _128 = 128,
    _256 = 256,
    _512 = 512,
    _4096 = 4096,
    _65535 = 65535,
}

export interface MethodInfo {
    readonly name: string | undefined;
    declaringType: Type;
    reflectedType: Type;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    attributes: MethodAttributes;
    methodImplementationFlags: MethodImplAttributes;
    callingConvention: CallingConventions;
    readonly isAbstract: boolean;
    readonly isConstructor: boolean;
    readonly isFinal: boolean;
    readonly isHideBySig: boolean;
    readonly isSpecialName: boolean;
    readonly isStatic: boolean;
    readonly isVirtual: boolean;
    readonly isAssembly: boolean;
    readonly isFamily: boolean;
    readonly isFamilyAndAssembly: boolean;
    readonly isFamilyOrAssembly: boolean;
    readonly isPrivate: boolean;
    readonly isPublic: boolean;
    readonly isConstructedGenericMethod: boolean;
    readonly isGenericMethod: boolean;
    readonly isGenericMethodDefinition: boolean;
    readonly containsGenericParameters: boolean;
    methodHandle: RuntimeMethodHandle;
    readonly isSecurityCritical: boolean;
    readonly isSecuritySafeCritical: boolean;
    readonly isSecurityTransparent: boolean;
    memberType: MemberTypes;
    returnParameter: ParameterInfo;
    returnType: Type;
    returnTypeCustomAttributes: ICustomAttributeProvider;
}

export interface Module {
    assembly: Assembly;
    readonly fullyQualifiedName: string | undefined;
    readonly name: string | undefined;
    readonly mdStreamVersion: number;
    readonly moduleVersionId: string;
    readonly scopeName: string | undefined;
    moduleHandle: ModuleHandle;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly metadataToken: number;
}

export interface ModuleHandle {
    readonly mdStreamVersion: number;
}

export enum ParameterAttributes {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _4 = 4,
    _8 = 8,
    _16 = 16,
    _4096 = 4096,
    _8192 = 8192,
    _16384 = 16384,
    _32768 = 32768,
    _61440 = 61440,
}

export interface ParameterInfo {
    attributes: ParameterAttributes;
    member: MemberInfo;
    readonly name: string | undefined;
    parameterType: Type;
    readonly position: number;
    readonly isIn: boolean;
    readonly isLcid: boolean;
    readonly isOptional: boolean;
    readonly isOut: boolean;
    readonly isRetval: boolean;
    readonly defaultValue: any | undefined;
    readonly rawDefaultValue: any | undefined;
    readonly hasDefaultValue: boolean;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly metadataToken: number;
}

export enum PropertyAttributes {
    _0 = 0,
    _512 = 512,
    _1024 = 1024,
    _4096 = 4096,
    _8192 = 8192,
    _16384 = 16384,
    _32768 = 32768,
    _62464 = 62464,
}

export interface PropertyInfo {
    readonly name: string | undefined;
    declaringType: Type;
    reflectedType: Type;
    module: Module;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    memberType: MemberTypes;
    propertyType: Type;
    attributes: PropertyAttributes;
    readonly isSpecialName: boolean;
    readonly canRead: boolean;
    readonly canWrite: boolean;
    getMethod: MethodInfo;
    setMethod: MethodInfo;
}

export interface RuntimeFieldHandle {
    value: IntPtr;
}

export interface RuntimeMethodHandle {
    value: IntPtr;
}

export interface RuntimeTypeHandle {
    value: IntPtr;
}

export enum SecurityRuleSet {
    _0 = 0,
    _1 = 1,
    _2 = 2,
}

export interface StringCommonResponse {
    readonly isSuccess: boolean;
    errors: ErrorDto[] | undefined;
    data: string | undefined;
}

export interface StringCommonResponseTask {
    readonly id: number;
    exception: AggregateException;
    status: TaskStatus;
    readonly isCanceled: boolean;
    readonly isCompleted: boolean;
    readonly isCompletedSuccessfully: boolean;
    creationOptions: TaskCreationOptions;
    readonly asyncState: any | undefined;
    readonly isFaulted: boolean;
    result: StringCommonResponse;
}

export interface StructLayoutAttribute {
    readonly typeId: any | undefined;
    value: LayoutKind;
}

export enum TaskCreationOptions {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _4 = 4,
    _8 = 8,
    _16 = 16,
    _64 = 64,
}

export enum TaskStatus {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _5 = 5,
    _6 = 6,
    _7 = 7,
}

export interface TicketRequestDto {
    tkCategoryCd: number;
    tkCompSrc: number;
    tkDetails: string | undefined;
    mandFileds: CdCategoryMandDto[] | undefined;
}

export interface TkEventRequestDto {
    tkupTxt: string | undefined;
    tkupEvtId: number | undefined;
    tkupUser: number;
}

export interface Type {
    readonly name: string | undefined;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    readonly isInterface: boolean;
    memberType: MemberTypes;
    readonly namespace: string | undefined;
    readonly assemblyQualifiedName: string | undefined;
    readonly fullName: string | undefined;
    assembly: Assembly;
    module: Module;
    readonly isNested: boolean;
    declaringType: Type;
    declaringMethod: MethodBase;
    reflectedType: Type;
    underlyingSystemType: Type;
    readonly isTypeDefinition: boolean;
    readonly isArray: boolean;
    readonly isByRef: boolean;
    readonly isPointer: boolean;
    readonly isConstructedGenericType: boolean;
    readonly isGenericParameter: boolean;
    readonly isGenericTypeParameter: boolean;
    readonly isGenericMethodParameter: boolean;
    readonly isGenericType: boolean;
    readonly isGenericTypeDefinition: boolean;
    readonly isSZArray: boolean;
    readonly isVariableBoundArray: boolean;
    readonly isByRefLike: boolean;
    readonly hasElementType: boolean;
    readonly genericTypeArguments: Type[] | undefined;
    readonly genericParameterPosition: number;
    genericParameterAttributes: GenericParameterAttributes;
    attributes: TypeAttributes;
    readonly isAbstract: boolean;
    readonly isImport: boolean;
    readonly isSealed: boolean;
    readonly isSpecialName: boolean;
    readonly isClass: boolean;
    readonly isNestedAssembly: boolean;
    readonly isNestedFamANDAssem: boolean;
    readonly isNestedFamily: boolean;
    readonly isNestedFamORAssem: boolean;
    readonly isNestedPrivate: boolean;
    readonly isNestedPublic: boolean;
    readonly isNotPublic: boolean;
    readonly isPublic: boolean;
    readonly isAutoLayout: boolean;
    readonly isExplicitLayout: boolean;
    readonly isLayoutSequential: boolean;
    readonly isAnsiClass: boolean;
    readonly isAutoClass: boolean;
    readonly isUnicodeClass: boolean;
    readonly isCOMObject: boolean;
    readonly isContextful: boolean;
    readonly isEnum: boolean;
    readonly isMarshalByRef: boolean;
    readonly isPrimitive: boolean;
    readonly isValueType: boolean;
    readonly isSignatureType: boolean;
    readonly isSecurityCritical: boolean;
    readonly isSecuritySafeCritical: boolean;
    readonly isSecurityTransparent: boolean;
    structLayoutAttribute: StructLayoutAttribute;
    typeInitializer: ConstructorInfo;
    typeHandle: RuntimeTypeHandle;
    readonly guid: string;
    baseType: Type;
    readonly isSerializable: boolean;
    readonly containsGenericParameters: boolean;
    readonly isVisible: boolean;
}

export enum TypeAttributes {
    _0 = 0,
    _1 = 1,
    _2 = 2,
    _3 = 3,
    _4 = 4,
    _5 = 5,
    _6 = 6,
    _7 = 7,
    _8 = 8,
    _16 = 16,
    _24 = 24,
    _32 = 32,
    _128 = 128,
    _256 = 256,
    _1024 = 1024,
    _2048 = 2048,
    _4096 = 4096,
    _8192 = 8192,
    _16384 = 16384,
    _65536 = 65536,
    _131072 = 131072,
    _196608 = 196608,
    _262144 = 262144,
    _264192 = 264192,
    _1048576 = 1048576,
    _12582912 = 12582912,
}

export interface TypeInfo {
    readonly name: string | undefined;
    readonly customAttributes: CustomAttributeData[] | undefined;
    readonly isCollectible: boolean;
    readonly metadataToken: number;
    readonly isInterface: boolean;
    memberType: MemberTypes;
    readonly namespace: string | undefined;
    readonly assemblyQualifiedName: string | undefined;
    readonly fullName: string | undefined;
    assembly: Assembly;
    module: Module;
    readonly isNested: boolean;
    declaringType: Type;
    declaringMethod: MethodBase;
    reflectedType: Type;
    underlyingSystemType: Type;
    readonly isTypeDefinition: boolean;
    readonly isArray: boolean;
    readonly isByRef: boolean;
    readonly isPointer: boolean;
    readonly isConstructedGenericType: boolean;
    readonly isGenericParameter: boolean;
    readonly isGenericTypeParameter: boolean;
    readonly isGenericMethodParameter: boolean;
    readonly isGenericType: boolean;
    readonly isGenericTypeDefinition: boolean;
    readonly isSZArray: boolean;
    readonly isVariableBoundArray: boolean;
    readonly isByRefLike: boolean;
    readonly hasElementType: boolean;
    readonly genericTypeArguments: Type[] | undefined;
    readonly genericParameterPosition: number;
    genericParameterAttributes: GenericParameterAttributes;
    attributes: TypeAttributes;
    readonly isAbstract: boolean;
    readonly isImport: boolean;
    readonly isSealed: boolean;
    readonly isSpecialName: boolean;
    readonly isClass: boolean;
    readonly isNestedAssembly: boolean;
    readonly isNestedFamANDAssem: boolean;
    readonly isNestedFamily: boolean;
    readonly isNestedFamORAssem: boolean;
    readonly isNestedPrivate: boolean;
    readonly isNestedPublic: boolean;
    readonly isNotPublic: boolean;
    readonly isPublic: boolean;
    readonly isAutoLayout: boolean;
    readonly isExplicitLayout: boolean;
    readonly isLayoutSequential: boolean;
    readonly isAnsiClass: boolean;
    readonly isAutoClass: boolean;
    readonly isUnicodeClass: boolean;
    readonly isCOMObject: boolean;
    readonly isContextful: boolean;
    readonly isEnum: boolean;
    readonly isMarshalByRef: boolean;
    readonly isPrimitive: boolean;
    readonly isValueType: boolean;
    readonly isSignatureType: boolean;
    readonly isSecurityCritical: boolean;
    readonly isSecuritySafeCritical: boolean;
    readonly isSecurityTransparent: boolean;
    structLayoutAttribute: StructLayoutAttribute;
    typeInitializer: ConstructorInfo;
    typeHandle: RuntimeTypeHandle;
    readonly guid: string;
    baseType: Type;
    readonly isSerializable: boolean;
    readonly containsGenericParameters: boolean;
    readonly isVisible: boolean;
    readonly genericTypeParameters: Type[] | undefined;
    readonly declaredConstructors: ConstructorInfo[] | undefined;
    readonly declaredEvents: EventInfo[] | undefined;
    readonly declaredFields: FieldInfo[] | undefined;
    readonly declaredMembers: MemberInfo[] | undefined;
    readonly declaredMethods: MethodInfo[] | undefined;
    readonly declaredNestedTypes: TypeInfo[] | undefined;
    readonly declaredProperties: PropertyInfo[] | undefined;
    readonly implementedInterfaces: Type[] | undefined;
}

export class ApiException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new ApiException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}