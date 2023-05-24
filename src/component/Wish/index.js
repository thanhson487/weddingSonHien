import { CopyTwoTone, SendOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal } from "antd";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, set } from "firebase/database";
import { reverse, sortBy } from "lodash";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { dateFromNowFormat, handleCopy } from "../../common";
import useFormGroup from "../common/useForm";
const firebaseConfig = {
  apiKey: "AIzaSyAPmpfqV0INr4p4lZ-Yz5DS2uNMUqVAj-Q",
  authDomain: "weddingcam-acd3a.firebaseapp.com",
  databaseURL: "https://weddingcam-acd3a-default-rtdb.firebaseio.com",
  projectId: "weddingcam-acd3a",
  storageBucket: "weddingcam-acd3a.appspot.com",
  messagingSenderId: "766510802683",
  appId: "1:766510802683:web:bb2ec1951fccc12494b25e",
  measurementId: "G-EZS5S54W09",
};

export default function Wish() {
  const { formList, onSubmitForm, payload } = useFormGroup();
  const [listMess, setListMess] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [db, setDb] = useState();
  const [copy,setCopy]= useState(false)
  initializeApp(firebaseConfig);
  useEffect(() => {
    const db = getDatabase();
    const refers = ref(db, "wish/");
    onValue(refers, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arrValue = Object.values(data);
        const dataSort = reverse(
          sortBy(arrValue, [
            function (o) {
              const timeData = dayjs(
                o.timeSend,
                "MM/DD/YYYY HH:mm:ss",
                true
              ).format();
              return timeData;
            },
          ])
        );

        setListMess([...dataSort]);
      } else {
        setListMess([]);
      }
    });
    setDb(db);
  }, []);
  useEffect(() => {
    if (!payload) return;
    const id = nanoid();
    const nowTime = dayjs();
    const timeFormatNow = dayjs(nowTime).format("MM/DD/YYYY HH:mm:ss");
    const refers = ref(db, "wish/" + id);
    set(refers, {
      id,
      ...payload,
      timeSend: timeFormatNow,
    })
      .then(() => {
        toast.success("Gửi lời chúc thành công", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
        formList.resetFields();
      })
      .catch(() => {
        toast.error("Gửi lời chúc thất bại. Vui lòng thử lại", {
          position: "top-center",
          autoClose: 2000,
          theme: "light",
        });
      });
  }, [payload]);

  useEffect(() => {
    // donateDialog
    const data = document.querySelector(".donateDialog");
    const actionDialog = () => {
      setDialog(true);
    };
    if (data) {
      data.addEventListener("click", actionDialog);
    }
    return () => {
      if (data) {
        data.removeEventListener("click", actionDialog);
      }
    };
  }, []);
  const handleCancel = () => {
    setDialog(false);
  };
  const handleCopyTaskCase = () => {
    toast.success("Copy STK thành công", {
      position: "top-center",
      autoClose: 2000,
      theme: "light",
    });
  };
  return (
    <>
      <div className="page-wrapper flower-fixed-body">
        <section
          className="contact-section section-padding section-bg-img"
          id="wishes"
        >
          <div className="container">
            <div className="row">
              <div className="col col-sm-12">
                <div className="section-title">
                  <h2>Sổ Lưu Bút</h2>
                  <p>
                    Cảm ơn bạn rất nhiều vì đã gửi những lời chúc mừng tốt đẹp
                    nhất đến đám cưới của chúng mình!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-6 col-md-7">
                <div className="contact-form">
                  <div id="wish-form">
                    <Form
                      layout="vertical"
                      form={formList}
                      name="formList"
                      onFinish={onSubmitForm}
                    >
                      <Form.Item
                        name="userName"
                        rules={[{ required: true, whitespace: true }]}
                      >
                        <Input
                          placeholder="Nhập họ tên của bạn"
                          style={{ padding: "5px" }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="description"
                        rules={[{ required: true, whitespace: true }]}
                      >
                        <Input.TextArea
                          rows={4}
                          placeholder="Nhập lời chúc dành cho chúng mình ở đây"
                        />
                      </Form.Item>
                      <div style={{ textAlign: "center" }}>
                        <Button
                          type="primary"
                          icon={<SendOutlined />}
                          htmlType="submit"
                        >
                          Gửi lời chúc
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col col-lg-6 col-md-5">
                <div className="wish-box">
                  {listMess.map((item, index) => {
                    return (
                      <Wrapper
                        justify={index % 2 === 0}
                        className="d-flex mb-4"
                        key={index}
                      >
                        <CustomName
                          positions={index % 2 === 0}
                          className="userName"
                        >
                          {item?.userName}
                        </CustomName>
                        <CustomMess
                          className="msg_cotainer"
                          colorss={index % 2 === 0}
                        >
                          {item?.description}
                          <CustomSpan
                            positions={index % 2 === 0}
                            className="msg_time"
                          >
                            {dateFromNowFormat(item?.timeSend) || "--"}
                          </CustomSpan>
                        </CustomMess>
                       
                      </Wrapper>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
         <section class="story-section section-padding" id="story">
      <div class="container">
        <div class="row">
          <div class="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <div class="section-title">
              <h2>Chuyện Tình Yêu</h2>
              <p>Tình yêu không chỉ là một danh từ - nó là một động từ; nó còn hơn cả một cảm giác - đó là sự quan tâm,
                chia
                sẻ, giúp đỡ, hy sinh.</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="story-block">
              <ul>
                <li>
                  <div class="details">
                    <h3>Chúng mình đến với nhau</h3>
                    <span class="date">January 02 2022</span>

                  </div>
                  <div class="img-holder">
                    <img
                      src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/61a22c6ab0e9f8de66e029da9117aafc.jpeg"
                      alt />
                  </div>
                </li>
                <li>
                  <div class="img-holder">
                    <img
                      src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/5289d1c79599d4700ca271125cf4e5b7.jpeg"
                      alt />
                  </div>
                  <div class="details">
                    <h3>Ra mắt gia đình</h3>
                    <span class="date">January 23 2022</span>

                  </div>
                </li>
                <li>
                  <div class="details">
                    <h3>Chuyến đi du lịch đầu tiên</h3>
                    <span class="date">March 27 2022</span>

                  </div>
                  <div class="img-holder">
                  <img src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/8f0a71d943b2f64db7b82edd8ee3e504.jpeg" alt="" />
                  </div>
                </li>
                <li>
                  <div class="img-holder">
                    <img
                      src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/91d02902f8560ee363cc81ac1a195f43.jpeg"
                      alt />
                  </div>
                  <div class="details">
                    <h3>Hai bên gia đình chính thức gặp mặt</h3>
                    <span class="date">February 25 2023</span>

                  </div>
                </li>
                <li>
                  <div class="details">
                    <h3>Lễ cầu hôn</h3>
                    <span class="date">July 01 2023</span>

                  </div>
                  <div class="img-holder">
                    <img
                      src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/85f5c3b447060f6ad87764fc85d852f5.jpeg"
                      alt />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
        <footer className="site-footer footer-style-1">
          <div className="inner">
            <div className="couple-pic">
              <img
                src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/d1ef6736e4cf867786d1e3756c3246e6.jpeg"
                alt="Thanh Sơn &amp; Tống Hiền 💞💞"
              />
            </div>
            <h2>Thank you!</h2>
            <div>Design by Son Pham</div>
          </div>
        </footer>
      </div>
      <Modal
        title="Hộp mừng cưới"
        open={dialog}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>,
        ]}
        width={1000}
      >
        <div className="row">
          <div className="col col-xs-12">
            <div id="donate-modal">
              <div className="donate-modal-content">
                <div className="donate-modal-body">
                  <div className="donate-box">
                    <div className="donate-card">
                      <h3>Mừng cưới đến chú rể</h3>
                      <img
                        className="qr-code-image"
                        alt=""
                        src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/a7d8edc79757e8046b7342623e882fbe.jpeg"
                      />
                      <p>
                        Ngân hàng: <strong>MB Bank</strong>
                      </p>
                      <p>
                        Tên tài khoản: <strong>Phạm Thanh Sơn</strong>
                      </p>
                      <p>
                        Số TK: <strong>5000132841055</strong>{" "}
                          <CopyToClipboard
                          text={"5000132841055"}
                          onCopy={handleCopyTaskCase}
                        >
                          <CopyTwoTone />
                        </CopyToClipboard>
                      </p>
                      <p>
                        Chi nhánh: <strong>Hà Nội</strong>
                      </p>
                    </div>
                    <div className="donate-card">
                      <h3>Mừng cưới đến cô dâu</h3>
                      <img
                        className="qr-code-image"
                        alt=""
                        src="https://cdn.biihappy.com/ziiweb/website/629d7539aca2fd1bbc07ffc9/b74b3190dceb025bbe261f5898016288.jpeg"
                      />
                      <p>
                        Ngân hàng: <strong>Techcombank</strong>
                      </p>
                      <p>
                        Tên tài khoản: <strong>Tống Thị Hiền</strong>
                      </p>
                      <p>
                        Số TK: <strong>1903319840515</strong>
                        <CopyToClipboard
                          text={"1903319840515"}
                          onCopy={handleCopyTaskCase}
                        >
                          <CopyTwoTone />
                        </CopyToClipboard>
                      </p>
                      <p>
                        Chi nhánh: <strong>Hà Nội</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
const CustomMess = styled.div`
  background-color: ${(props) =>
    props.colorss ? "rgb(200 157 156 / 20%)" : "rgb(43 150 45 / 20%)"};
`;
const Wrapper = styled.div`
  justify-content: ${(props) => (props.justify ? "flex-start" : "flex-end")};
  position: relative;
`;
const CustomName = styled.div`
  display: flex;
  font-weight: 700;
`;
const CustomSpan = styled.div`
  display: flex;
  left: ${(props) => (props.positions ? "2" : "")};
  right: ${(props) => (!props.positions ? "2" : "")};
`;
const CustomIcon = styled.i`

position: absolute;`