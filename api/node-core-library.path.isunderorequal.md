[Home](./index) &gt; [@microsoft/node-core-library](./node-core-library.md) &gt; [Path](./node-core-library.path.md) &gt; [isUnderOrEqual](./node-core-library.path.isunderorequal.md)

# Path.isUnderOrEqual method

Returns true if "childPath" is equal to "parentFolderPath", or if it is inside that folder or one of its children. The "childPath" can refer to any type of file system object.

**Signature:**
```javascript
static isUnderOrEqual(childPath: string, parentFolderPath: string): boolean;
```
**Returns:** `boolean`

## Remarks

The indicated file/folder objects are not required to actually exist on disk. For example, "parentFolderPath" is interpreted as a folder name even if it refers to a file. If the paths are relative, they will first be resolved using path.resolve().

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  `childPath` | `string` |  |
|  `parentFolderPath` | `string` |  |
