# Compatibility and verification

The first public release uses the layered layout developed for Achmage Atelier.

## Tested

Windows Obsidian 1.15.0, with synthetic sample notes; Notebook Navigator 3.5.0 where noted.

The implementation was checked across light/dark palettes, settings, menus, search and reading views. Bounded interaction checks covered command/quick-switcher keyboard operation, native command execution, settings button and toggle states, 1280px layout, 200% zoom, reduced-motion/contrast/transparency preferences, dark/light material contrast over extreme backgrounds, search sorting/collapsing/opening, empty results and narrow search panels.

These are scoped checks, not an accessibility certification or a guarantee for every plugin.

## Not yet verified

- macOS, Linux, iOS and Android on real devices.
- Screen-reader behavior across all native and plugin controls.
- Long-session battery or rendering performance.
- All combinations of custom fonts, accent colors and third-party snippets.

Some host markup warnings cannot be addressed by a CSS theme. Custom user font settings can override the embedded font. Transparent effects apply within the app document; they do not enable operating-system glass behind a separate native window.

## Reporting issues

Please include your Obsidian version, operating system, light/dark mode, relevant plugin versions and a screenshot using non-sensitive sample notes. Mention any enabled CSS snippets and font overrides.
