import { useState } from "react";
import Button from "./Button";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (email.trim() !== "") {
      const substackSubscribeURL = "https://techkiddies.substack.com/subscribe";
      const redirectURL = `${substackSubscribeURL}?email=${encodeURIComponent(
        email
      )}`;
      window.location.href = redirectURL;
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="email"
        id="email"
        name="email"
        onChange={handleEmailChange}
        className="bg-mainWhite px-4 py-3 rounded-full text-black lg:w-[320px] w-[200px]"
        placeholder="Email Address news"
      />
      <Button
        btnType={"submit"}
        btnText={"Subscribe"}
        btnStyle={`bg-baseOrange text-mainWhite text-xs rounded-full lg:px-10 px-5 py-4`}
      />
    </form>
  );
};

export default Newsletter;
