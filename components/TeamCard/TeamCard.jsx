import Image from "next/image";

export const TeamCard = ({ name, title, score, avatar }) => {
  return (
    <div className="flex justify-between min-w-[340px] md:min-w-[440px] p-6 bg-white/[.06] rounded-2xl shadow-regular snap-center">
      <div className="flex flex-col gap-6">
        <div>
          <Image className="rounded-full overflow-hidden" src={avatar} width={92} height={92} alt={name} />
        </div>
        <div>
          <h3 className="text-xl md:text-[31px] font-extrabold text-codGray dark:text-white leading-[30px] md:leading-[41px]">
            {name}
          </h3>
          <span className="text-[15px] font-medium text-corduroy dark:text-grayChateau leading-[21px]">{title}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-[12px] font-normal text-grayChateau">Profile score</span>
          <div className="flex items-center gap-2">
            <Image src="/images/profile-score.png" alt="Profile score" width={15} height={23} />
            <span className="text-[31px] font-extrabold text-codGray dark:text-white leading-[41px]">{score}</span>
          </div>
        </div>
        <div className="mt-auto">
          <Image src="/images/qr-code.png" width={82} height={82} alt="QR Code" />
        </div>
      </div>
    </div>
  );
};
