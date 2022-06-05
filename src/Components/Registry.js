import { React, useEffect } from "react";

const Registry = () => {
  //zola api call
  const zolaFunction = (e, t, n) => {
    var s,
      a = e.getElementsByTagName(t)[0];
    if (!e.getElementById(n)) {
      s = e.createElement(t);
      s.id = n;
      s.async = !0;
      s.src = "https://widget.zola.com/js/widget.js";
      a.parentNode.insertBefore(s, a);
    }
  };

  useEffect(() => {
    zolaFunction(document, "script", "zola-wjs");
  });

  return (
    <div>
      <a
        className="zola-registry-embed"
        href="www.zola.com/registry/hannahandchul"
        data-registry-key="hannahandchul"
      >
        새로고침을 눌러주세요.
      </a>
    </div>
  );
};

export default Registry;
