# 2026 Artificial Stone Color Difference

Project workspace for artificial stone Lab color-difference data generation.

## Structure

- `lab-generator/` - Lab data generator, reference CSV files, instructions, prompts, and local output files
- `web/delta-e/` - CIE94 Delta E static web calculator for CNC and sandblasting LAB checks
- `tests/` - project checks
- `docs/` - setup notes and project decisions
- `.agents/skills/stone-lab-generator/` - Codex skill for the Lab generation workflow

## Setup

1. Install Python 3.11 or newer.
2. Create and activate a virtual environment.
3. Install dependencies:

```powershell
py -m pip install -r requirements.txt
```

For development checks:

```powershell
py -m pip install -e ".[dev]"
```

## Run

Generate output from the default reference file, `lab-generator/data/0418.csv`:

```powershell
py lab-generator/generate_lab_from_reference.py
```

Generate output from another reference name, for example `0420.csv`:

```powershell
py lab-generator/generate_lab_from_reference.py 0420
```

The generated Excel file is written to `lab-generator/output/`.

## Web

The CIE94 Delta E calculator is in `web/delta-e/`.

It is a static web page that can be deployed to GitHub Pages or another static hosting service.

## Test

```powershell
py -m pytest
```
