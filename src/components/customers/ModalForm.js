import React from "react";
import { Button, Modal, Form, Input, Radio, Checkbox } from "antd";

const FormItem = Form.Item;

const ModalForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title={this.props.title}
          okText={this.props.okText}
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <FormItem label={this.props.item1Title}>
              {getFieldDecorator("firstname", {
                rules: [{ required: true, message: "Field is required!" }]
              })(<Input />)}
            </FormItem>
            <FormItem label={this.props.item2Title}>
              {getFieldDecorator("lastname", {
                rules: [{ required: true, message: "Field is required!" }]
              })(<Input type="textarea" />)}
            </FormItem>

            <FormItem label={this.props.item3Title}>
              {getFieldDecorator("mobile", {
                rules: [{ required: true, message: "Field is required!" }]
              })(<Input type="tel" />)}
            </FormItem>

            <FormItem label={this.props.item4Title}>
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Field is required!" }]
              })(<Input type="email" />)}
            </FormItem>

            <FormItem label={this.props.item5Title}>
              {getFieldDecorator("membership", {
                rules: [{ required: true, message: "Field is required!" }]
              })(<Checkbox type="checkbox">Give Membership</Checkbox>)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

export default ModalForm;
