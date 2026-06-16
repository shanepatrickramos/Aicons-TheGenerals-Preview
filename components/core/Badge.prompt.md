# Badge

All-caps rank/status label for team members, section headers, and achievement callouts.

```jsx
<Badge variant="red" icon="★">Commander</Badge>
<Badge variant="gold" icon="★">Diamond Rank</Badge>
<Badge variant="gold">Gold Rank</Badge>
<Badge variant="ghost">Silver Rank</Badge>
<Badge variant="dark">Team Leader</Badge>
```

## Variants
- `gold` — transparent bg, gold border + text (default)
- `red` — brand red bg, gold text — for top ranks
- `ghost` — near-invisible, muted text — for secondary labels
- `dark` — lifted dark bg, gold text — for cards

## Notes
- Sharp corners (no border-radius) — matches brand aesthetic
- `icon` prop prepends a character (typically ★)
- Font: Montserrat 800, 8px, 0.2em tracking, ALL CAPS
