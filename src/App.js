import "./App.css";
import { Button, Form, Input } from "antd";
import "antd/dist/reset.css";
import { SendOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { initializeApp } from "firebase/app";
import {
  get,
  getDatabase,
  ref,
  remove,
  set,
  update,
  onValue,
} from "firebase/database";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { nanoid } from "nanoid";
import useFormGroup from "./component/common/useForm";
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

function App() {
  const { formList, onSubmitForm, payload } = useFormGroup();
  const [listMess, setListMess] = useState([]);
  const [db, setDb] = useState();
  initializeApp(firebaseConfig);
  useEffect(() => {
    const db = getDatabase();
    const refers = ref(db, "wish/");
    onValue(refers, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const arrValue = Object.values(data);
        setListMess([...arrValue]);
      } else {
        setListMess([]);
      }
    });
    setDb(db);
  }, []);
  useEffect(() => {
    if (!payload) return;
    const id = nanoid();
    const refers = ref(db, "wish/" + id);
    set(refers, {
      id,
      ...payload,
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


  return (
    <div className="App">
      <ToastContainer />
       <div class="page-wrapper flower-fixed-body">
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
                  nhất đến đám cưới của chúng tôi!
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
                    <Wrapper justify={index % 2 === 0} className="d-flex mb-4">
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
                          8:40 AM, Today
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
       </div>
   
    </div>
  );
}

export default App;
const CustomMess = styled.div`
  background-color: ${(props) =>
    props.colorss ? "rgb(200 157 156 / 20%)" : "rgb(43 150 45 / 20%)"};
`;
const Wrapper = styled.div`
  justify-content: ${(props) => (props.justify ? "flex-start" : "flex-end")};
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
