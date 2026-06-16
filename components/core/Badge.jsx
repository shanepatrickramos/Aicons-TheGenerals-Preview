// Badge — The Generals AICONS
// All-caps rank / status label in brand gold, red, ghost, or dark

export function Badge({ children, variant = 'gold', icon }) {
  const variants = {
    gold: {
      background: 'transparent',
      border: '1px solid rgba(197,148,26,0.4)',
      color: '#C9961A',
    },
    red: {
      background: '#9B1A0A',
      border: '1px solid #9B1A0A',
      color: '#F5C842',
    },
    ghost: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(197,148,26,0.2)',
      color: '#7A7060',
    },
    dark: {
      background: '#161616',
      border: '1px solid rgba(197,148,26,0.25)',
      color: '#C9961A',
    },
  };

  const v = variants[variant] || variants.gold;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '3px 10px',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: '8px',
    fontWeight: 800,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    lineHeight: 1.4,
    ...v,
  };

  return React.createElement('span', { style },
    icon ? React.createElement('span', { style: { fontSize: '10px' } }, icon) : null,
    children
  );
}
