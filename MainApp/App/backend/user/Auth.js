import React, { Component } from "react";
import { _storeData, _retrieveData } from "../../backend/AsyncFuncs";
import Category from "../../Containers/Coach/Category";

export async function login(email, password) {
  //TODO token valid for 24 hrs
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/users/sign_in",
    {
      method: "POST",
      headers: {
        // Accept: "application/json"
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }
  );

  let responseJson = await fetchCallback.json();
   console.log("Ooo",responseJson.UUID );
  if (responseJson.UUID == "" || !responseJson.UUID) {
    alert(responseJson.Error);
  } else {
    _storeData("login_data", JSON.stringify(responseJson));
  }
  return responseJson;
}

export async function resetPassword(email) {
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/reset-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        UUID: userData.UUID.toString(),
        Authentication: userData.Authentication.toString(),
      },
      body: JSON.stringify({
        user_id: userData.user_id,
      })
    }
  );
  
}

export async function registerDeviceToken(deviceToken) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/registerDevice",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        device_token: deviceToken
      })
    }
  );
  let responseJson = await fetchCallback.json();
  console.log(responseJson);
  return responseJson;
}



export async function onSignupCoach(email,password,name,phone,city,role,ImageData,
  background,about,type,category) {
  let data;
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("name", name);
    formdata.append("phone", phone);
    formdata.append("city", city);
    formdata.append("role",role);
    formdata.append("background",background);
    formdata.append("about",about);
    formdata.append("type",type);
    formdata.append("category",category);
    if (ImageData) {
      formdata.append("profile_photo", {
        uri: ImageData.uri,
        name: 'photo.${ImageData.fileName}',
        type: 'image/${ImageData.type}'
      });
    }

    let fetchCallback = await fetch(
      "https://geo-location-v1.herokuapp.com/api/v1/users/sign_up",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formdata
      }
    );
    let responseJson = await fetchCallback.json();
    _storeData("login_data", JSON.stringify(data));
    console.log(responseJson);
    return responseJson;
}

export async function onSignup(email,password,name,phone,city,role,ImageData) {
  let data;
    const formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);
    formdata.append("name", name);
    formdata.append("phone", phone);
    formdata.append("city", city);
    formdata.append("role",role);
    console.log("imageDta",ImageData)
    if (ImageData) {
      formdata.append("profile_photo", {
        uri: ImageData.uri,
        name: 'photo.${ImageData.fileName}',
        type: 'image/${ImageData.type}'
      });
    }

    let fetchCallback = await fetch(
      "https://geo-location-v1.herokuapp.com/api/v1/users/sign_up",
      {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data"
        },
        body: formdata
      }
    );
    let responseJson = await fetchCallback.json();
    _storeData("login_data", JSON.stringify(data));
    console.log(responseJson);
    return responseJson;
  }

  export async function deleteUser() {
    //TODO store token in state
    let userData = await _retrieveData("login_data");
    let fetchCallback = await fetch(
      "https://geo-location-v1.herokuapp.com/api/v1/users/delete_account",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", UUID: userData.UUID.toString(),
          Authentication: userData.Authentication.toString(),
        },
        body: JSON.stringify({
          user_id: userData.user_id,
        })
      }
    );
    let responseJson = fetchCallback.json();
    return responseJson;
  }
  