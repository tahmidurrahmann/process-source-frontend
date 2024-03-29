import Banner from "@/pages/Home/Banner/Banner";
import ClientsInfo from "@/pages/Home/ClientsInfo/ClientsInfo";
import DepartmentToLearn from "@/pages/Home/DepartmentToLearn/DepartmentToLearn";
import Services from "@/pages/Home/Services/Services";
import Engagement from "@/pages/Home/Engagement/Engagement";
import Expertise from "@/pages/Home/Expertise/Expertise";

export default function Home() {
  return (
    <main>
      <Banner />
      <DepartmentToLearn />
      <Services />
      <ClientsInfo />
      <Engagement />
      <Expertise />
    </main>
  );
}
