# Card

Base card container — sharp-cornered, gold-bordered dark surface for all card UIs.

```jsx
<Card>Default content</Card>
<Card accent>Card with gold top bar</Card>
<Card featured>Highlighted card with gold bg tint</Card>
<Card hoverable={false}>No lift on hover</Card>
<Card onClick={() => {}}>Clickable card</Card>
```

## Props
- `accent` — adds top gradient gold bar (good for section headers)
- `featured` — warm gold-tinted background (for spotlighted items)
- `hoverable` — enables `translateY(-4px)` lift on hover (default: true)
- `onClick` — makes card interactive (cursor: pointer)

## Notes
- Background: `#0E0E0E` (--color-black-card)
- Border: 1px gold-tinted, brightens on hover
- Sharp corners — brand convention is NO rounded cards
- Compose with Badge, Button for event cards, news cards, recognition cards
