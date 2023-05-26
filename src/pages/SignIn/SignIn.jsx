import { useForm } from "react-hook-form";
import { schema } from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../components/CustomInput";
import Button from "../../components/Button";
import "./styles.scss";
import image from "../../assets/img/img.jpg";
import google from "../../assets/img/gg.png";

const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  const { icon, name } = props;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <img src={icon} alt="" style={{ width: "25px" }} />
      {name}
    </div>
  );
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    setValue,
    // formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {};
  return (
    <div className="container">
      <div className="container__left">
        <img src={image} alt="" />
      </div>
      <div className="container__right">
        <div className="container__right__name">
          <h1>Welcome to Panorama,</h1>
          <h1>Sign In to Continue.</h1>
        </div>
        <div className="container__right__notify">
          <p>
            Don&apos;t have an account? <span>Create a account</span>
          </p>
          <p>It takes less than a minute</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            register={register}
            setValue={setValue}
            id="email"
            label={"Email"}
          >
          </CustomInput>

          <CustomInput
            register={register}
            setValue={setValue}
            id="password"
            label={"Password"}
            bg={"rgb(248,248,248)"}
            border={"none"}
            onMouseColor={"rgb(248,248,248)"}
            type="password"
            visibility={true}
          >
          </CustomInput>
          <p>Forgot Password?</p>
        </form>
        <div className="container__right__button">
          <Button
            name={"Sign In"}
            bheight={"35px"}
            fz="14px"
            bwidth={"100%"}
            onClick={handleSubmit(onSubmit)}
          />
          <Button
            name={<Title icon={google} name={"Sign in With Google"} />}
            bheight={"35px"}
            fz="14px"
            bwidth={"100%"}
            bg={"rgb(248,248,248)"}
            borderColor={"white"}
            color={"black"}
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
