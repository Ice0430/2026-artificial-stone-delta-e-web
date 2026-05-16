# Setup

## Prerequisites

- Python 3.11 or newer
- Python launcher for Windows (`py`)

## Local Environment

1. Copy `.env.example` to `.env`.
2. Fill in local environment values if a future workflow needs them.
3. Install runtime dependencies:

```powershell
py -m pip install -r requirements.txt
```

4. Optional: install development dependencies:

```powershell
py -m pip install -e ".[dev]"
```

## Commands

Run the default Lab data generator:

```powershell
py 人造石色差/generate_lab_from_reference.py
```

Run with a specific reference name:

```powershell
py 人造石色差/generate_lab_from_reference.py 0420
```

Run tests:

```powershell
py -m pytest
```
