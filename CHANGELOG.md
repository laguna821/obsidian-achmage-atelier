# Changelog

## 0.6.1 — 2026-11-18

- The open file in the file explorer is always marked with the gray fill. In 0.6.0 the fill turned to the accent while the explorer held focus. Clicking a file gives the explorer focus for a moment before the note takes it, so every click flashed blue and then settled on gray.
- Keyboard focus in the explorer is still shown, as a ring around the row.
- The command palette and suggestion lists keep the accent on the selected row; they hold focus for as long as they are open.

Checked in Windows Obsidian 1.15.1, light and dark, with the file explorer holding focus and the open file marked: the row is gray, where 0.6.0 drew it in the accent. Keyboard navigation still draws the focus ring. The 0.6.0 desktop check states were recorded again; the other differences came from app state, such as navigation history and which folders were expanded.

## 0.6.0 — 2026-11-18

Surfaces, selection and hierarchy, reviewed against Apple's Human Interface Guidelines. One raised surface replaces three outlined boxes, and the source is rebuilt around a single token layer.

### Surfaces

- Sidebars, ribbon, tab strip and status bar lie flat on the frame. Only the content card is raised, and each split pane is a card of its own.
- In dark mode the frame is now the dimmest plane (`#111113`) and the content card sits above it, so depth reads the same way as in light mode. Previously the dark card was darker than its frame.
- On phones the drawer and sheets keep the earlier, lighter surface: they slide over the note, so they stay above it.
- The status bar no longer overlaps the corner of the content card. It sits in the frame gutter, and the card and right sidebar stop above it.
- Column dividers beside the card stay clear until the resize handle is hovered.

### Mobile

- Remove the theme's rule under the view header and its extra side padding on mobile. Obsidian floats its header buttons over the note there, and the rule sat one pixel below them.

### Selection and accent

- The open file and the current heading use a quiet fill. The accent fill appears only in the pane that holds keyboard focus, while the window is focused. Outline, Settings and the file explorer now share this grammar.
- Keyboard focus in trees draws one ring instead of Obsidian's shadow plus an outline.
- Every accent role derives from the accent chosen in **Settings → Appearance**. The default still resolves to exactly `#1e6ef4` and, for dark text, `#5cb8ff`. Accent-colored text is limited in lightness so a pale or very dark accent stays legible.

### Type and geometry

- H1 is `1.69em` and H2 `1.31em` (were `1.85em` and `1.4em`), so the note title and H1 are distinct steps. The ratios follow the macOS text styles in the HIG.
- Folder names are weight 500 (were 550 and 600). Disclosure chevrons use a tertiary glyph color that holds 3:1; text labels keep 4.5:1 or better.
- Radii are consolidated from eleven values to one scale: 4, 6, 8, 12, 16. Nested shapes are concentric: menu 12 − 6 = 6, palette 16 − 8 = 8.
- The active tab is a capsule on the frame instead of a tab joined to the card.

### Components

- Properties: the heading sits above the card as a section label, the card is a fill without an outline, and separators start at the label text. Doubled dividers in the sidebar's file properties are gone.
- Push buttons and pop-up buttons are quiet fills without an outline. The outline returns under Increase Contrast.
- The command palette input is a caret and a hairline instead of a boxed field with a focus ring. Shortcuts read as plain text instead of keycaps.
- `Add property` used a syntax-highlighting color. It now uses the accent.

### Materials

- Overlay tint stays at 92%. A thinner tint was calculated to let secondary text fall below 4.5:1 over extreme backdrops, so the palette, menus and suggestions remain thick. Blur is 24px and saturation 180%.

### Source

- `src/` is reorganized. `tokens.css` holds every variable; `workspace`, `navigation`, `markdown`, `controls`, `overlays`, `search` and `mobile` read from it. This replaces the `common` → `refinement` → `finish` → `layered` chain, where later files overrode earlier ones.
- `--font-text-size` is no longer set. Obsidian writes its own font-size setting inline on `body`, so the theme value never applied.

Checked in Obsidian 1.15.1 on Windows with synthetic notes. The computed styles of every element were compared between 0.5.1 and 0.6.0 across 32 states: 11 desktop and 5 mobile-emulation states, each in light and dark, about 24,700 elements. The differences were the changes listed here, plus focus and virtual-scrolling state. Split panes, stacked tabs, file properties in the sidebar, a 900px window, a custom accent and Notebook Navigator 3.5.1 were checked by eye. Pointer hover and drag states, macOS, Linux and real mobile devices were not checked.

## 0.5.1 — 2026-11-08

- Remove the extra mobile Properties container background and border so Obsidian's native inner card is the only grouped surface.
- Vertically center the mobile Properties heading and disclosure indicator without changing the tap target.
- Preserve desktop Properties styling, metadata values and native mobile navigation density.

Checked in Obsidian 1.15.0 Windows mobile emulation: light/dark, reading/editing, 375px and 430px widths, larger text and collapse/expand behavior. The affected iPhone's intermittent indentation cleared after a clean reinstall of the prerelease theme setup. Its root cause is unconfirmed; no speculative indentation override is added.

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
