import Link from'next/link';
import Layout from "../components/Layout";

const About = () => (
  <Layout title="About">
    <h1>Hello there</h1>
    <img src="/static/download.png" />
    <p>This is yousuf khan......to know more about </p>
    <Link href="/">
      <a>Click here</a>
    </Link>
  </Layout>
);

export default About;