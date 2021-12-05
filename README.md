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

1. You'll also want to set up some Prettier rules in a `.prettierrc` config.
