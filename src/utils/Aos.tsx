import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    Aos.init();
  }, []);
  return null;
}
