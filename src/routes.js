import ChatBot from "views/ChatBot";
import Dashboard from "views/Dashboard.js";
// import TableList from "views/TableList.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/chatbot",
    name: "ChatBot",
    icon: "tim-icons icon-chat-33",
    component: <ChatBot />,
    layout: "/admin",
  },
];
export default routes;
