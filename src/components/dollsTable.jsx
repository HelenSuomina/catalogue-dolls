import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import Like from "./common/like";

class DollsTable extends Component {
  columns = [
    { path: "dollName", label: "Name" },
    { path: "dollType.name", label: "Type" },
    { path: "image", label: "Image" },
    { path: "price", label: "Price (USD)" },
    { path: "numberInStock", label: "Stock (Items)" },
    { path: "popularity", label: "Rating" },
    { path: "like", label: "" },
    { path: "delete", label: "" }
  ];

  render() {
    const {
      dolls,
      handleDelete,
      handleLike,
      handleSort,
      sortColumn
    } = this.props;

    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          handleSort={handleSort}
        />
        <tbody>
          {dolls.map(doll => (
            <tr key={doll._id}>
              <td>{doll.dollName}</td>
              <td>{doll.dollType.name}</td>
              <td>
                <img
                  style={{ width: 90 }}
                  src={doll.image}
                  alt={doll.dollName}
                />
              </td>
              <td>{doll.price}</td>
              <td>{doll.numberInStock}</td>
              <td>{doll.popularity}</td>
              <td>
                <Like liked={doll.liked} handleLike={() => handleLike(doll)} />
              </td>
              <td>
                <button
                  onClick={() => handleDelete(doll)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DollsTable;
