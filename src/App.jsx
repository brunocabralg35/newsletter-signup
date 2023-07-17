import "./style.css";
import desktopImage from "./assets/images/ill.svg";
import mobileImage from "./assets/images/illM.svg";
import iconList from "./assets/images/icon-list.svg";
import iconSuccess from "./assets/images/icon-success.svg";
import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const [subscribe, setSubscribe] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => setSubscribe(true);

  const { innerWidth: width } = window;

  return !subscribe ? (
    <div className="App">
      <div className="boxElements">
        <div className="left">
          <form onSubmit={handleSubmit(onSubmit)} className="formulario">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={iconList} alt="" />
                Product discovery and building what matters
              </li>
              <li>
                <img src={iconList} alt="" />
                Measuring to ensure updates are a success
              </li>
              <li>
                <img src={iconList} alt="" />
                And much more!
              </li>
            </ul>

            <div className="input">
              <div className="line">
                <label htmlFor="email">Email address</label>
                {errors.email && (
                  <span style={{ color: "red" }}>Valid email required</span>
                )}
              </div>

              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                name="email"
                className={errors.email && "error"}
                {...register("email", { required: true })}
              />
            </div>

            <input type="submit" value="Subscribe to monthly newsletter" />
          </form>
        </div>
        <div className="img">
          <img
            src={width >= 972 ? desktopImage : mobileImage}
            alt="Illustration"
          />
        </div>
      </div>

      {/* Dismiss message */}
    </div>
  ) : (
    <div className="App">
      <div className="boxThanks">
        <img src={iconSuccess} alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to{" "}
          <strong>ash@loremcompany.com.</strong> Please open it and click the
          button inside to confirm your subscription.{" "}
        </p>
        <button onClick={() => setSubscribe(false)}>Dismiss message</button>
      </div>
    </div>
  );
}

export default App;
