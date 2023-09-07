import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Hero from "../components/UI/Hero";
import Sevice from "../components/UI/Sevice";
import Portfolio from "../components/UI/Portfolio";
import Contact from "../components/UI/Contact";
import { ISetting } from "../interfaces/setting";
import { getSetting } from "../api/setting";
import { getAllIcon } from "../api/icon";
import { IICon } from "../interfaces/icon";

const UserLayout = () => {
  const [setting, setSeting] = useState<ISetting[]>([]);
  const [icons, setIcons] = useState<IICon[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getSetting();
      setSeting(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getAllIcon();
      setIcons(data);
    })();
  }, []);
  return (
    <>
      <Header headerData={setting} />
      <main>
        <Hero icons={icons} />
        <Sevice />
        <Portfolio />
        <Contact />
      </main>
      <Footer footerData={setting} icons={icons} />
    </>
  );
};

export default UserLayout;
