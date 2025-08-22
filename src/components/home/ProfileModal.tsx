import { Root } from "../common/Modal";
import { motion } from "motion/react";

interface ProfileModalProps {
  onCloseModal: () => void;
}

const ProfileModal = ({ onCloseModal }: ProfileModalProps) => {
  return (
    <Root onCloseModal={onCloseModal}>
      <motion.div
        className="w-[calc(100%-1rem)] h-[calc(100%-1rem)] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>프로필 모달</div>
      </motion.div>
    </Root>
  );
};

export default ProfileModal;
