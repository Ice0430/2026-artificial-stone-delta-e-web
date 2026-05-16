# Project Notes

## Goal

Generate artificial stone Lab color-difference data from reference CSV files and keep the workflow reusable through scripts, documentation, and Codex skills.

## Decisions

- 2026-04-26: Initialized a general-purpose project workspace.
- 2026-04-28: Standardized the workspace as a Python project for the `人造石色差` Lab generator.

## Open Questions

- Should generated Excel files remain committed, or should `人造石色差/output/` become a local-only output folder?
- Should the generator script be moved into `src/` later, or kept beside the domain-specific data files?
