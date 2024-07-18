import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "../css/contactMeForm.css";
import "../css/sendingMessage.css";
import { FaTelegramPlane } from "react-icons/fa";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactMeForm() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const sendingAnimation = document.getElementById(
      "sendingAnimation"
    ) as HTMLElement;

    const message = document.getElementById("message") as HTMLElement;
    const formArea = document.getElementById(
      "contactMeFormArea"
    ) as HTMLElement;

    const sendingAnimationArea = document.getElementById(
      "sending-message-animation-area-start"
    ) as HTMLElement;

    sendingAnimationArea.style.display = "flex";

    let env = process.env.REACT_APP_DISCORD_WEB_HOOK_URL;
    if (!env) {
      console.log("Issue With Environment Variables");
      return;
    }

    let content = {
      username: "Unknown User",
      content: "Requested to contact via Portfolio Website",
      embeds: [
        {
          title: data.name,
          description: data.message,
          footer: { text: data.email },
        },
      ],
    };

    try {
      formArea.style.zIndex = "-1";
      const response = await fetch(env, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });

      if (response.ok) {
        sendingAnimation.style.display = "none";
        message.innerText = "Message Sent!";
        message.className = "message success";
        reset();
      } else {
        sendingAnimation.style.display = "none";
        message.innerText = "Failure!";
        message.className = "message failure";
      }
    } catch (error) {
      sendingAnimation.style.display = "none";
      message.innerText = "Error Sending Message!";
      message.className = "message failure";
    } finally {
      setTimeout(() => {
        sendingAnimation.style.display = "flex";
        sendingAnimationArea.style.display = "none";
        message.innerText = "Sending ...";
        message.classList.remove("message", "success");
        formArea.style.zIndex = "1";
      }, 4000);
    }
  };

  return (
    <div id="contactMeFormArea">
      <SendingMessageAnimation></SendingMessageAnimation>
      <>
        <section id="contactMeFormAreaHeadingArea">
          <h1>Contact Form</h1>
        </section>
        <form id="contactMeFormAreaStart" onSubmit={handleSubmit(onSubmit)}>
          {/* This is first section  */}
          <section
            className="contactMeFormAreaSections"
            id="contactMeFormArea-firstSection"
          >
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", {
                  required: true,
                })}
              />

              {errors.name && errors.name.type === "required" && (
                <p className="errorMsg">Full Name is required.</p>
              )}
            </div>

            <div>
              <input
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorMsg">Email is required.</p>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <p className="errorMsg">Invalid Email.</p>
              )}
            </div>
          </section>
          <section
            className="contactMeFormAreaSections"
            id="contactMeFormArea-secondSection"
          >
            <div>
              <textarea
                placeholder="Your Message"
                {...register("message", {
                  required: "Message is required",
                  maxLength: {
                    value: 200,
                    message:
                      "Cannot use more than 200 characters in the message",
                  },
                })}
              />
              {errors.message && errors.message.type === "required" && (
                <p className="errorMsg">Message is required.</p>
              )}
              {errors.message && errors.message.type === "maxLength" && (
                <p className="errorMsg">Max 200 character is allowed.</p>
              )}
            </div>
          </section>
          <section
            className="contactMeFormAreaSections"
            id="contactMeFormArea-thirdSection"
          >
            <button
              type="submit"
              id="contactMeFormArea-thirdSection-submit-button-area"
            >
              <FaTelegramPlane />
              <p>Send Message</p>
            </button>
          </section>
        </form>
      </>
    </div>
  );
}

const SendingMessageAnimation: React.FC = () => {
  return (
    <section id="sending-message-animation-area-start">
      <div className="sending-animation" id="sendingAnimation">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="message" id="message">
        Sending ....
      </div>
    </section>
  );
};
