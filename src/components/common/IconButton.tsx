import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
  icon: IconDefinition;
  onClick: () => void;
  size?: number;
  className?: string;
};

const IconButton = ({ icon, onClick, className, size = 14 }: Props) => {
  return (
    <button className={`h-${size}  w-${size}  ${className}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default IconButton;
