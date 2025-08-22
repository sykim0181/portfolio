"use client";

import { AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";
import {
  ComponentProps,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext<{ closeModal: () => void } | null>(null);

interface ModalProps {
  children?: React.ReactNode;
  onCloseModal?: () => void;
}

export const Root = (props: ModalProps) => {
  const { children, onCloseModal } = props;

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      if (onCloseModal) {
        onCloseModal();
      } else {
        router.back();
      }
    }, 300);
  };

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 300);
    const scrollbarWidth =
      window.innerWidth - document.documentElement.offsetWidth;
    document.body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.removeProperty("--scrollbar-width");
    };
  }, []);

  return createPortal(
    <ModalContext.Provider value={{ closeModal }}>
      <div
        className="w-dvw h-dvh fixed top-0 left-0 z-500"
        id="modal_container"
      >
        <Overlay />
        <AnimatePresence>{isOpen && children}</AnimatePresence>
      </div>
    </ModalContext.Provider>,
    document.getElementById("modal-root")!
  );
};

const Overlay = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === null) {
    throw new Error("Not used in ModalContext.Provider");
  }

  const { closeModal } = modalContext;

  return (
    <div
      id="modal-overlay"
      className="w-full h-full absolute top-0 left-0 bg-[rgba(156,156,156,0.5)]"
      onClick={closeModal}
    />
  );
};

interface CloseButtonProps extends ComponentProps<"button"> {
  onCloseModal?: () => void;
}

export const CloseButton = ({ children, ...otherProps }: CloseButtonProps) => {
  const modalContext = useContext(ModalContext);

  if (modalContext === null) {
    throw new Error("Not used in ModalContext.Provider");
  }

  const { closeModal } = modalContext;

  return (
    <button {...otherProps} onClick={closeModal}>
      {children}
    </button>
  );
};
