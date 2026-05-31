# Project Notes

## Goal

Generate artificial stone Lab color-difference data from reference CSV files and keep the workflow reusable through scripts, documentation, and Codex skills.

## Decisions

- 2026-04-26: Initialized a general-purpose project workspace.
- 2026-04-28: Standardized the workspace as a Python project for the Lab generator.
- 2026-05-31: Renamed the generator workspace from `人造石色差/` to `lab-generator/` to avoid a confusing duplicate folder name.

## Open Questions

- Generated Excel files should stay local-only under `lab-generator/output/` unless a specific result needs to be preserved.
