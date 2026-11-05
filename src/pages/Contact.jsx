function Contact() {
  return (
    <section>
      <h1>Contact Me</h1>

      <p>
        Thank you for visiting my portfolio!
        Feel free to reach out through the following links.
      </p>

      <h2>My Contact Information</h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
        Email:{" "}
         <span style={{ textDecoration: "underline", color: "#c5b5ff" }}>
             Leb16yu@gmail.com
           </span>
        </li>

        <li>
          GitHub:{" "}
          <a
            href="https://github.com/Leb16yu"
            target="_blank"
            rel="noopener noreferrer"
          >
            My GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;