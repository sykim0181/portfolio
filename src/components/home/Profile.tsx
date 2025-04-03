import { Montserrat } from "next/font/google";
import { motion } from "motion/react";
import { appearMotionProps } from "@/constants/motion";
import { profileData } from "@/data/profile";

const montserrat_italic = Montserrat({
  subsets: ["latin"],
  style: "italic",
});

const montserrat_bold = Montserrat({
  subsets: ["latin"],
  weight: "700",
});

const Profile = () => {
  return (
    <motion.section {...appearMotionProps}>
      <h3 className={`text-[2.5rem] text-center ${montserrat_bold.className}`}>
        Profile
      </h3>

      <div className="w-(--default-width) max-w-(--max-width) mt-[3rem] mx-auto flex flex-col gap-[5rem]">
        {profileData.map((sec) => (
          <section key={`profile-${sec.category}`}>
            <h4
              className={`w-full text-[2rem] font-bold ${montserrat_italic.className}`}
            >
              {sec.category}
            </h4>
            <div className="flex flex-col gap-[2rem] mt-[2rem]">
              {sec.items.map((item, idx) => (
                <div
                  key={`item-${idx}`}
                  className="flex flex-col gap-[0.5rem] xs:grid xs:grid-cols-[1fr_2fr] xs:gap-x-[5rem]"
                >
                  <p className="text-[0.9rem] xs:text-[1rem] text-start xs:text-end">
                    {item.period}
                  </p>
                  <div>
                    <p className="text-[1.1rem] font-bold mb-[0.5rem]">
                      {item.title}
                    </p>
                    <div>
                      {item.description.map((des, idx) => (
                        <p key={`description-${idx}`}>{des}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </motion.section>
  );
};

export default Profile;
