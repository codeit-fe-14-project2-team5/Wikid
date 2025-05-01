import Image from 'next/image';

interface LinkButtonProps {
  link: string;
  textColor?: string;
  children: React.ReactNode;
}

const LinkButton = ({ link, textColor = '#4CBFA4', children }: LinkButtonProps) => {
  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(link);
      alert('링크가 복사되었습니다!');
    } catch (err) {
      alert('링크 복사에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex items-center bg-[#EEF9F6] border-none rounded-lg py-3 px-4 text-lg cursor-pointer text-[${textColor}]`}
    >
      <Image
        src="/assets/images/type=link.png"
        alt="링크 아이콘"
        width={20}
        height={20}
      />
      <span className="ml-2">{children}</span>
    </button>
  );
};

export default LinkButton;
