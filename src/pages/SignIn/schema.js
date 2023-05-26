import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string(" * email không hợp lệ.")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      " * Email khong hop le"
    )
    .required(" * Bạn phải nhập email trường."),
  password: yup.string().required("* Bạn phải nhập mật khẩu."),
});
