// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import { IApiItemJson, IApiItemOptions, ApiItem, ApiItemKind } from './ApiItem';
import { ApiClass, IApiClassOptions } from './ApiClass';
import { ApiEntryPoint, IApiEntryPointOptions } from './ApiEntryPoint';
import { ApiMethod, IApiMethodOptions } from './ApiMethod';
import { ApiModel } from './ApiModel';
import { ApiNamespace, IApiNamespaceOptions } from './ApiNamespace';
import { ApiPackage, IApiPackageOptions } from './ApiPackage';
import { ApiInterface, IApiInterfaceOptions } from './ApiInterface';
import { ApiPropertySignature, IApiPropertySignatureOptions } from './ApiPropertySignature';
import { ApiParameter, IApiParameterOptions } from './ApiParameter';
import { ApiMethodSignature, IApiMethodSignatureOptions } from './ApiMethodSignature';
import { ApiProperty, IApiPropertyOptions } from './ApiProperty';
import { ApiEnumMember, IApiEnumMemberOptions } from './ApiEnumMember';
import { ApiEnum, IApiEnumOptions } from './ApiEnum';

export class Deserializer {
  public static deserialize(jsonObject: IApiItemJson): ApiItem {
    const options: Partial<IApiItemOptions> = { };

    switch (jsonObject.kind) {
      case ApiItemKind.Class:
        ApiClass.onDeserializeInto(options, jsonObject);
        return new ApiClass(options as IApiClassOptions);
      case ApiItemKind.EntryPoint:
        ApiEntryPoint.onDeserializeInto(options, jsonObject);
        return new ApiEntryPoint(options as IApiEntryPointOptions);
      case ApiItemKind.Enum:
        ApiEnum.onDeserializeInto(options, jsonObject);
        return new ApiEnum(options as IApiEnumOptions);
      case ApiItemKind.EnumMember:
        ApiEnumMember.onDeserializeInto(options, jsonObject);
        return new ApiEnumMember(options as IApiEnumMemberOptions);
      case ApiItemKind.Interface:
        ApiInterface.onDeserializeInto(options, jsonObject);
        return new ApiInterface(options as IApiInterfaceOptions);
      case ApiItemKind.Method:
        ApiMethod.onDeserializeInto(options, jsonObject);
        return new ApiMethod(options as IApiMethodOptions);
      case ApiItemKind.MethodSignature:
        ApiMethodSignature.onDeserializeInto(options, jsonObject);
        return new ApiMethodSignature(options as IApiMethodSignatureOptions);
      case ApiItemKind.Model:
        return new ApiModel();
      case ApiItemKind.Namespace:
        ApiNamespace.onDeserializeInto(options, jsonObject);
        return new ApiNamespace(options as IApiNamespaceOptions);
      case ApiItemKind.Package:
        ApiPackage.onDeserializeInto(options, jsonObject);
        return new ApiPackage(options as IApiPackageOptions);
      case ApiItemKind.Parameter:
        ApiParameter.onDeserializeInto(options, jsonObject);
        return new ApiParameter(options as IApiParameterOptions);
      case ApiItemKind.Property:
        ApiProperty.onDeserializeInto(options, jsonObject);
        return new ApiProperty(options as IApiPropertyOptions);
      case ApiItemKind.PropertySignature:
        ApiPropertySignature.onDeserializeInto(options, jsonObject);
        return new ApiPropertySignature(options as IApiPropertySignatureOptions);
      default:
        throw new Error(`Failed to deserialize unsupported API item type ${JSON.stringify(jsonObject.kind)}`);
    }
  }
}