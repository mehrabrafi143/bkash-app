import React from "react";
import logo from "../../assets/dashboardAssets/sidebar/logo.png";
import toggle from "../../assets/dashboardAssets/sidebar/toggle.png";
import dashboard from "../../assets/dashboardAssets/sidebar/nav-icons/dashboard.png";
import activity from "../../assets/dashboardAssets/sidebar/nav-icons/activity.png";
import balances from "../../assets/dashboardAssets/sidebar/nav-icons/balances.png";
import debit from "../../assets/dashboardAssets/sidebar/nav-icons/debit.png";
import history from "../../assets/dashboardAssets/sidebar/nav-icons/history.png";
import recipients from "../../assets/dashboardAssets/sidebar/nav-icons/recipients.png";
import invite from "../../assets/dashboardAssets/sidebar/nav-icons/invite.png";
import settings from "../../assets/dashboardAssets/sidebar/nav-icons/settings.png";
import bkashBird from "../../assets/dashboardAssets/sidebar/bkashBird.png";
import raisul from "../../assets/dashboardAssets/mainbar/raisul.png";
import SidebarItem from "./sidebar-item/sidebar-item";
import $ from "jquery";

const SideBar = () => {
  const toggler = () => {
    $(".sidebar").css({
      width: "7%"
    });

    $(".sidebar__top-logo").css({
      display: "none !important",
      "max-width": "100% !important"
    });

    $(".sidebar__top-bird").css({
      "max-width": "100% !important"
    });

    $(".sidebar__top-toggle").css({
      display: "none !important"
    });

    $(".sidebar__section__top-part1__content-sm").css({
      display: "none"
    });

    $(".sidebar__section__top-part1__content-position h2").css({
      display: "none"
    });

    $(".sidebar__section__top-part1__content-position i").css({
      display: "none"
    });

    $(".sidebar__section__top-part1__content-position-sm").css({
      display: "inline-block",
      "font-size": "1.6rem",
      "font-weight": "600"
    });

    $(".sidebar__section__top-part2__content-name").css({
      display: "none"
    });

    $(".sidebar__section__top-part2__content-name--sort").css({
      display: "inline-block",
      "font-size": "2rem",
      "font-weight": "500"
    });

    $(".sidebar__section__top-part2__content-email").css({
      display: "none"
    });

    $(".sidebar__section__nav").css({
      "margin-top": "2rem"
    });

    $(
      ".sidebar__section__nav li a:link,.sidebar__section__nav li a:visited"
    ).css({
      height: "4rem"
    });

    $(
      ".sidebar__section__nav li a:link span,.sidebar__section__nav li a:visited span"
    ).css({
      left: "1.5rem"
    });

    $(
      ".sidebar__section__nav li a:link span img,.sidebar__section__nav li a:visited span img"
    ).css({
      position: "absolute",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    });

    $(
      ".sidebar__section__nav li a:link p,.sidebar__section__nav li a:visited p"
    ).css({
      display: "none"
    });

    $(
      ".sidebar__section__nav li a:link i,.sidebar__section__nav li a:visited i"
    ).css({
      display: "none"
    });

    $(
      ".sidebar__section__nav li a:hover,.sidebar__section__nav li a:active,.sidebar__section__nav li a:focus"
    ).css({
      "background-color": "transparent"
    });

    $(".sidebar__section__nav li .sidebar__notification").css({
      display: "none"
    });

    $(".active").css({
      "background-color": "transparent !important"
    });

    $(".active span").css({
      "background-color": "#f6026f",
      "z-index": "-11"
    });
  };
  const navbars = [
    {
      icon: dashboard,
      lable: "Dashboard",
      haschlid: false,
      notification: <span className="badge badge-primary">2</span>
    },
    { icon: activity, lable: "Activity", haschlid: true },
    { icon: balances, lable: "Balances", haschlid: false },
    { icon: debit, lable: "Debit Cards", haschlid: true },
    { icon: history, lable: "History", haschlid: false },
    { icon: recipients, lable: "Recipients", haschlid: false },
    { icon: invite, lable: "Invite", haschlid: false },
    { icon: settings, lable: "Settings", haschlid: false }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={bkashBird} alt="bkash" className="sidebar__top-bird " />
        <img src={logo} className="sidebar__top-logo" alt="bkash" />
        <img
          src={toggle}
          alt="toggle"
          onClick={toggler}
          className="sidebar__top-toggle"
        />
      </div>
      <div className="sidebar__section">
        <div className="sidebar__section__top">
          <div className="sidebar__section__top-part1">
            <div className="sidebar__section__top-part1__content">
              <div className="sidebar__section__top-part1__content-sm">
                Logged in as
              </div>
              <div className="sidebar__section__top-part1__content-position">
                <h2>FCA Analyst</h2>
                <i class="fa fa-chevron-down" aria-hidden="true"></i>
                <div className="sidebar__section__top-part1__content-position-sm hide">
                  FCAA
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__section__top-part2">
            <span className="sidebar__section__top-part2__img">
              <img src={raisul} alt="raisul" />
            </span>
            <div className="sidebar__section__top-part2__content">
              <div className="sidebar__section__top-part2__content-name">
                Raisul Kabir
              </div>
              <div className="sidebar__section__top-part2__content-email">
                raisul.kabir@datasoft-bd.com
              </div>
              <div className="sidebar__section__top-part2__content-name--sort hide">
                RK
              </div>
            </div>
          </div>
        </div>
        <ul className="sidebar__section__nav">
          {navbars.map(item => (
            <SidebarItem {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
