import React from 'react'
import './Companies.css';
import prologis from "../../assets/prologis.png";
import tower from "../../assets/tower.png";
import equinix from "../../assets/equinix.png";
import realty from "../../assets/realty.png";

const Companies = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings flexCenter innerWidth c-container">
            <img src={prologis} />
            <img src={tower} />
            <img src={equinix} />
            <img src={realty} />
        </div>
    </section>
  )
}

export default Companies