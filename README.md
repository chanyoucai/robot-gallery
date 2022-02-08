### 启动步骤
1. npm i
2. npm start

### `css`模组化插件使用
> npm i typescript-plugin-css-modules --save-dev

1. 在tsconfig.json中加入配置
```
"plugins": [{"name": "typescript-plugin-css-modules"}]
```
2. 在项目根文件下新增`.vscode`文件夹
> 在文件夹中新增`settings.json`文件，加入以下配置
```
{
	"typescript.tsdk": "node_modules/typescript/lib",
	"typescript.enablePromptUseWorkspaceTsdk": true
}
```
