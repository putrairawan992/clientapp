import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email('example@example.com').required('Email harus di isi'),
  password: yup.string().required('Password harus di isi')
});
