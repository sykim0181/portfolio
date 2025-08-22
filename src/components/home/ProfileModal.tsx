import {
  CAREER_DATA,
  EDUCATION_DATA,
  ETC_DATA,
  TDataItem,
} from "@/data/profile";
import { CloseButton, Root } from "../common/Modal";
import { motion } from "motion/react";
import { SKILL_DATA } from "@/data/skill";
import SkillItem from "./SkillItem";
import Image from "next/image";
import { IoClose } from "react-icons/io5";

interface ProfileModalProps {
  onCloseModal: () => void;
}

const ProfileModal = ({ onCloseModal }: ProfileModalProps) => {
  return (
    <Root onCloseModal={onCloseModal}>
      <motion.div
        className="w-(--default-width) max-w-(--max-width) h-[calc(100%-20px)] overflow-y-scroll absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h1 className="text-3xl font-[Montserrat]">Profile</h1>

        <div className="mt-12">
          <div className="flex gap-8">
            <div className="relative">
              <div className="w-[150px] h-[150px] rounded-full bg-(--primary-color) blur-2xl" />
              <Image
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                src="/home/memoticon_smiling.png"
                alt="프로필"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p>
                <span className="text-lg font-bold">김소연</span> / Kim Soyeon
              </p>
              <p>soyeon364@naver.com</p>
            </div>
          </div>
          <Separator />
          <div className="flex flex-col">
            <ProfileSection sectionName="Skill">
              <div className="flex gap-[0.7rem] flex-wrap">
                {SKILL_DATA.map((skill) => (
                  <SkillItem skill={skill} size={"2.2rem"} key={skill.name} />
                ))}
              </div>
            </ProfileSection>
            <Separator />
            <ProfileSection sectionName="Career" items={CAREER_DATA} />
            <Separator />
            <ProfileSection sectionName="Education" items={EDUCATION_DATA} />
            <Separator />
            <ProfileSection sectionName="Etc." items={ETC_DATA} />
          </div>
        </div>

        <CloseButton className="absolute top-0 right-0 text-(--bg-color) p-4 text-xl">
          <IoClose />
        </CloseButton>
      </motion.div>
    </Root>
  );
};

interface ProfileSectionProps {
  sectionName: string;
  items?: TDataItem[];
  children?: React.ReactNode;
}

const ProfileSection = (props: ProfileSectionProps) => {
  const { sectionName, items, children } = props;

  return (
    <section key={`profile-${sectionName}`} className="">
      <h4 className={`w-full text-lg font-bold`}>{sectionName}</h4>
      <div className="mt-[1rem] flex flex-col gap-[1rem]">
        {children}
        {items &&
          items.map((item, idx) => (
            <div key={`profile-data-${idx}`}>
              <div className="flex flex-col xs:grid xs:grid-cols-[1fr_2fr]">
                <p>{item.period}</p>
                <div>
                  <p className="font-bold">{item.title}</p>
                  {item.description.length > 0 && (
                    <div className="text-gray-500 ">
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

const Separator = () => <div className="w-full h-[.5px] my-8  bg-gray-300" />;

export default ProfileModal;
