import React, { Component } from "react";
import ArrowUp from "../../assets/images/arrow-up.png";
import ArrowDown from "../../assets/images/arrow-down.png";

class TableHeader extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (path === "image") return null;
    if (path === "like") return null;
    if (path === "delete") return null;
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.handleSort({ sortColumn });
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc")
      return <img src={ArrowUp} alt="Arrow Up" width="15"></img>;
    return <img src={ArrowDown} alt="Arrow Down" width="15"></img>;
  };

  render() {
    return (
      <thead className="thead-dark">
        <tr>
          {this.props.columns.map(column => (
            <th
              key={column.path}
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
