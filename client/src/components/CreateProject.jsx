import React, { useState } from "react";
import NavigationBar from "../NavigationBar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [produced, setProduced] = useState("");
  const [details, setDetails] = useState("");
  const [serialNumber, setSerialNumber] = useState("");
  const [detailsList, setDetailsList] = useState([]);
  const [image, setimage] = useState("");
  const [offers, setOffers] = useState();
  const [selectedOption, setSelectedOption] = useState('');

  const [imageList, setImageList] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAddDetails = () => {
    setDetailsList([...detailsList, details]);
    setDetails(""); // Pastro fushën e detajeve pasi të shtohen në listë
  };

  const covertToBase64 = (e) => {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result); //base64encoded string setImage ()
      setimage(reader.result);
      // You can set the base64 string to state or use it in any way you need
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  // const HandleImage = ()=> {
  //   setImageList(...imageList,image)
  // }

  const HandleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/project/", {
        projectName,
        description,
        title,
        price,
        produced,
        detailsList,
        offers,
        selectedOption,
        serialNumber,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data);
        setError(err.response.data.error);
      });
  };

  return (
    <div>
      <NavigationBar />
      <div className="d-flex align-items-center justify-content-center bg ">
        <form
          onSubmit={HandleSubmit}
          className="shadow-lg p-3 mb-5 bg-white rounded mt-5 w-50"
        >
          <div className="form-group">
            <label htmlFor="Name"> Product Name</label>
            <input
              type="text"
              className="form-control mt-2"
              id="Name"
              placeholder="Product Name"
              onChange={(e) => setProjectName(e.target.value)}
            />
          </div>
          <br/>
          <div>

            <div class="file-input-container">
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                onChange={covertToBase64}
                className="input-file mt-3"
                multiple
              />
              <label for="fileInput" class="file-input-label">
              Upload Image
              </label>
            </div>

            <div className="">
            <img className="widthh mt-3" src={image} ></img>
            </div>
          
          </div>



          
          <div>
            {/* {imageList.map((photo, idx) => (
    <div key={idx}>
      <img accept="image/*" className="w-25" src={photo}  />
    </div>
  ))} */}
          </div>

          <div className="form-group mt-2">
            <label htmlFor="Title"> Title</label>
            <input
              type="text"
              className="form-control mt-1"
              id="Title"
              aria-describedby="emailHelp"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Description"> Description</label>
            <input
              type="text"
              className="form-control mt-1"
              id="Description"
              aria-describedby="emailHelp"
              placeholder="Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="Price"> Price</label>
            <input
              type="text"
              className="form-control mt-1"
              id="Price"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="offers"> Offers</label>
            <input
              type="text"
              className="form-control mt-1"
              id="Price"
              placeholder="offers"
              onChange={(e) => setOffers(e.target.value)}
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="producedby">Produced by</label>
            <input
              type="text"
              className="form-control mt-1"
              id="producedby"
              placeholder="Produced by"
              onChange={(e) => setProduced(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="Details"> Details</label>
            <input
              type="text"
              className="form-control mt-1"
              id="Details"
              aria-describedby="emailHelp"
              placeholder="Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="SerialNumber"> Serial Number</label>
            <input
              type="text"
              className="form-control mt-1"
              id="SerialNumber"
              placeholder="Serial Number"
              onChange={(e) => setSerialNumber(e.target.value)}
            />
          </div>
          <br/>
          <div>
          <select className="dropdown-select" onChange={(e)=>setSelectedOption(e.target.value)} >
            
          <option  className="dropdown-option p-2">Produkti ne </option>
          <option value="Quantity" className="dropdown-option">Sasi</option>
          <option value="m&sup2;" className="dropdown-option">m&sup2;</option>
         
          </select>
          </div>
          <button
            type="button"
            className="btn btn-success mt-3"
            onClick={handleAddDetails}
          >
            Add Details
          </button>
          <button type="submit" className="btn btn-success mt-3">
            Submit
          </button>
        </form>
        <div className="d-flex">
          <div className="border p-3  ">
            <h5 className="ml-3">Details</h5>
            {detailsList.map((list, index) => (
              <div key={index}>
                <ul className="list-group">
                  <li className="list-group-item">{list}</li>
                </ul>
              </div>
            ))}
          </div>

          
        </div>

      </div>
    </div>
  );
}

export default CreateProject;
