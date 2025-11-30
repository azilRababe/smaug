import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <div className="flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-xl bg-[#ff5722] mb-4`}
    >
      <div className="text-white text-3xl flex items-center justify-center">
        {imgUrl}
      </div>
    </div>

    <h2 className="mt-[26px] font-bold text-[24px] leading-[30px] text-white">
      {title}
    </h2>
    <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]">
      {subtitle}
    </p>
  </div>
);

export default NewFeatures;
