import $ from "jquery";

export function Shrink() {
  $(".span__for__toggle").css({
    display: "block"
  });
  $(".sidebar").css({
    width: "7%"
  });

  $(".main-body").css({
    left: "7%",
    width: "93%"
  });

  $("#logo").css({
    maxWidth: "0%"
  });

  $(".toggle-bird").css({ display: "inline-block" });

  $(".sidebar__top-toggle").css({
    display: "none"
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
    left: "3rem"
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
    "background-color": "transparent"
  });

  $(".active span").css({
    "background-color": "#f6026f"
  });
}

export function Show() {
  $(".span__for__toggle").css({
    display: "none"
  });
  $(".sidebar").css({
    width: "20%"
  });

  $(".main-body").css({
    left: "20%",
    width: "80%"
  });

  $("#logo").css({
    maxWidth: "100%"
  });

  $(".toggle-bird").css({ display: "none" });

  $(".sidebar__top-toggle").css({
    display: "inline-block"
  });

  $(".sidebar__section__top-part1__content-sm").css({
    display: "inline-block"
  });

  $(".sidebar__section__top-part1__content-position h2").css({
    display: "inline-block"
  });

  $(".sidebar__section__top-part1__content-position i").css({
    display: "inline-block"
  });

  $(".sidebar__section__top-part1__content-position-sm").css({
    display: "none",
    "font-size": "1.6rem",
    "font-weight": "600"
  });

  $(".sidebar__section__top-part2__content-name").css({
    display: "inline-block"
  });

  $(".sidebar__section__top-part2__content-name--sort").css({
    display: "none",
    "font-size": "2rem",
    "font-weight": "500"
  });

  $(".sidebar__section__top-part2__content-email").css({
    display: "inline-block"
  });

  $(".sidebar__section__nav").css({
    "margin-top": "2rem"
  });

  $(".sidebar__section__nav li a:link,.sidebar__section__nav li a:visited").css(
    {
      height: "5rem"
    }
  );

  $(
    ".sidebar__section__nav li a:link span,.sidebar__section__nav li a:visited span"
  ).css({
    left: "5.5rem"
  });
  //finish
  $(
    ".sidebar__section__nav li a:link span img,.sidebar__section__nav li a:visited span img"
  ).css({
    "max-width": "100%",
    "max-height": "100%",
    "z-index": "999",
    position: "relative"
  });

  $(
    ".sidebar__section__nav li a:link p,.sidebar__section__nav li a:visited p"
  ).css({
    display: "inline-block"
  });

  $(
    ".sidebar__section__nav li a:link i,.sidebar__section__nav li a:visited i"
  ).css({
    display: "inline-block"
  });

  $(
    ".sidebar__section__nav li a:hover,.sidebar__section__nav li a:active,.sidebar__section__nav li a:focus"
  ).css({
    "background-color": "#f6026f"
  });

  $(".sidebar__section__nav li .sidebar__notification").css({
    display: "inline-block"
  });

  $(".active").css({
    "background-color": "#f6026f"
  });

  $(".active span").css({
    "background-color": "#f6026f"
  });
}
