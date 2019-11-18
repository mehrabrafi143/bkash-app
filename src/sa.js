import $ from "jquery";

export default function Name() {
  $(".sidebar").css({
    width: "7%"
  });

  $(".sidebar__top-logo").css({
    "max-width": "0% !important"
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

  $(".sidebar__section__nav li a:link,.sidebar__section__nav li a:visited").css(
    {
      height: "4rem"
    }
  );

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
}
