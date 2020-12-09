import React from "react";
import styled from "styled-components";
import {
  Modal as OGModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/react";

// since we're redefining Modal here, need to alter import name
function Modal({ isOpen, onClose, title, children }) {
  return (
    <OGModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent rounded="md">
        <ModalHead>
          {title}
          <CloseButton />
        </ModalHead>
        {children}
      </ModalContent>
    </OGModal>
  );
}

const ModalHead = styled(ModalHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseButton = styled(ModalCloseButton)`
  position: static !important;
`;

export default Modal;
