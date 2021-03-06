import React from "react";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>
        Do you really liked my content and want to contact me, I can't believe
        it. Nevertheless this are the different ways you can contact me. By the
        way, do you love watching football, if yes, then we can have a chat
        while watching a game of football.
      </p>
      <div className={styles.boxStyle}>
        <form
          action="https://formspree.io/f/xgeprlon"
          method="POST"
          style={{
            flexDirection: "column",
            display: "flex",
            marginRight: "15%",
            marginLeft: "15%",
          }}
        >
          <label className={styles.message}>What can I call you?</label>
          <input
            className={styles.input}
            title="name"
            required
            style={{ textTransform: "capitalize" }}
            placeholder="Name"
            name="name"
            type="name"
          />
          <label className={styles.message}>What is your email id?</label>
          <input
            className={styles.input}
            title="name"
            name="email"
            required
            placeholder="Email ID"
            type="email"
          />

          <textarea
            className={styles.textArea}
            rows="3"
            placeholder="Tell me what are you upto."
            name="msg"
            required
            onInvalid="please send"
          />
          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>
          <text>Or maybe just discuss it on mail:</text>
        </div>
        <div style={{ marginTop: "15px" }}>
          <a
            href="mailto:chughkashish12@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require("../../content/images/email.png")}
              style={{ width: "5rem", alignSelf: "center" }}
              alt="emaail"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
