import { Montserrat } from "next/font/google";
import { motion } from "motion/react";
import { appearMotionProps } from "@/constants/motion";
import {
  CAREER_DATA,
  EDUCATION_DATA,
  ETC_DATA,
  TDataItem,
} from "@/data/profile";

const montserrat_italic = Montserrat({
  subsets: ["latin"],
  style: "italic",
});

// const montserrat_bold = Montserrat({
//   subsets: ["latin"],
//   weight: "700",
// });

const Profile = () => {
  const Separator = () => <div className="w-full h-[.5px] bg-white" />;

  return (
    <motion.section {...appearMotionProps}>
      <div className="w-(--default-width) max-w-(--max-width) mt-[3rem] mx-auto flex flex-col gap-[2.5rem]">
        <ProfileSection sectionName="Career" items={CAREER_DATA} />
        <Separator />
        <ProfileSection sectionName="Education" items={EDUCATION_DATA} />
        <Separator />
        <ProfileSection sectionName="Etc." items={ETC_DATA} />
      </div>
    </motion.section>
  );
};

interface ProfileSectionProps {
  sectionName: string;
  items: TDataItem[];
}

const ProfileSection = (props: ProfileSectionProps) => {
  const { sectionName, items } = props;

  return (
    <section key={`profile-${sectionName}`} className="text-white">
      <h4
        className={`w-full text-[1.2rem] font-bold ${montserrat_italic.className}`}
      >
        {sectionName}
      </h4>
      <div className="mt-[1rem] flex flex-col gap-[1rem]">
        {items.map((item, idx) => (
          <div key={`profile-data-${idx}`}>
            <div className="flex flex-col xs:grid xs:grid-cols-[1fr_2fr]">
              <p>{item.period}</p>
              <div>
                <p className="font-bold">{item.title}</p>
                {item.description.length > 0 && (
                  <div className="text-gray-400 ">
                    {item.description.map((des, idx) => (
                      <p key={`description-${idx}`}>{des}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
