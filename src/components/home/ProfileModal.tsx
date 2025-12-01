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
import { IoClose } from "react-icons/io5";
import { montserrat } from "../../fonts";

interface ProfileModalProps {
  onCloseModal: () => void;
}

const ProfileModal = ({ onCloseModal }: ProfileModalProps) => {
  return (
    <Root onCloseModal={onCloseModal}>
      <motion.div
        className="w-[calc(100%-20px)] xs:w-(--default-width) max-w-(--max-width) h-[calc(100%-20px)] overflow-y-scroll absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={`flex flex-col gap-4 sm:gap-6 ${montserrat.className}`}>
          <ProfileSection>
            <div className="flex flex-col gap-4">
              <p>
                <span className="text-lg font-bold">김소연</span> / Kim Soyeon
              </p>
              <p>soyeon364@naver.com</p>
            </div>
          </ProfileSection>

          <ProfileSection sectionName="Skill">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6">
              {SKILL_DATA.map((skillGroup) => (
                <div
                  key={skillGroup.name}
                  className="bg-white rounded-3xl p-4 sm:p-6 w-full"
                >
                  <div className="mb-2 sm:mb-4">{skillGroup.name}</div>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.skills.map((skill) => (
                      <SkillItem
                        skill={skill}
                        size={"2.2rem"}
                        key={skill.name}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ProfileSection>

          <ProfileSection sectionName="Career" items={CAREER_DATA} />

          <ProfileSection sectionName="Education" items={EDUCATION_DATA} />

          <ProfileSection sectionName="Etc." items={ETC_DATA} />
        </div>

        <CloseButton className="absolute top-0 right-0 text-(--bg-color) p-4 text-xl">
          <IoClose />
        </CloseButton>
      </motion.div>
    </Root>
  );
};

interface ProfileSectionProps {
  sectionName?: string;
  items?: TDataItem[];
  children?: React.ReactNode;
}

const ProfileSection = (props: ProfileSectionProps) => {
  const { sectionName, items, children } = props;

  return (
    <section
      key={`profile-${sectionName}`}
      className="bg-gray-100 rounded-3xl px-4 py-4 sm:py-6 flex flex-col gap-4 sm:gap-6"
    >
      {sectionName && (
        <h4 className={`w-full text-lg ${montserrat.className} text-center`}>
          {sectionName}
        </h4>
      )}
      <div className="flex flex-col gap-[1rem]">
        {children}
        {items &&
          items.map((item, idx) => (
            <div key={`profile-data-${idx}`}>
              <div className="flex flex-col xs:grid xs:grid-cols-[1fr_2fr]">
                <p>{item.period}</p>
                <div>
                  <p>{item.title}</p>
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

// const Separator = () => <div className="w-full h-[.5px] my-8  bg-gray-300" />;

export default ProfileModal;
