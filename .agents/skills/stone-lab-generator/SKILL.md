---
name: stone-lab-generator
description: Use this skill when the user wants to generate artificial stone color difference Lab data from a reference CSV, especially when they mention 人造石色差, Lab, F2, D65, 0%UV, 100%UV, 色差範本, reference CSV, or generated_lab_output. This skill should not be used for unrelated Python tasks or general Excel work.
---

# Stone Lab Generator Skill

## Purpose

Generate artificial stone color difference Lab datasets from a reference CSV in the `2026人造石色差` project.

Use the project workflow under:

`G:\我的雲端硬碟\2026人造石色差\lab-generator`

## Core Rule Source

Before executing the workflow, read the full V3 rule file:

`.agents/skills/stone-lab-generator/references/V3_生成色差規則.md`

If that file is unavailable, fallback to:

`lab-generator/instructions/V3_生成色差規則.md`

Do not invent rules if both files are missing. Stop and report the missing rule file.

## Expected User Input

The user may provide only `reference_name`.

Example:

`0418`

If only `reference_name` is provided, assume:

- Input CSV: `lab-generator/data/{reference_name}.csv`
- Output Excel: `lab-generator/output/{reference_name}_generated_lab_output.xlsx`

The user may also provide a full reference CSV path. If a full path is provided, use it.

## Required Workflow

1. Read this skill.
2. Read the V3 rule file.
3. Confirm the reference CSV exists.
4. Run the existing Lab generation workflow according to V3.
5. Generate the Excel output.
6. Verify:
   - `generated_data` exists.
   - `conversion_vectors` exists.
   - `boundary_check` exists.
   - `generated_data` has N rows.
   - F2 duplicate allowance follows V3.
   - All Lab values are within the reference min/max ranges.
7. Report:
   - `reference_name`
   - output Excel path
   - N
   - `allowed_occurrences`
   - max duplicate count for `0%UV_F2`
   - max duplicate count for `100%UV_F2`
   - `boundary_check` warnings, if any
8. If successful, commit automatically.

## Git Commit Rule

After successful generation and verification, create a git commit.

Commit message format:

`generate lab output | ref={reference_name} | {YYYY-MM-DD HH:MM}`

If there are no changes, do not commit and report:

`no changes to commit`

## Safety and Do-Not Rules

- Do not fabricate CSV data.
- Do not read another CSV if the specified CSV is missing.
- Do not delete files under `lab-generator/data`.
- Do not overwrite rules unless the user explicitly asks.
- Do not change V3 generation logic unless the user explicitly asks for a new version.
- Do not treat `boundary_check` warnings as failure when values remain within range and F2 duplicate rules pass.
- If the user mentions a new reference file, remind them that batch comparison can be performed against the previous reference if they want.
