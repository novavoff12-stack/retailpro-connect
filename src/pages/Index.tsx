import { getSite } from "@/lib/site";
import RetailProLanding from "./RetailProLanding";
import RetailConnect from "./RetailConnect";

const Index = () => {
  const site = getSite();
  return site === "retailconnect" ? <RetailConnect /> : <RetailProLanding />;
};

export default Index;
