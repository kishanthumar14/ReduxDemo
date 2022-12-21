import React, { Component } from "react";
import { Space, Table, Tag, Modal, Button } from "antd";
import { connect } from "react-redux";
import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";
import petsActions from "../../core/pets/petsActions";
import { AddEditPet } from "./addEditPet";
const { confirm } = Modal;
class PateView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tableData: [],
      filterText: "",
      loading: false,
      modelVisible: false,
      editData: {},
    };
  }
  componentDidMount() {
    this.props.getPetsAction("1");
    this.setState({ mounted: true });
    this.setState({ loading: true });
  }
  handleModel = (visible) => {
    this.setState({ modelVisible: visible });
    if (!visible) {
      this.setState({ editData: {} });
    }
  };
  static getDerivedStateFromProps(nextProps, prevState) {
    let update = {};
    switch (nextProps.petsActions.type) {
      case "GET_ALL_PETS_SUCCESS":
        update.tableData = nextProps.petsActions.data;
        update.loading = false;
        nextProps.fakeAction();
        break;
      case "CREATE_PETS_SUCCESS":
        let tableDataList = prevState.tableData;
        update.tableData = [...[nextProps.petsActions.data], ...tableDataList];
        nextProps.fakeAction();

        break;
      case "UPDATE_PETS_SUCCESS":
        let record_up_id = nextProps.petsActions.data.payload.id || "";
        if (record_up_id) {
          let stateListData = [...prevState.tableData];
          let findDataIndex = stateListData.findIndex(
            (eve) => Number(eve.id) === Number(record_up_id)
          );
          if (findDataIndex > -1) {
            stateListData.splice(findDataIndex, 1);
          }
          update.tableData = [
            ...[nextProps.petsActions.data],
            ...stateListData,
          ];
        }

        break;
      case "DELETE_PETS_SUCCESS":
        let record_id = nextProps.petsActions.data.payload.id || "";
        if (record_id) {
          let stateListData = [...prevState.tableData];
          let findDataIndex = stateListData.findIndex(
            (eve) => Number(eve.id) === Number(record_id)
          );
          if (findDataIndex > -1) {
            stateListData.splice(findDataIndex, 1);
          }
          update.tableData = stateListData;
        }
        nextProps.fakeAction();
        break;
      case "GET_ALL_PETS_ERROR":
        nextProps.fakeAction();
        break;
      case "EDIT_PETS_SUCCESS":
        update.editData = nextProps.petsActions.data;
        update.modelVisible = true;
        nextProps.fakeAction();
        break;
      default:
    }
    return Object.keys(update).length === 0 ? null : update;
  }

  showConfirm = (record, props) => {
    confirm({
      title: "Do you Want to delete these items?",
      icon: <ExclamationCircleFilled />,
      // content: 'Some descriptions',
      onOk() {
        props.deletePetAction(record);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "name",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <span>{text}</span>,
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        defaultSortOrder: "descend",
        sorter: (a, b) => a.age - b.age,
      },
      {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        render: (_, { tags }) => (
          <>
            {tags.map((tag) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              if (tag === "Angry") {
                color = "volcano";
              }
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </>
        ),
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <span
              style={{ cursor: "pointer", marginLeft: "10px" }}
              onClick={() => {
                this.props.editPetAction(record);
              }}
            >
              <EditOutlined />
            </span>
            <span
              onClick={(event) => {
                this.showConfirm(record, this.props);
              }}
              style={{ cursor: "pointer", marginLeft: "10px" }}
            >
              <DeleteOutlined />
            </span>
            {/* <a>Edit {record.name}</a>
            <a>Delete</a> */}
          </Space>
        ),
      },
    ];
    const { tableData, modelVisible, editData = {} } = this.state;
    return (
      <div>
        <div style={{ float: "right" }}>
          <Button
            type="primary"
            style={{ margin: "5px" }}
            onClick={(e) => this.handleModel(true)}
          >
            Add Pet
          </Button>
        </div>
        {modelVisible && (
          <AddEditPet
            {...this.props}
            modelVisible={modelVisible}
            handleModel={this.handleModel}
            editData={editData}
          />
        )}
        <Table height={200} columns={columns} dataSource={tableData} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    ...state.petsReducer,
  }),
  {
    ...petsActions,
  }
)(PateView);
