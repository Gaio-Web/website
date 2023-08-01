import React from "react";
import { Container } from "./styles";

import UnsplashCoverImage from "../../Components/UnsplashAPI/UnsplashCover";

interface IFirstSectionProp {
  call: string | undefined;
  description: string | undefined;
  photoBase64?: string | undefined;
  src?: any;
  onClick?: any;
  mainColor: string | undefined;
  secondaryColor: string | undefined;
  coverKeyWords: string;
  isVideo: string | undefined;
  website: string | undefined;
}

function FirstSection({
  mainColor,
  website,
  isVideo,
  secondaryColor,
  call,
  description,
  photoBase64,
  src,
  onClick,
  coverKeyWords,
}: IFirstSectionProp): JSX.Element {
  return (
    <Container
      style={{
        backgroundColor: website == "voou-viagens" ? "white" : mainColor,
      }}
    >
      <div id="firstSection" className={"first-wrapper"}>
        <div className="main-content-wrapper">
          <div className="call-n-desc">
            <h1 style={{ color: website == "voou-viagens" ? "#F26600" : "" }}>
              {call}
            </h1>
            <p style={{ color: website == "voou-viagens" ? "black" : "" }}>
              {description}
            </p>
            <button
              onClick={onClick}
              style={{
                backgroundColor: secondaryColor,
                width: "100%",
                marginTop: "2rem",
                borderRadius: website === "voou-viagens" ? "100px" : "",
              }}
              className="btn-1"
            >
              Vamos conversar!
            </button>
          </div>
          <div className="img-wrapper" data-aos="fade-up">
            {photoBase64 == "" ? (
              <UnsplashCoverImage
                data={{
                  alt_description: "office",
                  urls: {
                    small: "https://example.com/image.jpg",
                  },
                  coverKeyWords: coverKeyWords,
                }}
              />
            ) : (
              <>
                {isVideo === "1" ? (
                  <>
                    <video src={photoBase64} controls />
                  </>
                ) : (
                  <>
                    <img
                      src={photoBase64}
                      alt={"foto de capa"}
                      loading="lazy"
                    />
                  </>
                )}
              </>
            )}
          </div>
        </div>

        <button
          onClick={onClick}
          style={{
            backgroundColor: secondaryColor,
            borderRadius: website === "voou-viagens" ? "100px" : "",
          }}
          className="btn-2"
        >
          Vamos conversar!
        </button>
      </div>
    </Container>
  );
}

export { FirstSection };
