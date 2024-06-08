import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  dashboard: {
    id: 'header.menu.dashboard.label',
    defaultMessage: 'Dashboard',
    description: 'The text for the user menu Dashboard navigation link.',
  },
  help: {
    id: 'header.help.label',
    defaultMessage: 'Help',
    description: 'The text for the link to the Help Center',
  },
  profile: {
    id: 'header.menu.profile.label',
    defaultMessage: 'Profile',
    description: 'The text for the user menu Profile navigation link.',
  },
  account: {
    id: 'header.menu.account.label',
    defaultMessage: 'Account',
    description: 'The text for the user menu Account navigation link.',
  },
  orderHistory: {
    id: 'header.menu.orderHistory.label',
    defaultMessage: 'Order History',
    description: 'The text for the user menu Order History navigation link.',
  },
  skipNavLink: {
    id: 'header.navigation.skipNavLink',
    defaultMessage: 'Skip to main content.',
    description: 'A link used by screen readers to allow users to skip to the main content of the page.',
  },
  headerLinksMyCourses: {
    id: 'header.links.myCourses',
    defaultMessage: 'My Courses',
    description: 'The text for the My Courses link in the header.',
  },
  headerLinksDiscover: {
    id: 'header.links.discover',
    defaultMessage: 'Discover',
    description: 'The text for the Discover new Courses link in the header.',
  },
});

export default messages;
