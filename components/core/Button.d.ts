export function Button(props: ButtonProps): JSX.Element;

/**
 * Generals AICONS glass-style button. Use for all primary CTAs.
 * Renders a frosted-glass pill with inner highlight, blurred shadow disc, and brand gold/red variants.
 */
export interface ButtonProps {
  /** Visual variant */
  variant?: 'primary' | 'ghost' | 'red';
  /** Size */
  size?: 'sm' | 'md' | 'lg';
  /** Button label */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Render as anchor — provide href */
  href?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Full width */
  fullWidth?: boolean;
}
