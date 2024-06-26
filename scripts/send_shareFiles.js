export default {
  icon: "https://send.zcyph.cc/favicon-32x32.c470c36d.png",
  name: {
    en: "Send - Share file faster",
    vi: "Send - Chia sẻ file nhanh",
  },
  description: {
    en: "Open send.zcyph.cc - share large file up to 20Gb",
    vi: "Mở send.zcyph.cc - chia sẻ file lớn lên tới 20Gb",
  },

  popupScript: {
    onClick: async function () {
      const { popupCenter } = await import("./helpers/utils.js");
      popupCenter({
        url: "https://send.zcyph.cc/",
        title: "Send",
        w: 500,
        h: 700,
      });
    },
  },
};
