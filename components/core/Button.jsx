// Button — The Generals AICONS
// Glass-style pill button with inner highlight, shadow disc, gold/ghost/red variants

export function Button({ variant = 'primary', size = 'md', children, onClick, href, disabled = false, fullWidth = false }) {
  const sizes = {
    sm: { padding: '8px 20px', fontSize: '9px', gap: '6px' },
    md: { padding: '14px 36px', fontSize: '11px', gap: '8px' },
    lg: { padding: '18px 48px', fontSize: '12px', gap: '10px' },
  };
  const sz = sizes[size] || sizes.md;

  const base = {
    position: 'relative',
    isolation: 'isolate',
    display: 'inline-flex',
    alignItems: 'center',
    gap: sz.gap,
    padding: sz.padding,
    borderRadius: '9999px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: "'Montserrat', sans-serif",
    fontSize: sz.fontSize,
    fontWeight: 800,
    letterSpacing: '0.25em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    opacity: disabled ? 0.45 : 1,
    transition: 'transform 280ms cubic-bezier(0.34,1.56,0.64,1), filter 280ms ease',
    width: fullWidth ? '100%' : undefined,
    justifyContent: fullWidth ? 'center' : undefined,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, rgba(197,148,26,0.55) 0%, rgba(245,200,66,0.38) 50%, rgba(197,148,26,0.55) 100%)',
      border: '1px solid rgba(245,200,66,0.55)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.15), 0 2px 12px rgba(0,0,0,0.2)',
      color: '#1C1100',
    },
    ghost: {
      background: 'rgba(255,255,255,0.07)',
      border: '1px solid rgba(197,148,26,0.45)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12), 0 2px 8px rgba(0,0,0,0.18)',
      color: '#C9961A',
    },
    red: {
      background: 'rgba(155,26,10,0.7)',
      border: '1px solid rgba(192,40,26,0.6)',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 12px rgba(0,0,0,0.3)',
      color: '#FDEEA0',
    },
  };

  const v = variants[variant] || variants.primary;
  const style = { ...base, ...v };

  const handleMouseEnter = (e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-3px)'; };
  const handleMouseLeave = (e) => { e.currentTarget.style.transform = 'translateY(0)'; };

  if (href) {
    return React.createElement('a', { href, style, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, children);
  }
  return React.createElement('button', { style, onClick: disabled ? undefined : onClick, disabled, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave }, children);
}
