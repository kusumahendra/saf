import React from "react";
import { useTranslation } from "react-i18next";
import concave from "images/concave.webp";
import introImg from "images/intro.webp";
import ScrollArrow from "components/ScrollArrow";
import { Fade } from "react-awesome-reveal";
import SafTitle from "components/SafTitle";

export default function Intro() {
  const { t, i18n, ready } = useTranslation();
  return (
    <div className="section">
      <div className="relative flex min-h-screen flex-col overflow-x-hidden md:flex-row">
        <div className="flex-grow pb-12">
          <div className="py-16 pl-6 text-left lg:pl-16">
            <SafTitle color="dark" maxWidth={340} />
            <Fade cascade delay={900} triggerOnce={true}>
              <div className="mr-6 mt-14 max-w-prose lg:mr-14">
                {i18n.language === "en" && (
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque non neque non erat dictum facilisis. Nulla
                      elementum elit ut dui convallis venenatis nec eget nisl.
                      Phasellus accumsan dui id ligula iaculis finibus. Nulla
                      vel sapien eget leo fringilla imperdiet. Aenean urna mi,
                      tempor sit amet fermentum non, facilisis a lorem. Vivamus
                      scelerisque suscipit tortor, nec semper libero. Mauris
                      rutrum fringilla orci quis rutrum.
                    </p>
                    <p>
                      Praesent id faucibus orci. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Sed in massa lorem. In et
                      odio augue. Orci varius natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus. Praesent ac
                      urna pulvinar, scelerisque sapien et, convallis lorem. In
                      urna mauris, eleifend at nisl eget, mollis pellentesque
                      dolor. Maecenas lacus lacus, feugiat quis velit varius:{" "}
                      <a href="https://google.com">www.egestas.com</a> pretium
                      orci. Maecenas imperdiet commodo gravida. Pellentesque
                      justo justo, venenatis ut sem ac, tincidunt venenatis ex.
                    </p>
                    <p>
                      Vestibulum consequat est ac laoreet vehicula. Aenean vitae
                      erat eget est suscipit tincidunt id quis massa. In hac
                      habitasse platea dictumst. Nullam luctus est id quam
                      tincidunt ullamcorper. Cras convallis elit nibh, ac
                      placerat est fringilla a. Aliquam metus nisl, sodales
                      tempus lacinia eget, facilisis vitae tortor. Nunc
                      porttitor aliquet erat at tempor. Nunc sed consectetur
                      massa. Integer semper ligula in nulla rutrum, bibendum
                      suscipit arcu sollicitudin. Fusce efficitur vitae magna
                      sit amet sollicitudin. Ut arcu dolor, scelerisque non
                      hendrerit non, mattis eget elit. Vestibulum imperdiet nunc
                      at diam convallis, quis pretium est viverra. Vestibulum
                      lobortis, nisi vitae facilisis tempor, magna ipsum posuere
                      ex, quis accumsan elit nibh non orci. Aenean at dignissim
                      erat, a vulputate lacus.
                    </p>
                  </div>
                )}
              </div>
            </Fade>
          </div>
        </div>
        <div className="flex flex-col bg-main-dark text-white md:max-w-xs lg:max-w-md">
          <div
            className="overlay relative bg-neutral-800 bg-cover bg-center px-20 py-16 text-center after:absolute after:inset-0 after:z-0 after:bg-black after:opacity-75 after:content-['']"
            style={{ backgroundImage: `url(${introImg})` }}
          >
            <img
              src={concave}
              alt=""
              className="relative z-20 mx-auto max-w-[70%]"
            />
          </div>
          <div className="mx-6 flex gap-6 py-12 text-left lg:mx-16 lg:gap-8">
            <Fade cascade delay={1300} damping={0.2} triggerOnce={true}>
              <div className="h-60 border-l border-white"></div>
              {i18n.language == "en" && (
                <div>
                  <p>
                    Maecenas sit amet mi ut mi vestibulum finibus.Proin tempor
                    est consectetur, aliquet ipsum scelerisque, tempor quam.Nunc
                    ipsum nulla, commodo tempor laoreet ut, scelerisque eu
                    quam.Curabitur gravida, libero eget elementum sollicitudin,
                    eros mauris aliquam nunc, vitae fermentum felis neque at
                    velit.Mauris vestibulum rutrum nibh, vitae volutpat odio
                    feugiat eget.Vestibulum iaculis lobortis egestas.Curabitur
                    tincidunt viverra odio.In tempus molestie lorem, at
                    efficitur tortor tincidunt vitae.In ultrices lobortis
                    scelerisque.Integer a mollis dolor, vel pellentesque diam.
                  </p>
                </div>
              )}
            </Fade>
          </div>
          <div className="mt-auto h-16 bg-main"></div>
        </div>
        <ScrollArrow />
      </div>
    </div>
  );
}