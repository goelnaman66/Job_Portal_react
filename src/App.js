import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./Components/Form";
import Form2 from "./Components/Form2";
import Card from "./Components/Card";
import Modal from "./Components/Modal";



function App() {
    const [arr, setArr] = useState([]);
    const [formData1, setFormData1] = useState({
        title:"",
        company:"",
        industry:"",
        location:"",
        type:"",
      });
    const [formData2, setFormData2] = useState({
        expMin:"",
        expMax:"",
        salMin:"",
        salMax:"",
        employee:"",
        apply:""
    });
    const [showModal, setShowModal] = useState(false);
    const [form1Submitted, setForm1Submitted] = useState(false);
    const [form2Submitted, setForm2Submitted] = useState(false);


    //handler functions
    const handleForm1Submit = (formData) => {
        // Check if all required fields are filled
        const requiredFields = ['title', 'company', 'industry'];
        const isFormValid = requiredFields.every(field => formData[field]);
    
        if (isFormValid) {
            setFormData1(formData);
            setForm1Submitted(true);
            setShowModal(true);
        } else {
            // Display an error message or do something else to handle the invalid form
            console.log('Please fill in all required fields');
        }
    };
    
    const handleForm2Submit = (formData) => {
        setFormData2(formData);
        setForm2Submitted(true);
        setArr([...arr, { ...formData1, ...formData}]);
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setForm1Submitted(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('https://64298534ebb1476fcc4b0d68.mockapi.io/jobsData');
            setArr(res.data);
        };
    
        if (form2Submitted) {
            const concatenatedFormData = { ...formData1, ...formData2 };
            console.log(concatenatedFormData);
            // Making the API call using the concatenatedFormData object
            axios.post('https://64298534ebb1476fcc4b0d68.mockapi.io/jobsData', concatenatedFormData)
                .then(() => fetchData())
                .catch(error => console.error(error));
        } else {
            fetchData();
        }
    }, [form2Submitted]);


    return ( 
        <div className = "App" >
            <div className="justify-center">
                <button onClick={() => setShowModal(true)} className="bg-sky-400 text-white p-2 rounded-sm rounded-sm mt-8 mb-2 ml-4">Create Job</button>
                <Modal show={showModal} onClose={handleCloseModal}>
                    {!form1Submitted && <Form onSubmit={handleForm1Submit} />}
                    {form1Submitted && !form2Submitted && (<Form2 onSubmit={handleForm2Submit} /> )}
                </Modal>
            </div>
            <div className="bg-gray-300 flex flex-row justify-center flex-wrap">
                {arr.map((val,key)=>{ return <Card data={val}/>})}
            </div>
        </div>
    );
}
export default App;