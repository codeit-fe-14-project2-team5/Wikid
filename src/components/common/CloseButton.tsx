import Image from "next/image";
import styles from "./CloseButton.module.css";
import React from "react";
import { FC } from "react";

type CloseButtonProps = {
  onClose: () => void;
};

const CloseButton: FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button className={styles.closeButton} onClick={onClose} aria-label="Close">
      <Image
        src="/assets/icons/ic_close.svg"
        alt="Close"
        width={20}
        height={20}
      />
    </button>
  );
};

export default CloseButton;
