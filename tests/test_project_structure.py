from __future__ import annotations

import importlib.util
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
LAB_DIR = ROOT / "人造石色差"
SCRIPT_PATH = LAB_DIR / "generate_lab_from_reference.py"


def load_generator_module():
    spec = importlib.util.spec_from_file_location("generate_lab_from_reference", SCRIPT_PATH)
    assert spec is not None
    assert spec.loader is not None
    module = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = module
    spec.loader.exec_module(module)
    return module


def test_lab_workspace_files_exist():
    assert SCRIPT_PATH.is_file()
    assert (LAB_DIR / "data" / "0418.csv").is_file()
    assert (LAB_DIR / "instructions" / "V3_生成色差規則.md").is_file()


def test_generator_default_paths():
    module = load_generator_module()

    assert module.DEFAULT_REFERENCE_NAME == "0418"
    assert module.DATA_DIR == Path("人造石色差") / "data"
    assert module.OUTPUT_DIR == Path("人造石色差") / "output"
