import header from "./componets/MyHeader/header.js";
import banner from "./componets/MyBanner/banner.js";
import aside from "./componets/MyAside/aside.js";
import footer from "./componets/MyFooter/footer.js";

const myWorker = new Worker("./componets/Workers/MyfirstPost.js");



myWorker.onmessage = function (oEvent) {
    console.log("Worker said 1 : " + oEvent.data);
  };
  
myWorker.postMessage("ali");

header.listarNavbar();
header.DrawTitle();
banner.Draw_img();
banner.Draw_card();
aside.Draw_aside();
footer.Draw_footer();
