export function Badge(props: BadgeProps): JSX.Element;

/**
 * Rank / status badge for Generals AICONS members and sections.
 * Renders a small all-caps label in brand colors.
 */
export interface BadgeProps {
  /** Badge text */
  children: React.ReactNode;
  /** Color variant */
  variant?: 'gold' | 'red' | 'ghost' | 'dark';
  /** Optional icon before label */
  icon?: string;
}
