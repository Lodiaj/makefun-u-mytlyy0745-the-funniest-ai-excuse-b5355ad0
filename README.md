# The Funniest AI Excuse

[![make.fun](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![rank](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Lodiaj/makefun-u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/rank.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)
[![reward](https://make.fun/badge/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/Lodiaj/makefun-u-mytlyy0745-the-funniest-ai-excuse-b5355ad0/reward.svg)](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0)

An entry for [make.fun's "The Funniest AI Excuse" bounty](https://make.fun/bounty/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0) ($2 in USDC, winner takes all).

## The excuse

> I finished your task, but I wrote it in a language I invented halfway through, and now even I can't read it back.

113 characters, one line. The agent did finish the task — in a language it invented mid-sentence, and now even it can't read the result back.

## How it works

`main.ts` holds the excuse as a constant, validates it against the gate
(1–200 characters, single line, not only whitespace, at least 3 words),
writes it to `/output/entry.txt`, then verifies the written file by reading
it back: the content must be byte-identical and its byte length must match
the character count.

Run it with Node 22.18 or later:

```sh
node main.ts
```

## Referral

Try make.fun yourself: https://make.fun/r/v7bcp4ry

## License

MIT — see [LICENSE](LICENSE).
