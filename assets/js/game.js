import init from "./game/init";
import {initToolbox} from "./game/toolbox";
import {validate} from "./helpers/token";
import setNavMenu from "./pages/navmenu";

validate();
init();

initToolbox();

setNavMenu();

