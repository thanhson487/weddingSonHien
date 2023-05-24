import "antd/dist/reset.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Wish from "./component/Wish";
import { FloatButton } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import { handleCopy } from "./common";
import { toast } from "react-toastify";
import DialogWish from "./component/DialogWish";

function App() {
  // useEffect(() => {
  //   const data = document.querySelector(".copy-sonpham");
  //   console.log('🚀 ~ data:', data)
  //   const data2 = document.querySelector(".copy-hientong");
  //   const actionDialog = () => {
  //     handleCopy("5000132841055");
  //     toast.success("Copy STK thành công", {
  //       position: "top-center",
  //       autoClose: 2000,
  //       theme: "light",
  //     });
  //   };
  //   const actionDialog1 = () => {
  //     handleCopy("1903319840515");
  //     toast.success("Copy STK thành công", {
  //       position: "top-center",
  //       autoClose: 2000,
  //       theme: "light",
  //     });
  //   };
  //   if (data) {
  //     data.addEventListener("click", actionDialog);
  //   }
  //   if (data2) {
  //     data2.addEventListener("click", actionDialog1);
  //   }
  //   return () => {
  //     if (data) {
  //       data.removeEventListener("click", actionDialog);
  //     }
  //      if (data2) {
  //       data2.removeEventListener("click", actionDialog1);
  //     }
  //   };
  // }, []);
  return (
    <div className="App">
      <ToastContainer />
      <Wish />
      <DialogWish />
      <FloatButton.BackTop icon={<ArrowUpOutlined />} />
    </div>
  );
}

export default App;
