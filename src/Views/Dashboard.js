import React from "react";
import ShortenerTable from "../Components/ShortenerTable";
import CreateForm from "../Components/CreateForm";
import axios from "axios";

class Dashboard extends React.Component {
  state = {
    urls: [],
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/urls");
      this.setState({ urls: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  addUrl = (url) => {
    const urls = this.state.urls.concat(url);
    this.setState({ urls: urls });
  };

  deleteUrl = (id) => {
    axios
      .delete("/urls/" + id)
      .then((response) => {
        const urls = this.state.urls.filter((url) => url.id !== id);
        this.setState({ urls: urls });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <div className="flex items-center justify-center mt-2">
          <CreateForm addUrl={this.addUrl} />
        </div>
        {this.state.urls.length > 0 && (
          <div className="flex items-center justify-center mt-2">
            <ShortenerTable urls={this.state.urls} deleteUrl={this.deleteUrl} />
          </div>
        )}
      </>
    );
  }
}

export default Dashboard;
