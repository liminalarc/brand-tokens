# Changelog

All notable changes to brand-tokens. Format: [Keep a Changelog](https://keepachangelog.com);
versioning: [Semver](https://semver.org) (patch = value tweak · minor = token added · major = token renamed/removed).

## [0.1.0] — unreleased

### Added
- Initial token set extracted from StormBoard (Spec 161): brand (navy-blue +
  blaze orange), neutrals/surfaces, semantic (success/info/warning/error/ai),
  radius scale, shadow scale, typography (Inter + 8-step scale). Light + dark.
- Zero-dependency build (`build.mjs`): `tokens.json` → `dist/tokens.{css,scss,js,d.ts}`.
- Design reference (`DESIGN-SYSTEM.md`) and consume/maintain docs (`README.md`).
