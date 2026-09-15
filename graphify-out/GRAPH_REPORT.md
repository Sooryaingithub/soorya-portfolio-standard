# Graph Report - soorya-portfolio-standard  (2026-06-25)

## Corpus Check
- 42 files · ~19,401 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 105 nodes · 94 edges · 31 communities (21 shown, 10 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `04d6c531`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 21|Community 21]]

## God Nodes (most connected - your core abstractions)
1. `projects` - 7 edges
2. `Particle` - 4 edges
3. `Button()` - 3 edges
4. `Project` - 3 edges
5. `cn()` - 3 edges
6. `run_applescript()` - 2 edges
7. `get_page_text()` - 2 edges
8. `run_applescript()` - 2 edges
9. `get_page_text()` - 2 edges
10. `getTheme()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Button()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (31 total, 10 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.22
Nodes (4): connections, LabContentBlock, projects, actions

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (7): metadata, ThemeProvider(), links, Navigation(), COLORS, SHAPES, Tetromino

### Community 3 - "Community 3"
Cohesion: 0.70
Nodes (3): cn(), Button(), buttonVariants

### Community 4 - "Community 4"
Cohesion: 0.28
Nodes (6): Project, allCategories, getTheme(), ProjectCard(), getTheme(), ProjectPage()

## Knowledge Gaps
- **15 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `hobbies`, `photos` (+10 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **10 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `projects` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.030) - this node is a cross-community bridge._
- **Why does `Project` connect `Community 4` to `Community 0`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _15 weakly-connected nodes found - possible documentation gaps or missing edges._