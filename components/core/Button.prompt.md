# Button

Glass-style pill CTA button with frosted backdrop, inner highlight, and brand gold/ghost/red variants.

```jsx
<Button variant="primary" size="md">Join the Team</Button>
<Button variant="ghost" size="md" href="#team">Meet Our Leaders</Button>
<Button variant="red" size="sm">Register Now</Button>
<Button variant="primary" size="lg" disabled>Unavailable</Button>
```

## Variants
- `primary` — gold frosted glass, dark text
- `ghost` — transparent dark glass, gold border + text
- `red` — brand crimson glass, gold text

## Sizes
- `sm` — compact (8px/20px pad), 9px text
- `md` — default (14px/36px pad), 11px text
- `lg` — large (18px/48px pad), 12px text

## Notes
- Always rendered as a pill (`border-radius: 9999px`)
- `href` prop renders an `<a>` tag instead of `<button>`
- `fullWidth` stretches to container width
- Spring easing on hover (`cubic-bezier(0.34,1.56,0.64,1)`)
