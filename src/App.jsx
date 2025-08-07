import React, { useState } from "react";
import "./App.css";

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formOutput = {
            firstName,
            lastName,
            email,
            contact,
            gender,
            selectedOption,
            subjects,
            resume: resume?.name || "",
            url,
            about,
        };
        console.log(formOutput);
        setSubmittedData(formOutput);
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({
            english: true,
            maths: false,
            physics: false,
        });
        setResume("");
        setUrl("");
        setSelectedOption("");
        setAbout("");
        setSubmittedData(null);
    };

    return (
        <div className="App">
            <h1>Form in React</h1>
            <fieldset>
                <form onSubmit={handleSubmit} onReset={handleReset}>
                    <label htmlFor="firstname">First Name*</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                        required
                    />

                    <label htmlFor="lastname">Last Name*</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                        required
                    />

                    <label htmlFor="email">Enter Email*</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />

                    <label htmlFor="contact">Contact*</label>
                    <input
                        type="tel"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile number"
                        required
                    />

                    <label>Gender*</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="other"
                            checked={gender === "other"}
                            onChange={(e) => setGender(e.target.value)}
                        />
                        Other
                    </label>

                    <label>Your Best Subject</label>
                    <label>
                        <input
                            type="checkbox"
                            checked={subjects.english}
                            onChange={() => handleSubjectChange("english")}
                        />
                        English
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={subjects.maths}
                            onChange={() => handleSubjectChange("maths")}
                        />
                        Maths
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={subjects.physics}
                            onChange={() => handleSubjectChange("physics")}
                        />
                        Physics
                    </label>

                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        id="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />
                    {resume && <p>Selected file: {resume.name}</p>}

                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />

                    <label htmlFor="select">Select your choice</label>
                    <select
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                        required
                    >
                        <option value="" disabled>
                            Select your Ans
                        </option>
                        <optgroup label="Beginers">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    <label htmlFor="about">About</label>
                    <textarea
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About yourself"
                        required
                    ></textarea>

                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </form>
            </fieldset>

            {submittedData && (
                <div className="form-output">
                    <h2>Submitted Data</h2>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
