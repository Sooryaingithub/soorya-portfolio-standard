# Graph Report - soorya-portfolio-standard  (2026-06-23)

## Corpus Check
- 29 files · ~15,605 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 83 nodes · 83 edges · 18 communities (10 shown, 8 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7d8ec028`
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

## God Nodes (most connected - your core abstractions)
1. `projects` - 7 edges
2. `Particle` - 4 edges
3. `Button()` - 3 edges
4. `Project` - 3 edges
5. `cn()` - 3 edges
6. `getTheme()` - 2 edges
7. `ProjectPage()` - 2 edges
8. `getTheme()` - 2 edges
9. `ProjectCard()` - 2 edges
10. `Navigation()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `Button()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts

## Import Cycles
- None detected.

## Communities (18 total, 8 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.19
Nodes (6): connections, LabContentBlock, Project, projects, getTheme(), ProjectPage()

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (7): metadata, ThemeProvider(), links, Navigation(), COLORS, SHAPES, Tetromino

### Community 3 - "Community 3"
Cohesion: 0.70
Nodes (3): cn(), Button(), buttonVariants

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (3): allCategories, getTheme(), ProjectCard()

## Knowledge Gaps
- **14 isolated node(s):** `eslintConfig`, `nextConfig`, `config`, `hobbies`, `photos` (+9 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **8 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `projects` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `Project` connect `Community 0` to `Community 4`?**
  _High betweenness centrality (0.002) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `config` to the rest of the system?**
  _14 weakly-connected nodes found - possible documentation gaps or missing edges._