# boilerplate-for-nodejs

An Effective Node.js Setup for TypeScript Projects — to start fast.

## Why?

I use Node.js for almost every back-end project I create. Here's a boilerplate repo that I have been reusing for these projects.

Try it out for your next project or share what your structure looks like.

## Run it

1. Clone the repo:

```bash
git clone https://github.com/fariasmateuss/boilerplate-for-nodejs.git
```

2. Install dependencies:

```bash
yarn
```

3. Run development server:

```bash
yarn dev:server
```

## Importing with Absolute Paths

When you import a file, you can either use a relative or absolute path.

```typescript
import { PayPalClient } from '../../services/PayPal'
```

Previous example can be rewritten to.

```typescript
import { PayPalClient } from '@services/PayPal'
```

In this example everything that starts with `@` will be loaded from `src/`. I like to call it `@` as it becomes easy to know whenever you’re importing something from your app rather than a NPM module.

## Contributing

If you found this useful, please help us improve it by contributing.

If you have any ideas or feedback for this project, please let me know. Connect with me on [Twitter](https://twitter.com/fariasmateuss) or [LinkedIn](https://www.linkedin.com/in/fariasmateuss/).

## License

This project is licensed under the [MIT License](/LICENSE).
