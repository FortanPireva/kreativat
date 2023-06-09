import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import ReactLoading from "react-loading";
import { useFormik } from "formik";
import * as yup from "yup";
interface FormikInitialValues {
  email: string;
}

const validationSchema = yup.object({
  email: yup.string().email().required(),
});

const IndexPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [isSendingMail, setIsSendingMail] = useState(false);
  const initialValues: FormikInitialValues = { email: "" };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setIsSendingMail(true);
        const res = await fetch("/api/newsletter", {
          method: "POST",
          body: values.email,
        });

        const data = await res.json();

        setIsSendingMail(false);
        if (data.error !== null) {
          throw data.error;
        }
        setErrorMsg(null);
      } catch (e) {
        setErrorMsg(e);
      } finally {
        setIsSendingMail(false);
        setTimeout(() => {
          setErrorMsg("");
        }, 5000);
      }
    },
  });

  return (
    <Layout
      title="Kreativat -  veprat krijuese të të rinjëve kosovar"
      description="Kreativat - platformë për shpalosjen e talentit kosovar, në fushat e teknologjisë, ndërmarrësisë, inovacionit."
    >
      <div className="bg-black text-white font-bebas-neue bg-no-repeat w-full  mx:auto bg-cover  min-h-screen h-screen  relative z-10 py-6 space-y-16 lg:space-y-24">
        <div className="text-center w-full mr-0 pt-28 flex justify-center items-center flex-col">
          {/* <TextAnimtation /> */}
          {/* <h1 className="text-7xl lg:text-9xl font-extrabold">We’r blowing up</h1> */}
          <p className="text-xl text-kreativat-faint-white font-unica-one lg:text-lg tracking-wide mx-10 lg:max-w-3xl lg:mx-auto uppercase">
            Së shpejti...
          </p>
          <h1 className="text-8xl lg:text-9xl uppercase">KREATIVAT.</h1>
          <p className="text-xl md:text-2xl max-w-xl font-unica-one  text-kreativat-faint-white tracking-wide mx-10 lg:max-w-md lg:mx-auto uppercase">
            Platformë për promovimin e kreativitetit e inovacionit të të rinjve
            shqiptarë.
          </p>
        </div>
        <div className="relative z-10 mx-3 flex justify-center items-center">
          <form
            className=" flex-1  max-w-xl gap-0 lowercase  relative  mx-4"
            onSubmit={formik.handleSubmit}
          >
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="E-maili juaj"
              className={` w-full flex-1  bg-white text-2xl font-unica-one   text-kreativat-input-placeholder placeholder-kreativat-input-placeholder py-5 pl-5 pr-32 md:pr-42 rounded-sm
                ${Boolean(formik.errors.email) ? "border-red-500 border-2" : ""}
              `}
            />

            <button
              type="submit"
              className="absolute uppercase right-1  top-2  w-28 py-4 font-unica-one    md:w-40    md:px-5 md:py-4 text-xl font-semibold bg-kreativat-dark-button text-white  transition ease-in-out duration-500 hover:scale-105"
            >
              {isSendingMail ? (
                <div>
                  <ReactLoading
                    type={"spin"}
                    color={"#fff"}
                    width={30}
                    height={30}
                  />
                </div>
              ) : (
                <>Më njofto </>
              )}
            </button>
          </form>

          {Boolean(formik.errors.email) && (
            <p className="text-red-500 text-center mt-3">
              {formik.errors.email}
            </p>
          )}
          {errorMsg && (
            <p className="text-red-500 text-center mt-3">
              Oops... ka ndodhur një gabim.
            </p>
          )}
          {errorMsg === null && (
            <p className="text-green-500 text-center  mt-3">
              Ju faleminderit për abonimin. Do ju njoftojmë kur të lansohet
              platforma
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
