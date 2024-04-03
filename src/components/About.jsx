import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageLoad } from "../../utils/redux-toolkit/slice/site";

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageLoad(25));
  }, []);
  return <div>About</div>;
};

export default About;
