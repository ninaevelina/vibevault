import { BreadcrumbMenu } from "@/components/BreadcrumbMenu/BreadcrumbMenu";
import RequestForm from "@/components/RequestForm/RequestForm";

export default function ContactPage() {
  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Contact",
      link: "/contact",
    },
  ];
  return (
    <>
      <BreadcrumbMenu items={breadcrumbItems} />
      <section className="container-small">
        <h1>Contact</h1>
        <div className="text-container">
          <p>Lorem ipsum</p>
        </div>
      </section>
      <RequestForm />
    </>
  );
}
