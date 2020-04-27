import { _storeData, _retrieveData } from "../../backend/AsyncFuncs";

//TODO store user details in the global state
export async function getSearchBy(name) {
  let userData = await _retrieveData("login_data");
  console.log("testing ", userData);
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/search_by_name?query=" + name, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  });


  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}
export async function getSearchByCat(cat) {
  let userData = await _retrieveData("login_data");
  console.log("testing ", userData);
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/search_by_category?query=" + cat, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  });


  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}

export async function getActiveSession() {
  let userData = await _retrieveData("login_data");
  console.log("testing ", userData);
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/sessions/get_student_active_sessions", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  });
  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}
export async function getAllCategories() {
  //let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/categories"
    // +
    //   userData.id.toString() +
    //   "&token=" +
    //   userData.token.toString()
  );

  let responseJson = fetchCallback.json();
  // console.log(responseJson._55);
  return responseJson;
}


export async function getCrouselImages() {
  let userData = await _retrieveData("login_data");
  //console.log("testing ", userData);
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/images", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },
  });
  let responseJson = fetchCallback.json();
  //console.log(responseJson._55);
  return responseJson;
}

export async function getTypes() {
  // let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/types"
    // +
    //   userData.id.toString() +
    //   "&token=" +
    //   userData.token.toString()
  );

  let responseJson = fetchCallback.json();
  // console.log(responseJson._55);
  return responseJson;
}

export async function getAllTypes() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/type?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}
export async function getCoachById() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/get_coach?coach_id=" +
    userData.user_id.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getFavCoaches() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/my_fav_coaches?student_id=" +
    userData.user_id.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getCoachByCatId(cat_id) {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/get_by_category?category_id=" +
    cat_id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getLessonsById(coach_id) {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/get_coach_lessons?coach_id=" +
    coach_id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getAllConverstion() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/conversations/list_conversation?user_id=" +
    userData.user_id.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function get_coach_total_earnig() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/get_coach_earn_money_on_this_month?coach_id=" + userData.user_id.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}


export async function get_coach_total_session() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/get_coach_all_sessions?coach_id=" + userData.user_id.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function get_unread_message() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/messages/get_user_unread_messages", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function get_coach_total_fav() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/coaches/get_coach_total_fav?connected_account_id=" + userData.user_id.toString(), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getAllMessages(con_id) {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/messages?conversation_id=" +
    con_id +
    "&page=" + 1, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      UUID: userData.UUID.toString(),
      Authentication: userData.Authentication.toString(),
    },

  }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}



export async function chatConnect(coach_id) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/conversations/connect",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        UUID: userData.UUID.toString(),
        Authentication: userData.Authentication.toString(),
      },
      body: JSON.stringify({
        user_1: userData.user_id.toString(),
        user_2: coach_id,
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function sentMessage(conversation_id, text, receiver_id, sender_id) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "https://geo-location-v1.herokuapp.com/api/v1/messages/send_message?conversation_id=" +
    conversation_id +
    "&text=" +
    text +
    "&receiver_id=" +
    receiver_id +
    "&sender_id=" +
    sender_id,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        UUID: userData.UUID.toString(),
        Authentication: userData.Authentication.toString(),
      },
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}





// Helper Functions 
export async function getDashboardForUser() {
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobs/dashboard?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getJobsForUser(
  priorityId,
  siteId,
  clientId,
  statusId,
  isHighPriorityClicked
) {
  let userData = await _retrieveData("login_data");
  let url =
    "http://urban-contractor.dashclient.co.uk/api/jobs?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString();

  if (priorityId != "") url += "&filter_priority=" + priorityId;
  if (siteId != "") url += "&filter_site=" + siteId;
  if (clientId != "") url += "&filter_client=" + clientId;
  if (statusId != "") url += "&filter_status=" + statusId;
  if (isHighPriorityClicked) url += "&filter_unseen=" + "1";

  let fetchCallback = await fetch(url);
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getJobDetails(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getClockOutTime(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobs/lastClockedOut?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getSignatures(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/signatures?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getEngineers(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/engineers?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString() +
    "&order_column=id&order_direction=DESC&job_id=" +
    jobId
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getMaterialList() {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/materials?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getUnitList() {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/units?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getEquipmentList() {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/equipments?user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getJobsheetLabour(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/labours?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getJobsheetMaterials(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/materials?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getJobsheetEquipment(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/equipments?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function getJobsheetPhotos(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/photos?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function canCloseJob(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobs/canClose?job_id=" +
    jobId +
    "&user_id=" +
    userData.id.toString() +
    "&token=" +
    userData.token.toString()
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}


export async function clockOutEvent(jobId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobs/clockOut",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token: userData.token.toString(),
        user_id: userData.id.toString(),
        job_id: jobId
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function updateJobStatus(jobId, statusId, notes) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobs",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId.toString(),
        status_id: statusId.toString(),
        notes: notes.toString()
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addSignatureToJob(
  jobId,
  SignatoryName,
  imageBase64,
  status
) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/signature",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId.toString(),
        fullname: SignatoryName.toString(),
        imageB64: "data:image/jpeg;base64," + imageBase64,
        status: status.toString()
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addSubcontractor(name, company) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/engineers",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        name: name,
        company: company
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addLabour(jobId, labourUserId, date, hours) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/labour",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId.toString(),
        labour_user_id: labourUserId,
        date: date,
        hours: hours
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addNewMaterial(description, unitId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/materials",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        description: description,
        unit_id: unitId
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addMaterialItem(jobId, materialId, unitId, quantity) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/material",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId,
        material_id: materialId,
        unit_id: unitId,
        quantity: quantity
      })
    }
  );
  console.log(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/material" +
    userData.id.toString() +
    " " +
    userData.token.toString() +
    " " +
    jobId +
    " " +
    materialId +
    " " +
    unitId +
    " " +
    quantity
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addNewEquipment(description) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/equipments",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        description: description
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addEquipmentItem(jobId, equipmentId, quantity) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/equipment",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId,
        equipment_id: equipmentId,
        quantity: quantity
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function addPhoto(jobId, description, imageBase64) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/photo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId,
        description: description,
        imageB64: "data:image/jpeg;base64," + imageBase64
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function deleteEquipment(jobId, equipmentId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/equipment",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId,
        equipment_id: equipmentId
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}

export async function deleteMaterial(jobId, materialId) {
  //TODO store token in state
  let userData = await _retrieveData("login_data");
  let fetchCallback = await fetch(
    "http://urban-contractor.dashclient.co.uk/api/jobsheet/material",
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: userData.id.toString(),
        token: userData.token.toString(),
        job_id: jobId,
        material_id: materialId
      })
    }
  );
  let responseJson = fetchCallback.json();
  return responseJson;
}
