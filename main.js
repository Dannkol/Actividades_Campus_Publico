import header from "./componets/MyHeader/header.js";
import banner from "./componets/MyBanner/banner.js";
import aside from "./componets/MyAside/aside.js";
import footer from "./componets/MyFooter/footer.js";
import post from "./componets/MyPosts/post.js";

post.DrawPost();

header.listarNavbar();
header.DrawTitle();
banner.Draw_img();
banner.Draw_card();
aside.Draw_aside();
footer.Draw_footer();
