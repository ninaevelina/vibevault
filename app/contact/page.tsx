import { BreadcrumbMenu } from "@/components/BreadcrumbMenu/BreadcrumbMenu";
import RequestForm from "@/components/RequestForm/RequestForm";
import "./contact.scss";

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
      <section className="flex-container container-small">
        <h1>GET IN TOUCH</h1>
        <div>
          <p>Have any questions? We&apos;d love to hear from you.</p>
          <p>
            For album requests, please submit your request in the form down
            below.
          </p>
        </div>
      </section>
      <section className="grid-small container-small">
        <div className="grid-small__first-col">
          <div className="flex-container">
            <h3 className="grid-small__first-col--header">Contact details</h3>
            <ul className="contact-list">
              <li className="contact-list__item">
                <b>Snail mail</b>
                <span>Forest Manor 48</span>
                <span>SW11 2QP London</span>
              </li>
              <li className="contact-list__item">
                <b>Email</b>
                <span>
                  <a href="mailto:vibevault.develop@gmail.com">
                    vibevault.develop@gmail.com
                  </a>
                </span>
              </li>
              <li className="contact-list__item">
                <b>Phone</b>
                <span>+46 212 212 00 43</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-small__second-col">
          <div className="flex-container">
            <h4 className="grid-small__first-col--header">Request an album</h4>
            <p className="text-wrap-balance">
              Missing an album? Let us know. Enter your name, email and the name
              and artist of the album, and we&apos;ll handle your request within
              2 business days.{" "}
            </p>
            <RequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
