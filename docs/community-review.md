# Community review preflight

The GitHub workflow **Validate theme** runs a reproducible build, the official `stylelint-config-obsidianmd` package, distributable checks, and Obsidian's official community scanner in strict mode.

The scanner uses `obsidianmd/obsidian-workflows` 1.2.3, pinned to commit `8167caed39664214d82c86fdfa32e06d8d55f61d`, with `scanner-lint: true` and `strict: true`. Its scanner rules ignore CSS disable comments. The comments in our source apply only to additional formatting conventions in the general Stylelint configuration.

Local preflight for 0.4.0 reports no blocking errors. Two browser-support warnings remain:

- **Text decoration:** the compatibility database marks the text-decoration feature family as partially supported. The theme's underline spacing and thickness were checked in the tested Windows app.
- **Print fragmentation:** `break-inside: avoid` belongs to a partially supported feature family. It is a print-only preference for keeping code blocks and quotations together; pagination may vary across engines.

These warnings are retained in the scanner output. They are not hidden or represented as failed features that have been fixed.

This preflight does not claim acceptance into the community directory. Release-only checks and the live directory review are separate. The published release includes `manifest.json` and `theme.css`, and its tag matches the manifest version exactly.

After linking your GitHub account in the Obsidian Community directory, **Review branch** can preview a directory scan of a branch, tag or commit before publication there.

References: [Official workflows](https://github.com/obsidianmd/obsidian-workflows), [submission guide](https://docs.obsidian.md/Themes/App%20themes/Submit%20your%20theme), [review FAQ](https://docs.obsidian.md/community-directory/faq).
