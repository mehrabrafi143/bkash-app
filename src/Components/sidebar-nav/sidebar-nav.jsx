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

const SideBar = () => {
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
        <img src={toggle} alt="toggle" className="sidebar__top-toggle" />
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
