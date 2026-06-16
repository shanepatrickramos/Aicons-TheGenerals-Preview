// Card — The Generals AICONS
// Sharp-cornered, gold-bordered dark card container — foundation for all card UIs

export function Card({ children, hoverable = true, accent = false, featured = false, className, onClick }) {
  const [hovered, setHovered] = React.useState(false);

  const style = {
    position: 'relative',
    background: featured ? 'linear-gradient(160deg, rgba(197,148,26,0.08) 0%, transparent 60%), #0E0E0E' : '#0E0E0E',
    border: `1px solid ${hovered && hoverable ? 'rgba(197,148,26,0.45)' : featured ? 'rgba(197,148,26,0.35)' : 'rgba(197,148,26,0.18)'}`,
    padding: '24px',
    transform: hoverable && hovered ? 'translateY(-4px)' : 'translateY(0)',
    boxShadow: hoverable && hovered ? '0 8px 24px rgba(0,0,0,0.4), 0 0 20px rgba(197,148,26,0.08)' : '0 2px 8px rgba(0,0,0,0.25)',
    transition: 'transform 280ms cubic-bezier(0.22,1,0.36,1), border-color 200ms, box-shadow 280ms',
    cursor: onClick ? 'pointer' : 'default',
    overflow: 'hidden',
  };

  const accentBar = accent ? React.createElement('div', {
    style: {
      position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
      background: 'linear-gradient(90deg, transparent, #C9961A 30%, #F5C842 50%, #C9961A 70%, transparent)',
    }
  }) : null;

  return React.createElement('div', {
    style,
    className,
    onClick,
    onMouseEnter: () => hoverable && setHovered(true),
    onMouseLeave: () => setHovered(false),
  }, accentBar, children);
}
