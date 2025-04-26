import React, {useState} from 'react'
import "./Profile.css";
import profile_pic from "../assets/profile_pic.png"
import dragon_img from "../assets/UICircle_Icon.png";
import { Link } from "react-router-dom";
function Profile() {

  const year_selection = [
    {label: "Freshman", value: "Freshman"},
    {label: "Sophomore", value: "Sophomore"},
    {label: "Junior", value: "Junior"},
    {label: "Senior", value: "Senior"},
  ]

  let [year, setYear] = useState('select a year')

  let handlerYearChange = (e) => {
    setYear(e.target.value)
  }

  const major_selection = [
    {label: 'Biology', value: 'Biology'},
    {label: 'Pre-Med', value: 'Pre-Med'},
    {label: 'Computer Science', value: 'Computer Science'},
    {label: 'History', value: 'History'},
    {label: 'Art', value: 'Art'},
    {label: 'Education', value: 'Education'},
  ]

  let [major, setMajor] = useState('select a major')

  let handlerMajorChange = (e) => {
    setMajor(e.target.value)
  }

  const language_selection = [
    {label: 'English', value: 'English'},
    {label: 'Spanish', value: 'Spanish'},
    {label: 'French', value: 'French'},
    {label: 'Hindi', value: 'Hindi'},
    {label: 'Tagalog', value: 'Tagalog'},
    {label: 'Mandarin', value: 'Mandarin'},
  ]

  let [language, setLanguage] = useState('select a major')

  let handlerLanguageChange = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <div className="Profile">
      <img className="dragon_img" src={dragon_img} height="200px" width="200px"></img>
      <h1 className="title">Who Are You?</h1>
      <div className="inputs">
        <div className="individual_label">
          <label id="name" className="label">Name:</label>
          <input type="text" placeholder="enter your name"></input>
        </div>

        <div className='individual_label'>
          <label id="year" className="label">Year:</label>
          <select id="dropdown" onChange={handlerYearChange}>  
            <option>select a year</option> 
            {year_selection.map((year) => (
              <option>{year.label}</option>
            ))}
          </select>
        </div>
        <div className="individual_label">
          <label id="major" className="label">Major:</label>
          <select id="dropdown" onChange={handlerMajorChange}>
            <option>select a major</option>   
            {major_selection.map((major) => (
              <option>{major.label}</option>
            ))}
          </select>
        </div>
        
        <div className="individual_label">
          <label id="language" className="label">Language:</label>
          <select id="dropdown" className='language_dropdown' onChange={handlerLanguageChange}>
            <option>select a language</option>   
              {language_selection.map((language) => (
                <option>{language.label}</option>
            ))}
          </select>
        </div>

      </div>

      <label id="picture">Insert a picture:</label>
      <br></br>
      <img id="profile_image" src={profile_pic}></img>
      <br></br>
      <Link to="/interests">
        <button className="profile_button1" type="button"><p className='button_text'>→</p></button>
      </Link>
      
    </div>
  );
}

export default Profile;