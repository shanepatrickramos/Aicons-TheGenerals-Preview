export function Card(props: CardProps): JSX.Element;

/**
 * Base card container for Generals AICONS. Sharp-cornered, gold-bordered dark card.
 * Use as the foundation for event cards, news cards, recognition cards, resource cards.
 */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Hover lift effect */
  hoverable?: boolean;
  /** Top gold accent bar */
  accent?: boolean;
  /** Optional featured/highlighted style */
  featured?: boolean;
  /** Optional extra className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}
