# Find and replace strings

This action executes find-and-replace all occurences on a given string.

## Inputs

### `source`

**Required** The source string to apply this action to

### `find`

**Required** The text you want to search for

### `replace`

**Required** The text you want to replace with

## Outputs

### `value`

The new value containing the found-and-replaced string

### Example usage

```yaml
uses: LarsenLP/actions-find-and-replace-string@3
with:
    source: ${{ github.ref }} # this translates to ref/heads/main on the main branch, but can be any arbitrary string 
    find: '/'                 # we want to find /
    replace: '-'              # and replace it with -
```

This will output `ref-heads-main`.

Check out `.github/workflows/main.yml` for more examples

