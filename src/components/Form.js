import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked);
  }


  function handleFirstNameChange(event){
    console.log(setFirstName(event.target.value));
  }

  function handleLastNameChange(event){
    setLastName(event.target.value);
  };

  return (
    <>
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName}  onChange={handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>

    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default Form;