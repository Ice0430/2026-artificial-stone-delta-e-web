# 2026Codex

Project workspace for artificial stone Lab color-difference data generation.

## Structure

- `人造石色差/` - Lab data generator, reference CSV files, instructions, prompts, and output files
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

Generate output from the default reference file, `人造石色差/data/0418.csv`:

```powershell
py 人造石色差/generate_lab_from_reference.py
```

Generate output from another reference name, for example `0420.csv`:

```powershell
py 人造石色差/generate_lab_from_reference.py 0420
```

The generated Excel file is written to `人造石色差/output/`.

## Test

```powershell
py -m pytest
```
