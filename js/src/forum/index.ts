import app from 'flarum/forum/app';
import DiscussionFlaggedDuplicatePost from './components/DiscussionFlaggedDuplicatePost';
import extendFlagModal from './extendFlagModal';
import Extend from 'flarum/common/extenders';
import Discussion from 'flarum/common/models/Discussion';

app.initializers.add('blomstra/flag-duplicates', () => {
  new Extend.Model(Discussion).attribute<boolean>('canFlagDuplicate');

  app.postComponents.discussionFlaggedDuplicate = DiscussionFlaggedDuplicatePost;
  extendFlagModal();
});
