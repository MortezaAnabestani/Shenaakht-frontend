import React from "react";
import styles from "../../styles/us/contactUsForm.module.css";

const ContactUsForm = () => {
  return (
    <div className={styles.formRequest}>
      <img src="/assets/images/icons/mail/mail_form_icon1.svg" alt="mail icon 1" />
      <img src="/assets/images/icons/mail/mail_form_icon2.svg" alt="mail icon 2" />
      <div className={styles.formRequest_box}>
        <img src="/assets/images/icons/contactBox_icon.svg" alt="contact icon" />
        <h6>
          ارسال <span style={{ color: "#ffcb05" }}>پیام</span>
        </h6>
        <p>با کارشناسان ما درارتباط باشید</p>
        <form className={styles.formBody}>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
            <input type="text" placeholder="نام و نام خانوادگی" required />
            <input type="mobile" placeholder="شماره تماس" required />
          </div>
          <textarea name="" id="#" rows="10" placeholder="توضیحات خود را وارد کنید" required></textarea>
          <button type="submit">ارسال پیام</button>
        </form>
      </div>
      <img src="/assets/images/icons/mail/mail_form_icon3.svg" alt="mail icon 3" />
      <img src="/assets/images/icons/mail/mail_form_icon4.svg" alt="mail icon 4" />
    </div>
  );
};

export default ContactUsForm;
