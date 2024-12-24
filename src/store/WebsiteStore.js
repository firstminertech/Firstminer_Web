import { configure, makeAutoObservable, runInAction } from "mobx"
import { axiosInstance, axiosInstanceInt, setAuthToken, setAuthTokenInt } from "../api/axiosInstance"
import { toast } from 'react-toastify';
class WebsiteStore {
  loading = false
  data = {
    teams: [],
    contact: [],
    clients: [],
    popModal:true
  }
  errors = {}
  constructor() {
    makeAutoObservable(this);
    configure({
      useProxies: "never"
    })
  }
  toggleLoading = (toggle) => {
    this.loading = toggle
  }
  toggleLoadingApply = (toggle) => {
    this.loadingApply = toggle
  }



//======================teams============================

  async getTeams() {
    this.toggleLoading(true);
    try {
      const response = await axiosInstance.get("/get-teams-details")
      if (response) {
        runInAction(() => {
          this.data.teams = response?.data?.team;
        })
      } else {
        // toast.error("Something went to wrong!");
      }
    }
    catch (err) {
      if (err?.request?.status === 401) {
        // window.location.reload()
      }
      console.log(err)
    }
    finally {
      this.toggleLoading(false);
    }
  }
  async addTeam(param, navigationCallBack) {
    this.toggleLoading(true);
    try {
      const response = await axiosInstance.post("/create-team-details", param,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response) {
        navigationCallBack()
      } else {
        // toast.error("Something went to wrong!");
      }
    }
    catch (err) {
      if (err?.request?.status === 401) {
        // window.location.reload()
      }
      console.log(err)
    }
    finally {
      this.toggleLoading(false);
    }
  }
  async updateTeam(id, data, navigationCallBack) {
    this.toggleLoading(true);
    try {
      // Corrected PUT request format
      const response = await axiosInstance.put(
        `/update-team-details/${id}`, // Ensure that the `id` is appended to the URL
        data, // Axios automatically handles JSON serialization
        {
          headers: {
            'Content-Type': 'application/json', // Ensuring content-type is set correctly
          },
        }
      );
  
      // Check for success based on the response status
      if (response.status === 200) {
        navigationCallBack();
      } else {
        toast.error("Something went wrong!");
      }
    } catch (err) {
      // Handle unauthorized error status
      if (err?.response?.status === 401) {
        // window.location.reload() or handle authorization error here
      }
      console.log(err);
    } finally {
      this.toggleLoading(false);
    }
  }
  async deleteTeam(id, navigationCallBack) {
    this.toggleLoading(true);
    try {
      const response = await axiosInstance.delete(`/delete-team-details/${id}`)
      if (response) {
        navigationCallBack()
      } else {
        // toast.error("Something went to wrong!");
      }
    }
    catch (err) {
      if (err?.request?.status === 401) {
        // window.location.reload()
      }
      console.log(err)
    }
    finally {
      this.toggleLoading(false);
    }
  }
  async getTeamMemberById(id, navigationCallBack) {
    this.toggleLoading(true); // Show loading indicator if needed
    try {
      const response = await axiosInstance.get(`/get-teams-details/${id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response && response.data) {
        // Assuming the response data contains the team member's details
        navigationCallBack(response.data); // Pass the team member data to the callback
      } else {
        // Handle the case where no data was returned, if necessary
        // toast.error("No team member found.");
      }
    } catch (err) {
      if (err?.response?.status === 401) {
        // Handle unauthorized error, maybe redirect to login page
        // window.location.reload();
      }
      console.log(err); // Log the error for debugging
    } finally {
      this.toggleLoading(false); // Hide loading indicator
    }
  }

  //===================contact========================== 

  async addContact(param, navigationCallBack) {
    this.toggleLoading(true);
    try {
      const response = await axiosInstance.post("/create-contact", param,{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response) {
        navigationCallBack()
      } else {
        // toast.error("Something went to wrong!");
      }
    }
    catch (err) {
      if (err?.request?.status === 401) {
        // window.location.reload()
      }
      console.log(err)
    }
    finally {
      this.toggleLoading(false);
    }
  }
  async getContacts() {
    this.toggleLoading(true);
    try {
      const response = await axiosInstance.get("/get-contacts")
      if (response) {
        runInAction(() => {
          this.data.contact = response?.data;
        })
      } else {
        // toast.error("Something went to wrong!");
      }
    }
    catch (err) {
      if (err?.request?.status === 401) {
        // window.location.reload()
      }
      console.log(err)
    }
    finally {
      this.toggleLoading(false);
    }
  }
  async deleteContact(id, navigationCallBack) {
    this.toggleLoading(true);
    try {
      const response = await axiosInstance.delete(`/delete-contact/${id}`)
      if (response) {
        navigationCallBack()
      } else {
        // toast.error("Something went to wrong!");
      }
    }
    catch (err) {
      if (err?.request?.status === 401) {
        // window.location.reload()
      }
      console.log(err)
    }
    finally {
      this.toggleLoading(false);
    }
  }

//====================Clients============================

async addClient(param, navigationCallBack) {
  this.toggleLoading(true);
  try {
    const response = await axiosInstance.post("/create-client", param)
    if (response) {
      navigationCallBack()
    } else {
      // toast.error("Something went to wrong!");
    }
  }
  catch (err) {
    if (err?.request?.status === 401) {
      // window.location.reload()
    }
    console.log(err)
  }
  finally {
    this.toggleLoading(false);
  }
}
async getClients() {
  this.toggleLoading(true);
  try {
    const response = await axiosInstance.get("/get-clients")
    if (response) {
      runInAction(() => {
        this.data.clients = response?.data;
      })
    } else {
      // toast.error("Something went to wrong!");
    }
  }
  catch (err) {
    if (err?.request?.status === 401) {
      // window.location.reload()
    }
    console.log(err)
  }
  finally {
    this.toggleLoading(false);
  }
}
async deleteClient(id, navigationCallBack) {
  this.toggleLoading(true);
  try {
    const response = await axiosInstance.delete(`/delete-client/${id}`)
    if (response) {
      navigationCallBack()
    } else {
      // toast.error("Something went to wrong!");
    }
  }
  catch (err) {
    if (err?.request?.status === 401) {
      // window.location.reload()
    }
    console.log(err)
  }
  finally {
    this.toggleLoading(false);
  }
}

}
const websiteStore = new WebsiteStore();
export default websiteStore;