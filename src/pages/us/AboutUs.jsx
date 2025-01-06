import React from "react";
import styles from "../../styles/us/aboutUs.module.css";

const AboutUs = () => {
  return (
    <div className="container">
      <div className={styles.baner}>
        <img src="assets/images/photo/iranSociety.jpg" alt="about us" />
        <div className={styles.banerTitle}>
          <h6>اهالی شناخت...</h6>
        </div>
      </div>
      <div className={`${styles.mainContent_landingPage_bottom} col-12`}>
        <div className={`${styles.mainContent_landingPage_bottom_item} col-lg-3`}>
          <span className={styles.mainContent_aboutUs_count}>
            <h5>
              <i>
                <img src="assets/images/icons/dataIcon.svg" alt="data icon" width={"25px"} />
              </i>
            </h5>
          </span>
          <h6>گردآوری داده</h6>
          <p>
            شناخت با اجرای نظرسنجی‌های ملی و منطقه‌ای، تحلیل کلان‌داده‌های فضای مجازی و نیز برگزاری پنل‌های
            تخصصی، به تولید داده‌هایی دقیق و معتبر در حوزه شناخت افکار عمومی پرداخته و به اعتبار آن تلاش دارد
            تحولات پیش‌روی جامعه را در حوزه‌های گوناگون پیش‌بینی کند.
          </p>
        </div>
        <img className="d-none d-lg-block" src="assets/images/lines/verticalLine.svg" alt="vertical line" />
        <div className={`${styles.mainContent_landingPage_bottom_item} col-lg-3`}>
          <span className={styles.mainContent_aboutUs_count}>
            <h5>
              <i>
                <img src="assets/images/icons/socialIcon.svg" alt="social icon" width={"25px"} />
              </i>
            </h5>
          </span>
          <h6>پژوهش‌های اجتماعی</h6>
          <p>
            شناخت جامعه از الزامات هر نوع سیاستگذاری عمومی و کنشگری سیاسی، اجتماعی و فرهنگی است. شناخت جامعه
            نه‌تنها به فراهم آوردن درکی دقیق از حوزه تصمیم‌گیری و اجرا کمک می‌کند بلکه معیاری برای ارزیابی
            سیاست‌ها و اقدامات انجام شده نیز می‌باشد. کلیه مدیران سیاسی، فرهنگی، فعالان رسانه‌ای و مدیران
            سازمان نیاز دارند به طور مستمر ابعاد مختلف حیات اجتماعی و تغییرات آن را پیش چشم داشته باشند.
          </p>
        </div>
        <img className="d-none d-lg-block" src="assets/images/lines/verticalLine.svg" alt="vertical line" />
        <div className={`${styles.mainContent_landingPage_bottom_item} col-lg-3`}>
          <span className={styles.mainContent_aboutUs_count}>
            <h5>
              <i>
                <img src="assets/images/icons/releaseIcon.svg" alt="release icon" width={"25px"} />
              </i>
            </h5>
          </span>
          <h6>پردازش و انتشار داده</h6>
          <p>
            مرکز تحقیقات اجتماعی و داده‌کاوی شناخت علاوه بر اجرای پژوهش‌های علمی و ارائه خدمت به مشتریان خود،
            در راستای مسئولیت‌های اجتماعی، تلاش دارد با رصد، نقدوبررسی و انتشار مهم‌ترین داده‌های موجود در
            ایران و جهان، تصویری دقیق از جهان پیرامون ما را پیش‌روی مخاطبان خود قرار دهد.
          </p>
        </div>
      </div>
      <div className={`${styles.mainContent_landingPage_bottom_item} col-12`}>
        <span className={styles.mainContent_aboutUs_count}>
          <h5>
            <i>
              <img src="assets/images/icons/dollorIcon.svg" alt="dollar icon" width={"25px"} />
            </i>
          </h5>
        </span>
        <h6>تحقیقات بازار</h6>
        <p>
          تحقیقات بازار به ما کمک می‌کند تا بهترین روش‌ها و استراتژی‌های بازاریابی را برای محصولات و خدمات خود
          شناسایی کنیم. این تحقیقات به ما اطلاعات دقیق و قابل اعتمادی در مورد نگرش و علاقه‌های مشتریان،
          رفتارهای خرید، روندهای بازار و رقبای فعلی و آینده را ارائه می‌دهد. امروزه فعالان پیشرو در حوزه
          اقتصاد، به همان میزان که بر اهمیت تبلیغات توجه دارند، بر ضرورت تحقیقات نیز واقف‌اند. بدون تحقیقات
          بازار، شرکت‌ها قادر به تطبیق با نوسانات بازار نخواهند بود و ممکن است در خطر از دست دادن سهم بازار یا
          عدم تأثیرگذار بودن در صنعت خود قرار گیرند. همچنین، تحقیقات بازار به شرکت‌ها کمک می‌کند تا بهبود در
          فرآیندهای تصمیم‌گیری، طرح‌های بازارپژوهانه و استفاده از منابع رسانده و در نتیجه بهبود عملکرد مالی
          خود دست یابند.
        </p>
      </div>
      <div className={styles.aboutUs_explain}>
        <img src="assets/images/icons/sunIcon.svg" alt="sun icon" />
        <h6>
          <span style={{ color: "#ffcb05" }}>ضرورت</span> شناخت
        </h6>
        <p>
          جهان اطراف ما شبکۀ پیچیده‌ای از ساختارها، روابط و تعاملاتی است که به زندگی ما شکل داده‌اند، فرصت‌های
          مختلفی پیش روی ما قرار می‌دهند، گاه ما را محدود و گاه مجهز می‌کنند، و بسیاری اوقات مسائل مختلفی را
          پیش روی ما قرار می‌دهند.
        </p>
        <ul>
          <label className="text-muted">به عنوان یک سیاستگذار می‌پرسیم: </label>
          <li>چرا برنامه‌هایی که برای تغییر در جامعه تدوین کرده‌ایم، در عمل شکست می‌خورند؟</li>
          <li>چرا نتایج برخی سیاست‌های ما، خلاف چیزی است که نیت کرده بودیم؟ </li>
        </ul>
        <ul>
          <label className="text-muted">به عنوان مدیر یک سازمان می‌پرسیم: </label>
          <li>چرا تعهد شغلی کارکنان ما کم است؟</li>
          <li>چرا فرهنگ غیررسمی سازمان، هنجارهای رسمی سازمان را خنثی می‌کند؟ </li>
        </ul>
        <ul>
          <label className="text-muted">به عنوان یک فعال اقتصادی می‌پرسیم: </label>
          <li>چرا علی‌رغم ارائه محصولی با کیفیت، در فروش محصول موفق نبوده‌ایم؟ </li>
          <li>چرا برخی گروه‌های اجتماعی، مشتری ما شده‌اند و برخی دیگر نه؟ </li>
          <li>چرا تبلیغات ما برای فروش محصول، اثر قابل توجهی نداشته است؟ </li>
        </ul>
        <p>
          جهان اجتماعی پیوسته در حال تغییر است و ما در برابر تغییرات، پیوسته در حال تصمیم‌گیری، انتخاب و رفتار
          هستیم. تصمیم‌گیری مناسب، مستلزم شناخت دقیق واقعیت‌ها است و شناخت دقیق نیز مستلزم به‌کارگیری دانش و
          مهارت‌های به‌روز و کارآمد.
        </p>
        <p className={styles.last_para}>
          مرکز تحقیقات اجتماعی و داده‌کاوی شناخت، سازمانی خصوصی است که به ارزیابی و تحلیل مهم‌ترین آمارها و
          روندهای موجود در ایران و جهان می‌پردازد. ما در شناخت تلاش داریم تصویری دقیق و صادقانه از واقعیت‌های
          جاری زندگی در ایران ارائه دهیم، تصویری که با رفع خلاهای موجود، بتواند چشم‌انداز تحلیلی قابل اتکایی
          را برای سیاست‌گذاران، فعالان اقتصادی، متولیان رسانه و فعالان فرهنگی اجتماعی فراهم آورد.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
