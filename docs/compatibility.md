# Compatibility and verification

The first public release uses the layered layout developed for Achmage Atelier.

## Tested

Windows Obsidian 1.15.0, with synthetic sample notes; Notebook Navigator 3.5.0 where noted.

The implementation was checked across light/dark palettes, settings, menus, search and reading views. Bounded interaction checks covered command/quick-switcher keyboard operation, native command execution, settings button and toggle states, 1280px layout, 200% zoom, reduced-motion/contrast/transparency preferences, dark/light material contrast over extreme backgrounds, search sorting/collapsing/opening, empty results and narrow search panels.

These are scoped checks, not an accessibility certification or a guarantee for every plugin.

## 0.5.0 mobile and editor changes

Mobile layout checks use the actual Windows Obsidian app's mobile emulation, with synthetic notes. They do not reproduce the iOS rendering engine, software keyboard or operating-system accessibility settings.

The reported intermittent iPhone folder indentation on first open was not reproduced in this environment. Mobile navigation now inherits Obsidian's native row padding, size, line height and indentation, without a theme-imposed minimum height. The native virtual tree owns its measured indentation and deeper hierarchy. This is a stabilization change, not a claim that every iPhone initialization path is fixed.

Current-line highlighting follows editor input focus. Heading spacing is excluded from the background paint, and inactive desktop windows suppress the highlight. Text selection, cursor positioning, Markdown layout and keyboard handling remain native.

The 0.5.0 check set passed 39 native behavior/geometry checks and two explicit inactive-host CSS state checks, in light and dark modes:

- Desktop: 1440 × 1000; mobile emulation: 430 × 900 and 430 × 560.
- Focused heading/body lines, moving focus to the palette or inline title, and returning to the editor.
- Root-row alignment before/after collapse, mobile row-height parity with the default theme, palette filtering and clear-button alignment.
- Compact 32px desktop folder rows, with no additional root-folder margins.
- Short-viewport input visibility and a 26px preferred-font variable setting.

The automated harness could not establish native OS window deactivation reliably. The inactive host class was tested directly; OS focus-event delivery is not claimed as verified. The smaller viewport is a layout stress check, not a simulated iOS keyboard.

## 0.5.1 follow-up

Obsidian 1.15.0 draws mobile Properties inside its own wider, rounded content surface. The theme previously painted the outer container as a second card. This release removes that outer decoration on mobile and centers the section heading. Desktop card styling is unchanged.

44 scoped checks passed in the Windows app: light/dark, reading/editing, 375px and 430px mobile widths, 26px preferred text, collapsing/reopening Properties, desktop card preservation and unchanged synthetic note bytes. Sample properties include long text, empty lists, colon-bearing keys and a long source URL.

181 root folders were also inspected before any toggles and after scrolling, with deeper folders retaining their indentation. The reported iPhone initialization issue did not reproduce. On the affected iPhone running Obsidian 1.15.0, alignment returned to normal after a default-theme/app-restart cycle and after reinstalling both BRAT and the theme. This confirms recovery on that device; it does not establish a BRAT defect, the underlying cause or a universal fix.

## Not yet verified

- macOS, Linux, iOS and Android on real devices.
- Screen-reader behavior across all native and plugin controls.
- Long-session battery or rendering performance.
- All combinations of custom fonts, accent colors and third-party snippets.

Some host markup warnings cannot be addressed by a CSS theme. Custom user font settings can override the embedded font. Transparent effects apply within the app document; they do not enable operating-system glass behind a separate native window.

## Reporting issues

Please include your Obsidian version, operating system, light/dark mode, relevant plugin versions and a screenshot using non-sensitive sample notes. Mention any enabled CSS snippets and font overrides.
