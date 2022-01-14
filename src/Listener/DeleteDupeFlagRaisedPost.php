<?php

/*
 * This file is part of blomstra/flag-duplicates.
 *
 * Copyright (c) 2022 Blomstra Ltd.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Blomstra\FlagDuplicates\Listener;

use Flarum\Flags\Event\Deleting;
use Flarum\Post\Post;
use Illuminate\Support\Arr;

class DeleteDupeFlagRaisedPost
{
    public function handle(Deleting $event)
    {
        $flag = $event->flag;

        if ($flag->reason === 'duplicate' && Arr::get($event->data, 'duplicateMerge', false)) {
            $flaggedPost = $flag->post;
            $discussion = $flaggedPost->discussion;

            $eventPost = Post::where('discussion_id', $discussion->id)->where('type', 'discussionFlaggedDuplicate')->first();

            if ($eventPost) {
                $eventPost->delete();
            }
        }
    }
}
