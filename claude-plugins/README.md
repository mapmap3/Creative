# claude-plugins

Plugins for Claude Code, published through the `mapmap3` marketplace defined in
[`/.claude-plugin/marketplace.json`](../.claude-plugin/marketplace.json).

## Install

```
/plugin marketplace add mapmap3/creative
/plugin install <plugin-name>@mapmap3
```

## Plugins

| Plugin | What it does | Version |
| --- | --- | --- |
| [creative](./creative) | Starter plugin (`/creative:hello`) | 0.1.0 |

## Adding a plugin

1. `cp -r claude-plugins/_template claude-plugins/<name>`
2. Replace `PLUGIN_NAME` in its `plugin.json` and `README.md`, and rename/replace `skills/example`.
3. Add an entry to `.claude-plugin/marketplace.json` with `"source": "./claude-plugins/<name>"`.
4. Add a row to the table above.
5. Validate: `claude plugin validate .` from the repo root.

A plugin can contain any of:

- `skills/<name>/SKILL.md` — skills, run as `/<plugin>:<name>`
- `agents/<name>.md` — subagents
- `hooks/hooks.json` — hooks
- `.mcp.json` — MCP servers

When you ship a change, bump `version` in both the plugin's `plugin.json` and its marketplace entry.
