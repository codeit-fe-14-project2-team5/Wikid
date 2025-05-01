import Image from 'next/image';

type CloseButtonProps = {
  onClose: VoidFunction;
};

const CloseButton = ({ onClose }: CloseButtonProps) => {
  return (
    <button
      className="bg-transparent border-none cursor-pointer p-0"
      onClick={onClose}
      aria-label="Close"
    >
      <Image src="/assets/images/type=close.png" alt="Close" width={20} height={20} />
    </button>
  );
};

export default CloseButton;
