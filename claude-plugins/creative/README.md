# creative

A Claude Code plugin for the Creative project.

## Install

In Claude Code:

```
/plugin marketplace add mapmap3/creative
/plugin install creative@mapmap3
```

Then run `/creative:hello` to check it works.

## Layout

```
claude-plugins/creative/
├── .claude-plugin/plugin.json   # plugin manifest
└── skills/
    └── hello/SKILL.md           # /creative:hello
```

The marketplace that lists this plugin lives at the repo root in `.claude-plugin/marketplace.json`.

## Adding features

- **Skill:** add `skills/<name>/SKILL.md` (runs as `/creative:<name>`).
- **Agent:** add `agents/<name>.md`.
- **Hooks:** add `hooks/hooks.json`.
- **MCP server:** add `.mcp.json`.

When you ship a change, bump `version` in both `plugin/.claude-plugin/plugin.json` and `.claude-plugin/marketplace.json`.
