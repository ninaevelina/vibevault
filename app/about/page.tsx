import { BreadcrumbMenu } from "@/components/BreadcrumbMenu/BreadcrumbMenu";
import Link from "next/link";

export default function AboutPage() {
  const breadcrumbItems = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
  ];
  return (
    <>
      <BreadcrumbMenu items={breadcrumbItems} />
      <section className="container-small">
        <h1>VibeVault - Your Gateway to Musical Discovery!</h1>
        <div className="text-container">
          <p>
            At VibeVault, we believe that music is a universal language that
            connects us all. We are passionate about creating a space where
            music enthusiasts can come together to explore, share, and celebrate
            the rich tapestry of sounds that define our world. <br></br>
            Introducing VibeVault – the ultimate platform for album reviews and
            musical discovery.
          </p>
        </div>
        <div className="text-container flex-container">
          <h2>What Sets Us Apart</h2>
          <ul className="flex-container">
            <li>
              <b>Dive into the Depths of Music:</b> VibeVault is more than just
              a review platform; it&apos;s a musical journey waiting to be
              explored. Discover new genres, unearth hidden gems, and connect
              with fellow music aficionados who share your taste.
            </li>
            <li>
              <b>Empower Your Voice:</b> Your opinion matters. With VibeVault,
              you have the power to share your insights on the albums that
              resonate with you. Whether you&apos;re a seasoned critic or a
              casual listener, your unique perspective contributes to the
              diverse mosaic of opinions within our community.
            </li>
            <li>
              <b>Unparalleled User Experience:</b> We understand the importance
              of a seamless and enjoyable user experience. VibeVault is designed
              with simplicity and functionality in mind, ensuring that you can
              effortlessly navigate through the vast world of music and
              contribute your thoughts with ease.
            </li>
            <li>
              <b>Connect with Like-Minded Souls:</b> Music is not just about the
              notes; it&apos;s about the shared experience. Connect with fellow
              users who appreciate the same beats, rhythms, and melodies. Build
              a community around your favorite albums and artists, exchanging
              recommendations and creating lasting connections.
            </li>
          </ul>
        </div>
        <div className="text-container flex-container">
          <h3>How It Works</h3>
          <ul className="flex-container">
            <li>
              <b>Discover Albums:</b> Explore an extensive collection of albums
              spanning genres, eras, and cultures. Our curated selection ensures
              there&apos;s something for everyone, from classic masterpieces to
              the latest releases.
            </li>
            <li>
              <b>Share Your Thoughts:</b> Dive into the albums that resonate
              with you and leave your mark. Write detailed reviews, share your
              favorite tracks, and engage in meaningful discussions with a
              community that values your unique perspective.
            </li>
          </ul>
        </div>
        <div className="text-container">
          <Link href={"/albums"} className="redirect">
            <span className="redirect__link-text">
              Discover your new favourite album!
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
