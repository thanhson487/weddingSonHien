import { Button, Modal } from "antd";
import React, { useEffect, useState } from "react";
import wishImg from "./../../img/wish.png";
import styled from "styled-components";
import { CloseOutlined, LogoutOutlined } from "@ant-design/icons";
const DialogWish = () => {
  const [open, setOpen] = useState(false);
  const isDialogWish = localStorage.getItem("wishDialog");
  useEffect(() => {
    if (isDialogWish) return;
    const timeout = setTimeout(() => {
      setOpen(true);
      localStorage.setItem("wishDialog", JSON.stringify(true));
    }, [10000]);
    return () => clearTimeout(timeout);
  }, [isDialogWish]);

  const handleCancel = () => {
    setOpen(false);
  };
  const handleOk = () => {
    const access = document.getElementById("wishes");
    access.scrollIntoView({ behavior: "smooth" }, true);
    setOpen(false);
  };
  return (
    <CustomModal
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button danger onClick={handleCancel}>
          Hủy
        </Button>,
        <Button type="primary" onClick={handleOk}>
          Gửi lời chúc
        </Button>,
      ]}
      centered
      width={500}
      closeIcon={
        <CloseOutlined style={{ fontSize: "25px", color: "#634a4a" }} />
      }
    >
      <img src={wishImg} alt="img" />
    </CustomModal>
  );
};

export default DialogWish;
const CustomModal = styled(Modal)`
  .ant-modal-content {
    padding: 8px 8px !important;
  }
`;
