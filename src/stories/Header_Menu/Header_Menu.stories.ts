import Header_Menu from '../../components/ui/header_menu/header_menu.vue';
import '../../components/ui/header_menu/header_menu.css'

export default {
  title: 'Components/HeaderMenu',
  component: Header_Menu,
  tags: ['autodocs'],
};

const Template = (args: any) => ({
  components: { Header_Menu },
  setup() {
    return { args };
  },
  template: '<Header_Menu v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  nameMenu: [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Episodes' },
    { id: 3, text: 'About' },
    { id: 4, text: 'Contact' },
  ],
};