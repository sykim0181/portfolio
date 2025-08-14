import { Montserrat } from "next/font/google";
import { motion } from "motion/react";
import { appearMotionProps } from "@/constants/motion";
import { PROFILE_DATA } from "@/data/profile";

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
      <div className="w-(--default-width) max-w-(--max-width) mt-[3rem] mx-auto flex flex-col gap-[5rem]">
        {PROFILE_DATA.map((sec) => (
          <section key={`profile-${sec.category}`}>
            <h4
              className={`w-full text-[1.2rem] font-bold ${montserrat_italic.className}`}
            >
              {sec.category}
            </h4>
            <div className="">
              {sec.items.map((item, idx) => (
                <div key={`profile-data-${idx}`}>
                  <div className="flex flex-col xs:grid xs:grid-cols-[1fr_2fr]">
                    <p>{item.period}</p>
                    <div>
                      <p className="font-bold">{item.title}</p>
                      {item.description.length > 0 && (
                        <div className="text-gray-500">
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
        ))}
      </div>
    </motion.section>
  );
};

export default Profile;
