# Changelog

## 0.5.0 — 2026-11-08

- Show the current-line background only while the editor has input focus; hide it when the desktop window loses focus.
- Keep heading spacing outside the active-line background without moving the caret or text baseline.
- Restore Obsidian's native mobile folder density, padding, UI text scale and indentation; remove the forced 44px row minimum.
- Make desktop file navigation a compact 32px row rhythm; remove extra top-level folder section gaps.
- Use blue folder accents and respect the host's preferred UI font size.
- Separate desktop and mobile command palette geometry; align the mobile clear button with its input.
- Refine mobile navigation, search, properties, menus and settings targets and text sizing.

Validated in Windows Obsidian and its mobile emulation. The reported intermittent first-open iPhone indentation issue was not reproduced; mobile indentation overrides have been removed, but a real-device recheck is still needed. iOS keyboard and safe-area behavior remain owned by Obsidian.

## 0.4.0 — 2026-11-08

First public release.

- Light and dark reading surfaces with embedded Pretendard Variable.
- Layered side panels and coordinated Notebook Navigator colors.
- Markdown, properties, search results and command palette refinements.
- Shared buttons, icons, focus and pressed states.
- Restrained translucent overlays and an optional opaque snippet.
- Reduced-motion and contrast/transparency preference handling.
