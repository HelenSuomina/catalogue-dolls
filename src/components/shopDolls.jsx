import React, { Component } from "react";
import ListTypes from "./common/listTypes";
import Pages from "./common/pagination";
import DollsTable from "./dollsTable";
import { getDolls } from "../services/fakeDollService";
import Logo from "../assets/logo/ls_logo.png";
import { paginate } from "../utilities/paginate";
import { getDollTypes } from "../services/fakeDollTypes";
import _ from "lodash";

class ShopDolls extends Component {
  state = {
    dolls: [],
    dollTypes: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "dollName", order: "asc" }
  };

  componentDidMount() {
    const dollTypes = [{ _id: "", name: "All Dolls" }, ...getDollTypes()];
    this.setState({ dolls: getDolls(), dollTypes });
  }

  handleDelete = doll => {
    const dolls = this.state.dolls.filter(d => d._id !== doll._id);
    this.setState({ dolls });
  };

  handleLike = doll => {
    const dolls = [...this.state.dolls];
    const index = dolls.indexOf(doll);
    dolls[index] = { ...dolls[index] };
    dolls[index].liked = !dolls[index].liked;
    if (dolls[index].liked) dolls[index].popularity += 0.5;
    else dolls[index].popularity -= 0.5;
    this.setState({ dolls });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleDollTypeSelect = type => {
    this.setState({ selectedDollType: type, currentPage: 1 });
  };

  handleSort = propsObject => {
    const sortColumn = {
      path: propsObject.sortColumn.path,
      order: propsObject.sortColumn.order
    };
    this.setState({ sortColumn });
  };

  render() {
    const { length } = this.state.dolls;
    const {
      pageSize,
      currentPage,
      selectedDollType,
      sortColumn,
      dolls: allDolls
    } = this.state;

    if (length === 0)
      return (
        <p>
          <img src={Logo} alt={"LShandworks"} className="logo" />
          <b>There are no dolls in the catalogue.</b>
        </p>
      );

    const filteredDolls =
      selectedDollType && selectedDollType._id
        ? allDolls.filter(d => d.dollType._id === selectedDollType._id)
        : allDolls;

    const sortedDolls = _.orderBy(
      filteredDolls,
      [sortColumn.path],
      [sortColumn.order]
    );

    const dolls = paginate(sortedDolls, currentPage, pageSize);

    return (
      <div>
        <p>
          <img src={Logo} alt={"LShandworks"} className="logo" />
        </p>
        <div className="row">
          <div className="col-2.8 margin2">
            <ListTypes
              items={this.state.dollTypes}
              selectedItem={this.state.selectedDollType}
              handleDollTypeSelect={this.handleDollTypeSelect}
            />
          </div>
          <div className="col">
            {" "}
            <p>Displaying {filteredDolls.length} dolls in the catalogue.</p>
            <DollsTable
              dolls={dolls}
              sortColumn={sortColumn}
              handleLike={this.handleLike}
              handleDelete={this.handleDelete}
              handleSort={this.handleSort}
            />
            <Pages
              itemsCount={filteredDolls.length}
              pageSize={pageSize}
              currentPage={currentPage}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopDolls;
