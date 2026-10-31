# tipcalc

Tiny tip calculator. `bun src/cli.ts <amount> [pct] [--people N]`

```
$ bun src/cli.ts 100 15
Tip: 15.00  Total: 115.00

$ bun src/cli.ts 600 --people 4
Tip: 90.00  Total: 690.00
Each: 172.50
```

With `--people`, each share is rounded up to the cent, so the shares can add up to a few cents over the total.
