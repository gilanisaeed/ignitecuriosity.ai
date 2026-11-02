# Handoff 2026-11-01: website v8.4 + IgniteThinking landing v3.4

This folder is the design and copy source for the November 2026 website update,
checked in so reviewers can diff the port against it.

- `HANDOFF.md`: text export of the handoff Google Doc (authoritative version:
  https://docs.google.com/document/d/1AvPBgdLp3v_udIBoexnLjKPfVSw4LcEvBT_n7_eo_o8/).
- `source/`: byte-exact copies of the six files from the shared Drive folder
  (https://drive.google.com/drive/folders/1brOSLN4-01CFzjxKndUeXc1-A6nKhE9D),
  verified against Drive's reported file sizes on 1 Nov 2026.

The two HTML drafts (`ICL-Home-Philosophy-v8_4.html`,
`IgniteThinking-Page-v3_4.html`) are the visual source of truth for `/` and
`/ignitethinking/` at 1366 px and 375 px. Their copy is final and ported
verbatim, except the review-only elements listed in HANDOFF.md section 4.2
(draft banner, todo chips, draft version footers, version-history comments,
and the two gated screenshot slots).

This folder is outside `app/`, so Next.js does not build or ship it.
