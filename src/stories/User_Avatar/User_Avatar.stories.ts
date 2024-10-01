import User_Avatar from "../../components/ui/user_avatar/user_avatar.vue";
import "../../components/ui/user_avatar/user_avatar.css";

export default {
  title: "Components/UserAvatar",
  component: User_Avatar,
  tags: ["autodocs"],
};

const Template = (args: any) => ({
  components: { User_Avatar },
  setup() {
    return { args };
  },
  template: '<User_Avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  imgUser:
    "https://img.freepik.com/free-photo/girl-with-backpack-sunset-generative-al_169016-28612.jpg?t=st=1727773831~exp=1727777431~hmac=c056dd950dd6c8c69ef1c1caf183af7c586d7f94a06a91b37dc5664e5c7e8146&w=1380",
  altText: "UserAvatar",
};
