import React from "react";
import CustomButton from "../../Reusable/Button";
import Image from "../../Reusable/Image";
import constants from "../../../Data/Constants/Constants";
import Services from "../../../Data/Constants/Service_Constants";
import "./Service.css";

const toggleImage = (i) => {
  return (i + 1) % 2 === 0 ? true : false;
};

const secondImage = (i) => {
  return i + 1 === 2 ? true : false;
};

function getImage(src, alt,i) {
  return <Image className="service-image" styles={{marginTop:!toggleImage(i)?"8rem":"0"}} src={src} alt={alt} />;
}

function styling(index) {
  return ({
    textAlign: toggleImage(index) ? "left" : "right",
    alignItems: toggleImage(index) ? "start" : "end",
  });
}

function headlineColor(clr){
  return({
  background:clr,
['-webkit-background-clip']: "text",
['-webkit-text-fill-color']:" transparent",
})}

function Service() {
  return (
    <>
      {Object.keys(Services).map((key, index) => {
        let service = Services[key];
        return (
          <div className="service-outlet" key={index}>
            {!toggleImage(index) &&
              !secondImage(index) &&
              getImage(service.img, service.image_alt ,index)}
            <div className="service-headline" style={{marginTop:toggleImage(index)?"8rem":""}}>
           {toggleImage(index) && <div
                className="headline-image"
                style={ {background: service.font_color}}
              >
                <Image
                  className="heading_logo"
                  src={service.heading_logo}
                  alt={service.heading_alt}
                />
              </div>}
              <div
                className="service-description"
                style={styling(index)}
              >
                <h2 style={ headlineColor(service.font_color)}>
                  {service.heading}
                </h2>
                <p>{service.explanation}</p>
                <CustomButton
                  className="Read-more"
                  style={{ alignself: toggleImage(index) ? "start" : "end" }}
                >
                  {constants.READ_MORE}
                </CustomButton>
              </div>
             {!toggleImage(index) && <div
                className="headline-image"
                style={{ background: service.font_color }}
              >
                <Image
                  className="heading_logo"
                  src={service.heading_logo}
                  alt={service.heading_alt}
                />
              </div>}
            </div>
            {toggleImage(index) &&
              !secondImage(index) &&
              getImage(service.img, service.image_alt,index)}
          </div>
        );
      })}
    </>
  );
}
export default Service;
