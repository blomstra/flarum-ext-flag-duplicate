import app from 'flarum/forum/app';
import { extend, override } from 'flarum/common/extend';
import FlagPostModal from 'flarum/flags/forum/components/FlagPostModal';
import { findFirstVdomChild } from './utils/findVdomChild';
import withAttr from 'flarum/utils/withAttr';
import Stream from 'flarum/utils/Stream';
import Post from 'flarum/components/Post';
import Link from 'flarum/common/components/Link';
import type Mithril from 'mithril';
import icon from 'flarum/common/helpers/icon';
import { components } from '@fof-merge-discussions';
import GlobalSearchState from 'flarum/forum/states/GlobalSearchState';
import Discussion from 'flarum/common/models/Discussion';
import Flag from 'flarum/flags/forum/models/flag';
import ItemList from 'flarum/common/utils/ItemList';

export default function extendFlagModal() {
  // https://github.com/flarum/flags/pull/39 is not available
  if (!FlagPostModal.prototype.flagReasons) {
    extend(FlagPostModal.prototype, 'content', function (vnode: Mithril.Vnode) {
        if (this.attrs.post?.number() === 1) {
          findFirstVdomChild(vnode, '.Form-group', (vnode) => {
            const discussion = this.attrs.post.discussion();
            this.search = new GlobalSearchState();
  
            vnode.children[0].children.splice(3, 0,
              <label className="checkbox">
                <input type="radio" name="reason" checked={this.reason() === 'duplicate'} value="duplicate" onclick={withAttr('value', this.reason)} />
                <strong>{app.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_label')}</strong>
                {app.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_text')}
                {this.reason() === 'duplicate' ? (
                  <components.DiscussionSearch
                    state={this.search}
                    onSelect={((discussion: Discussion) => {
                      this.reasonDetail = Stream(discussion.id());
                    }).bind(this)}
                    ignore={discussion.id()}
                  />
                ) : (
                  ''
                )}
              </label>
            );
          });
        }
      });
  }

  // Requires https://github.com/flarum/flags/pull/39
  extend(FlagPostModal.prototype, 'flagReasons', function (items: ItemList) {
    if (this.attrs.post?.number() === 1) {
      const discussion = this.attrs.post.discussion();
      this.search = new GlobalSearchState();

      items.add(
        'duplicate',
        <label className="checkbox">
          <input type="radio" name="reason" checked={this.reason() === 'duplicate'} value="duplicate" onclick={withAttr('value', this.reason)} />
          <strong>{app.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_label')}</strong>
          {app.translator.trans('blomstra-flag-duplicates.forum.flags.reason_duplicate_text')}
          {this.reason() === 'duplicate' ? (
            <components.DiscussionSearch
              state={this.search}
              onSelect={((discussion: Discussion) => {
                this.reasonDetail = Stream(discussion.id());
              }).bind(this)}
              ignore={discussion.id()}
            />
          ) : (
            ''
          )}
        </label>,
        100
      );
    }
  });

  override(Post.prototype, 'flagReason', function (original, flag: Flag) {
    const orig = original(flag);

    if (flag?.reason?.() === 'duplicate') {
      const detail = flag.reasonDetail();
      const url = app.forum.attribute('baseUrl') + `/d/${detail}`;

      orig[1] = (
        <span className="Post-flagged-detail">
          <Link href={url} external={true} target="_blank">
            {app.translator.trans('blomstra-flag-duplicates.forum.flags.duplicate_discussion')} {icon('fas fa-external-link-alt')}{' '}
          </Link>
        </span>
      );
      return orig;
    } else {
      return orig;
    }
  });
}
