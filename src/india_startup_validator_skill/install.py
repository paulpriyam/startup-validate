"""Install the India Startup Validator skill into a Kilo skills directory."""

from __future__ import annotations

import argparse
import os
import shutil
from importlib import resources
from pathlib import Path

SKILL_NAME = "india-startup-validator"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        prog="india-startup-validator-skill",
        description="Install india-startup-validator for Kilo.",
    )
    destination = parser.add_mutually_exclusive_group()
    destination.add_argument(
        "--project",
        action="store_true",
        help="Install into the current project's .kilo/skills directory (default).",
    )
    destination.add_argument(
        "--global",
        dest="global_install",
        action="store_true",
        help="Install into ~/.config/kilo/skills.",
    )
    destination.add_argument(
        "--dest",
        help="Install into a custom skills directory.",
    )
    parser.add_argument(
        "--force",
        action="store_true",
        help="Replace an existing installed copy.",
    )
    return parser.parse_args()


def packaged_skill_source() -> Path:
    package_root = resources.files("india_startup_validator_skill")
    source = package_root.joinpath("skills", SKILL_NAME)
    if source.is_dir():
        return Path(str(source))

    repo_source = Path(__file__).resolve().parents[2] / "skills" / SKILL_NAME
    if repo_source.is_dir():
        return repo_source

    raise FileNotFoundError(f"Skill source not found: {source}")


def destination_parent(args: argparse.Namespace) -> Path:
    if args.dest:
        return Path(args.dest).expanduser().resolve()
    if args.global_install:
        return Path.home() / ".config" / "kilo" / "skills"
    return Path.cwd() / ".kilo" / "skills"


def install() -> None:
    args = parse_args()
    source = packaged_skill_source()
    parent = destination_parent(args)
    target = parent / SKILL_NAME

    if target.exists():
        if not args.force:
            raise FileExistsError(f"{target} already exists. Re-run with --force to replace it.")
        shutil.rmtree(target)

    parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(source, target)

    print(f"Installed {SKILL_NAME} to {target}")
    print("Restart Kilo or start a new Kilo session if the skill does not appear immediately.")


def main() -> None:
    try:
        install()
    except Exception as exc:  # noqa: BLE001 - CLI should report concise install errors.
        print(f"Error: {exc}")
        raise SystemExit(1) from exc


if __name__ == "__main__":
    main()
