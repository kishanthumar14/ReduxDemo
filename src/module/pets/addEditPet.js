import React from "react";
import { Button, Modal, Select, Form, Input, InputNumber } from "antd";
const { TextArea } = Input;
export const AddEditPet = (props) => {
  // const [editData, seteditData] = useState({});
  const onFinish = async (values) => {
    let keyData = {
      ...props.editData,
      ...values,
      key: Math.random().toString(),
    };
    if (Object.keys(editData).length > 0 && editData.id) {
      await props.updatePetAction(keyData);
    } else {
      await props.createPetAction(keyData);
    }
    props.handleModel(false);
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  const { modelVisible } = props;
  const { editData = {} } = props;

  return (
    <div>
      <Modal
        title={`${Object.keys(editData).length > 0 ? "Edit" : "Add"} Pet`}
        open={modelVisible}
        onOk={() => props.handleModel(false)}
        onCancel={() => {
          form.resetFields();
          props.handleModel(false);
        }}
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          // initialValues={editData}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="name"
            initialValue={editData.name ? editData.name : ""}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            initialValue={editData.age ? editData.age : ""}
            rules={[
              {
                required: true,
                message: "Please add your pet age!",
              },
            ]}
          >
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            initialValue={editData.description ? editData.description : ""}
            rules={[
              {
                required: true,
                message: "Please input your description!",
              },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            label="Tags"
            name="tags"
            initialValue={editData.tags ? editData.tags : []}
            rules={[
              {
                required: true,
                message: "Please select your tags!",
              },
            ]}
          >
            <Select placeholder="select tags" mode="multiple">
              {[
                { name: "Angry", id: "Angry" },
                { name: "Nice", id: "Nice" },
                { name: "Lagomorphs", id: "Lagomorphs" },
                { name: "Rodents", id: "Rodents" },
                { name: "Cool", id: "Cool" },
              ].map((eve) => (
                <Select.Option key={eve.id} value={eve.id}>
                  {eve.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 20,
              span: 4,
            }}
          >
            <Button type="primary" htmlType="submit">
              {`${Object.keys(editData).length > 0 ? "Update" : "Submit"}`}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
