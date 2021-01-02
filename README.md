# eslint-config-erikphansen

## Usage in projects

If you want to use this in your project, do the following:

1. Run `npx install-peerdeps -d eslint-config-erikphansen`

   This installs everything `eslint-config-erikphansen` needs to work in your project.

1. In your `.eslintrc` (or your preferred ESLint config method) add: `"extends": "erikphansen"`

   For example, a minimal `.eslintrc` would contain:

   ```json
   {
     "extends": "erikphansen"
   }
   ```

1. Then make overrides to the ESLint rules however you like!

## Notes on global usage

ESLint 7 does not have full functionality when installed globally. It _works_ but will not work with any plugins or shareable configs. So `eslint-config-erikphansen` _will not work globally_. But I still want to be able to lint and format random Javascript that I work on. To get around this I have a very simple `.eslintrc` in my home folder and use Prettier directly from my editor.

As of this writing my global `.eslintrc` looks like:

```json
{
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-var": "error",
    "prefer-const": "error"
  }
}
```

My global `.prettierrc` looks like:

```json
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "proseWrap": "preserve"
}
```

And I have the following in my global VSCode settings to make sure VSCode uses ESLint to lint/fix files on save and also formats files with Prettier:

```json
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
"editor.formatOnSave": true,
"eslint.alwaysShowStatus": true,
```

**Important:** For projects that are using Prettier via ESLint (any project using `eslint-config-erikphansen`), the project-level VSCode settings have this set to make sure that the Prettier and ESLint extensions aren't fighting each other when saves happen:

```json
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
```
