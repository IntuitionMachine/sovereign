import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import '/imports/ui/templates/layout/url/home/home.html';
import '/imports/ui/templates/widgets/feed/feed.js';
import '/imports/ui/templates/widgets/feed/paginator.js';
import '/imports/ui/templates/widgets/compose/compose.js';

Template.home.onRendered(() => {
  Session.set('editorMode', false);
});

Template.home.helpers({
  editorMode() {
    return Session.get('showPostEditor');
  },
  newContractId() {
    if (Session.get('draftContract')) {
      return Session.get('draftContract')._id;
    }
    return undefined;
  },
  isPost() {
    return (this.options.view === 'post');
  },
  isHome() {
    return (this.options.view !== 'post');
  },
  content() {
    console.log(this);
    return {
      template: 'feed',
      dataObject: this,
    };
  },
});

Template.homeFeed.helpers({
  editorMode() {
    return Session.get('showPostEditor');
  },
  newContractId() {
    if (Session.get('draftContract')) {
      return Session.get('draftContract')._id;
    }
    return undefined;
  },
});
