import { styles } from "../styles";
import { ButtonGroupProps } from "../types";
import { Button } from "./Button";

export const CTAButtons = ({
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
}: ButtonGroupProps) => (
  <div className={styles.buttonGroup}>
    <Button
      text={primaryButtonText}
      onClick={onPrimaryClick}
      variant="primary"
    />
    <Button
      text={secondaryButtonText}
      onClick={onSecondaryClick}
      variant="secondary"
    />
  </div>
);
