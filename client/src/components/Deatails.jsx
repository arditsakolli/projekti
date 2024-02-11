import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../NavigationBar";
import Footer from '../Footer'

function Details() {
  const [projectDetails, setProjectDetails] = useState({});
  const [error, setError] = useState("");
  const [cmmimi, setCmimi] = useState()
  const [calculatedP, setCalculatedP] = useState()
  const [calculatedPrice, setCalculatedPrice] = useState()
//   const [rimbursimi,setRimbursimi] = useState()
  const [cmimiMeRimbursim, setCmimiMeRimbursim] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();


  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/project/${id}`)
      .then((res) => {
        setProjectDetails(res.data);
        const { price, offers } = res.data;
        const cmimiFillestar = price;
        const rimbursimi = offers; 
        const cmimiMeRimbursim = cmimiFillestar - (cmimiFillestar * rimbursimi / 100);
        setCmimiMeRimbursim(cmimiMeRimbursim);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);
  
 
   
  const calculatePrice = () => {
    const cmimiPerMKatror = parseInt(projectDetails.price * cmmimi);
    console.log("Cmimi per m2:", cmimiPerMKatror);
    setCalculatedP(cmimiPerMKatror)
    const cmimiMeRimbursim6 = parseInt(cmimiPerMKatror - ( cmimiPerMKatror*projectDetails.offers/100));
    console.log("Cmimi per m2 me 60% Rimbursim:", cmimiMeRimbursim6);
    setCalculatedPrice(cmimiMeRimbursim6);

  }


  return (
    <div>
      <NavigationBar />
      <div className="d-flex align-items-center justify-content-center shadow-lg p-3 mb-5  rounded bg">
        <div className="product-item  p-3 w-75 bg-white shadow-lg p-3 mb-5 bg-white rounded  font">
          <h2>{projectDetails.projectName}</h2>
          <h3 className="oblique">{projectDetails.title}</h3>
          <p className="bold">{projectDetails.description} </p>
          <div>
          <b>{projectDetails.price}$</b>
          <p>Price with {projectDetails.offers}% refund  {cmimiMeRimbursim} $</p>
          <br/>
          <div className="border p-3">
            <p className="bold">Calculate the price in {projectDetails.selectedOption}</p>
            <input type="number" onChange={(e)=>setCmimi(e.target.value)}></input>
            <button className="btn btn-success ml-3" onClick={calculatePrice}>Calculate</button>
            <div>
                <p>Price per {projectDetails.selectedOption} : {calculatedP} $</p>
                <p>Price per {projectDetails.selectedOption} with 20% discount:  {projectDetails.offers} {calculatedPrice}$ </p>
            </div>
          </div>
          
          </div>
          <br></br>

          {projectDetails.detailsList &&
            projectDetails.detailsList.map((list, index) => (
              <ul className="list-group" key={index}>
                <li className="list-group-item">{list}</li>
              </ul>
            ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Details;
