import axios from "axios";

export async function GetSheetName(URL, USER_TOKEN) {
  try {
    await axios
      .get(URL, { headers: { Authorization: USER_TOKEN } })
      .then(response => {
        //console.log(response.data.data[0].name);
        const name = response.data.data[0].name;
        //alert(name);
        return name;
      })
      .catch(error => {
        //console.log("error " + error);
        alert("error " + error);
      });
  } catch (error) {
    alert("error from catch");
  }
}

export async function SheetId(URL, USER_TOKEN) {
  try {
    await axios
      .get(URL, { headers: { Authorization: USER_TOKEN } })
      .then(response => {
        //console.log(response.data.pageNumber);
        let id = response.data.data[0].id;
        return id;
      })
      .catch(error => {
        //console.log("error " + error);
        alert("error " + error);
      });
  } catch (error) {
    alert("error from catch");
  }
}

export async function SheetTotalPages(URL, USER_TOKEN) {
  try {
    await axios
      .get(URL, { headers: { Authorization: USER_TOKEN } })
      .then(response => {
        //console.log(response.data.totalPages);
        let pages = response.data.data[0].totalPages;
        return pages;
      })
      .catch(error => {
        //console.log("error " + error);
        alert("error " + error);
      });
  } catch (error) {
    alert("error from catch");
  }
}

export async function SheetTotalCount(URL, USER_TOKEN) {
  try {
    await axios
      .get(URL, { headers: { Authorization: USER_TOKEN } })
      .then(response => {
        //console.log(response.data.totalCount);
        let count = response.data.data[0].totalCount;
        return count;
      })
      .catch(error => {
        //console.log("error " + error);
        alert("error " + error);
      });
  } catch (error) {
    //conso
    alert("error from catch");
  }
}

export async function SheetPageSize(URL, USER_TOKEN) {
  try {
    await axios
      .get(URL, { headers: { Authorization: USER_TOKEN } })
      .then(response => {
        //console.log(response.data.pageNumber);
        let size = response.data.data[0].pageSize;
        return size;
      })
      .catch(error => {
        //console.log("error " + error);
        alert("error " + error);
      });
  } catch (error) {
    alert("error from catch");
  }
}
