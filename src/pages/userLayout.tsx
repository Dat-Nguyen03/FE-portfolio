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
import { pause } from "../utils/pause";

const UserLayout = () => {
  const [setting, setSeting] = useState<ISetting[]>([]);
  const [icons, setIcons] = useState<IICon[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await pause(1000);
      const { data } = await getSetting();
      setSeting(data);
      setIsLoading(false);
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
      <Header headerData={setting} isLoading={isLoading} />
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
