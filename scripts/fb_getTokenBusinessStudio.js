export default {
  icon: `<i class="fa-solid fa-key fa-lg"></i>`,
  name: {
    en: "Get fb token EAAc (studio)",
    vi: "Lấy fb token EAAc (studio)",
  },
  description: {
    en: "Get facebook access token EAAc from business.facebook.com",
    vi: "Lấy facebook access token EAAc từ trang business.facebook.com",
  },

  popupScript: {
    onClick: async function () {
      const { showLoading } = await import("./helpers/utils.js");
      // old - FAILED
      // try {
      //   const accessToken =
      //     "EAA" + /(?<=EAA)(.*?)(?=\")/.exec(document.body.textContent)[0];
      //   prompt("Access Token của bạn:", accessToken);
      // } catch (e) {
      //   alert("LỖI: " + e.message);
      // }

      const { closeLoading, setLoadingText } = showLoading(
        "Đang tìm access token..."
      );
      fetch("https://business.facebook.com/creatorstudio/home", {
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.text())
        .then(function (htmlText) {
          let regex = htmlText.match(
            /MediaManagerStatics",\[\],{"accessToken":"(.+?)"/
          );
          if (null !== regex) {
            let accesstoken = regex[1];
            prompt("Access Token: ", accesstoken);
          } else {
            alert("Token not found");
          }
        })
        .catch(function (e) {
          alert("ERROR:" + JSON.stringify(e));
        })
        .finally(() => {
          closeLoading();
        });
    },
  },
};
