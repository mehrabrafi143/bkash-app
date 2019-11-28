import React from "react";
import SortableTree from "react-sortable-tree";
import FileExplorerTheme from "react-sortable-tree-theme-minimal";
import Select from "react-dropdown-select";
import Joi from "joi-browser";
import Form from "./../form/form";
import { GetQuestions } from "../../services/questionServices/questionServices";

class QuestionSelection extends Form {
  state = {
    data: {
      name: "",
      treeData: []
    },
    errors: {
      name: ""
    },
    questionTreeData: [],
    selectedItems: []
  };

  schema = {
    name: Joi.string().required(),
    treeData: Joi.array()
  };

  setValue = v => {
    if (v) {
      this.setState({ selectedItems: [...v] });
      const { treeData } = this.state.data;

      const unique = [];
      let concat = treeData.concat(v);
      const uniqueQustionData = [];

      concat.map(f => {
        if (!unique.includes(f.id)) {
          unique.push(f.id);
          uniqueQustionData.push(f);
        }
      });

      const { data, questionTreeData: questionTreeData } = this.state;
      const newTreeData = questionTreeData.filter(
        td => !unique.includes(td.id)
      );

      data.treeData = uniqueQustionData;
      this.setState({ data, questionTreeData: newTreeData });
    }
  };

  handelSortTree = treeData => {
    const { data } = this.state;
    data.treeData = treeData;
    this.setState({ data });
  };

  async componentWillMount() {
    try {
      const { data: questionTreeData } = await GetQuestions();
      this.setState({ questionTreeData });
    } catch (error) {}
  }

  setTitle = () => {
    const { treeData: oldData } = this.state.data;
    const { data } = this.state;

    const section = {
      id: data.name,
      title: data.name
    };

    oldData.push(section);

    data.treeData = [...oldData];
    data.name = "";
    this.setState({ data });
  };

  render() {
    const { data, errors, selectedItems, questionTreeData } = this.state;
    const { treeData: SortTreeData } = data;
    console.log(JSON.stringify(data.treeData));

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <form onSubmit={this.handelSubmit}>
              <div className="row">
                <div className="col-6">
                  {this.renderInput(
                    "name",
                    data.name,
                    "Name",
                    errors.name,
                    "text",
                    null,
                    ""
                  )}
                </div>
                <div className="col-4">
                  <span
                    className="btn btn-primary btn-md"
                    onClick={this.setTitle}
                    disabled={!this.state.data.name}
                  >
                    Set Title
                  </span>
                </div>
              </div>
              <Select
                create
                placeholder="Select Roles"
                labelField="title"
                valueField="id"
                options={questionTreeData}
                values={selectedItems}
                onChange={v => this.setValue(v)}
                className="form-input"
                clearOnSelect={false}
              />
              {this.renderButton("Save")}
            </form>
          </div>

          <div className="col-6">
            <div style={{ height: "400px" }}>
              <SortableTree
                treeData={SortTreeData}
                onChange={tree => this.handelSortTree(tree)}
                shouldCopyOnOutsideDrop={true}
                closeOnSelect={true}
                theme={FileExplorerTheme}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionSelection;
