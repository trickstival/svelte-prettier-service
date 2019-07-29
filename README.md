# Svelte Prettier Service

This repository is used by [vue2svelte](https://github.com/trickstival/vue2svelte) to show
prettyfied svelte code.

It expects a POST request to this address: https://us-central1-svelte-prettier.cloudfunctions.net/prettify
with this body:

```json
{
    "code": "[your svelte code here]"
}
```

The response looks like this:

```json
{
    "formattedCode": "[some svelte code];\n"
}
```
