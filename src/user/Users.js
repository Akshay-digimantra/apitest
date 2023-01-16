import React, { useEffect, useState } from "react";
import { getUsersData } from "../redux/Action";
import axios from "../lib/instance/UserInstance";
import { userSliceActions } from "../redux/UserSlice";
import { connect } from "react-redux";

const Users = ({ getUsers, userData }) => {

  console.log(userData);

  useEffect(() => {
    getUsers();
  },[]);

  // const getUsersData = async (dispatch) => {
  //   try {
  //     const response = await axios.get("v2/users");

  //     if (response.status === 200) {
  //       setUsers(response.data);
  //     } else {
  //       throw response;
  //     }
  //     return response;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      {/* <button>Users</button> */}
      {userData.map((user) => {
        return <div>{user.name}</div>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users.Users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(getUsersData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
